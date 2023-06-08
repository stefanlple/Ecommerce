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

import axios from "axios";

function Product() {
  /* const [product, setProduct] = useState({});

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    console.log("fetching");
    const fetchProducts = async () => {
      const response = await getProduct(productId);

      setProduct(response.data);
    };

    if (isError) {
      toast.error(message);
    }

    fetchProducts();
  }, [isError, message, productId]);

  if (isLoading) {
    return <Spinner />;
  } */
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await getProduct(productId);
        setProduct(response);
      };

      fetchProducts();
    } catch (error) {
      toast.error(error);
    }
  }, [productId]);

  return (
    Object.keys(product).length !== 0 && (
      <>
        <div className="box-border flex justify-between">
          <div className="sticky top-16 h-[calc(100%_-_64px)] min-h-[1px] w-full max-w-sm py-44 px-10">
            <ProductDescriptionBox
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </div>
          <Gallery imageUrls={product.imageUrls} modelUrl={product.modelUrl} />
          <div className="sticky top-16 h-[calc(100%_-_64px)] min-h-[1px] w-full max-w-sm py-44 px-10">
            <ProductSelectBox options={product.options} productId={productId} />
          </div>
        </div>
      </>
    )
  );
}

export default Product;
