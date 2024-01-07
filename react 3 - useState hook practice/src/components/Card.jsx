import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {

  const [val , setVal] = useState(false)

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden">
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1683009427513-28e163402d16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span onClick={() => setVal(!val)} className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-[#dadada8b] absolute bottom-[5%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <FaArrowRightLong size={".7em"}/>
        </span>
      </div>
    </div>
  );
}

export default Card;
