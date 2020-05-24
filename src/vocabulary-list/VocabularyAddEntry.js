import React, { useState, useMemo } from "react";

export default function VocabularyAddEntry(props) {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");

  const anyEmpty = useMemo(() => !(word.length && translation.length), [
    word,
    translation,
  ]);

  const _submit = (evt) => {
    evt.preventDefault();
    props.onAddEntry(word, translation);
  };
  return (
    <form onSubmit={_submit}>
      <div className="input-group">
        <input
          type="text"
          aria-label="Word"
          className="form-control"
          placeholder="Word"
          required={true}
          value={word}
          name="word"
          onChange={(e) => setWord(e.target.value)}
        />
        <input
          type="text"
          aria-label="Translation"
          className="form-control"
          placeholder="Translation"
          required={true}
          value={translation}
          name="translation"
          onChange={(e) => setTranslation(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="buttond-addon2"
            disabled={anyEmpty}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
