import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import VocabularyList from "./vocabulary-list/VocabularyList";
import VocabularyTest from "./vocabulary-test/VocabularyTest";

function App() {
  return (
    <div className="App container">
      <header></header>
      <main>
        <Route exact path="/" component={VocabularyList} />
        <Route path="/test/:id" component={VocabularyTest} />
      </main>
    </div>
  );
}

export default App;
