package com.ci.beerschallenge.controller;

import com.ci.beerschallenge.entity.Beer;
import com.ci.beerschallenge.repository.BeerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/beers")
public class BeerController {
 
    @Autowired
    private BeerRepository beerRepository;
        
    @GetMapping
    public List<Beer> findAllBeers() {
        return beerRepository.findAll();
    }

    @PostMapping
    public Beer saveUser(@Validated @RequestBody Beer beer) {
        return beerRepository.save(beer);
    }
 
}