package com.ci.beers.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "beers")
public class Beer {
    @Id
    public Integer id;
    public String name;
}
