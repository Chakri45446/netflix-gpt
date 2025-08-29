import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.moviesList);
  return (
    <div className=" bg-black w-[40%]">
      <div className="-mt-60 pl-12 relative z-10">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Top-Rated Movies"} movies={movies.RatedMovies} />
        <MoviesList title={"Popular"} movies={movies.PopularMovies} />
        <MoviesList title={"UpComing Movies"} movies={movies.upcomingMovies} />
      </div>
      {/* 

     moviesList - Popular
       - movieCards * n
     moviesList - NowPlaying movies
     moviesList - Trending
     moviesList - Horror
    
    */}
    </div>
  );
};
export default SecondaryContainer;
