// UsersRepository.java
package com.sms.deastudentmanagementsystem.repository;

import com.sms.deastudentmanagementsystem.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<UserModel, Integer> {

    Optional<UserModel> findByLoginAndPassword(String login, String password);

    Optional<UserModel> findFirstByLogin(String login);
}
