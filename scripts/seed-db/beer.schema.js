const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BeerSchema = new Schema({
    "type": Object,
    "properties": {
      "id": {
        "type": Number
      },
      "name": {
        "type": String
      },
      "tagline": {
        "type": String
      },
      "first_brewed": {
        "type": String
      },
      "description": {
        "type": String
      },
      "image_url": {
        "type": [String, null]
      },
      "abv": {
        "type": Number
      },
      "ibu": {
        "type": [Number, null]
      },
      "target_fg": {
        "type": [Number, null]
      },
      "target_og": {
        "type": [Number, null]
      },
      "ebc": {
        "type": [Number, null]
      },
      "srm": {
        "type": [Number, null]
      },
      "ph": {
        "type": [Number, null]
      },
      "attenuation_level": {
        "type": [Number, null]
      },
      "volume": {
        "type": Object,
        "properties": {
          "value": {
            "type": Number
          },
          "unit": {
            "type": String
          }
        },
        "required": ["value", "unit"]
      },
      "boil_volume": {
        "type": Object,
        "properties": {
          "value": {
            "type": Number
          },
          "unit": {
            "type": String
          }
        },
        "required": ["value", "unit"]
      },
      "method": {
        "type": Object,
        "properties": {
          "mash_temp": {
            "type": "array",
            "items": {
              "type": Object,
              "properties": {
                "temp": {
                  "type": Object,
                  "properties": {
                    "value": {
                      "type": [Number, null]
                    },
                    "unit": {
                      "type": String
                    }
                  },
                  "required": ["value", "unit"]
                },
                "duration": {
                  "type": [Number, null]
                }
              },
              "required": ["temp", "duration"]
            }
          },
          "fermentation": {
            "type": Object,
            "properties": {
  
              "temp": {
                "type": Object,
                "properties": {
  
                  "value": {
                    "type": [Number, null]
                  },
                  "unit": {
                    "type": String
                  }
                },
                "required": ["value", "unit"]
              }
            }
          },
          "twist": {
            "type": [String, null]
          }
        },
        "required": ["mash_temp", "fermentation", "twist"]
      },
      "ingredients": {
        "type": Object,
        "properties": {
          "malt": {
            "type": "array",
            "items": {
              "type": Object,
              "properties": {
                "name": {
                  "type": String
                },
                "amount": {
                  "type": Object,
                  "properties": {
                    "value": {
                      "type": Number
                    },
                    "unit": {
                      "type": String
                    }
                  },
                  "required": ["value", "unit"]
                }
              },
              "required": ["name", "amount"]
            }
          },
          "hops": {
            "type": "array",
            "items": {
              "type": Object,
              "properties": {
                "name": {
                  "type": String
                },
                "amount": {
                  "type": Object,
                  "properties": {
                    "value": {
                      "type": Number
                    },
                    "unit": {
                      "type": String
                    }
                  }
                },
                "add": {
                  "type": String
                },
                "attribute": {
                  "type": String
                }
              }
            }
          },
          "yeast": {
            "type": [String, null]
          }
        },
        "required": ["malt", "hops", "yeast"]
      },
      "food_pairing": {
        "id": "food_pairing",
        "type": "array",
        "items": {
          "type": String
        }
      },
      "brewers_tips": {
        "type": String
      },
      "contributed_by": {
        "type": String
      }
    },
    "required": [
      "name",
      "tagline",
      "first_brewed",
      "description",
      "abv",
      "ibu",
      "target_fg",
      "target_og",
      "ebc",
      "srm",
      "ph",
      "attenuation_level"
    ]
  })

const Beers = mongoose.model('Beers', BeerSchema)

module.exports = Beers