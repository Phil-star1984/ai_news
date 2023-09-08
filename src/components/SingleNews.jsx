import React, { useState, useEffect } from "react";
import PromptContainer from "./PromptContainer.jsx";

export default function SingleNews({ news }) {
  const [readMore, setReadMore] = useState(false);

  function moreText() {
    setReadMore(!readMore);
  }

  useEffect(() => {}, [setReadMore]);

  return (
    <div className="single_news_container">
      <h2>{news.fields.title}</h2>
      <p>{news.fields.description}</p>

      {readMore && <PromptContainer news={news} />}

      <button type="submit" onClick={moreText}>
        {readMore ? "Hide" : "Show"} Prompt
      </button>

      <div className="sub_info_container">
        <ul>
          <li>Category: {news.fields.category}</li>
          <li>Author: {news.fields.author}</li>
          <li>Date: {news.fields.date}</li>
        </ul>
      </div>
    </div>
  );
}
