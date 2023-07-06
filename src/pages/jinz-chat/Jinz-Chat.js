import React, { useState, useEffect } from "react";
import { History, Chat } from "./components";
import "./jinz-chat.css";
import ResPro from "./components/respro/ResPro";

const JinzChat = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  // All data
  let [data, changeData] = useState([
    {
      searchId: generateUniqueId(),
      search: "New Search",
      date: getCurrentDate(),
      chat: [],
    },
  ]);

  // Search results currently showing
  let [activeSearch, setActiveSearch] = useState(data[0].searchId);

  let activeChat = data.find((search) => search.searchId === activeSearch);

  let [activeResult, setActiveResult] = useState("");

  // Logic for profile vs results window
  const [page, setPage] = useState(0);
  const [activeProfile, setActiveProfile] = useState("");

  const changeToProfile = (data) => {
    setActiveProfile(data);
    setPage(1);
  };

  const changeToResult = () => {
    setActiveProfile("");
    setPage(0);
  };

  // Results stored on local storage
  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));

    if (dataFromLocalStorage) {
      changeData((data) => [...data, ...dataFromLocalStorage]);
      console.log(dataFromLocalStorage);
    }
  }, []);

  const setActiveR = async (id) => {
    setActiveResult(id);
    changeToResult();
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
    let updatedDataWithNewChat;
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

      updatedDataWithNewChat = updatedData(id, res.data, res.data.length);

      changeData(updatedDataWithNewChat);
    } catch (error) {
      updatedDataWithNewChat = updatedData(id, [], 0);
    }

    // update all data
    changeData(updatedDataWithNewChat);
    localStorage.setItem("data", JSON.stringify(updatedDataWithNewChat));
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
        <ResPro
          results={results}
          page={page}
          activeProfile={activeProfile}
          changeToProfile={changeToProfile}
          changeToResult={changeToResult}
        />
      </div>
    </div>
  );
};

export default JinzChat;
