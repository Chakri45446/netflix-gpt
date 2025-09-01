import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/Contants";
import { useEffect } from "react";
import { addUpComingMovies } from "../components/utils/movieSlice";

const useUpComingMovies = () => {
  // const upComingMovies = useSelector(
  //   (store) => store.moviesList.upComingMovies
  // );
  // fetching the data from TMDB Api and update store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useUpComingMovies;
