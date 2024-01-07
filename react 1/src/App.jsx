import React from "react";
import Card from "./components/Card.jsx";

function App(){

  const data = ["Apoorva","Aradhana","Harsh","Prachi","Vivek","Anita"];

  return (
  <>
    {/* <div>
      {data.map((elem,index)=>(
        <div className="px-3 py-4 w-fit bg-zinc-200 rounded-md">
          {elem}
        </div>
      ))}
    </div> */}
    <Card />

  </>
  )
}

export default App;