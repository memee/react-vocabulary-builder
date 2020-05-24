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
      translation,
    });
  };

  const startTest = () => {
    history.push(`/test/${new Date().valueOf()}`);
  };

  const entries = list
    .map(
      (entry, idx) => (
        <tr
          key={entry.word + entry.translation}
        >
          <VocabularyEntry entry={entry}></VocabularyEntry>
          <td><RemoveButton onClick={() => removeFromList(idx)}></RemoveButton></td>
        </tr>
      )
      // relying on the order in the array, might be risky if one does reverse before mapping
      // but it's simple
    )
    .reverse();

  const table = list.length > 0 ? <table className="table mt-3">
    <thead>
      <tr>
        <th>Word</th>
        <th>Translation</th>
        <th>Remove?</th>
      </tr>
    </thead>
    <tbody>
      {entries}
    </tbody>
  </table> : <div></div>

  return (
    <div>
      <VocabularyAddEntry onAddEntry={addEntry}></VocabularyAddEntry>
      <button className="btn btn-primary" onClick={startTest}>
        Start a new test!
      </button>
      {table}
    </div>
  );
}
