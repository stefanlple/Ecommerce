import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../features/products/productService";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

function Collection() {
  const [products, setProducts] = useState([]);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    setProducts(await getAllProducts());
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
      <div>
        {products.length > 0 && (
          <ul>
            {products.map((products) => (
              <>
                <li>
                  <a
                    href={"#"}
                    className="plp-product"
                    data-product-id={`${products._id}`}
                    onclick="navigate(`/${products.name}.${products._id}`;return false;"
                  >
                    <div className="teaser-image">
                      <img
                        src="https://pbs.twimg.com/profile_images/1564162499888517121/2Pn8AyNV_400x400.png"
                        alt="Fleece"
                      ></img>
                    </div>
                    <div className="short-desc plp-product__details">
                      <h3 className="product_title">
                        <h1>{products.name}</h1>
                      </h3>
                      <div className="price">
                        <span>{products.price}</span>
                      </div>
                      <div className="">{products.color}</div>
                    </div>
                  </a>
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Collection;
