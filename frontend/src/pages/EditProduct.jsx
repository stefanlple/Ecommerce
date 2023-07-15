import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ImageUpload from "../components/Admin/UploadProduct/ImageUpload";
import SizingQuantityTableUpload from "../components/Admin/UploadProduct/SizingQuantityTableUpload";

import { getProduct } from "../features/products/productService";

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("tees");
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const product = await getProduct(productId);

        setProduct(product);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setQuantity(convertToTable(product.options));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCart();
  }, []);

  const convertToTable = (options) => {
    const object = {};

    options.forEach((instance) => {
      instance.sizes.forEach((element) => {
        let key = `-${instance.color.colorname}-${instance.color.colorhex}`;
        key = element.size + key;
        object[key] = element.quantity;
      });
    });

    return object;
  };

  const convertQuantity = (quantity) => {
    const options = [];

    for (const [key, value] of Object.entries(quantity)) {
      const [size, color, colorhex] = key.split("-");
      options.push({
        color: {
          colorname: color,
          colorhex: colorhex,
        },
        sizes: {
          size: size,
          quantity: value,
        },
      });
    }
    return options;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      name,
      description,
      price: parseFloat(price).toFixed(2),
      category,
      options: convertQuantity(quantity),
    };

    try {
      await axios.put("/api/products/" + productId, body);

      console.log("Product updated successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-6/12 flex-col"
      autoComplete="off"
    >
      <h1>EDIT PRODUCT</h1>
      <ImageUpload />
      <label htmlFor="name">Enter name:</label>
      <input
        type="text"
        id="name"
        className="border-2"
        placeholder="NAME"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="description">Enter description:</label>
      <input
        type="text"
        id="description"
        className="border-2"
        placeholder="DESCRIPTION"
        value={description}
        onChange={handleDescriptionChange}
      />
      <label htmlFor="price">Enter price (Euro €):</label>
      <input
        type="text"
        id="price"
        name="price"
        pattern="\d+(\.\d{2})?"
        placeholder="PRICE"
        className="border-2"
        value={price}
        onChange={handlePriceChange}
      />
      <label htmlFor="category">Enter category:</label>
      <select
        name="category"
        id="category"
        className="border-2"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="tees">Tees & Longsleeves</option>
        <option value="knitwear">Sweaters</option>
        <option value="top">Hoodies & Sweatshirts</option>
        <option value="outerwear">Outerwear</option>
        <option value="pants">Pants</option>
        <option value="shorts">Shorts</option>
        <option value="accessoires">Accessoires</option>
        <option value="footwear">Footwear</option>
        <option value="special">Special</option>
      </select>

      <SizingQuantityTableUpload rows={quantity} setRows={setQuantity} />
      <input type="submit" className="mt-5 border-2 bg-black p-2 text-white" />
    </form>
  );
};

export default EditProduct;
