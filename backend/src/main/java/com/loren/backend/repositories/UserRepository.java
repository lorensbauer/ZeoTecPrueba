package com.loren.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import  com.loren.backend.entities.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLogin(String login);

}
