import React, { useEffect, useState } from "react";
import "./style/OrderTable.css";
import OrderRow from "./OrderRow";
import apiClient from "../api/axiosConfig"; 

const OrderTable = () => {
  const [orders, setOrders] = useState([]); 
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await apiClient.get(""); 
      setOrders(response.data); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(); 
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Items</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : orders.length > 0 ? (
            orders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))
          ) : (
            <tr>
              <td colSpan="4">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
