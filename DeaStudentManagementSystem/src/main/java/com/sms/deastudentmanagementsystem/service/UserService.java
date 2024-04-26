// UserService.java
package com.sms.deastudentmanagementsystem.service;

import com.sms.deastudentmanagementsystem.model.UserModel;
import com.sms.deastudentmanagementsystem.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private  final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }
    public UserModel registerUser (String login, String password, String email){
        if (login == null || password == null) {
            return null;
        } else {

            if(usersRepository.findFirstByLogin(login).isPresent()){
                System.out.println("Duplicate login");
                return  null;
            }

            UserModel userModel= new UserModel();
            userModel.setLogin(login);
            userModel.setPassword(password);
            userModel.setEmail(email);
            return    usersRepository.save(userModel);
        }
    }

    public UserModel authenticate(String login, String password){
        return usersRepository.findByLoginAndPassword(login, password).orElse(null);
    }

    public UserModel getUserBy(Long id) {
        return usersRepository.findById(Math.toIntExact(id)).orElse(null);
    }

    public List<UserModel> getAllRegistrations() {
        return usersRepository.findAll();
    }
}
