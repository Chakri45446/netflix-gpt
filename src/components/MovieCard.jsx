import React from "react";
import { IMG_CDN_URL } from "./utils/Contants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 pr-4 w-35">
      <img alt="movieCard" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
