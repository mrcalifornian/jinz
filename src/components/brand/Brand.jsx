import React from "react";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import slack from "../../assets/slack.png";
import "./brand.css";

// const brandsList = [atlassian, google, dropbox, slack,shopify]

// const brands = () =>{
//   for (let i = 0; i<5; i++){

//   }
//   return
// }

const Brand = () => {
  return (
    <div className="jinz__brands section_padding">
      <p>Backed by leading venture firms and angel investors.</p>
      <div className="jinz__brands-images">
        <div>
          <img src={dropbox} alt="dropbox" />
        </div>
        <div>
          <img src={atlassian} alt="atlassian" />
        </div>
        <div>
          <img src={slack} alt="slack" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
