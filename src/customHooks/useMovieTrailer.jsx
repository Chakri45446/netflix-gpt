import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../components/utils/Contants";
import { addTrailerVideo } from "../components/utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailor = useSelector((store) => store.moviesList.trailerVideo);
  // fetch trailer video && updating the store with trailerVideo data

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!movieTrailor) getMovieVideo();
  }, []);
};
export default useMovieTrailer;
