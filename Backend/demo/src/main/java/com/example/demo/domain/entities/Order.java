package com.example.demo.domain.entities;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Builder
public class Order {
    private UUID id;
    private String customerName;
    private List<String> items;
    private double totalPrice;
    private OrderStatus status;
}

