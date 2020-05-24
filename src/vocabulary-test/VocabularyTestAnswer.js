import React from "react";

export default function VocabularyTestAnswer(props) {
  return (
    <div className="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"></span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Answer"
        aria-label="Answer"
      />
    </div>
  );
}
