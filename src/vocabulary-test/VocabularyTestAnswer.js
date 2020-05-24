import React, { useState } from "react";
import "./VocabularyTestAnswer.scss";

export default function VocabularyTestAnswer(props) {
  const { word, translation } = props.entry;
  const [answer, setAnswer] = useState("");
  const { onSubmit } = props;

  const submit = (evt) => {
    evt.preventDefault();
    onSubmit(answer);
    setAnswer("");
  };

  return (
    <form className="form-group row mt-3 test-answer mx-auto" onSubmit={submit}>
      <label htmlFor="answer" className="col-sm-12 col-form-label">
        The word:
      </label>
      <div className="col-sm-12 mb-4">
        <h1>{word}</h1>
      </div>
      <div className="col-sm-12">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Answer"
            aria-label="Answer"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
