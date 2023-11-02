import React from "react";
import Home from "./Home";
import About from "./About"; 
import Service from "./Service"
import Contact from "./Contact"

import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./index.css";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/service"}>Service</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>


        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

