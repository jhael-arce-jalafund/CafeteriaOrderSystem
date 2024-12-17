import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"; 

export const getAllOrdersByPagination = async (page) => {
  const response = await axios.get(`/orders?page=${page}&pageSize=4`);
  return response.data;
};

export const updateOrderStatus = async (id, status) => {
  const response = await axios.put(`/orders/${id}`, { status });
  return response.data;
};

export const deleteOrder = async (id) => {
  const response = await axios.delete(`/orders/${id}`);
  return response.status === 204;
};

export const addOrder = async (newOrder) => {
  const response = await axios.post(`/orders`, {
    customerName: newOrder.name,
    items: newOrder.items.split(",").map((item) => item.trim()),
    totalPrice: parseFloat(newOrder.price),
    status: "PENDING",
  });
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await axios.get(`/orders/${id}`);
  return response.data;
};



