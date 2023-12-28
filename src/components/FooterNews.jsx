import React from "react";
import { Link } from "react-router-dom";

export default function FooterNews() {
  return (
    <div className="footer_container">
      <div className="footer_navigation_container">
        <ul>
          <li>Impressum</li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>GetAPI</li>
        </ul>
        <p>© 2023 AI.Bro by MILLIONPAINTER</p>
      </div>
    </div>
  );
}
