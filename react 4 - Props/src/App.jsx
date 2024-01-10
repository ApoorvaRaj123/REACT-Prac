import { useState } from "react";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "SK Rossi",
      profession: "Pro Esports Player",
      image:
        "https://images.unsplash.com/photo-1613759375165-1cd532c35738?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Robert choudhary",
      profession: "Seller",
      image:
        "https://images.unsplash.com/photo-1447430617419-95715602278e?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },

    {
      name: "marcus aurelius",
      profession: "stoic god",
      image:
        "https://media.istockphoto.com/id/1140723067/photo/the-imposing-statue-of-emperor-marcus-aurelius-in-the-campidoglio-or-roman-capitol-in-the.jpg?s=2048x2048&w=is&k=20&c=CTLka_uIh-BoaSeQaJc-nCrPaK8DT3p4fBmnwC8_dm0=",
      friends: false,
      // "https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jordan",
      profession: "NBA player",
      image:
        "https://plus.unsplash.com/premium_photo-1683135027560-1006f9e84b11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [realData, setRealData] = useState(data);

  const handleFriendsButton = (cardindex) => {
    setRealData((prev) => {
      return prev.map((item, index) => {
        if (index === cardindex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-400 flex items-center justify-center gap-4">
        {realData.map((item, index) => (
          <Card
            key={index}
            values={item}
            handleClick={handleFriendsButton}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
