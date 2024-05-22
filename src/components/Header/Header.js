import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/new_logo.png";
import "./header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      dispatch(fetchAsyncMovies(searchText));
    } else {
      alert("Please enter search text");
    }

    setSearchText("");
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="header">
      <div className="link-container">
        <Link to="/" className="link">
          MovieApp
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies"
            onChange={handleSearchChange}
            value={searchText}
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="logo">
        <img src={logo} alt="user-logo"></img>
      </div>
    </div>
  );
};

export default Header;
