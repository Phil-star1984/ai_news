import React, { useState } from "react";
import "./App.css";
import FooterNews from "./components/FooterNews";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing";
import NewsHeader from "./components/NewsHeader.jsx";
import NewsApiSearch from "./components/NewsApiSearch.jsx";
import { NewsProvider } from "./context/NewsContext.jsx";

function App() {
  return (
    <>
      <NewsProvider>
        <NewsHeader />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <FooterNews />
      </NewsProvider>
    </>
  );
}

export default App;
