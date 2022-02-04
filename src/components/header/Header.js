import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import { useDispatch } from "react-redux";
import "./Header.scss";
import { searchMovies } from "../../features/movies/movieSlice";
const Header = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to="/" className="anchor">
        <div className="logo">Movie App</div>
      </Link>
      <Link to="/favourites" className="anchor anchor-favourites">
        <div className="favourites">
          <span>
            <i className="fas fa-heart"></i>
          </span>
          <h3 className="favourites-header">Favourites</h3>
        </div>
      </Link>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={value}
          className="search-input"
          type="text"
          placeholder="Please type a film's name"
          onChange={(e) => setValue(e.target.value)}
        />
        <Link to="/">
          <button
            className="search-button"
            onClick={() => {
              dispatch(searchMovies(value));
              setValue("");
            }}
          >
            Search
          </button>
        </Link>
      </form>
      <div className="user-image">
        <img src={user} alt="user"></img>
      </div>
    </div>
  );
};

export default Header;
