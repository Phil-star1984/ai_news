import React, { useState } from "react";
import "./App.css";
import NewsApi from "./components/NewsApi.jsx";
import NewsHeader from "./components/NewsHeader.jsx";
import NewsApiSearch from "./components/NewsApiSearch.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NewsHeader />
      {/* <NavBar /> */}
      <NewsApiSearch />
      {/* <NewsApi /> */}
    </>
  );
}

export default App;
