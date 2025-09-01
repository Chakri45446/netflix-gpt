import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.moviesList);
  return (
    <div className=" bg-black w-[39%]">
      <div className="-mt-60 md:pl-12 pl-4 relative z-10 md:pt-0 pt-70">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Top-Rated "} movies={movies.RatedMovies} />
        <MoviesList title={"Popular"} movies={movies.PopularMovies} />
        <MoviesList title={"UpComing"} movies={movies.upComingMovies} />
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
