import React, { useState } from "react";
import {Link, Routes, Route} from "react-router-dom";
import User from "./components/User.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";

function App() {
 
  return (
    <>
      <nav className="mt-10 flex justify-center gap-20">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/user" element = {<User />} />
        <Route path = "/about" element = {<About />} />
      </Routes>

      
    </>
  );
}

export default App;
