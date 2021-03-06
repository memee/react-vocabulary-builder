import React from "react";
import { useParams } from "react-router-dom";
import {
  useVocabularyTestStore,
  useVocabularyStore,
} from "../persistence/persistence";

import VocabularyTestAnswer from "./VocabularyTestAnswer";
import VocabularyTestProgress from "./VocabularyTestProgress";
import VocabularyTestResults from "./VocabularyTestResults"

import goBackButton from "../misc/GoBackButton";
import GoBackButton from "../misc/GoBackButton";

export default function VocabularyTest() {
  const { id } = useParams();
  const { list } = useVocabularyStore();
  const {
    answer,
    taken,
    available,
    nextEntry,
    isEmpty,
  } = useVocabularyTestStore(id, list);

  const onSubmitAnswer = (theAnswer) => {
    answer(theAnswer);
  };
  const goBackButton = <a href="#/" className="btn btn-primary">go back</a>;

  if (isEmpty) {
    return <div className="jumbotron">
      <h1>Test is empty</h1>
      <p className="lead">Go back and add some new words!</p>
      <GoBackButton />
    </div>;

  } else if (available.length) {
    return <div>
      <div className="card mb-3">
        <div className="card-body">
          <h3>Let's start the test!</h3>
        </div>
      </div>
      <VocabularyTestProgress taken={taken} available={available} />
      <VocabularyTestAnswer entry={nextEntry} onSubmit={onSubmitAnswer} />
      <GoBackButton />
    </div>;

  } else {
    return <VocabularyTestResults answers={taken} />;
  }
}
