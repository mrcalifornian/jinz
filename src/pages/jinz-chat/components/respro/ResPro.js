import React from "react";
import Result from "../result/Result";
import Profile from "../profile/Profile";

const ResPro = (props) => {
  return props.page === 0 ? (
    <Result results={props.results} selectProfile={props.changeToProfile} />
  ) : (
    <Profile profile={props.activeProfile} goBack={props.changeToResult} />
  );
};

export default ResPro;
