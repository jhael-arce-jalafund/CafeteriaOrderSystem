package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.domain.entities.Order;
import com.example.demo.infrastructure.IOrderRepository;
import java.util.List;
import java.util.UUID;
import java.util.Optional;

@Service
public class OrderService implements IOrderService {

    private final IOrderRepository orderRepository;

    public OrderService(IOrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<Order> getOrderById(UUID id) {
        return orderRepository.findById(id);
    }

    @Override
    public Order updateOrder(UUID id, Order order) {
        return orderRepository.update(id, order);
    }

    @Override
    public void deleteOrder(UUID id) {
        orderRepository.delete(id);
    }
}
