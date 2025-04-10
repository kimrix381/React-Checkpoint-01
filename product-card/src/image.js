// src/Image.js
import React from "react";
import product from "./product.js";

function Image() {
  return (
    <img src={product.image} alt={product.name} className="img-fluid rounded" />
  );
}

export default Image;
