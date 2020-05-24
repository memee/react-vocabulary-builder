import React from "react";

export const useStateWithLocalStorage = (key, initial = "") => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(key)) || initial
  );

  console.log("useState", key, value);

  React.useEffect(() => {
    console.log('setting item', key, value);
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

const takeRandomEntries = (entries, toBeTaken, ready = []) => {
  if (toBeTaken === 0 || entries.length === 0) return ready;

  const idx = Math.floor(Math.random() * entries.length);
  const entry = entries[idx];
  const newEntries = [...entries.slice(0, idx), ...entries.slice(idx + 1)];
  ready.push(entry);
  console.debug("taking", entries, ready, toBeTaken);

  return takeRandomEntries(newEntries, toBeTaken - 1, ready);
};

export const useVocabularyTestStore = (
  id,
  vocabulary = [],
  total = 10,
  initial = {
    taken: [],
    available: [],
  }
) => {
  initial.available =
    initial.available.length > 0
      ? initial.available
      : takeRandomEntries(vocabulary, total);

  const [value, setValue] = useStateWithLocalStorage(
    "vocabulary-test-" + id,
    initial
  );

  const answer = (theAnswer) => {
    if (value.available.length === 0) return false;
    const entry = value.available[0];
    const hit = entry.translation === theAnswer;

    const newAnswerEntry = { ...value.available[0], answer: theAnswer, hit };
    setValue({
      available: value.available.slice(1),
      taken: [...value.taken, newAnswerEntry],
    });
    return true;
  };
  const { available, taken } = value;

  const nextEntry = available[0];
  const isFinished = available.length === 0;
  const isEmpty = available.length === 0 && taken.length === 0;

  return { available, taken, answer, isFinished, nextEntry, isEmpty };
};
