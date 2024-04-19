import React from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
  
function Topnav() {
const [query, setQuery] = useState("");

const getSearch = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
      console.log(data);
    } catch (error) {
      console.log("Error hai",error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return (
    <div className="w-full h-[9vh] relative flex justify-center items-center">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent selection:text-zinc-900 selection:bg-white"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-line"
        ></i>
      )}

      <div className="w-[50%] absolute max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
        {query &&
          search.map((item, idx) => (
            <Link
              key={idx}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img src={item.backdrop_path || item.poster_path} alt="" />
              <span>{item.name || item.original_name || item.title || item.original_title}</span>
            </Link>
          ))}
      </div>
    </div>
   
  );
}

export default Topnav;
