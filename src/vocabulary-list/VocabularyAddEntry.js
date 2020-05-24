import React, { useState, useMemo } from "react";

import "./VocabularyAddEntry.scss";

export default function VocabularyAddEntry(props) {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");

  const textInput = React.createRef();

  const focusTextInput = () => textInput.current.focus();

  const anyEmpty = useMemo(() => !(word.length && translation.length), [
    word,
    translation,
  ]);

  const _submit = (evt) => {
    evt.preventDefault();
    props.onAddEntry(word, translation);
    setWord("");
    setTranslation("");
    focusTextInput();
  };
  return (
    <form onSubmit={_submit} className="add-entry mx-auto pb-4">
      <div className="input-group">
        <input
          type="text"
          aria-label="Word"
          className="form-control"
          placeholder="Word"
          required={true}
          value={word}
          name="word"
          ref={textInput}
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
            className="btn btn-outline-primary"
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
