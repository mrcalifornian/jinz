import React, { useState } from "react";
import { History, Chat, Result } from "./components";
// import axios from "axios";
import "./jinz-chat.css";

const JinzChat = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  let [data, changeData] = useState([
    {
      searchId: "s1",
      search: "New Search",
      date: getCurrentDate(),
      chat: [],
    },
  ]);

  let [activeSearch, setActiveSearch] = useState(data[0].searchId);

  let activeChat = data.find((search) => search.searchId === activeSearch);

  let [activeResult, setActiveResult] = useState("");

  const setActiveR = async (id) => {
    setActiveResult(id);
  };

  let results = activeChat.chat.find((chat) => chat.id === activeResult);

  const addNewSearch = () => {
    let id = `s${data.length + 1}`;
    const newSearch = {
      searchId: id,
      search: "New Search",
      date: getCurrentDate(),
      chat: [],
    };
    changeData([newSearch, ...data]);
    setActiveSearch(id);
    setActiveResult("");
  };

  const addNewChat = async (query) => {
    const id = generateUniqueId();

    const updatedData = (id, profiles, matched) => {
      return data.map((item) => {
        if (item.searchId === activeSearch) {
          if (item.search === "New Search") {
            item.search = query;
          }

          if (
            item.chat.length > 0 &&
            item.chat[item.chat.length - 1].id === id
          ) {
            item.chat.pop();
          }

          let newChat = {
            id: id,
            query: query,
            response: {
              matched: matched,
            },
            profiles: profiles,
          };

          return {
            ...item,
            chat: [...item.chat, newChat],
          };
        }
        return item;
      });
    };

    changeData(updatedData(id, [], undefined));

    try {
      let response = await fetch("https://jinz-backend.onrender.com/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: query,
        }),
      });

      const res = await response.json();
      if (response.status !== 200) {
        const error = new Error(res.message);
        throw error;
      }

      changeData(updatedData(id, res.data, res.data.length));
    } catch (error) {
      changeData(updatedData(id, [], 0));
    }
  };

  return (
    <div className="app">
      <div className="app_history">
        <History
          searches={data}
          active={activeSearch}
          onActiveChanged={setActiveSearch}
          onNewSearch={addNewSearch}
        />
      </div>
      <hr className="second-hr" />
      <div className="app_chat">
        <Chat
          chat={activeChat.chat}
          onResultChange={setActiveR}
          onNewQuery={addNewChat}
        />
      </div>
      <hr />
      <div className="app_result">
        <Result results={results} />
      </div>
    </div>
  );
};

export default JinzChat;
