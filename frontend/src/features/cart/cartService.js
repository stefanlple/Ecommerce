import axios from "axios";

const API_URL = "/api/cart/";

export const getCart = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "getCart", config);
  return response.data.products;
};

export const addToCart = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "add-to-cart", data, config);

  return response.data;
};

export const deleteProductFromCart = async (token, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "delete", data, config);

  return response.data;
};

const cartService = {
  getCart,
  addToCart,
  deleteProductFromCart,
};

export default cartService;
