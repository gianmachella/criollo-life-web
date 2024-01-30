import "./AnimateRoute.css";

import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import About from "../../Pages/About/About";
import { AnimatePresence } from "framer-motion";
import Footer from "../../Sections/Footer/Footer";
import Home from "../../Pages/Home/Home";
import WelcomePage from "../../Pages/WelcomePage/WelcomePage";

const AnimateRoute = () => {
  const [componentHome, setComponentHome] = useState(<WelcomePage />);
  const [componentAbout, setComponentAbout] = useState(<WelcomePage />);
  const location = useLocation();

  setTimeout(() => {
    setComponentHome(<Home />);
    setComponentAbout(<About />);
  }, 3000);
  return (
    <AnimatePresence>
      <div className="container-page">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={componentHome} />
          <Route path="/about" element={componentAbout} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default AnimateRoute;
