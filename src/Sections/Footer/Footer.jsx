import "./Footer.css";

import React, { useEffect, useState } from "react";

import fb from "../../images/fb.png";
import ig from "../../images/ig.png";
import logo from "../../images/logo-white.png";
import { motion } from "framer-motion";
import tt from "../../images/tt.png";
import yt from "../../images/yt.png";

const Footer = (props) => {
  const { lan } = props;
  const [transition, setTransition] = useState({ opacity: 0 });

  return (
    <motion.footer className="footer-container">
      <div className="logo-foot">
        <img src={logo} alt="" />
      </div>
      <div className="text-footer">
        <p className="dev">
          All rights reserved &copy; {new Date().getFullYear()}
        </p>
        <p className="resume">
          <strong>La vida es corta y el mundo es enorme...</strong>
        </p>
        <div className="creators">
          <p>Vicente Machella</p>
          <p>Freddy Delgado</p>
        </div>
        <p className="dev">
          Design and develoment by{" "}
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/gian-machella-1b9a90187/"
          >
            Gian's Software
          </a>
        </p>
      </div>
      <div className="social-media">
        <a target="_blank" href="https://www.facebook.com/hashtag/criollolife">
          <img src={fb} alt="" />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@criollolife_">
          <img src={tt} alt="" />
        </a>
        <a target="_blank" href="https://www.youtube.com/@criollolife">
          <img src={yt} alt="" />
        </a>
        <a target="_blank" href="https://www.instagram.com/criollolife/">
          <img src={ig} alt="" />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
