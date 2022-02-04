import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavouriteMovies,
  addFavourites,
} from "../../features/movies/movieSlice";
const AddToFavourites = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavouriteMovies);

  return (
    <button className="overlay" onClick={() => dispatch(addFavourites(data))}>
      Add to favorites
      <span className="icon heart-icon ">
        <i className="fas fa-heart"></i>
      </span>
    </button>
  );
};

export default AddToFavourites;
