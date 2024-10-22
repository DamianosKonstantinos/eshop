package com.eshop.backend.models;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private List<Product> cart;

    public Order(int id, List<Product> cart) {
        this.id = id;
        this.cart = cart;
    }

    public Order() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Product> getCart() {
        return cart;
    }

    public void setCart(List<Product> cart) {
        this.cart = cart;
    }

}
