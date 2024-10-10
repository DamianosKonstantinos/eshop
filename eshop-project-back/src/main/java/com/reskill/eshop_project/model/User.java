package com.reskill.eshop_project.model;

import java.util.*;
import javax.persistence.*;

@Entity
public class User {
    
    @Username
    private String Username;
    public String getUsername() {
        return Username;
    }
    public void setUsername(String username) {
        Username = username;
    }

    private String Password;
    public String getPassword() {
        return Password;   
    }
    public void setPassword(String password) {
        Password = password;
    }

    private String eMail;
    public String geteMail() {
        return eMail;
    }
    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    private String FirstName;
    public String getFirstName() {
        return FirstName;
    }
    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    private String LastName;
    public String getLastName() {
        return LastName;
    }
    public void setLastName(String lastName) {
        LastName = lastName;
    }

    private List<Order> Orders;
    private List<Product> Favourites;

}