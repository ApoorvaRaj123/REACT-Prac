import React from "react";
import Dropdown from "./Dropdown";

function HorizontalCards() {
  return (
    <>
      <div className="w-full h-[10vh] px-5 pt-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-white">Trending</h1>
          <Dropdown options={"All"} />
        </div>
      </div>

      <div className="w-full h-[32vh] p-4 flex flex-nowrap gap-5 overflow-x-auto">
        <div className="min-w-[12%] h-full bg-zinc-600 font-light text-white rounded-md overflow-hidden">
          <img
            className="w-full h-[50%] object-cover object-center"
            src="https://images.unsplash.com/photo-1713714614660-18a216d92281?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p>desc</p>
        </div>
      </div>
    </>
  );
}

export default HorizontalCards;
