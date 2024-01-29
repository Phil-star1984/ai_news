import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function FooterNews() {
  return (
    <div className="footer_container">
      <div className="footer_navigation_container">
        <ul className="footer_ul">
          <li className="footer_links">
            <NavLink to="/impressum">Impressum</NavLink>
          </li>
          <li className="footer_links">
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li className="footer_links">
            <NavLink to="/pricing">GetAPI</NavLink>
          </li>
        </ul>
        <div>
          <p>© 2024 AI.Bro by MILLIONPAINTER</p>
        </div>
      </div>
    </div>
  );
}
