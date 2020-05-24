import React from "react";
import { useHistory } from "react-router-dom";

import VocabularyAddEntry from "./VocabularyAddEntry";
import { useVocabularyStore } from "../persistence/persistence";
import VocabularyEntry from "./VocabularyEntry";
import RemoveButton from "../misc/RemoveButton";

export default function VocabularyList() {
  const { list, appendList, removeFromList } = useVocabularyStore();
  const history = useHistory();

  const addEntry = (word, translation) => {
    appendList({
      word,
      translation
    });
  };

  const startTest = () => {
    history.push(`/test/${new Date().valueOf()}`)
  }

  const entries = list.map((entry, idx) =>
    <li className="list-group-item d-flex" key={entry.word + entry.translation}>
      <VocabularyEntry entry={entry}></VocabularyEntry>
      <RemoveButton onClick={() => removeFromList(idx)}></RemoveButton>
    </li>
    // relying on the order in the array, might be risky if one does reverse before mapping
    // but it's simple
  ).reverse();
  return (
    <div>
      <VocabularyAddEntry onAddEntry={addEntry}></VocabularyAddEntry>
      <button className="btn btn-primary" onClick={startTest}>Start a new test!</button>
      <ul className="list-group">
        {entries}
      </ul>
    </div >
  );
}
