package com.example.demo.infrastructure;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.demo.domain.entities.Order;

public interface IOrderRepository {
    Order save(Order order);
    List<Order> findAll();
    Optional<Order> findById(UUID id);
    Order update(UUID id, Order order);
    void delete(UUID id);
}
