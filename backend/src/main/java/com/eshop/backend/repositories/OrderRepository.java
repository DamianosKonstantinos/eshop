package com.eshop.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.eshop.backend.models.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}