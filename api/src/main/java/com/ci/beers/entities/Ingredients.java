package com.ci.beers.entities;

import lombok.Data;

import java.util.List;

@Data
public class Ingredients {
    private List<MaltItem> malt;
    private List<HopsItens> hops;
    private List<String> yeast;
}

@Data
class MaltItem {
    private String name;
    private Amount amount;
}

@Data
class Amount {
    private Float value;
    private String unit;
}

@Data
class HopsItens {
    private String name;
    private Amount amount;
    private String add;
    private String attribute;
}