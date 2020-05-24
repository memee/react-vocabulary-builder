import React from "react";

export const useStateWithLocalStorage = (key, initial = "") => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(key)) || initial
  );

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export const useVocabularyStore = (initial = []) => {
  const initialHashes = initial.map(
    ({ word, translation }) => word + translation
  );

  const [value, setValue] = useStateWithLocalStorage(
    "vocabulary-list",
    initial
  );
  const [uniques, setUniques] = useStateWithLocalStorage(
    "vocabulary-list-uniques",
    initialHashes
  );

  const appendList = (newVal) => {
    const hashy = newVal.word + newVal.translation;
    if (!uniques.includes(hashy)) {
      setValue([...value, newVal]);
      setUniques([...uniques, hashy]);
      return true;
    } else {
      return false;
    }
  };
  const removeFromList = (idx) => {
    const { word, translation } = value[idx];
    const hashy = word + translation;
    const uniqueIdx = uniques.indexOf(hashy);

    setValue([...value.slice(0, idx), ...value.slice(idx + 1)]);
    setUniques([
      ...uniques.slice(0, uniqueIdx),
      ...uniques.slice(uniqueIdx + 1),
    ]);
  };

  return { list: value, appendList, removeFromList };
};


const TEST_STATUS = Object.freeze({
  OPEN: "OPEN",
  CLOSED: "CLOSED"
})

takeRandomEntries = (entries, total) => {
  const copy = [...entries];
  const ready = [];

  const take = (entries) => {
    if (entries.length) {
      const idx = Math.floor(Math.random() * entries.length);
      ready.push(entries[idx]);
      take(entries)
    }
  }

  take(entries);

}

export const useVocabularyTestStore = (id, initial = {
  status: TEST_STATUS.OPEN,
  taken: [],
  available: [],
  total: 10
}) => {
  const { list, appendList, removeFromList } = useVocabularyStore();

  initial.available = takeRandomEntries(list);

  const [value, setValue] = useStateWithLocalStorage("vocabulary-test" + id, initial);

  return { list: value }
}