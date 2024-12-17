import React from "react";
import "./style/OrderRow.css";
import apiClient from "../api/axiosConfig";

const OrderRow = ({ order }) => {
  const handleDelete = async () => {
    try {
      await apiClient.delete(`/${order.id}`);
      alert("Order deleted successfully");
      window.location.reload(); 
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleUpdate = async () => {
    const updatedOrder = {
      customerName: order.customerName,
      items: order.items,
      totalPrice: order.totalPrice,
      status: order.status === "PENDING" ? "FULFILLED" : "PENDING",
    };

    try {
      await apiClient.put(`/${order.id}`, updatedOrder);
      alert("Order updated successfully");
      window.location.reload(); 
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <tr>
      <td>{order.customerName}</td>
      <td>{order.items.join(", ")}</td>
      <td>${order.totalPrice}</td>
      <td>{order.status}</td>

      <td>
        <button onClick={handleUpdate} className="btn update">
          Update Status
        </button>
        <button onClick={handleDelete} className="btn delete">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
