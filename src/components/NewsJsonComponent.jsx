import React, { useState, useEffect } from "react";
import data from "/src/data.json";
import SingleNews from "./SingleNews.jsx";

export default function NewsJsonComponent() {
  const [news, setNews] = useState([]);
  const [showNews, setShowNews] = useState(true);
  /*   console.log(data[index].title); */
  /*   console.log(data[index].description); */
  /* create .map for Titles & Description: {data.map((news, index) => (<h1>data[index].title</h1>))} */

  useEffect(() => {
    setNews(data);
  }, []);

  function handleClick() {
    /* setNews(data); */
    setShowNews(!showNews);
  }

  return (
    <div className="news_json_component_container">
      <button type="submit" onClick={handleClick}>
        {showNews ? "Hide" : "Show"} AI News
      </button>

      {showNews && news.map((news, index) => <SingleNews news={news} />)}
    </div>
  );
}
