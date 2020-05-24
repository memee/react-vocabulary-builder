import React from "react";

export default function VocabularyEntry(props) {
  const { word, translation } = props.entry;

  return (
    <ul className="list-group list-group-horizontal-xl">
      <li className="list-group-item">{word}</li>
      <li className="list-group-item">{translation}</li>
    </ul>
  );
}
