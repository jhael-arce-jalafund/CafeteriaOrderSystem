package com.example.demo.dto;
import lombok.Builder;
import lombok.Data;

import java.util.List;

import com.example.demo.domain.entities.OrderStatus;

@Data
@Builder
public class OrderDTO {
    private String customerName;
    private List<String> items;
    private double totalPrice;
    private OrderStatus status;
}
