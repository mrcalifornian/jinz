import React from "react";
import jinzBlack from "../../../../assets/jinz-black.png";
import linkedIn from "../../../../assets/in.png";
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
                <div className="jinz__result-results__profile" key={profile.id}>
                  <div className="jinz__result-results__profile-name">
                    <p>{profile.full_name}</p>
                  </div>
                  <div className="jinz__result-results__profile-data">
                    <a
                      href={`https://${profile.linkedin_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedIn} alt="LinkedIn" />
                    </a>
                    <div className="jinz__result-results__profile-data__text">
                      <h5>{profile.job_company_name}</h5>
                      <p>{profile.job_title}</p>
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
