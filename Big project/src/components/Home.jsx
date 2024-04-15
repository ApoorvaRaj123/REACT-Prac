import React from "react";
import Sidenav from "../templates/Sidenav";
import Topnav from "../templates/Topnav";

function Home(params) {
  document.title = "SCSDB | Homepage";

  return (
    <div className="flex">
      <Sidenav />

      <div className="w-[80%] h-screen">
        <Topnav />
      </div>
    
    </div>
  );
}
export default Home;
