package com.example.demo.services;

import com.example.demo.dto.CreateOrderDTO;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class OrderValidator {

    public void validate(CreateOrderDTO createOrderDTO) {
        if (createOrderDTO.getCustomerName() == null || createOrderDTO.getCustomerName().isBlank()) {
            throw new IllegalArgumentException("El nombre del cliente es obligatorio");
        }

        if (createOrderDTO.getItems() == null || createOrderDTO.getItems().isEmpty()) {
            throw new IllegalArgumentException("La lista de ítems no puede estar vacía");
        }

        if (createOrderDTO.getTotalPrice() == null || createOrderDTO.getTotalPrice().compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("El precio total debe ser mayor a 0");
        }
    }
}