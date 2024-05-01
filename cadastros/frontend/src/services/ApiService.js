import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const apiUrl = `${baseURL}/api/produtos`;

export const getProdutos = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const createProduto = async (produto) => {
  try {
    const response = await axios.post(apiUrl, produto);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getProdutoById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const updateProdutoById = async (id, produto) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, produto);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const deleteProdutoById = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}