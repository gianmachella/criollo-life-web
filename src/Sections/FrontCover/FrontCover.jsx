import "./FrontCover.css";

import { Image } from "react-bootstrap";
import React from "react";
import frontImage from "../../images/cover.png";
import logo from "../../images/logo-black.png";
import sky from "../../images/sky.png";

const FrontCover = () => {
  return (
    <div className="position-relative d-flex justify-content-center">
      <Image className="position-absolute" src={sky} fluid />
      <Image className="position-fixed logo-cover" src={logo} fluid />
      <Image className="position-absolute" src={frontImage} fluid />
    </div>
  );
};

export default FrontCover;
