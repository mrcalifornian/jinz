import React, { useState } from "react";
import { History, Chat, Result } from "./components";
import "./jinz-chat.css";

const JinzChat = () => {
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
    setTimeout(() => {
      setActiveResult(id);
    }, 200);
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
    let profs = genRandomProfiles();
    const updatedData = data.map((item) => {
      if (item.searchId === activeSearch) {
        if (item.search === "New Search") {
          item.search = query;
        }
        const newChat = {
          id: generateUniqueId(),
          query: query,
          response: {
            matched: profs.length,
          },
          profiles: profs.sort(() => Math.random() - 0.5),
        };
        return {
          ...item,
          chat: [...item.chat, newChat],
        };
      }
      return item;
    });
    setTimeout(() => {
      changeData(updatedData);
    }, 300);
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

const profiles = [
  {
    fullName: "Rexon Shrestha",
    companyName: "Tesla",
    companyLogo: "https://logo.clearbit.com/tesla.com",
    title: "Software Engineering Manager",
  },
  {
    fullName: "Swaraj Chhatre",
    companyName: "Walmart Global Tech",
    companyLogo: "https://logo.clearbit.com/null",
    title: "Senior Engineering Manager",
  },
  {
    fullName: "Miles Hutson",
    companyName: "Waymo",
    companyLogo: "https://logo.clearbit.com/waymo.com",
    title: "Senior Software Engineer",
  },
  {
    fullName: "Adam Raudonis",
    companyName: "Tesla",
    companyLogo: "https://logo.clearbit.com/tesla.com",
    title: "Senior Software Engineer",
  },
  {
    fullName: "Konrad Listwan",
    companyName: "Cruise Automation, Inc.",
    companyLogo: "https://logo.clearbit.com/getcruise.com",
    title: "Senior Software Engineer",
  },
  {
    fullName: "Amy Hua",
    companyName: "Falconx",
    companyLogo: "https://logo.clearbit.com/falconx.io",
    title: "Senior Software Engineer",
  },
  {
    fullName: "Benson Yang",
    companyName: "Google",
    companyLogo: "https://logo.clearbit.com/google.com",
    title: "Software Engineer",
  },
  {
    fullName: "John Doe",
    companyName: "Microsoft",
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    title: "Senior Software Engineer",
  },
  {
    fullName: "Jane Smith",
    companyName: "Amazon",
    companyLogo: "https://logo.clearbit.com/amazon.com",
    title: "Product Manager",
  },
  {
    fullName: "Michael Johnson",
    companyName: "Apple",
    companyLogo: "https://logo.clearbit.com/apple.com",
    title: "Software Engineer",
  },
];

const getCurrentDate = () => {
  const date = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 9);
};

const genRandomProfiles = () => {
  let start = parseInt((Math.random() * 6).toString());
  let end = parseInt((Math.random() * 6 + 5).toString());
  return profiles.slice(start, end);
};
