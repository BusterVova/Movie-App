import React, { useState, useEffect } from "react";
import MovieCardDetails from "../movieCardDetails/MovieCardDetails";
import crying from "../../images/crying.gif";
import "./Favourites.scss";
const Favourites = () => {
  const [favouriteMovies, setFavouriteMovies] = useState();

  useEffect(() => {
    setFavouriteMovies(JSON.parse(localStorage.getItem("favourite-movie")));
  }, []);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        {favouriteMovies?.length ? (
          favouriteMovies.map((movie, idx) => (
            <div className="movie-container" key={idx}>
              <MovieCardDetails key={idx} data={movie} />
            </div>
          ))
        ) : (
          <div className="error-container">
            <div>
              <h3 className="error-header">No favourites added yet</h3>
            </div>
            <img src={crying} alt="crying actor"></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
