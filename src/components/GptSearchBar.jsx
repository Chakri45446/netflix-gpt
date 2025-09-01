import React, { useRef } from "react";
import lang from "./utils/LanguageContants";
import { useDispatch, useSelector } from "react-redux";
import ai from "./utils/Openai";
import { API_OPTIONS } from "./utils/Contants";
import { addGptMovieResults } from "./utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  //search movie in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    // Make an API Call to GPT API and get Movie Results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 10 movies , comma sepearted like the example result given ahead. Example Result: Dhee , venky , mad , jathiratnalu";
    const gptResults = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });
    console.log(gptResults.text);

    // Padosan , Gol Maal , Jaane Bhi Do Yaaro , Chupke Chupke , Andaz Apna Apna

    const gptMovies = gptResults.text.split(",");

    //['Padosan'  , 'Gol Maal' , 'Jaane Bhi Do Yaaro' , 'Chupke Chupke' , 'Andaz Apna Apna']
    console.log(gptMovies);

    // For Each Movie i will Search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise , Promise , Promise , Promise , Promise]

    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="absolute top-0 left-0 w-full  z-20 flex justify-center  md:my-40 my-50 mr-350">
      <form
        className="bg-black flex p-2 m-2 grid grid-cols-12 gap-4 w-full md:w-1/2  "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="bg-white p-2 m-2 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 m-2 col-span-3 cursor-pointer rounded-xl text-white"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
