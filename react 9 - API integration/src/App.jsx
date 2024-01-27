import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";
import Show from "./components/Show"
import Home from "./components/Home"
import Services from "./components/Services";

function App() {

  return (
    <div className="pt-[5%] pl-[5%]">
      <nav className="flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/services" element = {<Services />}></Route>
        <Route path="/show" element = {<Show />} />
      </Routes>
    </div>
  ); 
}

export default App;
