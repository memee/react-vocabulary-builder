import { renderHook, act } from "@testing-library/react-hooks";
import { useStateWithLocalStorage, useVocabularyStore } from "./persistence";

beforeEach(() => {
  global.localStorage.clear();
});

test("useStateWithLocalStorage shoud update localStorage", () => {
  const { result } = renderHook(() => useStateWithLocalStorage("key"));
  const [value, setValue] = result.current;

  expect(value).toEqual([]);
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
      result.current.appendList("y");
    });

    expect(result.current.list).toEqual(["y"]);

    act(() => {
      result.current.appendList("z");
    });

    expect(result.current.list).toEqual(["y", "z"]);
  });

  it("should remove from the result.current.list at index", () => {
    const { result } = renderHook(() => useVocabularyStore(["a", "b", "c"]));

    expect(result.current.list).toEqual(["a", "b", "c"]);

    act(() => {
      result.current.removeFromList(1);
    });

    expect(result.current.list).toEqual(["a", "c"]);
  });
});
