package com.example.demo.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.domain.entities.Order;

public interface IOrderService {
    Order createOrder(Order order);
    List<Order> getAllOrders();
    Optional<Order> getOrderById(UUID id);
    Order updateOrder(UUID id, Order order);
    void deleteOrder(UUID id);
}
