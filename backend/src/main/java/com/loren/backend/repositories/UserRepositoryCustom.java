package com.loren.backend.repositories;

import com.loren.backend.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserRepositoryCustom {
    List<User> findAll();
    User save(User user);
    Optional<User> findByLogin(String login);
}
