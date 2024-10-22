package com.eshop.backend.models;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private List<Product> cart;

    public Order(Long id, List<Product> cart) {
        this.id = id;
        this.cart = cart;
    }

    public Order() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Product> getCart() {
        return cart;
    }

    public void setCart(List<Product> cart) {
        this.cart = cart;
    }

}
