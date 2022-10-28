package com.ci.beers.repositories;

import com.ci.beers.entities.Beer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BeerRepository extends MongoRepository<Beer, Integer> {
}