import React, {useRef, useState} from "react";


// ----------------------------------------------------------------FORM HANDLING ----------------------------------------------------------------

// ---------------------------------    WAY 1 - Using "useRef" ----------------------------------------------------------------


// function App(){

//   const name = useRef(null);
//   const age = useRef(null);


//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     console.log(name.current.value, age.current.value);
//   }

//   return (
//   <>
//     <div className = "p-4">
//       <form action="" onSubmit={handleSubmit}>
//         <input ref={name} className="border-2 m-2" type="text" placeholder="name"/>
//         <input ref={age} className="border-2 m-2" placeholder="age" type="text" />
//         <input type="submit" />
//       </form>
//     </div>
//   </>
//   )
// }






// ---------------------------------    WAY 2 - Using controlled components ----------------------------------------------------------------


// function App(){


//   const [val,setVal] = useState({name:"", email:""})

//   const handleClick = (event) => {
//     event.preventDefault();
//   }

//   return (
//   <>
//     <div className = "p-4">
//       <form action="" onSubmit={handleClick}>
//         <input onChange= {(event) => setVal({...val, name: event.target.value})} className="border-2 m-2" type="text" placeholder="name"/>
//         <input onChange= {(event) => setVal({...val, email: event.target.value})} className="border-2 m-2" type="text" placeholder="name"/>
//       </form>
//     </div>
//   </>
//   )
// }




// ---------------------------------    WAY 3 - Using React hook 'form' ----------------------------------------------------------------



// function App(){


//   const {register, handleSubmit} = useForm()


//   return (
//   <>
//     <div className = "p-4">
//       <form action="" onSubmit={handleSubmit(data => console.log(data))}>
//         <input {...register('name')} className="border-2 m-2" type="text" placeholder="name"/>
//         <input {...register('email')} className="border-2 m-2" type="text" placeholder="email"/>
//       </form>
//     </div>
//   </>
//   )
// }



export default App;


export default App;
