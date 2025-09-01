import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../components/utils/Contants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../components/utils/movieSlice";

const useTopRatedMovies = () => {
  const RatedMovies = useSelector((store) => store.moviesList.RatedMovies);
  // fetching the data from TMDB Api and update store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    if (!RatedMovies) getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
