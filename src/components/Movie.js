import React from "react";
import { DEFAULT_PLACEHOLDER_IMAGE } from "../utils/utils";

const Movie = ({ movie }) => {
  const moviePoster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          src={moviePoster}
          alt={`The movie titled: ${movie.Title}`}
        />
      </div>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
