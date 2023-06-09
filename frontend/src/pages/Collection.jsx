import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  getProductsByCategory,
} from "../features/products/productService";

import { toast } from "react-toastify";

import ProductList from "../components/ProductList";
import Spinner from "../components/Spinner";

function Collection() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = category
        ? await getProductsByCategory(category)
        : await getAllProducts();

      setProducts(products);
    };

    fetchProducts();
  }, [category]);

  return <ProductList products={products} />;
}

export default Collection;
