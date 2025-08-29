import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" px-24 pt-60 absolute bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="font-bold text-5xl text-white">{title}</h1>
      <p className="py-6 text-lg w-[110mm] text-white">{overview}</p>
      <div className="">
        <button className="bg-white text-black cursor-pointer border border-gray-300 p-2 px-8 py-3 m-3 text-lg font-bold rounded-lg hover:bg-gray-200">
          ▶️ Play
        </button>
        <button className=" bg-gray-600 text-white cursor-pointer border border-gray-300 p-2 px-8 py-3 m-3 text-lg font-bold rounded-lg hover:bg-gray-700">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
