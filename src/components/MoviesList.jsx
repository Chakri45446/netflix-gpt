import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-6  ">
      <h1 className="text-3xl font-bold py-2 text-white">{title}</h1>
      {/* Scrollable container */}
      <div className=" overflow-x-scroll overflow-hidden scroll-smooth ">
        <div className="flex ">
          {movies?.map((movie) => (
            <div key={movie.id}>
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
