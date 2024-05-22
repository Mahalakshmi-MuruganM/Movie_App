import React, { useEffect } from "react";
import { addMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies("Harry"));
  }, [dispatch]);

  return (
    <div className="home">
      <MovieListing />
    </div>
  );
};

export default Home;
