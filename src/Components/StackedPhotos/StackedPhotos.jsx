import "./StackedPhotos.css";

import { Carousel, Modal } from "react-bootstrap";
import React, { useState } from "react";

import inicio1 from "../../images/inicio1.jpg";
import inicio2 from "../../images/inicio2.jpg";
import inicio3 from "../../images/inicio3.jpg";
import inicio4 from "../../images/inicio4.jpg";
import inicio5 from "../../images/inicio5.jpg";
import inicio6 from "../../images/inicio6.jpg";
import inicio7 from "../../images/about.jpg";
import inicio8 from "../../images/about-cover.jpg";

const StackedPhotos = () => {
  const [rotation, setRotation] = useState(-70);
  const [width, setWidth] = useState(200);
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setRotation(rotation + 15);
    setWidth(280);
  };
  const handleMouseOut = () => {
    setRotation(rotation - 15);
    setWidth(200);
  };
  return (
    <>
      <div
        onMouseLeave={handleMouseOut}
        onMouseEnter={handleMouseEnter}
        className="photos-container"
        onClick={() => setShow(true)}
      >
        <img
          style={{
            transform: `rotate(${rotation + 10}deg)`,
            width: `${width}px`,
            transition: "2s",
          }}
          className="inicio1"
          src={inicio1}
          alt=""
        />
        <img
          style={{
            transform: `rotate(${rotation + 200}deg)`,
            width: `${width}px`,
            transition: "1.8s",
          }}
          className="inicio2"
          src={inicio2}
          alt=""
        />
        <img
          style={{
            transform: `rotate(${rotation + 30}deg)`,
            width: `${width}px`,
            transition: "1.5s",
          }}
          className="inicio3"
          src={inicio3}
          alt=""
        />
        <img
          style={{
            transform: `rotate(${rotation + 40}deg)`,
            width: `${width}px`,
            transition: "1.2s",
          }}
          className="inicio4"
          src={inicio4}
          alt=""
        />
        <img
          style={{
            transform: `rotate(${rotation + 50}deg)`,
            width: `${width}px`,
            transition: ".8s",
          }}
          className="inicio5"
          src={inicio5}
          alt=""
        />
        <img
          style={{
            transform: `rotate(${rotation + 60}deg)`,
            width: `${width}px`,
            transition: ".5s",
          }}
          className="inicio6"
          src={inicio6}
          alt=""
          dataTarget="#carouselExample"
        />
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel fade>
            <Carousel.Item>
              <img className="image-gallery" src={inicio1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-gallery" src={inicio2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-gallery" src={inicio3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-gallery" src={inicio4} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-gallery" src={inicio5} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-gallery" src={inicio6} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-gallery" src={inicio7} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-gallery" src={inicio8} alt="" />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StackedPhotos;
