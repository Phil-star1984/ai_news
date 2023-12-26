import React, { useContext, useState } from "react";
import SingleNews from "./SingleNews.jsx";
import "material-icons/iconfont/material-icons.css";
import { NewsContext } from "../context/NewsContext.jsx";

export default function NewsApiSearch() {
  const { news } = useContext(NewsContext);
  const [showNews, setShowNews] = useState(true);

  return (
    <>
    <div className="single_news_container_outer">
      {showNews &&
        news.map((news, index) => <SingleNews news={news} key={index} />)}
      <button type="submit" onClick={() => setShowNews(!showNews)}>
        {showNews ? "Hide" : "Show"} News
      </button>
      </div>
    </>
  );
}
