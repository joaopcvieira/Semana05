import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../views/Login";
import About from "../views/About";
import Home from "../views/Home";

export default (props) => {
  return (
    <div className="Content">
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/param/:id" element={<Param />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};
