import { React } from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apoorva Raj",
      description: "Hello I am Apoorva Raj , I am a successful businessman.",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description: "lorem ipsum dolor sit amet, consectetur",
      inStock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Gurukul",
      description:
        "lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectet",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1600367163359-d51d40bcb5f8?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Google",
      description: "lorem ipsum",
      inStock: true,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div className="w-52 bg-zinc-100 rounded-lg overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h3 className="font-semibold">{elem.name}</h3>
            <p className="text-xs mt-3">{elem.description}</p>
            <button className={`px-4 py-1 text-xs rounded mt-3 text-white ${elem.inStock ? "bg-blue-800" : "bg-red-500"}`}>
              {elem.inStock ? "In stock" : "Out of stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
