import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="p-2 w-full ">
      <h1 className="md:text-3xl font-bold py-2 text-white text-lg ">
        {title}
      </h1>
      {/* Scrollable container */}
      <div className="overflow-x-scroll scrollbar-hide ">
        <div className="flex space-x-2   ">
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
