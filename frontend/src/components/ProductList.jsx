import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return !products || products.length === 0 ? (
    <h1>No products</h1>
  ) : (
    <div className="flex flex-wrap justify-center">
      {products.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {products.map((product) => (
            <div
              className="col-span-1 border border-b-[0.2px] border-black p-6"
              key={product._id}
            >
              <Link
                to={`/product/${product._id}`}
                className="plp-product"
                data-product-id={`${product._id}`}
              >
                <div className="teaser-image h-80 w-80 border border-b-2 border-black">
                  <img
                    src={"../images/" + product.imageUrls[0]}
                    className="h-full w-full object-cover"
                    alt="None"
                  />
                </div>
                <div className="short-desc plp-product__details">
                  <h3 className="product_title">
                    <h1>{product.name}</h1>
                  </h3>
                  <div className="price">
                    <span>{product.price.toFixed(2)} €</span>
                  </div>
                  <div className="">{product.color}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
