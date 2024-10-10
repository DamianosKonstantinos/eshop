package com.reskill.eshop_project.model;

import java.util.*;

public class Product {
    private int Id;
    public int getId() {
        return Id;
    }
    public void setId(int id) {
        Id = id;
    }

    private String Name;
    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }

    private String Description;
    public String getDescription() {
        return Description;
    }
    public void setDescription(String description) {
        Description = description;
    }

    private String Category;
    public String getCategory() {
        return Category;
    }
    public void setCategory(String category) {
        Category = category;
    }

    private double Price;
    public double getPrice() {
        return Price;
    }
    public void setPrice(double price) {
        Price = price;
    }

    private int Sale; //Percentage off price
    public int getSale() {
        return Sale;
    }
    public void setSale(int sale) {
        Sale = sale;
    }

    private int Stock; //How many are there
    public int getStock() {
        return Stock;
    }
    public void setStock(int stock) {
        Stock = stock;
    }

    private List<String> Reviews;
}
