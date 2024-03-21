import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Coursework from "./routes/Coursework";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/#" element={<Home />} />
        <Route path="/#/projects" element={<Projects />} />
        <Route path="/#/coursework" element={<Coursework />} />
      </Routes>
    </>
  );
}

export default App;
