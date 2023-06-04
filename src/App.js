import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import JinzChat from "./pages/jinz-chat/Jinz-Chat";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<JinzChat />} />
      </Routes>
    </div>
  );
};

export default App;
