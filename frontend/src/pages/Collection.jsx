import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-redux";
import { getAllProducts } from "../features/products/productService";
import { useDispatch, useNavigate } from "react-redux";
function Collection() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    setProducts(await getAllProducts());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        {products.length > 0 && (
          <ul>
            {products.map((products) => (
              <>
                <li>
                  <a
                    href={`/${products.name}.${products._id}`}
                    className="plp-product"
                    data-product-id={`${products._id}`}
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
