import React, { createElement } from "react";
import ReactDOM from "react-dom";
import MovieQuiz from "./MovieQuiz";

describe("Movie Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MovieQuiz />, div);
  });
});
