package com.eshop.backend.models;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "prodname")
    private String prodName;
    private String description;
    private String category;
    private float price;
    private int sale;
    private int stock;
    private String imgURL;

    @ElementCollection
    @CollectionTable(name = "product_reviews", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "review")
    private List<String> reviews;

    @ManyToMany(mappedBy = "cart")
    private List<Order> orders;

    @ManyToMany(mappedBy = "favorites")
    private List<User> users;

    public Product() {

    }


    public Product(Long id, String prodName, String description, String category, float price, int sale, int stock,
            List<String> reviews, String imgURL) {
        this.id = id;
        this.prodName = prodName;
        this.description = description;
        this.category = category;
        this.price = price;
        this.sale = sale;
        this.stock = stock;
        this.imgURL = imgURL;
        this.reviews = reviews;
    }

    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getProdName() {
        return prodName;
    }
    public void setProdName(String prodName) {
        this.prodName = prodName;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public float getPrice() {
        return price;
    }
    public void setPrice(float price) {
        this.price = price;
    }
    public int getSale() {
        return sale;
    }
    public void setSale(int sale) {
        this.sale = sale;
    }
    public String getImgURL() {
        return imgURL;
    }
    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }
    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }
    public List<String> getReviews() {
        return reviews;
    }
    public void setReviews(List<String> reviews) {
        this.reviews = reviews;
    } 
}
