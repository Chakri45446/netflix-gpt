import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies ";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpComingMovies from "../customHooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryConatainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div className="flex ">
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
        {/* 

              - Main Container
                  - Video In BackGround
                  - Video Title

              - Secondary Container
                  - MoviesList * n
                  - cards {movieCards} * n    
        
        */}
      </div>
    </div>
  );
};

export default Browse;
