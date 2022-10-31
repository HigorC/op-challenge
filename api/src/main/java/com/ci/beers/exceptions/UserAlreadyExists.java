package com.ci.beers.exceptions;

public class UserAlreadyExists extends Exception{
    public UserAlreadyExists(String error) {
        super(error);
    }
}
