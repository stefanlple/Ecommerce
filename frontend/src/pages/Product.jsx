import React from "react";
import { Link, useParams } from "react-router-dom";

function Product() {
  const product = useParams();
  return <div>{product}</div>;
}

export default Product;
