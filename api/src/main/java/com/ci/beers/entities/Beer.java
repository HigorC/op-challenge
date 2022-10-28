package com.ci.beers.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "beers")
public class Beer {
    @Id
    public String _id;

    public Integer id;
    public String name;
    public String tagline;
    public String first_brewed;
    public String description;
    public String image_url;
    public Float abv;
    public Float ibu;
    public Float target_fg;
    public Float target_ogv;
    public Float ebc;
    public Float srm;
    public Float ph;
    public Float attenuation_level;
    private Volume volume;
    private BoilVolume boil_volume;
    private Method method;
    private Ingredients ingredients;
    private List<String> food_pairing;
    private String brewers_tips;
    private String contributed_by;
}




