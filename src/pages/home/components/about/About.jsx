import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="jinz_about section_padding">
      <h1>Introducing JinzAI</h1>
      <p>
        Find people — using billions of professional data points. JinzAI knows
        what you're looking for.
      </p>
      <iframe
        src="https://www.youtube.com/embed/UxW0sNq8vl8"
        title="JINZAI"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default About;
