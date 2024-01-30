import "./WelecomePageStyles.css";

import React, { useState } from "react";

import { Image } from "react-bootstrap";
import fjloading from "../../images/fjhome.png";
import loading from "../../images/loading.gif";
import { motion } from "framer-motion";

const WelcomePage = () => {
  const [fadeOut, setFadeOut] = useState({});
  const [height, setHeight] = useState({ position: "fixed" });
  const [fadeIn, setFadeIn] = useState({});
  const [zoom, setZoom] = useState({});
  setTimeout(() => {
    setFadeOut({
      opacity: 0,
      transition: { duration: 1 },
    });
    setFadeIn({
      transition: { duration: 5 },
      marginTop: "100px",
      width: "500px",
      opacity: 1,
    });
    setZoom({
      transition: { duration: 5 },
      marginTop: "30px",
    });
    setHeight({ position: "absolute" });
  }, 3000);
  return (
    <motion.div animate={fadeOut} className="loader-container" style={height}>
      <Image className="fj" src={fjloading} />
      <Image className="loading" src={loading} />
    </motion.div>
  );
};

export default WelcomePage;
