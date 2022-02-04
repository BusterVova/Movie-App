import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { getTypedMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const searchvalue = useSelector(getTypedMovies);
  useEffect(() => {
    dispatch(fetchAsyncMovies(searchvalue));
  }, [searchvalue, dispatch]);
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
