import React from "react";
import { movies } from "../data";

function Movies() {
  
  const mapMovies = 
    movies.map((movie) => {
    return (<div>
      <h3>{movie.title}</h3> 
      <p>Runtime: {movie.time} minutes</p>
      <ul>
          {movie.genres.map((genre) => {
            return (<li>{genre}</li>)
          })}
      </ul>
    </div>
    )
  })
  
  return (
    <div>
      <h1>Movies Page</h1>
      {mapMovies}
    </div>
    )
}

export default Movies;
