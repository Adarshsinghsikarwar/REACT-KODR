// src/services/api.js
import axios from "axios";

// Base URL for your API
const API_BASE_URL = "https://fakestoreapi.com/";

// Get all products
export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

// Create a product
export const createProduct = async (productData) => {
  const response = await axios.post(`${API_BASE_URL}/products`, productData);
  return response.data;
};

// Update a product
export const updateProduct = async (id, productData) => {
  const response = await axios.put(
    `${API_BASE_URL}/products/${id}`,
    productData
  );
  return response.data;
};

// Delete a product
export const deleteProduct = async (id) => {
  await axios.delete(`${API_BASE_URL}/products/${id}`);
  return id;
};
