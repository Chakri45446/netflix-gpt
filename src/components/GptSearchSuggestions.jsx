import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSearchSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className=" text-white md:pt-60 pt-70 p-4  min-w-[2000px] w-2/3  bg-black/70 ">
      <div className="  ">
        {movieNames.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchSuggestions;
