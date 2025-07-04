import React from "react";
import "./Brand.css";
import { google, atlassian, dropbox, slack, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
