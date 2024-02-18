import axios from "../utils/Axios.jsx";
import { React, useEffect, useState } from "react";

function Services() {
  const [first, setFirst] = useState("normal data");
  const [second, setSecond] = useState("large data");


  const getUsers = () => {
    
    axios
      .get("/users")
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    console.log("Service component is created");

    return () => {
      console.log("service component is deleted");
    };
  });

  return (
    <>
      <div>
        <h1>{first}</h1>
        <button
          onClick={() => setFirst("Changed normal data")}
          className="mb-10 bg-red-100 rounded p-2"
        >
          Change normal Data
        </button>

        <h1>{second}</h1>
        <button
          onClick={() => setFirst("Changed large data")}
          className="mb-2 bg-red-100 rounded p-2"
        >
          Change Large Data
        </button>
      </div>
    </>
  );
}

export default Services;
