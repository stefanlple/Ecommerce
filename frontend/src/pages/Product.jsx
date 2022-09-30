import React from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../features/products/productService";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
function Product() {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);

  const id = productId.split(".")[1];

  const fetchProduct = async () => {
    setProduct(await getProduct(id));
    console.log(product);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <h1>{id}</h1>
      <div>
        <a className="plp-product" data-product-id={`${product._id}`}>
          <div className="teaser-image">
            <img
              src="https://pbs.twimg.com/profile_images/1564162499888517121/2Pn8AyNV_400x400.png"
              alt="Fleece"
            ></img>
          </div>
          <div className="short-desc plp-product__details">
            <h3 className="product_title">
              <h1>{product.name}</h1>
            </h3>
            <div className="price">
              <span>{product.price}</span>
            </div>
            <div className="">{product.color}</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Product;
