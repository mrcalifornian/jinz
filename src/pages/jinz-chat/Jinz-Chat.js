import React from "react";
import { History, Chat, Result } from "../../containers";
import "./jinz-chat.css";

const JinzChat = () => {
  return (
    <div className="app">
      <div className="app_history">
        <History />
      </div>
      <hr />
      <div className="app_chat">
        <Chat />
      </div>
      <hr />
      <div className="app_result">
        <Result />
      </div>
    </div>
  );
};

export default JinzChat;
