import React, { useState } from "react";
import "./App.css";
import FooterNews from "./components/FooterNews";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <FooterNews />
    </>
  );
}

export default App;
