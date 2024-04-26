package com.sms.deastudentmanagementsystem.controller;

import com.sms.deastudentmanagementsystem.model.UserModel;
import com.sms.deastudentmanagementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1") // Base mapping for all endpoints in this controller
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/register")
    public List<UserModel> getAllRegistrations() {
        return userService.getAllRegistrations();
    }

    @GetMapping("/register-page")
    public UserModel getRegisterPage() {
        return new UserModel();
    }

    @PostMapping("/register")
    public UserModel register(@RequestBody UserModel userModel) {
        System.out.println("register request:" + userModel);
        return userService.registerUser(userModel.getLogin(), userModel.getPassword(), userModel.getEmail());
    }

    @PostMapping("/logins") // Changed to POST method
    public UserModel login(@RequestBody UserModel userModel) {
        System.out.println("login request:" + userModel);
        return userService.authenticate(userModel.getLogin(), userModel.getPassword());
    }
}
