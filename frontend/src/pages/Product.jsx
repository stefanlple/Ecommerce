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

function Product() {
  /* const { productId } = useParams();
  const dispatch = useDispatch();

  const id = productId.split(".")[1];
  const [product, setProducts] = useState([]);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProduct(id));
    };

    if (isError) {
      toast.error(message);
    }
    fetchProducts();
  }, [isError, isSuccess, message, dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  } */

  const test = {
    name: "fujifilm camera",
    category: "special",
    description: ["camera with lense"],
    modelUrl: "fujifilmcamera.gltf",
    imageUrls: ["fujifilm1.jpeg", "fujifilm2.jpeg"],
    options: [
      {
        color: {
          colorname: "Green",
          colorhex: "#00FF00",
        },
        sizes: [
          {
            size: "XXS",
            quantity: 12,
            _id: "647d090e6ee730a3197e0dc1",
          },
        ],
        _id: "647d090e6ee730a3197e0dc0",
      },
      {
        color: {
          colorname: "Red",
          colorhex: "#FF0000",
        },
        sizes: [
          {
            size: "S",
            quantity: 22,
            _id: "647d090e6ee730a3197e0dc3",
          },
        ],
        _id: "647d090e6ee730a3197e0dc2",
      },
    ],
    price: 122.23,
    isActive: true,
    _id: "647d090e6ee730a3197e0dbf",
    createdAt: "2023-06-04T21:58:38.752Z",
    updatedAt: "2023-06-04T21:58:38.752Z",
    __v: 0,
  };
  return (
    <>
      <div className="box-border flex justify-between">
        <div className="sticky top-16 h-[calc(100%_-_64px)] min-h-[1px] w-full max-w-sm py-44 px-10">
          <ProductDescriptionBox
            name={test.name}
            price={test.price}
            description={test.description}
          />
        </div>
        <Gallery imageUrls={test.imageUrls} modelUrl={test.modelUrl} />
        <div className="sticky top-16 h-[calc(100%_-_64px)] min-h-[1px] w-full max-w-sm py-44 px-10">
          <ProductSelectBox options={test.options} />
        </div>
      </div>
    </>
  );
}

export default Product;
