import React, { useState } from "react";
import "./App.css";
import NewsApi from "./components/NewsApi.jsx";
import NewsHeader from "./components/NewsHeader.jsx";
import NewsApiSearch from "./components/NewsApiSearch.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NewsHeader />
      <NewsApiSearch />
      {/* <NewsApi /> */}
    </>
  );
}

export default App;
