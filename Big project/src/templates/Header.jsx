import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.4),rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50%] flex flex-col justify-end pb-10"
    >
      <div className="ml-10 font-black text-white">
        <h1 className="text-5xl w-[70%]">{data.title || data.name || data.original_title}</h1>
        <p className="w-[70%]">{data.overview}...<Link className="text-blue-300 font-thin">more</Link></p>
      </div>
    </div>
  );
}

export default Header;
