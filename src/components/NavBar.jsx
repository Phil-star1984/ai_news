import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { RxHamburgerMenu } from "react-icons/rx";
import { NewsContext } from "../context/NewsContext.jsx";

export default function NavBar() {
  const { news, setNews } = useContext(NewsContext);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [input, setInput] = useState("");

  const URL = `https://cdn.contentful.com/spaces/2w9yxl4o2fyy/environments/master/entries?access_token=${
    import.meta.env.VITE_SOME_KEY
  }&content_type=aiNews`;

  const handleSubmit = (e) => e.preventDefault();

  const fetchData = (value) => {
    axios.get(URL).then((response) => {
      const json = response.data.items;
      /* console.log(json); */

      const results = json.filter((news) => {
        return (
          news.fields.title.toLowerCase().includes(value.toLowerCase()) ||
          news.fields.description.toLowerCase().includes(value.toLowerCase())
        );
      });

      /* console.log(results); */
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

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#000000") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("10rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
          position: "fixed",
          /* border: "1px solid rgba(60, 50, 30, 1)", */
          /* top: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center", */
          top: 0,
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
          zIndex: 99,
          width: "100%",
        }}
      >
        <div className="nav_outer_container">
          <div className="logo">
            <Link to="/">
              <h1>AI.Bro</h1>
            </Link>
            <p>by Millionpainter.de</p>
          </div>

          <div className="nav_container">
            <form className="search" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search Titles"
                onChange={(e) => handleChange(e.target.value)}
                value={input}
              />
            </form>

            {/* <div><ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>Skills</li>
          <li>Contact </li>
        </ul></div> */}

            <div className="nav_right_container">
              <div>
                <ul className="nav_main_links">
                  <li>
                    <NavLink to="/" activeClassName="active">
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses" activeClassName="active">
                      Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pricing" activeClassName="active">
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses/upload" activeClassName="active">
                      Upload
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" activeClassName="active">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="social_icons">
                <a
                  href="https://www.instagram.com/the_million_painter/?hl=de"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/icons8-instagram-48.png" />
                </a>
                <a
                  href="https://www.facebook.com/philsplash/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/icons8-facebook-48.png" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCe2tVF3FthavMsUl6pgP08Q"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/icons8-youtube-48.png" />
                </a>
              </div>
            </div>
            <div className="burger_menu">
              <RxHamburgerMenu size={"1.9em"} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
