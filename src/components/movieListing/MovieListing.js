import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss";
import { getTypedMovies } from "../../features/movies/movieSlice";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const searchvalue = useSelector(getTypedMovies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">
          {movies.Response === "True" ? (
            movies.Search.map((movie, idx) => (
              <MovieCard key={idx} data={movie} />
            ))
          ) : searchvalue === "" ? null : (
            <h2 className="error-header">Invalid name. Please try again</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
