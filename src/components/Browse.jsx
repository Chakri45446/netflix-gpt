import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryConatainer";

const Browse = () => {
  useNowPlayingMovies();

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
