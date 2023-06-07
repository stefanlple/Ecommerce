import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchProductbyName } from "../features/products/productService";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

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
  return <ProductList products={products} />;
}

export default Search;
