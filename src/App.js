import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar";
import Joke from "./components/joke";
import About from "./components/pages/about";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar></Navbar>
        <Route path="/" exact component={Joke} />
        <Route path="/about" exact component={About} />
      </div>
    </Router>
  );
}

export default App;
