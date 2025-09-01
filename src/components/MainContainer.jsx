import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const movies = useSelector((store) => store.moviesList?.nowPlayingMovies);
  if (movies === null) return; // early return i can also write if(!movies) retrun

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="md:pt-0 pt-30 bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
