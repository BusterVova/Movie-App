import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../common/api/movieApi";
import { APIkey } from "../../common/api/movieApiKey";
import axios from "axios";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (_, { dispatch, getState }) => {
    const fetchMovies = async () => {
      const {
        movies: { searchValue = "" },
      } = getState();
      const urlRequest = `${url}?s=${searchValue}&apikey=${APIkey}`;
      const response = await axios.get(urlRequest);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }
);
export const fetchAsyncMoviesDetail = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (id, { dispatch }) => {
    const fetchMovies = async () => {
      const urlRequest = `${url}?apikey=${APIkey}&i=${id}&Plot=full`;
      const response = await axios.get(urlRequest);
      dispatch(showDetails(response.data));
    };
    fetchMovies();
  }
);
const initialState = {
  movies: {},
  searchValue: "",
  selectedMovie: {},
  favourites: [],
};

export const movieSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    searchMovies: (state, action) => {
      state.searchValue = action.payload;
    },
    showDetails: (state, action) => {
      state.selectedMovie = action.payload;
    },
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
    addFavourites: (state, action) => {
      let isFavourite =
        (state.favourites.find(
          (item) => item.imdbID === action.payload.imdbID
        ) &&
          true) ||
        false;
      if (!isFavourite) {
        state.favourites.push(action.payload);
        localStorage.setItem(
          "favourite-movie",
          JSON.stringify(state.favourites)
        );
      }
    },
    removeFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (favourite) => favourite.imdbID !== action.payload.imdbID
      );
      localStorage.setItem("favourite-movie", JSON.stringify(state.favourites));
    },
  },
});

export const {
  addMovies,
  searchMovies,
  showDetails,
  removeSelectedMovie,
  addFavourites,
  removeFavourites,
} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getTypedMovies = (state) => state.movies.searchValue;
export const getMovieDetails = (state) => state.movies.selectedMovie;
export const getFavouriteMovies = (state) => state.movies.favourites;
export const deleteFavouriteMovies = (state) => state.movies.favourites;
export default movieSlice;
