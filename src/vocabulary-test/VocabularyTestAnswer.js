import React, { useState } from "react";

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
    <form className="form-group row" onSubmit={submit}>
      <label htmlFor="answer" className="col-sm-2 col-form-label">
        {word}
      </label>
      <div className="col-sm-10">
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
