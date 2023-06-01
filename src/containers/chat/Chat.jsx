import React from "react";
import { BiSend } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import profile from "../../assets/profile.jpg";
import jinz from "../../assets/jinz.png";
import "./chat.css";

const Chat = () => {
  return (
    <div className="jinz__chat ">
      <div className="jinz__chat-header">
        <h3>Welcome to JinzAI</h3>
      </div>
      <div className="jinz__chat-main">
        <div className="jinz__chat-main__welcome">
          <img src={jinz} alt="jinz" />
          <p>
            Hey, I'm JinzAI — your people search assistant. I read through
            billions of profile data points across the internet to help you find
            and reach the right people for every professional need 🚀 <br />
            <br />
            Let's start by narrowing down a demographic to focus on. Who are you
            looking for today? <br />
            <br /> Enter your own query in the text box, or try a sample query
            for free (no credits).
            <p>
              <button className="prompt-example">
                Senior software engineer with 5+ years of experience
              </button>
              <button className="prompt-example">
                Middle+ NodeJS engineer in Kyoto
              </button>
              <button className="prompt-example">
                Senior Frontend Engineer ReactJS
              </button>
            </p>
          </p>
        </div>
        <div className="jinz__chat-main__query">
          <img src={profile} alt="user" />
          <p>Senior software engineers</p>
        </div>
        <div className="jinz__chat-main__response">
          <img src={jinz} alt="user" />
          <div>
            <p>
              This is an initial query, a starting point for your search. You
              can edit it, or run this query.
            </p>
            <div className="jinz__chat-main__response-box">
              <p>Matched 59 Profiles</p>
              <p className="jinz__chat-main__response-box__text">
                Searching for a Senior Engineer+9 in California with 4+ years of
                experience who works at Waymo, Luminar, or 24 other companies
              </p>
              <div className="jinz__chat-main__response-box__buttons">
                <button className="jinz__chat-main__response-box__buttons-edit">
                  Edit Query
                </button>
                <button className="jinz__chat-main__response-box__buttons-query">
                  Run Query
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jinz__chat-input">
        <div className="jinz__chat-input__field">
          <BsStars />
          <input type="text" placeholder="Start typing here" />
          <BiSend />
        </div>
      </div>
    </div>
  );
};

export default Chat;
