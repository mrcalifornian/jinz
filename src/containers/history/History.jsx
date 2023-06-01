import React from "react";
import {
  BiPencil,
  BiClipboard,
  BiTrash,
  BiSearchAlt2,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import profile from "../../assets/profile.jpg";
import "./history.css";

const History = () => {
  const elements = () => {
    let elementsList = [];

    for (let index = 0; index < 5; index++) {
      const element = (
        <div className="jinz__history-history_box ">
          <h4>Search {index + 1}</h4>
          <p>Created on May 29</p>
          <div className="jinz__history-history_box-buttons">
            <button className="pencil">
              <BiPencil />
            </button>
            <button className="clipboard">
              <BiClipboard />
            </button>
            <button className="trash">
              <BiTrash />
            </button>
          </div>
        </div>
      );

      elementsList.push(element);
    }

    return elementsList;
  };

  return (
    <div className="jinz__history">
      <div className="jinz__history-search">
        <button type="button">
          <p>Launch New Search</p>
          <BiSearchAlt2 />
        </button>
      </div>
      <div className="jinz__history-history">
        <div className="jinz__history-history_box active-search">
          <h4>LA Java Engineer</h4>
          <p>Created on May 29</p>
          <div className="jinz__history-history_box-buttons active">
            <button className="pencil">
              <BiPencil />
            </button>
            <button className="clipboard">
              <BiClipboard />
            </button>
            <button className="trash">
              <BiTrash />
            </button>
          </div>
        </div>
        {elements()}
      </div>
      <div className="jinz__history-info">
        <div className="jinz__history-info__profile">
          <img src={profile} alt="profile" />
          <h3>Nodirbek</h3>
          <button>
            <BiDotsVerticalRounded />
          </button>
        </div>
        <button className="jinz__history-info__button">
          Upgrade to Pro 💎
        </button>
        <button className="jinz__history-info__button">Contact Support</button>
      </div>
    </div>
  );
};

export default History;
