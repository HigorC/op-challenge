package com.ci.beers.repositories;

import com.ci.beers.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}