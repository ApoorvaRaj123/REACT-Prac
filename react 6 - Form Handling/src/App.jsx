import React, {useRef} from "react";


// ----------------------------------------------------------------FORM HANDLING ----------------------------------------------------------------

// ---------------------------------    WAY 1 - Using "useRef" ----------------------------------------------------------------


function App(){

  const name = useRef(null);
  const age = useRef(null);


  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(name.current.value, age.current.value);
  }

  return (
  <>
    <div className = "p-4">
      <form action="" onSubmit={handleSubmit}>
        <input ref={name} className="border-2 m-2" type="text" placeholder="name"/>
        <input ref={age} className="border-2 m-2" placeholder="age" type="text" />
        <input type="submit" />
      </form>
    </div>
  </>
  )
}

export default App;