import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../From/Form";
const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default AllRouter;
