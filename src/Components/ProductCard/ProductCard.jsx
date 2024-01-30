import "./ProductCard.css";

import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

import amazon from "../../images/Amazon_(company)-Logo.wine.png";

const ProductCard = (props) => {
  const { data } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card-container col-md-4">
        <div className="image-product">
          <img src={data.image} alt="" />
        </div>
        <div className="text-product">
          <p className="product-title">
            {" "}
            <strong>{data.title}</strong>
          </p>
          <p className="product-description">{data.description}</p>
          <div className="footer-card">
            <p className="price">{data.price}</p>
            <button className="buy-button" onClick={handleShow}>
              Ver
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-card-product">
            <img
              className="img-modal-product"
              src={data.image}
              alt=""
              srcset=""
            />
            <div className="text-modal">
              <p className="description-modal">{data.description}</p>
              <p className="price-modal">{data.price}</p>
            </div>
          </div>
        </Modal.Body>
        <p className="msg-modal">
          {" "}
          <em>Compra este producto a través de nuestra tienda en</em>
          <img className="amazon" src={amazon} alt="" />
        </p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductCard;
