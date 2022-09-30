import axios from "axios";

const API_URL = "api/products/";

export const getAllProducts = async () => {
  console.log(API_URL + "collection");
  const response = await axios.get(API_URL + "collection");
  return response.data;
};

export const getProduct = async (id) => {
  console.log(API_URL + id);
  const response = await axios.get(API_URL + id);
  return response.data;
};
