import React from "react";
import { actors } from "../data";

function Actors() {
  
  const mapActors = 
  actors.map((director) => {
  return (<div>
    <h3>{director.name}</h3> 
    <ul>
        {director.movies.map((movie) => {
          return (<li>{movie}</li>)
        })}
    </ul>
  </div>
  )
})
  
  
  return (
    <div>
      <h1>Actors Page</h1>
      {mapActors}
    </div>
    )
}

export default Actors;
