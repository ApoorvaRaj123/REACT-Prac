import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] h-screen border-r-2 border-x-zinc-400 p-10">
      <h1 className="font-bold text-2xl text-white">
        <i class="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">SCSDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-lg gap-2">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
        <i class="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
        <i class="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
        <i class="mr-2 ri-film-fill"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
        <i class="mr-2 ri-slideshow-3-fill"></i>Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
        <i class="mr-2 ri-team-fill"></i>People
        </Link>
      </nav>

        <hr className="border-zinc-400" />
        <nav className="flex flex-col text-zinc-400 text-lg gap-1">
        <h1 className="text-white font-semibold text-xl mt-10 mb-1">
          Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
        <i class="mr-2 ri-information-fill"></i>About SCSDB
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
        <i class="mr-2 ri-phone-fill"></i>Contact
        </Link>
        
      </nav>
    </div>
  );
}

export default Sidenav;
