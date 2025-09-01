import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-4 md:px-12 md:pt-60 pt-70 absolute bg-gradient-to-r from-black w-full aspect-video ">
      <h1 className="font-bold md:text-5xl text-white text-4xl">{title}</h1>
      <p className="py-6 text-lg w-[400px] text-white hidden md:block">
        {overview}
      </p>
      <div className="">
        <button className="bg-white text-black cursor-pointer border border-gray-300 p-2 md:px-8 px-4 md:py-3 py-1  m-3 text-lg font-bold rounded-lg hover:bg-gray-200  ">
          ▶️ Play
        </button>
        <button className=" bg-gray-600 text-white cursor-pointer border border-gray-300 p-2 px-8 py-3 m-3 text-lg font-bold rounded-lg hover:bg-gray-700 hidden md:inline-block">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
