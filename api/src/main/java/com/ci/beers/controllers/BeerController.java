package com.ci.beers.controllers;

import com.ci.beers.entities.Beer;
import com.ci.beers.services.BeerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("v1/beers")
public class BeerController {

    @Autowired
    private BeerService beerService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> findBeers(
            @RequestParam(required = false) String query,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        List<Beer> beers;
        Pageable paging = PageRequest.of(page, size);

        Page<Beer> pageBeers = beerService.findBeers(query, paging);

        beers = pageBeers.getContent();

        Map<String, Object> response = new HashMap<>();
        response.put("beers", beers);
        response.put("currentPage", pageBeers.getNumber());
        response.put("totalItems", pageBeers.getTotalElements());
        response.put("totalPages", pageBeers.getTotalPages());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}