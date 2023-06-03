import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="jinz__footer section_padding">
      <div className="jinz__footer-links">
        <div className="jinz__footer-links__legal">
          <h3>LEGAL</h3>
          <p>
            <a href="/tac">Terms and Conditions</a>
          </p>
          <p>
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
        <div className="jinz__footer-links__social">
          <h3>SOCIAL</h3>
          <p>
            <a href="in">LinkedIn</a>
          </p>
          <p>
            <a href="twitter">Twitter</a>
          </p>
        </div>
      </div>
      <div className="jinz__footer-made__by">
        <p>
          Email us: <a href="mailto:hello@jinz.ai">hello@jinz.ai</a>
        </p>
        <p>Built in Tokyo.</p>
        <p>JinzAI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
