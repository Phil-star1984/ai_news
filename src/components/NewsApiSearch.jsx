import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews.jsx";
import FooterNews from "./FooterNews.jsx";
import "material-icons/iconfont/material-icons.css";
/* import SearchBar from "./SearchBar.jsx"; */

export default function NewsApiSearch() {
  const [news, setNews] = useState([]);
  const [input, setInput] = useState("");
  const [showNews, setShowNews] = useState(true);

  const URL = `https://cdn.contentful.com/spaces/2w9yxl4o2fyy/environments/master/entries?access_token=${
    import.meta.env.VITE_SOME_KEY
  }&content_type=aiNews`;

  const handleSubmit = (e) => e.preventDefault();

  const fetchData = (value) => {
    axios.get(URL).then((response) => {
      const json = response.data.items;
      console.log(json);

      const results = json.filter((news) => {
        return (
          news.fields.title.toLowerCase().includes(value.toLowerCase()) ||
          news.fields.description.toLowerCase().includes(value.toLowerCase())
        );
      });

      console.log(results);
      setNews(results);

      if (results.length === 0) {
        alert("No results found. Try another search!");
        setInput("");
        fetchData("");
      }
    });
  };

  useEffect(() => {
    fetchData("");
  }, []);

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      {/* <SearchBar onSubmit={handleSubmit} value={input} onChange={handleChange} /> */}

      <div className="nav_container">
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search Titles"
            onChange={(e) => handleChange(e.target.value)}
            value={input}
          />

          <button type="submit" className="search_button">
            <span className="material-icons-outlined">search</span>
          </button>
        </form>

        <div className="social_icons">
          <a
            href="https://www.instagram.com/the_million_painter/?hl=de"
            target="_blank"
            rel="noreferrer"
          >
            <img src="src/assets/icons8-instagram-48.png" />
          </a>
          <a
            href="https://www.facebook.com/philsplash/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="src/assets/icons8-facebook-48.png" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCe2tVF3FthavMsUl6pgP08Q"
            target="_blank"
            rel="noreferrer"
          >
            <img src="src/assets/icons8-youtube-48.png" />
          </a>
        </div>
      </div>

      {showNews &&
        news.map((news, index) => <SingleNews news={news} key={index} />)}
      <button type="submit" onClick={() => setShowNews(!showNews)}>
        {showNews ? "Hide" : "Show"} News
      </button>
      {showNews && <FooterNews />}
    </>
  );
}

/* const results = json.filter(
  (news) =>
    news.fields.title.toLowerCase().includes(value.toLowerCase()) ||
    news.fields.description.toLowerCase().includes(value.toLowerCase())
); */
