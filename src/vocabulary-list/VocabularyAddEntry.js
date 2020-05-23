import React from "react";

export default function VocabularyAddEntry() {
  return (
    <div class="input-group">
      <div class="input-group-prepend">
        <span>Word</span>
      </div>
      <input type="text" aria-label="Word" class="form-control" />
      <input type="text" aria-label="Translation" class="form-control" />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="buttond-addon2"
        >
          Add
        </button>
      </div>
    </div>
  );
}
