import "./HomeStyle.css";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Footer from "../../Sections/Footer/Footer";
import Nav from "../../Sections/Nav/Nav";
import cover from "../../images/cover.png";
import logo from "../../images/logo-black.png";

const Home = () => {
  const [fadeIn, setFadeIn] = useState({});
  const [fadeInLogo, setFadeInLogo] = useState({});
  const [lan, setLan] = useState("es");
  const [transition, setTransition] = useState({ opacity: 0 });

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  setTimeout(() => {
    setFadeInLogo({
      transition: { duration: 2 },
      top: "3%",
      opacity: 1,
    });
  }, 1000);

  setTimeout(() => {
    setFadeIn({
      transition: { duration: 2 },
      marginTop: "100px",
      opacity: 1,
    });
  }, 1000);

  useEffect(() => {
    setTransition({
      opacity: 1,
      transition: { duration: 3 },
    });
  }, []);

  return (
    <div className="home-container-general">
      <Nav />
      <motion.div className="home-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 3 } }}
          className="cover-container"
        >
          <motion.div className="cover" src={cover} />
          <motion.img
            initial={{
              top: "50%",
              transition: { duration: 2 },
            }}
            animate={fadeInLogo}
            src={logo}
            alt="logo"
            id="logo"
          />
        </motion.div>
      </motion.div>

      <motion.div id="textblock">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            transition: { duration: 1 },
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
          }}
          id="textblock-container"
        >
          <h1 id="textblock-title">Criollo Life</h1>
          <p id="textblock-content">
            Un proyecto de vida que nació en nuestra tierra de gracia natal
            “Venezuela”. Con una razón de ser, conocer y disfrutar por tierra,
            cada rincón de nuestro hermoso país. Y esa pasión llevaría por
            nombre en ese entonces CRIOLLOLIFE.
            <br />
            <br />
            Hoy, nos encontramos en tierras de “Norte América” con la misma
            visión clara de recorrer cada espacio que nos ofrece este inmenso
            país, vivir la vida intensamente en modo OVERLAND y OFFROAD, estar
            en contacto con la naturaleza que nos llena de fuerza, disfrutar el
            día día de nuestros viajes y expresárselos a ustedes a través de una
            cámara.
            <br />
            <br />
            CRIOLLOLIFE estará en tus redes sociales para mostrarte el mejor
            estilo OVERLAND Y OFFROAD en cada travesía. Si eres amante de este
            estilo de vida , quédate con nosotros , seremos tu brújula para
            guiarte y mostrarte la magia de este país, ser tu motivación para
            que te atrevas a espandir tus idea de viajes con innovación,
            optimismo, esfuerzo que solo conseguirás con este equipo , tu equipo
            CRIOLLOLIFE
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
