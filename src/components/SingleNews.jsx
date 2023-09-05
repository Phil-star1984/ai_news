import React, { useState, useEffect } from "react";
import PromptContainer from "./PromptContainer.jsx";

export default function SingleNews({ news }) {
  const [readMore, setReadMore] = useState(false);

  function moreText() {
    setReadMore(!readMore);
  }

  useEffect(() => {

  },[setReadMore])

  return (
    <div className="single_news_container">
      <h2>{news.title}</h2>
      <p>{news.description}</p>

      {readMore && <PromptContainer news={news} />}

      <button type="submit" onClick={moreText}>
        {readMore ? "Hide" : "Get"} Prompt
      </button>

      <div className="sub_info_container">
        <ul>
          <li>Category: {news.category}</li>
          <li>Author: {news.author}</li>
          <li>Date: {news.date}</li>
        </ul>
      </div>
    </div>
  );
}
