import { renderHook, act } from "@testing-library/react-hooks";
import {
  useStateWithLocalStorage,
  useVocabularyStore,
  useVocabularyTestStore,
} from "./persistence";

beforeEach(() => {
  global.localStorage.clear();
});

test("useStateWithLocalStorage shoud update localStorage", () => {
  const { result } = renderHook(() => useStateWithLocalStorage("key"));
  const [value, setValue] = result.current;

  expect(value).toEqual("");
  act(() => {
    setValue(["x"]);
  });

  expect(result.current[0]).toEqual(["x"]);
});

describe("useVocabularyStore", () => {
  it("should append to the result.current.list", () => {
    const { result } = renderHook(() => useVocabularyStore());

    expect(result.current.list).toEqual([]);
    act(() => {
      result.current.appendList({
        word: "y",
        translation: "DE_y",
      });
    });

    expect(result.current.list).toEqual([{ word: "y", translation: "DE_y" }]);

    act(() => {
      result.current.appendList({
        word: "z",
        translation: "DE_z",
      });
    });

    expect(result.current.list).toEqual([
      { word: "y", translation: "DE_y" },
      { word: "z", translation: "DE_z" },
    ]);
  });

  it("should remove from the result.current.list at index", () => {
    const { result } = renderHook(() => useVocabularyStore(["a", "b", "c"]));

    expect(result.current.list).toEqual(["a", "b", "c"]);

    act(() => {
      result.current.removeFromList(1);
    });

    expect(result.current.list).toEqual(["a", "c"]);
  });

  it("should not add duplicates", () => {
    const { result } = renderHook(() =>
      useVocabularyStore([
        { word: "xyz", translation: "abc" },
        { word: "car", translation: "Wagen, Der" },
      ])
    );

    act(() => {
      result.current.appendList({
        word: "car",
        translation: "Wagen, Der",
      });
    });

    expect(result.current.list.length).toEqual(2);
  });

  it("should allow for readding removed entries", () => {
    const { result } = renderHook(() =>
      useVocabularyStore([{ word: "xyz", translation: "abc" }])
    );

    act(() => {
      result.current.removeFromList(0);
    });
    act(() => {
      result.current.appendList({ word: "xyz", translation: "abc" });
    });
    expect(result.current.list.length).toEqual(1);
  });
});

describe("useVocabularyTestStore", () => {
  it("should initialize store with random entries", () => {
    const model = {
      available: [{ word: "x", translation: "y" }],
      taken: [{ word: "x", translation: "y", answer: "z", hit: false }],
    };

    const { result } = renderHook(() =>
      useVocabularyTestStore(
        "id123",
        [
          { word: "abc", translation: "ABC" },
          { word: "def", translation: "DEF" },
          { word: "xyz", translation: "XYZ" },
        ],
        2
      )
    );

    expect(result.current.available.length).toEqual(2);
  });

  it("should move answered entry to taken", () => {
    const { result } = renderHook(() =>
      useVocabularyTestStore("id124", [], 2, {
        available: [
          { word: "abc", translation: "ABC" },
          { word: "def", translation: "DEF" },
          { word: "xyz", translation: "XYZ" },
        ],
        taken: [],
      })
    );

    act(() => {
      // We answer for the first entry from the stack
      result.current.answer("ABC");
    });

    expect(result.current.taken[0]).toEqual({
      word: "abc",
      translation: "ABC",
      answer: "ABC",
      hit: true,
    });

    act(() => {
      result.current.answer("dfe");
    });
    console.log("taken", result.current.taken[1]);

    expect(result.current.taken[1]).toEqual({
      word: "def",
      translation: "DEF",
      answer: "dfe",
      hit: false,
    });
  });
});
