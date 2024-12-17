package com.example.demo.infrastructure;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.entities.Order;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class OrderRepository implements IOrderRepository {

    private final List<Order> orders = new ArrayList<>();

    @Override
    public Order save(Order order) {
        order.setId(UUID.randomUUID());
        orders.add(order);
        return order;
    }

    @Override
    public List<Order> findAll() {
        return orders;
    }

    @Override
    public Optional<Order> findById(UUID id) {
        return orders.stream().filter(order -> order.getId().equals(id)).findFirst();
    }

    @Override
    public Order update(UUID id, Order order) {
        delete(id);
        order.setId(id);
        orders.add(order);
        return order;
    }

    @Override
    public void delete(UUID id) {
        orders.removeIf(order -> order.getId().equals(id));
    }
}
