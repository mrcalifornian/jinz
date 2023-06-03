import React from "react";
import {
  BiPencil,
  BiClipboard,
  BiTrash,
  BiSearchAlt2,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import profile from "../../../../assets/profile.jpg";
import "./history.css";

const History = (props) => {
  return (
    <div className="jinz__history">
      {/* Showing the search button */}
      <div className="jinz__history-search">
        <button type="button" onClick={props.onNewSearch}>
          <p>Launch New Search</p>
          <BiSearchAlt2 />
        </button>
      </div>

      {/* Showing the actual history */}
      <div className="jinz__history-history">
        {props.searches.map((search) => {
          return (
            <div
              className={`jinz__history-history_box ${
                props.active === search.searchId ? "active-search" : ""
              } `}
              onClick={() => {
                props.onActiveChanged(search.searchId);
              }}
              key={search.searchId}
            >
              <h4>{search.search}</h4>
              <p>Created on {search.date}</p>
              <div
                className={`jinz__history-history_box-buttons ${
                  props.active === search.searchId ? "active" : ""
                }`}
              >
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
        })}
      </div>

      {/* Showing the profile info */}
      <div className="jinz__history-info">
        <div className="jinz__history-info__profile">
          <img src={profile} alt="profile" />
          <h3>User</h3>
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
