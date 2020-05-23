import React, { useState } from "react";

export default function VocabularyAddEntry(props) {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");

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
          onChange={(e) => setWord(e.target.value)}
        />
        <input
          type="text"
          aria-label="Translation"
          className="form-control"
          placeholder="Translation"
          required={true}
          onChange={(e) => setTranslation(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="buttond-addon2"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
