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
  const [value, setValue] = useStateWithLocalStorage(
    "vocabulary-list",
    initial
  );

  const appendList = (newVal) => setValue([...value, newVal]);
  const removeFromList = (idx) =>
    setValue([...value.slice(0, idx), ...value.slice(idx + 1)]);

  return { list: value, appendList, removeFromList };
};
