import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews.jsx";
import FooterNews from "./FooterNews.jsx";

export default function NewsApi() {
  const [news, setNews] = useState([]);
  const [showNews, setShowNews] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/2w9yxl4o2fyy/environments/master/entries?access_token=MNVzh3524dp7m4Nihpw3Zm2ejz8unr_zTJ2BisD3_Ao&content_type=aiNews"
      )
      .then((response) => setNews(response.data.items));
  }, []);

  return (
    <>
      {showNews && news.map((news, index) => <SingleNews news={news} />)}
      <button type="submit" onClick={() => setShowNews(!showNews)}>
        {showNews ? "Hide" : "Show"} News
      </button>
      {showNews && <FooterNews />}
    </>
  );
}
