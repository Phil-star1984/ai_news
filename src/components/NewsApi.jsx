import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews.jsx";

export default function NewsApi() {
  const [news, setNews] = useState([]);
  const [showNews, setShowNews] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/2w9yxl4o2fyy/environments/master/entries?access_token=MNVzh3524dp7m4Nihpw3Zm2ejz8unr_zTJ2BisD3_Ao&content_type=aiNews"
      )
      .then((response) => console.log(response.data.items));
    /* console.log(news[0].fields.title) */
    setShowNews(true);
  }, []);

  return (
    <>
      {/* <div className="news_json_component_container"> */}
        

        {showNews && news.map((news, index) => <SingleNews news={news} />)}
        <button type="submit" onClick={() => setShowNews(!showNews)}>
          {showNews ? "Hide" : "Show"} News
        </button>
      {/* </div> */}
    </>
  );
}
