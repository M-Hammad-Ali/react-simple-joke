import React, { useState, useEffect } from "react";
import axios from "axios";

const Joke = () => {
  const [joke, setJoke] = useState("Initial State");

  useEffect(() => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Joke</h5>
        <p className="card-text">{joke.joke}</p>
        <a className="btn btn-primary" onClick={fetchJoke}>
          Get Another Joke
        </a>
      </div>
    </div>
  );
};

export default Joke;
