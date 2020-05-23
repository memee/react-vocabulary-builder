import React from "react";

export default function VocabularyAddEntry(props) {
  const _submit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };
  return (
    <form onSubmit={_submit}>
      <div className="input-group">
        <input
          type="text"
          aria-label="Word"
          className="form-control"
          placeholder="Word"
          required="true"
        />
        <input
          type="text"
          aria-label="Translation"
          className="form-control"
          placeholder="Translation"
          required="true"
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
