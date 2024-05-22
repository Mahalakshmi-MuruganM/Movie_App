import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./movie-listing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const { loading } = useSelector((state) => state.movies);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderMovieCards = () => {
    console.log(movies);
    if (movies.Response === "True") {
      return movies?.Search.map((item, index) => (
        <MovieCard index={index} data={item} />
      ));
    } else {
      return <div className="error">{movies.Error}</div>;
    }
  };
  return (
    <div className="movies-list">
      {loading ? (
        <div className="loader">...Loading</div>
      ) : (
        <>
          <h3 className="title">List of movies</h3>
          <div className="list-of-cards">
            <Slider {...settings}>{renderMovieCards()}</Slider>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieListing;
