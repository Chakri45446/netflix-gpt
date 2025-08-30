import React from "react";
import lang from "./utils/LanguageContants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[18%] pl-100 ">
      <form className=" bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-2 m-4 bg-white col-span-9 w-100 rounded=lg "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-red-600 col-span-3 m-3 rounded-lg cursor-pointer text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
