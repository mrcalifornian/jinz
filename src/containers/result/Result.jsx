import React from "react";
import jinzBlack from "../../assets/jinz-black.png";
import { BiSearchAlt2 } from "react-icons/bi";
import "./result.css";

const Result = () => {
  return (
    <div className="jinz__result">
      {/* <div className="jinz__result-empty">
        <img src={jinzBlack} alt="jinz" />
        <p>Profiles will appear here</p>
      </div> */}
      <div className="jinz__result-results">
        <div className="jinz__result-results__input">
          <p>
            <BiSearchAlt2 />
          </p>
          <input
            type="text"
            placeholder="Search by name, city, occupation..."
          />
        </div>
        <div className="jinz__result-results__header">
          <p>Full Name</p>
          <p>Current Role</p>
        </div>
        <div className="jinz__result-results__profile">
          <div className="jinz__result-results__profile-name">
            <p>Michael Smith</p>
          </div>
          <div className="jinz__result-results__profile-data">
            <img src={jinzBlack} alt="jinz" />
            <div className="jinz__result-results__profile-data__text">
              <h5>Jinz</h5>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="jinz__result-results__profile">
          <div className="jinz__result-results__profile-name">
            <p>Michael Smith</p>
          </div>
          <div className="jinz__result-results__profile-data">
            <img src={jinzBlack} alt="jinz" />
            <div className="jinz__result-results__profile-data__text">
              <h5>Jinz</h5>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
