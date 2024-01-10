import React from "react"





// Using props without destructuring

// function Card(props) {
//     return (
//         <button>{props.text}</button>
//     )
// }





// Using props with destructuring

// function Card({text}) {
//     return (
//         <button>{text}</button>
//     )
// }


// ----------------------------------------------------- TASK ----------------------------------------------------
// Statements --- Our data will be in Card component and the data will be passed through props. In each Card there will be 'friends' button and when clicked there will be an alert.

// function Card({image, name, profession}){ --- This is a way I can give props

function Card({values, handleClick, index}){
    const {image, name, profession, friends} = values
    return(
        <div className="w-52 bg-zinc-200 rounded-md overflow-hidden">
            <div className="w-full h-32 bg-sky-200">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className = "w-full p-3">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{profession}</h5>
                <button  onClick={()=> handleClick(index)} className={`mt-4 px-3 py-1 text-xs text-white ${friends ? "bg-green-500" :  "bg-blue-500"} font-semibold rounded-md`}>{friends ?
                "Friends" : "Add Friend" }</button>
            </div>
        </div>
    )
}



export default Card