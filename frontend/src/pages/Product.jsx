import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/products/productService";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

/*--------*/
import ProductDescriptionBox from "../components/Product/ProductDescriptionBox";
import ProductSelectBox from "../components/Product/ProductSelectBox";
import Gallery from "../components/Product/Gallery";

function Product() {
  /* const { productId } = useParams();
  const dispatch = useDispatch();

  const id = productId.split(".")[1];
  const [product, setProducts] = useState([]);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProduct(id));
    };

    if (isError) {
      toast.error(message);
    }
    fetchProducts();
  }, [isError, isSuccess, message, dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  } */

  return (
    <>
      <div className="box-border flex justify-between">
        <div className="sticky top-16 h-[calc(100%_-_64px)] min-h-[1px] w-full max-w-sm py-44 px-10">
          <ProductDescriptionBox />
        </div>
        <Gallery />
        <div className="sticky top-16 h-[calc(100%_-_64px)] min-h-[1px] w-full max-w-sm py-44 px-10">
          <ProductSelectBox />
        </div>
      </div>
    </>
  );
  /* <>
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

        <button className="standard-button">Add To Cart</button>
      </div>
    </> */
}

export default Product;
