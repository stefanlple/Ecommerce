import axios from "axios";

const API_URL = "api/products/";

export const getAllProducts = async () => {
  const response = await axios.get(API_URL + "collection");
  return response.data;
};
