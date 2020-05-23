import React from "react";
import VocabularyAddEntry from "./VocabularyAddEntry";

export default function VocabularyList() {
  const addEntry = (word, translation) => {
    console.log(word, translation);
  };

  return (
    <div>
      <VocabularyAddEntry onAddEntry={addEntry}></VocabularyAddEntry>
    </div>
  );
}
