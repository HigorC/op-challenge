package com.ci.beers.repositories;

import com.ci.beers.entities.Beer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeerRepository extends MongoRepository<Beer, Integer> {
    Page<Beer> findByNameLikeIgnoreCaseOrDescriptionIsLikeIgnoreCase(String name, String description, Pageable pageable);
}