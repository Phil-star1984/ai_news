import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NewsHeader() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#000000") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("7rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
          position: "fixed",
          /* top: 40, */
          width: "100%",
          paddingTop: "50px",
          zIndex: 99,
          left: 0, // Fügt horizontale Ausrichtung hinzu
          right: 0, // Fügt horizontale Ausrichtung hinzu
        }}
      >
        <div className="logo">
          <Link to="/">
            <h1>AI.Bro</h1>
          </Link>
          <p>by Millionpainter.de</p>
        </div>
        {/* <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>Skills</li>
          <li>Contact </li>
        </ul> */}
      </nav>
    </>
  );
}
