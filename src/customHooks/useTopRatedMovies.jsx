import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/Contants";
import { TopRatedMovies } from "../components/utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // fetching the data from TMDB Api and update store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(TopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
