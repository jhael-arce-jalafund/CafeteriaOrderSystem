package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.domain.entities.Order;
import com.example.demo.domain.entities.OrderStatus;
import com.example.demo.dto.OrderDTO;
import com.example.demo.services.OrderService;
import java.util.List;
import java.util.UUID;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3001")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody OrderDTO orderDTO) {
        Order order = Order.builder()
                .customerName(orderDTO.getCustomerName())
                .items(orderDTO.getItems())
                .totalPrice(orderDTO.getTotalPrice())
                .status(OrderStatus.PENDING)
                .build();

        Order createdOrder = orderService.createOrder(order);
        return ResponseEntity.ok(createdOrder);
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable UUID id) {
        Optional<Order> order = orderService.getOrderById(id);
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable UUID id, @RequestBody OrderDTO orderDTO) {
        Order updatedOrder = Order.builder()
                .customerName(orderDTO.getCustomerName())
                .items(orderDTO.getItems())
                .totalPrice(orderDTO.getTotalPrice())
                .status(orderDTO.getStatus())
                .build();

        Order order = orderService.updateOrder(id, updatedOrder);
        return ResponseEntity.ok(order);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable UUID id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    
}
