import React, { useState, useRef, useEffect } from "react";
import { BiSend } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import profile from "../../../../assets/profile.jpg";
import jinz from "../../../../assets/jinz.png";
import "./chat.css";

const Chat = (props) => {
  const containerRef = useRef(null);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);

  useEffect(() => {
    if (shouldScrollToBottom) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  const handleItemClick = () => {
    setShouldScrollToBottom(false);
  };

  const readyQueries = [
    "Senior software engineer with 5+ years of experience",
    "Middle NodeJS engineer in Kyoto",
    "Senior Frontend Engineer ReactJS",
  ];

  let chat = props.chat;

  let [newQuery, setNewQuery] = useState("");

  const changeQuery = (event) => {
    setNewQuery(event.target.value);
  };

  const sendNewQuery = (event) => {
    event.preventDefault();

    setNewQuery("");
    props.onNewQuery(newQuery);
    setShouldScrollToBottom(true);
  };

  return (
    <div className="jinz__chat ">
      <div className="jinz__chat-header">
        <h3>Welcome to JinzAI</h3>
      </div>
      <div className="jinz__chat-main" ref={containerRef}>
        {/* Welcome text */}
        {chat.length === 0 ? (
          <div className="jinz__chat-main__welcome">
            <img src={jinz} alt="jinz" />
            <p>
              Hey, I'm JinzAI — your people search assistant. I read through
              billions of profile data points across the internet to help you
              find and reach the right people for every professional need 🚀{" "}
              <br />
              <br />
              Let's start by narrowing down a demographic to focus on. Who are
              you looking for today? <br />
              <br /> Enter your own query in the text box, or try a sample query
              for free (no credits).
              <br />
              {readyQueries.map((q) => {
                return (
                  <button
                    className="prompt-example"
                    onClick={() => {
                      props.onNewQuery(q);
                    }}
                    key={q}
                  >
                    {q}
                  </button>
                );
              })}
            </p>
          </div>
        ) : (
          chat.map((chat) => {
            return (
              <div key={chat.id}>
                <div className="jinz__chat-main__query">
                  <img src={profile} alt="user" />
                  <p>{chat.query}</p>
                </div>
                <div className="jinz__chat-main__response">
                  <img src={jinz} alt="user" />
                  {chat.response.matched === undefined ? (
                    <div>
                      <p>Generating response...</p>
                    </div>
                  ) : chat.response.matched >= 1 ? (
                    <div>
                      <p>
                        Success! <br /> <br /> I found {chat.response.matched}{" "}
                        matching{" "}
                        {chat.response.matched === 1 ? "profile" : "profiles"}{" "}
                        for your search!
                        <br /> <br /> They will appear on the left side of the
                        screen once you press the run query button!
                      </p>
                      <div className="jinz__chat-main__response-box__buttons">
                        <button
                          className="jinz__chat-main__response-box__buttons-query"
                          onClick={() => {
                            props.onResultChange(chat.id);
                            handleItemClick();
                          }}
                        >
                          <a href="#result">Run Query</a>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p>
                      No matching profile found for your search. Please try
                      again using different keywords
                    </p>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Input field for new query */}
      <div className="jinz__chat-input">
        <form className="jinz__chat-input__field" onSubmit={sendNewQuery}>
          <BsStars />
          <input
            type="text"
            value={newQuery}
            onChange={changeQuery}
            placeholder="Start typing here"
          />
          <button
            type="submit"
            onSubmit={() => {
              props.onNewQuery(newQuery);
              setNewQuery("");
            }}
          >
            <BiSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
