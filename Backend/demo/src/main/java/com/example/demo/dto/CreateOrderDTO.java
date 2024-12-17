package com.example.demo.dto;

import java.math.BigDecimal;
import java.util.List;
import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateOrderDTO {
    String customerName;
    List<String> items;
    BigDecimal totalPrice;
}
