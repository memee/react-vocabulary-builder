import React from "react";
import "./VocabularyTestResults.scss"

import GoBackButton from "../misc/GoBackButton";

export default function VocabularyTestResults(props) {
  const { answers } = props;
  const scored = answers.filter(answer => answer.hit);

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Test Finished</h1>
        <p className="lead">Find your results below!</p>
        <hr class="my-4" />
        <p>You can give another try if you want, just ... </p>
        <GoBackButton />
      </div>
      <table className="table test-results">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Word</th>
            <th scope="col">Translation</th>
            <th scope="col">Your answer</th>
            <th scope="col">Scored?</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((answer, idx) => (<tr key={idx} className={answer.hit ? 'hit' : 'miss'}>
            <td>{idx}</td>
            <td>{answer.word}</td>
            <td>{answer.translation}</td>
            <td>{answer.answer}</td>
            <td className="score">{answer.hit ? "✔" : "✘"}</td>
          </tr>))}
        </tbody>
        <tfoot>
          <tr className="bg-light">
            <td colSpan="4" align="right">You hit:</td>
            <td><strong>{scored.length}</strong></td>
          </tr>
        </tfoot>
      </table>

    </div>
  )
}