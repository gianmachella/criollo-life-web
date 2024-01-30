import "./Products.css";

import ProductCard from "../../Components/ProductCard/ProductCard";
import React from "react";
import product1 from "../../images/mockup (15).png";
import product10 from "../../images/mockup (7).png";
import product11 from "../../images/mockup (37).png";
import product12 from "../../images/mockup (46).png";
import product2 from "../../images/mockup-3.png";
import product3 from "../../images/Person 1.png";
import product4 from "../../images/Person 2 (2).png";
import product5 from "../../images/Front (1).png";
import product6 from "../../images/Left (1).png";
import product7 from "../../images/Back.png";
import product8 from "../../images/Context.png";
import product9 from "../../images/Right.png";

const Products = () => {
  const data = [
    {
      image: product1,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product2,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product3,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product4,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product5,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product6,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product7,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product8,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product9,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product10,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product11,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
    {
      image: product12,
      title: "Torta de Chocolate",
      description: "Torta de chocolate con relleno de chocolate",
      price: "$ 15.000",
    },
  ];
  return (
    <section id="products">
      <h1 className="section-title">Criollo Shop</h1>
      <div className="products-container">
        {data.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
