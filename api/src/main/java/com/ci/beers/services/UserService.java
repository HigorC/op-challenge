package com.ci.beers.services;

import java.util.Optional;

import com.ci.beers.entities.AuthRequest;
import com.ci.beers.entities.User;
import com.ci.beers.exceptions.UserAlreadyExists;
import com.ci.beers.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(
                        () -> new UsernameNotFoundException("User " + username + " not found"));
    }

    public User createUser(AuthRequest authRequest) throws UserAlreadyExists {
        Optional<User> savedUser = userRepository.findByUsername(authRequest.getUsername());
        if (savedUser.isPresent()) {
            throw new UserAlreadyExists("There is an savedUser using the username:" + authRequest.getUsername());
        }

        User user = new User(
                authRequest.getUsername(),
                passwordEncoder.encode(authRequest.getPassword())
        );

        return userRepository.save(user);
    }
}