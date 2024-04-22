import React from "react";

function Dropdown() {
  return (
    <>
      <select
        className="rounded-xl p-2 bg-transparent text-white border-zinc-600 border-2"
        name=""
        id=""
      >
        <option className="bg-zinc-400" value="all">
          All
        </option>
        <option className="bg-zinc-400" value="movies">
          MOVIES
        </option>
        <option className="bg-zinc-400" value="tv">
          TV
        </option>
      </select>
    </>
  );
}

export default Dropdown;
