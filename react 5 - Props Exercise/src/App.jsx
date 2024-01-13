import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  // const data = [
  //   {
  //     name: "SK Rossi",
  //     profession: "Pro Esports Player",
  //     image:
  //       "https://images.unsplash.com/photo-1613759375165-1cd532c35738?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  //   {
  //     name: "Robert choudhary",
  //     profession: "Seller",
  //     image:
  //       "https://images.unsplash.com/photo-1447430617419-95715602278e?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },

  //   {
  //     name: "marcus aurelius",
  //     profession: "stoic god",
  //     image:
  //       "https://media.istockphoto.com/id/1140723067/photo/the-imposing-statue-of-emperor-marcus-aurelius-in-the-campidoglio-or-roman-capitol-in-the.jpg?s=2048x2048&w=is&k=20&c=CTLka_uIh-BoaSeQaJc-nCrPaK8DT3p4fBmnwC8_dm0=",
  //     friends: false,
  //     // "https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     name: "Jordan",
  //     profession: "NBA player",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1683135027560-1006f9e84b11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     friends: false,
  //   },
  // ];

  // const [realData, setRealData] = useState(data);

  // const handleFriendsButton = (cardindex) => {
  //   setRealData((prev) => {
  //     return prev.map((item, index) => {
  //       if (index === cardindex) {
  //         return { ...item, friends: !item.friends };
  //       }
  //       return item;
  //     });
  //   });
  // };

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sunshine",
      artist: "Sheeran",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1704739308671-96dd994617d8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "girls like you",
      artist: "Maroon 5",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1665673312770-f80cac75b319?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Smack that",
      artist: "Akon",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Numb",
      artist: "Linkin parl band",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1704742204216-59d589945ddc?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sage",
      artist: "Ritviz",
      added: false,
    },
  ];

  const [songdata, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev)=>{
      return prev.map((item, itemIndex) =>{
        if (itemIndex === index) {
          return {...item, added: !item.added};
        }
        return item;
      })
    })
  }

  const [favcount, setFavCount] = useState(0);

  const favouriteCount = (count) => {
    setFavCount(()=>{
      return songdata.forEach((item)=>{
        if (item.added === true) {count++;}
        return count;
      })
    })
  }


  return (
    <>
      <div className="w-full h-screen bgzinc-300">
        <Navbar count= {0} favouriteCount = {favouriteCount} />
        <div className="px-20 flex gap-10 mt-32 flex-wrap">
          {songdata.map((obj, index) => (
            <Card key={index} handleClick = {handleClick} index = {index} data = {obj} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
