import React from "react";
import { useDispatch } from "react-redux";
import { removeFavourites } from "../../features/movies/movieSlice";
import { Link } from "react-router-dom";
const RemoveFromFavourites = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="overlay"
      onClick={() => dispatch(removeFavourites(data))}
    >
      <Link to="/favourites" className="remove-anchor">
        <span className="icon trash-icon">
          Remove from favorites <i className="fas fa-trash"></i>
        </span>
      </Link>
    </button>
  );
};

export default RemoveFromFavourites;
