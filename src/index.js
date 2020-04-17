import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MovieQuiz from "./MovieQuiz";
import * as serviceWorker from "./serviceWorker";

const directors = [
  {
    name: "Stanley Kubrick",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTIwMzAwMzg1MV5BMl5BanBnXkFtZTYwMjc4ODQ2._V1_.jpg",
    imageSource: "IMDB",
    movies: ["A Clockwork Orange"],
  },
];

const state = {
  boardData: {
    director: directors[0],
    movie: directors[0].movies,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <MovieQuiz {...state} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
