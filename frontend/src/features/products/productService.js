import axios from "axios";

const API_URL = "/api/products/";

export const getAllProducts = async () => {
  const response = await axios.get(API_URL + "collection");
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

export const searchProductbyName = async (name) => {
  const response = await axios.post(API_URL + "search", { name });
  return response.data;
};

const productService = {
  getAllProducts,
  getProduct,
};

export default productService;
