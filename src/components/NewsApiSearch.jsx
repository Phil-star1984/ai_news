import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews.jsx";
import FooterNews from "./FooterNews.jsx";
import "material-icons/iconfont/material-icons.css";

export default function NewsApiSearch() {
  const [news, setNews] = useState([]);
  const [input, setInput] = useState("");
  const [showNews, setShowNews] = useState(true);

  const URL =
    "https://cdn.contentful.com/spaces/2w9yxl4o2fyy/environments/master/entries?access_token=MNVzh3524dp7m4Nihpw3Zm2ejz8unr_zTJ2BisD3_Ao&content_type=aiNews";

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
