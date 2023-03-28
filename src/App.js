import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Movie from "./Components/Movie";
import movies from "./Movie.json";
const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        {movies.map((element) => {
          return(
          <Movie
            title={element.Title}
            year={element.Year}
            img={element.Poster}
          
          />
          )
        })}
      </div>
    </div>
  );
};

export default App;
