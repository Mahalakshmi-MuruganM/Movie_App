import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieAPIKey";
import movieApi from "../../common/apis/movieApi";

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  loading: false,
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (apiText) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${apiText}&type=movie`
    );
    return response.data;
  }
);

export const fetchMovieOrShowDetail = createAsyncThunk(
  "movies/fetchMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=short`);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Success");
        return { ...state, movies: payload, loading: false };
      })
      .addCase(fetchAsyncMovies.rejected, (state, { payload }) => {
        console.log("pending");
        return { ...state, movies: payload, loading: false };
      })
      .addCase(fetchMovieOrShowDetail.fulfilled, (state, { payload }) => {
        console.log("pending");
        return { ...state, selectedMovieOrShow: payload };
      });
  },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMovieOrShowDetail = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
