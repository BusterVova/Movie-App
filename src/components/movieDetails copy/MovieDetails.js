import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAsyncMoviesDetail } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { getMovieDetails } from "../../features/movies/movieSlice";
import "./MovieDetails.scss";
import { removeSelectedMovie } from "../../features/movies/movieSlice";
import AddToFavourites from "../addToFavourites/AddToFavourites";
const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieDetails);
  useEffect(() => {
    dispatch(fetchAsyncMoviesDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length ? (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                IMBD Rating {data.imdbRating}
              </span>
              <span>
                <span>
                  <i className="fas fa-poll"></i>
                </span>
                IMBD Votes {data.imdbVotes}
              </span>
              <span>
                <span>
                  <i className="fas fa-clock"></i>
                </span>
                Runtime
                {data.Runtime}
              </span>
              <span>
                <span>
                  <i className="fas fa-calendar-alt"></i>
                </span>
                Year {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
            <AddToFavourites data={data} />
          </div>
        </>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

export default MovieDetails;
