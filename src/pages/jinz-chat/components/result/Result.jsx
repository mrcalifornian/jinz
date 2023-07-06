import React from "react";
import jinzBlack from "../../../../assets/jinz-black.png";
import { BiSearchAlt2 } from "react-icons/bi";
import "./result.css";
import { stringPrettify } from "../../../utils/strings";

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
                  key={profile.id}
                  onClick={() => {
                    props.selectProfile(profile);
                  }}
                >
                  <div className="jinz__result-results__profile-name">
                    <p>{stringPrettify(profile.full_name)}</p>
                  </div>
                  <div className="jinz__result-results__profile-data">
                    <div className="jinz__result-results__profile-data__text">
                      <h5>{stringPrettify(profile.job_company_name) || ""}</h5>
                      <p>{stringPrettify(profile.job_title) || ""}</p>
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
