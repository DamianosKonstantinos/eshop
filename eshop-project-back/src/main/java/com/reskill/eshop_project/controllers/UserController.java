package com.reskill.eshop_project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@Controller
@RequestMapping("/users")
public class UserController {    

    @Autowired
    private UserRepository userrepo;

    @GetMapping
    public List<User> getAllUsers(){
        return userrepo.findAll();
    }

}