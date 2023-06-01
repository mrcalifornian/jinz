import React from "react";
import frame from "../../assets/frame.gif";
import "./header.css";

const Header = () => {
  return (
    <div className="jinz__header section_padding">
      <div className="jinz__header-content">
        <h1>Using AI and Industry Experts to Build Your Team</h1>
        <p>
          We are a team of passionate HR professionals, technologists and
          entrepreneurs, committed to creating meaningful people solutions. By
          focusing on people as much as technology, we make sure businesses have
          the capabilities they need to thrive.
        </p>
        <div className="jinz__header-content__buttons">
          <button className="req-button" type="button">
            Request Demo
          </button>
          <a href="/chat" className="try-button">
            Try JinzAI
          </a>
        </div>
      </div>
      <div className="jinz__header-image">
        <img src={frame} alt="frame" />
      </div>
    </div>
  );
};

export default Header;
