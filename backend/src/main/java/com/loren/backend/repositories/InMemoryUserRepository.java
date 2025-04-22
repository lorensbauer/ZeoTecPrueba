package com.loren.backend.repositories;

import com.loren.backend.entities.User;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
@ConditionalOnProperty(name="app.storage.type", havingValue = "in-memory")
public class InMemoryUserRepository implements UserRepositoryCustom {

    private final Map<String, User> users = new HashMap<>();
    private long id = 0;

    @Override
    public List<User> findAll() {
        System.out.println(users);
        return new ArrayList<>(users.values());
    }

    @Override
    public User save(User user) {
        user.setId(id);
        id++;
        users.put(user.getLogin(), user);
        return user;
    }

    @Override
    public Optional<User> findByLogin(String login) {

        return Optional.ofNullable(users.get(login));
    }
}
