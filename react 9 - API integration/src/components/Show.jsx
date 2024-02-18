import axios from "../utils/Axios.jsx";
import { React, useState, useEffect } from "react";




function Show() {
    
  const [products, setProducts] = useState([]);

  const getProduts = () => {
    
    axios
      .get("/products")
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getProduts();
  },[])

  return (
    <>
      <button
        onClick={getProduts}
        className="p-2 m-5 text-2xl rounded-md bg-blue-400"
      >
        Get API data!!!
      </button>

      <ul className="pt-5">
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="rounded-md mb-2 p-5 bg-red-300">
              {p.category}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
}


export default Show;
