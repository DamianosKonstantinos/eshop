package com.reskill.eshop_project.controllers;

import org.springframework.stereotype.Controller;


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
