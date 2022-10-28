package com.ci.beers.entities;

import lombok.Data;

import java.util.ArrayList;

@Data
public class Method {
    private ArrayList<Item> mash_temp;
}

@Data
class Item {
    private Temp temp;
    private Float duration;
}

@Data
class Temp {
    private Float value;
    private String unit;
}

@Data
class Fermentation {
    private Temp temp;
}