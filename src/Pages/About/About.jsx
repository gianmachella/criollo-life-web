import "./AboutStyles.css";

import Footer from "../../Sections/Footer/Footer";
import Nav from "../../Sections/Nav/Nav";
import React from "react";
import StackedPhotos from "../../Components/StackedPhotos/StackedPhotos";
import coverAbout from "../../images/about-cover.jpg";
import logo from "../../images/logo-black.png";

const About = () => {
  return (
    <>
      <Nav />
      <div className="about-container">
        <img className="logo-about" src={logo} alt="" />
      </div>
      <div className=" text-about-page">
        <div className="row text-container-about">
          <h2>Criollo Life</h2>
          <p id="b-gallery" className="col-md-7">
            CRIOLLOLIFE, un proyecto de vida que vio sus primeros destellos en
            la tierra de gracia natal, Venezuela, representa una pasión profunda
            por la exploración y el disfrute de cada rincón de este hermoso
            país. Su razón de ser se tejió con el propósito de conocer la
            riqueza de la tierra que los vio nacer, fusionando el amor por la
            naturaleza, la aventura y la conexión con la cultura criolla. Así
            nació, en esos primeros momentos, bajo el nombre de CRIOLLOLIFE.
          </p>
          <div className="col-md-5 gallery">
            <StackedPhotos />
          </div>
          <p id="a-gallery">
            Hoy, los horizontes de este proyecto se expanden hasta las tierras
            de Norte América, sin perder la visión clara que le dio origen. La
            meta persiste: recorrer cada espacio que este inmenso país ofrece,
            sumergirse en la vida intensamente en modo OVERLAND y OFFROAD. El
            contacto directo con la naturaleza se convierte en una fuente
            inagotable de fuerza y energía, mientras cada día de viaje se
            transforma en una oportunidad para capturar la esencia de la
            experiencia y compartirla con el mundo a través de una cámara.
          </p>
          <p>
            CRIOLLOLIFE se erige como un faro en las redes sociales, dispuesto a
            mostrarte el mejor estilo OVERLAND y OFFROAD en cada travesía. Si te
            consideras amante de este modo de vida, la invitación es clara y
            resonante: quédate con nosotros. Este proyecto asume el rol de
            brújula, comprometido a guiarte y revelarte la magia que se
            encuentra en cada rincón de este vasto país. Más que un simple
            observador, CRIOLLOLIFE se propone ser tu motivación, alentándote a
            expandir tus ideas de viajes con innovación, optimismo y esfuerzo.
          </p>
          <p>
            A través de la lente de CRIOLLOLIFE, los paisajes se convierten en
            poesía visual, y las travesías se transforman en relatos que
            despiertan el espíritu aventurero en cada espectador. La presencia
            constante en las redes sociales no es solo un medio para compartir,
            sino una ventana abierta a un estilo de vida que invita a explorar,
            a desafiar los límites y a abrazar la diversidad del entorno.
          </p>
          <p>
            Para quienes se sumergen en el universo de CRIOLLOLIFE, se ofrece no
            solo un viaje físico, sino una invitación a explorar nuevas
            perspectivas y a abrazar la autenticidad de cada experiencia. Este
            equipo no solo documenta momentos, sino que actúa como catalizador
            de emociones, inspirando a aquellos que los siguen a atreverse a
            más, a buscar la innovación en cada recorrido, a mantener el
            optimismo incluso en los desafíos del camino y a invertir esfuerzo
            para cosechar recompensas únicas.
          </p>
          <p>
            En resumen, CRIOLLOLIFE no es simplemente un proyecto de vida; es
            una narrativa en constante evolución, una odisea que invita a todos
            a unirse y a ser parte de un viaje que va más allá de las fronteras
            geográficas. A través de sus ojos, descubrimos la magia de la
            exploración, la conexión con la naturaleza y la transformación que
            ocurre cuando la pasión se convierte en un estilo de vida arraigado
            en la esencia misma de cada aventurero.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
