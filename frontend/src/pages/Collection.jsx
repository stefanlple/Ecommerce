import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllProducts,
  getProductsByCategory,
} from "../features/products/productService";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import ProductList from "../components/ProductList";

function Collection() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = category
        ? await getProductsByCategory(category)
        : await getAllProducts();

      setProducts(products);
    };

    if (isError) {
      toast.error(message);
    }

    fetchProducts();
  }, [isError, isSuccess, message, dispatch, category]);

  if (isLoading) {
    return <Spinner />;
  }
  return <ProductList products={products} />;
}

export default Collection;
