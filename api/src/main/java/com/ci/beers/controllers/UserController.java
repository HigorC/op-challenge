package com.ci.beers.controllers;

import com.ci.beers.entities.AuthRequest;
import com.ci.beers.entities.User;
import com.ci.beers.entities.UserCreatedResponse;
import com.ci.beers.exceptions.UserAlreadyExists;
import com.ci.beers.services.UserService;
import com.ci.beers.utils.jwt.TokenManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin
@RequestMapping("v1/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenManager tokenManager;

    @PostMapping("/login")
    public ResponseEntity<UserCreatedResponse> createToken(@RequestBody User request) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
        final UserDetails userDetails = userService.loadUserByUsername(request.getUsername());
        final String jwtToken = tokenManager.generateJwtToken(userDetails);
        return ResponseEntity.ok(new UserCreatedResponse(jwtToken));
    }

    @PostMapping("/create")
    public User createUser(@RequestBody AuthRequest request) {
        try {
            return userService.createUser(request);
        } catch (UserAlreadyExists err) {
            throw new ResponseStatusException(
                    HttpStatus.METHOD_NOT_ALLOWED, err.getMessage(), err);
        }
    }
}