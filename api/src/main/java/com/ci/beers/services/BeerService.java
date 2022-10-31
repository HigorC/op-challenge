package com.ci.beers.services;


import com.ci.beers.entities.Beer;
import com.ci.beers.repositories.BeerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BeerService {

    @Autowired
    private BeerRepository beerRepository;

    public Page<Beer> findBeers(String query, Pageable paging) {
        if (query != null) {
            return beerRepository.findByNameLikeIgnoreCaseOrDescriptionIsLikeIgnoreCase(query, query, paging);
        } else {
            return beerRepository.findAll(paging);
        }
    }
}
