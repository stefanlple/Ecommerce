import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productService";

function Collection() {
  const [products, setProducts] = useState([]);

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
                    href="/collection"
                    className="plp-product"
                    data-product-id="{products._id}"
                  >
                    <div class="teaser-image">
                      <img
                        src="https://pbs.twimg.com/profile_images/1564162499888517121/2Pn8AyNV_400x400.png"
                        alt="Fleece Long-sleeve Tee"
                      ></img>
                    </div>
                    <div class="short-desc plp-product__details">
                      <h3 class="product_title">
                        <h1>{products.name}</h1>
                      </h3>
                      <div class="price">
                        <span>{products.price}</span>
                      </div>
                      <div class="">{products.color}</div>
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
