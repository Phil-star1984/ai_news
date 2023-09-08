import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NewsComponent from "./components/NewsComponent";
import NewsJsonComponent from "./components/NewsJsonComponent.jsx";
import NewsApi from "./components/NewsApi.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="logo">AI News</h1>
      <NewsApi />
      {/* <NewsJsonComponent /> */}
      {/* <NewsComponent /> */}
    </>
  );
}

export default App;
