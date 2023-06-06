import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchProductbyName } from "../features/products/productService";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Search() {
  const [products, setProducts] = useState([]);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");

    console.log(name);
    const fetchProducts = async () => {
      setProducts(await searchProductbyName(name));
    };

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
      <div className="flex flex-wrap justify-center">
        {products.length > 0 && (
          <ul className="flex gap-2">
            {products.map((product) => (
              <li
                className="border border-b-[0.2px] border-black p-6"
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
                    ></img>
                  </div>
                  <div className="short-desc plp-product__details">
                    <h3 className="product_title">
                      <h1>{product.name}</h1>
                    </h3>
                    <div className="price">
                      <span>{product.price} €</span>
                    </div>
                    <div className="">{product.color}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Search;
