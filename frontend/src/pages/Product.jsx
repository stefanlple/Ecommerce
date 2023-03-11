import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-redux";
import { getProduct } from "../features/products/productService";
import { decrement, increment } from "../features/products/counterSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Product() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const id = productId.split(".")[1];
  const [product, setProducts] = useState([]);
  //const quantity = useState((state) => state.counter.value);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const fetchProducts = async () => {
    setProducts(await getProduct(id));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    fetchProducts();
  }, [isError, isSuccess, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
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
        {
          <div>
            <button
              className="btn"
              aria-aria-label="Increment"
              onClick={() => dispatch(increment())}
            ></button>
            {<span>{/* {quantity} */}asdf</span>}
            <button
              className="btn"
              aria-aria-label="Decrement"
              onClick={() => dispatch(decrement())}
            ></button>
          </div>
        }
        <button className="btn">Add To Cart</button>
      </div>
    </>
  );
}

export default Product;
