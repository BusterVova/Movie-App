import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Favourites from "./components/favourites/Favourites";
import FavouriteDetails from "./components/favouriteDetails/FavouriteDetails";
function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/favourites/:imdbID" element={<FavouriteDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
