package com.ci.beers.entities;

import lombok.Data;

@Data
public class AuthResponse {
    private String username;
    private String accessToken;
}