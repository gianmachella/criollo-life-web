import "./Nav.css";

import React, { useEffect, useState } from "react";

import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";

const Nav = (props) => {
  const [transition, setTransition] = useState({ opacity: 0 });
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [showMenuList, setShowMenuList] = useState({});

  const handleOpen = () => {
    if (window.screen.width < 600) {
      setWidth(100);
      setHeight(160);
    } else {
      setHeight(60);
      setWidth(500);
    }
    setShowIcon(false);
    setShowMenu(true);
    setShowMenuList({
      opacity: 1,
      transition: { duration: 2.2 },
    });
    setTimeout(() => {}, 1000);
  };

  const handleClose = () => {
    if (window.screen.width < 600) {
      setWidth(40);
      setHeight(40);
    } else {
      setWidth(60);
      setHeight(60);
    }
    setShowMenu(false);
    setShowIcon(true);
    setTimeout(() => {}, 1000);
  };

  useEffect(() => {}, []);

  return (
    <motion.div className="nav-container">
      <div
        style={{
          width: width,
          height: height,
        }}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        id="nav-box"
      >
        {showMenu && (
          <motion.ul
            initial={{
              opacity: 0,
            }}
            animate={showMenuList}
            id="menu-list"
          >
            <motion.li
              initial={{
                opacity: 0,
                transition: { duration: 1 },
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ delay: 0.8 }}
            >
              <a href="/">Home</a>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                transition: { duration: 1 },
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ delay: 0.9 }}
            >
              <a href="/about">About</a>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                transition: { duration: 1 },
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ delay: 1.1 }}
            >
              <a href="#">Shop</a>
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                transition: { duration: 1 },
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ delay: 1.2 }}
            >
              <a href="#">Blog</a>
            </motion.li>
          </motion.ul>
        )}
        {showIcon && (
          <motion.div
            initial={{
              opacity: 0,
              transition: { duration: 1 },
            }}
            animate={{
              opacity: 1,
              transition: { duration: 1 },
            }}
          >
            <FaBars className="icon-menu" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Nav;
