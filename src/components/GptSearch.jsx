import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { NETFLIX_BG_URL } from "./utils/Contants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <img
          src={NETFLIX_BG_URL}
          alt="background-img"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
