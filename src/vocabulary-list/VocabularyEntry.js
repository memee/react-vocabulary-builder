import React from "react";

export default function VocabularyEntry(props) {
  const { word, translation } = props.entry;

  return (
    <>
      <td className="">{word}</td>
      <td className="">{translation}</td>
    </>
  );
}
