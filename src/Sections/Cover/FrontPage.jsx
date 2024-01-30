import "./FrontPage.css";

import React from "react";
import back from "../../images/sky.png";
import cover from "../../images/cover.png";
import logo from "../../images/logo-black.png";

const FrontPage = () => {
  return (
    <section className="front-page-container">
      <img id="back" src={back} alt="" />
      <div className="logo-cover">
        <img id="logo" src={logo} alt="" />
      </div>
      <img id="front" src={cover} alt="" />
    </section>
  );
};

export default FrontPage;
