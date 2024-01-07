import React, { useState } from "react";

function App() {
  const [val, setVal] = useState([
    { name: "Dummy1", age: 23 },
    { name: "Dummy2", age: 24 },
    { name: "Dummy3", age: 25 },
  ]);

  return (
    <>
      {
      
      /* This code is dealing with object inside an array/ array of objects


      <div className="mt-4 ml-4">
        {val.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </div>
        ))}
        <button
          onClick={() =>
            setVal(() =>
              val.map((item) =>
                item.name === "Harsh" ? { name: "Harsh", age: 25 } : item
              )
            )
          }
          className="px-4 py-2 mt-5 rounded-md bg-blue-400"
        >
          Change
        </button>
      </div> */
      
      }



      
      {
      
      /* This is the code of adding an element to the array using states

      
      <div className="mt-4 ml-4">
        {val.map(item => <h1>{item}</h1>)}
        <button onClick={()=>setVal([...val, 12])} 
        className="px-4 py-2 mt-5 rounded-md bg-blue-400">
        Change</button>
      </div> */
      
      }



      {
      
      /* This is the code for filtering elements from arrays which are odd numbers
      

      <div className="mt-4 ml-4">
        {val.map(item => <h1>{item}</h1>)}
        <button onClick={()=>setVal(() => val.filter(item => item%2 != 0))} 
        className="px-4 py-2 mt-5 rounded-md bg-blue-400">
        Change</button>
      </div> */
      
      }
    </>
  );
}

export default App;
