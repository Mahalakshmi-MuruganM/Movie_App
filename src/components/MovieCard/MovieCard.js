import React from "react";
import { Link } from "react-router-dom";
import "./movie-card.scss";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <Link to={`/movieDetail/${data.imdbID}`} className="card-link">
      <div className="movie-cards">
        <div className="card-container">
          <div className="card-top">
            <img src={data.Poster} alt="movie-poster" />
          </div>
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
