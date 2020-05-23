import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import VocabularyList from "./vocabulary-list/VocabularyList";

function App() {
  return (
    <div className="App container">
      <header></header>
      <main>
        <Route exact path="/" component={VocabularyList} />
      </main>
    </div>
  );
}

export default App;
