import React from "react";
import "./App.css";
import "./bootstrap.min.css";

const Hero = () => {
  return (
    <div className="jumbotron col-10 offset-1 ">
      <h1>Movie Directors Quiz</h1>
      <p>Select the movie title directed by shown person</p>
    </div>
  );
};

const Movie = ({ title }) => {
  return (
    <div className="answer">
      <h4>{title}</h4>
    </div>
  );
};

const Board = ({ director, movie }) => {
  return (
    <div className="row board" style={{ backgroundColor: "lightgray" }}>
      <div className="col-4 offset-1">
        <img
          src={director.imageUrl}
          className="director-image"
          alt="Director"
        ></img>
      </div>
      <div className="col-6">
        {console.log(movie)}
        {movie.map((title) => (
          <Movie title={title} key={title} />
        ))}
      </div>
    </div>
  );
};

const Operations = () => {
  return <></>;
};

const Footer = () => {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="https://www.imdb.com/">LINK HERE</a>.
        </p>
      </div>
    </div>
  );
};

const MovieQuiz = ({ boardData }) => {
  return (
    <div className="container-fluid">
      <Hero />
      <Board {...boardData} />
      <Operations />
      <Footer />
    </div>
  );
};

export default MovieQuiz;
