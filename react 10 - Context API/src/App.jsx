import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import User from "./components/User.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Userdetail from "./components/Userdetail.jsx";

function App() {
  return (
    <>
      <div className="pt-1 container bg-red-100 m-auto">
        <nav className="mt-10 flex justify-center gap-20">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<Userdetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
