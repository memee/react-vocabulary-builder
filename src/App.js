import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { ReactComponent as Logo } from "./logo.svg";

import VocabularyList from "./vocabulary-list/VocabularyList";
import VocabularyTest from "./vocabulary-test/VocabularyTest";

function App() {
  return (
    <div className="App container">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <Logo /><span className="ml-2 font-weight-bold">VocaBuilder</span>
        </a>
      </nav>
      <main className="pt-3">
        <Route exact path="/" component={VocabularyList} />
        <Route path="/test/:id" component={VocabularyTest} />
      </main>
    </div>
  );
}

export default App;
