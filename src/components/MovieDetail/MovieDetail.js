import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieOrShowDetail } from "../../features/movies/movieSlice";
import {
  getMovieOrShowDetail,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./movie-detail.scss";

const MovieDetail = () => {
  const { imdbId } = useParams();
  const detail = useSelector(getMovieOrShowDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieOrShowDetail(imdbId));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbId]);
  return detail.Response ? (
    <div className="movie-detail">
      <div className="section-left">
        <div className="title">{detail.Title}</div>
        <p className="plot">{detail.Plot}</p>
      </div>
      <div className="section-right">
        <div className="poster">
          <img src={detail.Poster} alt="poster" />
        </div>
      </div>
    </div>
  ) : (
    <div className="loader">...Loading</div>
  );
};

export default MovieDetail;
