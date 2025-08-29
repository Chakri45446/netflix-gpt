import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "moviesList",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    TopRatedMovies: (state, action) => {
      state.RatedMovies = action.payload;
    },
    UpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  TopRatedMovies,
  UpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
