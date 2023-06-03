import React from "react";
import jinzBlack from "../../../../assets/jinz-black.png";
import { BiSearchAlt2 } from "react-icons/bi";
import "./result.css";

const Result = (props) => {
  let profiles = props.results;
  return (
    <div className="jinz__result" id="result">
      {profiles === undefined || profiles.profiles.length === 0 ? (
        <div className="jinz__result-empty">
          <img src={jinzBlack} alt="jinz" />
          <p>Profiles will appear here</p>
        </div>
      ) : (
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
          <div className="jinz__result-results__all">
            {profiles.profiles.map((profile) => {
              return (
                <div
                  className="jinz__result-results__profile"
                  key={profile.fullName}
                >
                  <div className="jinz__result-results__profile-name">
                    <p>{profile.fullName}</p>
                  </div>
                  <div className="jinz__result-results__profile-data">
                    <img src={profile.companyLogo} alt={profile.companyName} />
                    <div className="jinz__result-results__profile-data__text">
                      <h5>{profile.companyName}</h5>
                      <p>{profile.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
