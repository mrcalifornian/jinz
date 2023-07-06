import React from "react";
import { stringPrettify } from "../../../utils/strings";
import linkedin from "../../../../assets/in.png";

import "./profile.css";

const Profile = (props) => {
  const userData = props.profile;
  return (
    <div className="jinz__profile">
      <div className="jinz__profile-header">
        <button
          onClick={() => {
            props.goBack();
          }}
          className="back"
        >
          {"<"}
        </button>
        <h3>
          {`${stringPrettify(userData.first_name)} ${stringPrettify(
            userData.middle_initial || ""
          )} ${stringPrettify(userData.last_name)}`}
        </h3>
        <a
          href={`https://${userData.linkedin_url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>

      <div className="jinz__profile-job">
        <p className="jinz__profile-text-main">
          {`${stringPrettify(userData.job_title)} at `}
          <a
            href={`https://${userData.job_company_website} `}
            target="_blank"
            rel="noopener noreferrer"
          >
            {stringPrettify(userData.job_company_name)}
          </a>
        </p>
        <p className="jinz__profile-text-secondary">
          {stringPrettify(userData.job_company_location_name)}
        </p>
      </div>

      <div>
        <p className="jinz__profile-text-main">
          Email:{"\t"}
          <a href={`mailto:${userData.recommended_personal_email}`}>
            {userData.recommended_personal_email}
          </a>
        </p>
      </div>

      <div className="jinz__profile-experience">
        <p className="jinz__profile-text-main">Experiences:</p>
        <hr />
        <div className="jinz__profile-experience__companies">
          {userData.experience.map((company) => {
            return (
              <div
                className="jinz__profile-experience-company"
                key={company.company}
              >
                <p className="jinz__profile-text-main">
                  {`${stringPrettify(company.title.name)}`}
                  {" - "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https:${company.company.website}`}
                  >
                    {stringPrettify(company.company.name)}
                  </a>
                </p>
                <p className="jinz__profile-text-secondary">{`${
                  company.start_date || " "
                }  ${company.end_date ? "to " + company.end_date : ""}`}</p>
                <p className="jinz__profile-text-secondary">
                  {company.company.location?.name
                    ? stringPrettify(company.company.location?.name)
                    : ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="jinz__profile-education">
        <p className="jinz__profile-text-main">Education:</p>
        <hr />
        <div className="jinz__profile-education__all">
          {userData.education.map((school) => {
            return (
              <div
                className="jinz__profile-education__school"
                key={school.school.id}
              >
                <p className="jinz__profile-text-main">
                  {stringPrettify(school.school.name)}
                </p>
                <p className="jinz__profile-text-secondary">{`${
                  school.start_date || ""
                }  ${school.end_date ? "to " + school.end_date : ""}`}</p>
                <p className="jinz__profile-text-secondary">
                  {school.school.location?.name
                    ? stringPrettify(school.school.location?.name)
                    : ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
