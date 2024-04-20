import React, { useEffect, useState } from "react";
import Sidenav from "../templates/Sidenav";
import Topnav from "../templates/Topnav";
import Header from "../templates/Header";
import axios from "../utils/axios";
import HorizontalCards from "../templates/HorizintalCards";

function Home(params) {
  document.title = "SCSDB | Homepage";

  const [wallpaper, setWallpaper] = useState([]);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const random =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(random);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWallpaper();
  }, []);

  return wallpaper ? (
    <div className="flex">
      <Sidenav />
      <div className="w-[80%] h-screen">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCards />
      </div>
    </div>
  ):<h1>Loading</h1>
}
export default Home;
