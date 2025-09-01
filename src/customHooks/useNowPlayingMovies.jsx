import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../components/utils/Contants";
import { addNowPlayingMovies } from "../components/utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // fetching the data from TMDB Api and update store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.moviesList.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    //memoization means if data already fetched it unable to fetch data again and again like this..,
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
