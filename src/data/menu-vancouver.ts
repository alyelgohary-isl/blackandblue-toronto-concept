/* Black+Blue Vancouver (/van-menu/) menus, transcribed from blackandbluesteakhouse.ca (HTML, 2026-10-22). Names, spellings and prices as printed. */
import type { Menu } from "./menu";

export const vancouverMenus: Menu[] = [
 {
  "id": "dinner",
  "title": "Dinner",
  "note": "",
  "sections": [
   {
    "title": "CHILL BAR",
    "note": "",
    "items": [
     {
      "name": "Chilled Seafood Platter",
      "price": "275",
      "desc": "king crab, fresh oysters, prawn cocktail, atlantic lobster, dungeness crab, marinated mussels, scallop ceviche, lemon, cocktail sauce, marie rose, mignonette, horseradish"
     },
     {
      "name": "Fresh Oysters",
      "price": "28 doz 50 doz",
      "desc": "tarragon mignonette, lemon, fresh horseradish"
     },
     {
      "name": "½-1½ lb Atlantic Lobster",
      "price": "36",
      "desc": "cocktail sauce, marie rose sauce, lemon"
     },
     {
      "name": "King Crab MP",
      "price": "MP",
      "desc": "cocktail sauce, marie rose sauce, lemon"
     },
     {
      "name": "Jumbo Shrimp Cocktail",
      "price": "34",
      "desc": "cocktail sauce, marie rose sauce, lemon"
     },
     {
      "name": "Caviar",
      "price": "",
      "desc": "Osetra (30 gram) 185 Sevruga (30 gram) 185 Beluga (30 gram) 450 blini, traditional garnish"
     }
    ]
   },
   {
    "title": "STARTERS",
    "note": "",
    "items": [
     {
      "name": "Black+Blue House Brioche",
      "price": "14",
      "desc": "gruyère, butter basted house brioche served with sun-dried tomato butter & maldon salt"
     },
     {
      "name": "Wagyu Beef Carpaccio",
      "price": "29",
      "desc": "grainy mustard dressing, arugula, shaved truffles, black truffle pecorino, grilled sourdough"
     },
     {
      "name": "Crab Cake",
      "price": "33",
      "desc": "dungeness & rock crab, charred lemon & dill aioli, celeriac & apple slaw, sherry vinaigrette"
     },
     {
      "name": "Crispy Calamari",
      "price": "26",
      "desc": "humboldt squid, lemon, italian parsley, charred jalapeño aioli"
     },
     {
      "name": "Tableside Steak Tartare",
      "price": "31",
      "desc": "hand cut prime beef tenderloin, shallots, cornichon, capers, dijon, egg yolk, grilled sourdough"
     }
    ]
   },
   {
    "title": "SOUPS & SALADS",
    "note": "",
    "items": [
     {
      "name": "Lobster Bisque",
      "price": "21",
      "desc": "lobster salad, truffle foam, cognac crème fraiche, toast point crouton, poured tableside"
     },
     {
      "name": "French Onion Soup",
      "price": "24",
      "desc": "glazed onions, beef stock, gruyère, mozzarella, crouton"
     },
     {
      "name": "Tableside Caesar Salad",
      "price": "27",
      "desc": "crisp romaine, parmigiano-reggiano, lemon & anchovy dressing, brioche croutons"
     },
     {
      "name": "Roasted Beet Salad",
      "price": "28",
      "desc": "fennel, blood orange, baby arugula, whipped goat cheese, beet agrodolce, citrus vinaigrette"
     },
     {
      "name": "Burrata Salad",
      "price": "30",
      "desc": "radicchio, citrus, vincotto, candied pecans"
     }
    ]
   },
   {
    "title": "CANADIAN PRIME",
    "note": "Prime grade beef features abundant marbling; red meat laced with an even distribution of fat. The presence of this fat creates a more tender and juicy cut of beef that cooks well in all conditions. Only 2% of graded beef is rated Prime.",
    "items": [
     {
      "name": "New York Striploin",
      "price": "79 (12oz)",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "79 (8oz)",
      "desc": ""
     },
     {
      "name": "Rib-Eye",
      "price": "112 (14oz)",
      "desc": ""
     },
     {
      "name": "Cowboy Rib-Eye",
      "price": "145 (24oz)",
      "desc": ""
     },
     {
      "name": "Beef Wellington",
      "price": "74",
      "desc": "prime beef tenderloin, mushroom duxelles, crêpe, puff pastry, red wine jus, seasonal vegetables, pommes purée"
     },
     {
      "name": "Châteaubriand for Two",
      "price": "165 (16oz)",
      "desc": "prime beef tenderloin center cut, red wine jus, béarnaise, seasonal vegetables, pommes purée"
     },
     {
      "name": "Slow Roasted Prime Rib",
      "price": "73 (14oz)",
      "desc": "yorkshire pudding, pomme purée, seasonal vegetables, red wine jus"
     },
     {
      "name": "Prime Butcher Cuts",
      "price": "MP",
      "desc": "Prime Tomahawk | Porterhouse | Australian Wagyu Tomahawk | ask server for daily availability"
     }
    ]
   },
   {
    "title": "JAPANESE A5 WAGYU",
    "note": "Wagyu cattle are known worldwide for producing meat with exceptional marbling and naturally enhanced flavour, tenderness, and juiciness. All of our Japanese Wagyu have a quality score of A5 and marble score between 8-10.",
    "items": [
     {
      "name": "Rib Eye",
      "price": "32 per oz",
      "desc": ""
     },
     {
      "name": "Striploin",
      "price": "34 per oz",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "42 per oz",
      "desc": ""
     }
    ]
   },
   {
    "title": "JAPANESE KOBE BEEF",
    "note": "Black+Blue takes great pride in being one of the select few that offer certified Kobe Beef Rib Eye and Striploin. The secret behind this prestige cut of meat is the umami flavour that’s embedded in the “shimofuri” marbling.",
    "items": [
     {
      "name": "Rib Eye",
      "price": "52 per oz",
      "desc": ""
     },
     {
      "name": "Striploin",
      "price": "55 per oz",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "68 per oz",
      "desc": ""
     }
    ]
   },
   {
    "title": "STEAK ADD ONS",
    "note": "",
    "items": [
     {
      "name": "1/2 LB Alaskan King Crab",
      "price": "MP",
      "desc": ""
     },
     {
      "name": "½ - 1 ½ lb Atlantic Lobster",
      "price": "36",
      "desc": ""
     },
     {
      "name": "Sautéed Tiger Prawns",
      "price": "29",
      "desc": ""
     },
     {
      "name": "Béarnaise",
      "price": "5",
      "desc": ""
     },
     {
      "name": "Red Wine Jus",
      "price": "5",
      "desc": ""
     },
     {
      "name": "Peppercorn Sauce",
      "price": "5",
      "desc": ""
     }
    ]
   },
   {
    "title": "SIGNATURE ENTRÉES",
    "note": "",
    "items": [
     {
      "name": "Wild Mushroom Risotto",
      "price": "33",
      "desc": "wild seasonal mushrooms, parmigiano reggiano"
     },
     {
      "name": "Roasted Sablefish",
      "price": "56",
      "desc": "miso glazed, baby bok choy, confit button mushrooms, fingerling potato, yuzu beurre blanc"
     },
     {
      "name": "Roasted Salmon",
      "price": "48",
      "desc": "black forbidden rice risotto, spinach, salmon caviar beurre blanc"
     },
     {
      "name": "Roasted Chicken",
      "price": "45",
      "desc": "pommes purée, chanterelle mushrooms, corn, tarragon chicken jus, lemon crème fraîche"
     }
    ]
   },
   {
    "title": "SIDES",
    "note": "",
    "items": [
     {
      "name": "Crispy Brussels Sprouts",
      "price": "14",
      "desc": "lemon, capers, chilies, parmesan cheese"
     },
     {
      "name": "Wagyu Fried Rice",
      "price": "29",
      "desc": "sesame, eggs, garlic, scallions, chilli oil, watercress"
     },
     {
      "name": "Roasted Nugget Potatoes",
      "price": "14",
      "desc": "tallow butter, rosemary, lemon"
     },
     {
      "name": "Vegetable Medley",
      "price": "15",
      "desc": "organic local vegetables, herb butter glazed"
     },
     {
      "name": "Lobster Mashed Potatoes",
      "price": "36",
      "desc": "butter poached atlantic lobster"
     },
     {
      "name": "Honey Glazed Carrots",
      "price": "14",
      "desc": "mushroom xo, crème fraîche, dill"
     },
     {
      "name": "Mac & Cheese Sticks",
      "price": "15",
      "desc": "truffle cheese sauce"
     },
     {
      "name": "Fries",
      "price": "12",
      "desc": "parmesan, truffle aioli"
     },
     {
      "name": "Mushrooms",
      "price": "14",
      "desc": "confit garlic, chives, parsley"
     }
    ]
   }
  ]
 },
 {
  "id": "lunch",
  "title": "Lunch",
  "note": "",
  "sections": [
   {
    "title": "STARTERS",
    "note": "",
    "items": [
     {
      "name": "Fresh Oysters",
      "price": "28 doz 50 doz",
      "desc": "tarragon mignonette, lemon, fresh horseradish"
     },
     {
      "name": "Wagyu Beef Carpaccio",
      "price": "29",
      "desc": "grainy mustard dressing, arugula, shaved truffles, black truffle pecorino, grilled sourdough"
     },
     {
      "name": "Jumbo Shrimp Cocktail",
      "price": "34",
      "desc": "cocktail sauce, marie rose, sauce, lemon"
     },
     {
      "name": "Crab Cake",
      "price": "33",
      "desc": "dungeness & rock crab, charred lemon & dill aioli, celeriac & apple slaw, sherry vinaigrette"
     },
     {
      "name": "Crispy Calamari",
      "price": "26",
      "desc": "humboldt squid, lemon, italian parsley charred jalapeño aioli"
     },
     {
      "name": "Steamed Mussels",
      "price": "30",
      "desc": "garlic, fresh herbs, white wine, roasted tomato broth, grilled sourdough"
     }
    ]
   },
   {
    "title": "FLAT BREAD",
    "note": "",
    "items": [
     {
      "name": "Quattro Formaggio",
      "price": "27",
      "desc": "pesto, fior di latte, goat cheese, brie, fontina, toasted pine nuts"
     },
     {
      "name": "Jerk Chicken",
      "price": "28",
      "desc": "jalapeno, mango, cilantro, red onion, mozzarella cheese"
     }
    ]
   },
   {
    "title": "SALADS",
    "note": "",
    "items": [
     {
      "name": "Jerk Chicken Salad",
      "price": "33",
      "desc": "crisp lettuce, gem tomatoes, mango, cucumber, hearts of palm, radish, avocado, agave vinaigrette"
     },
     {
      "name": "Grilled Steak Cobb",
      "price": "35",
      "desc": "romaine, gem lettuce, crisp bacon, avocado, egg, tomato, sweet corn, blue cheese, pickled shallots, mustard dressing"
     },
     {
      "name": "Niçoise Salad",
      "price": "34",
      "desc": "seared tuna, green beans, fingerling potatoes, niçoise olives, cherry tomatoes, butter lettuce, soft boiled egg, mustard vinaigrette"
     },
     {
      "name": "Burrata Salad",
      "price": "30",
      "desc": "radicchio, citrus, vincotto, candied pecans"
     },
     {
      "name": "Roasted Beet Salad",
      "price": "28",
      "desc": "fennel, blood orange, baby arugula whipped goat cheese, beet agrodolce, citrus vinaigrette"
     },
     {
      "name": "Caesar Salad",
      "price": "19",
      "desc": "crisp romaine, parmigiano-reggiano lemon & anchovy dressing, brioche croutons"
     }
    ]
   },
   {
    "title": "CANADIAN PRIME",
    "note": "Prime grade beef features abundant marbling; red meat laced with an even distribution of fat. The presence of this fat creates a more tender and juicy cut of beef that cooks well in all conditions. Only 2% of graded beef is rated Prime.",
    "items": [
     {
      "name": "New York Striploin",
      "price": "79 (12oz)",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "79 (8oz)",
      "desc": ""
     },
     {
      "name": "Rib-Eye",
      "price": "112 (14oz)",
      "desc": ""
     },
     {
      "name": "Cowboy Rib-Eye",
      "price": "145 (24oz)",
      "desc": ""
     }
    ]
   },
   {
    "title": "JAPANESE A5 WAGYU",
    "note": "Wagyu cattle are known worldwide for producing meat with exceptional marbling and naturally enhanced flavour, tenderness, and juiciness. All of our Japanese Wagyu have a quality score of A5 and marble score between 8-10.",
    "items": [
     {
      "name": "Rib Eye",
      "price": "32 per oz",
      "desc": ""
     },
     {
      "name": "Striploin",
      "price": "34 per oz",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "42 per oz",
      "desc": ""
     }
    ]
   },
   {
    "title": "JAPANESE KOBE BEEF",
    "note": "Black+Blue takes great pride in being one of the select few that offer certified Kobe Beef Rib Eye and Striploin. The secret behind this prestige cut of meat is the umami flavour that’s embedded in the “shimofuri” marbling.",
    "items": [
     {
      "name": "Rib Eye",
      "price": "52 per oz",
      "desc": ""
     },
     {
      "name": "Striploin",
      "price": "55 per oz",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "68 per oz",
      "desc": ""
     }
    ]
   },
   {
    "title": "STEAK ADD ONS",
    "note": "",
    "items": [
     {
      "name": "1/2 LB Alaskan King Crab",
      "price": "MP",
      "desc": ""
     },
     {
      "name": "½ - 1 ½ lb Atlantic Lobster",
      "price": "36",
      "desc": ""
     },
     {
      "name": "Tiger Prawns",
      "price": "29",
      "desc": ""
     },
     {
      "name": "Béarnaise",
      "price": "5",
      "desc": ""
     },
     {
      "name": "Red Wine Jus",
      "price": "5",
      "desc": ""
     },
     {
      "name": "Peppercorn Sauce",
      "price": "5",
      "desc": ""
     }
    ]
   },
   {
    "title": "SIGNATURE ENTRÉES",
    "note": "",
    "items": [
     {
      "name": "Jerk Chicken Skewer",
      "price": "36",
      "desc": "pommes purée, seasonal vegetables, chimichurri"
     },
     {
      "name": "Roasted Salmon",
      "price": "45",
      "desc": "sauce vierge, stewed tomatoes, charred broccolini, fried capers"
     },
     {
      "name": "Steak & Frites",
      "price": "56",
      "desc": "10oz canadian prime striploin, red wine jus, parmesan fries, truffle aioli"
     },
     {
      "name": "Smash Burger",
      "price": "26",
      "desc": "two prime beef patties, white cheddar, brioche bun, spiced ketchup, thousand island, iceberg lettuce, tomato, parmesan fries"
     },
     {
      "name": "Eggplant Parmesan",
      "price": "26",
      "desc": "tomato basil fondu, parmesan fior di latte"
     },
     {
      "name": "Prime Rib Beef Dip",
      "price": "26",
      "desc": "thinly sliced prime rib, garlic butter baguette, grainy mustard, swiss cheese, au jus, fries"
     }
    ]
   },
   {
    "title": "SIDES",
    "note": "",
    "items": [
     {
      "name": "Crispy Brussels Sprouts",
      "price": "14",
      "desc": "lemon, capers, chilies, parmesan cheese"
     },
     {
      "name": "Mac & Cheese Sticks",
      "price": "15",
      "desc": "truffle cheese sauce"
     },
     {
      "name": "Roasted Nugget Potatoes",
      "price": "14",
      "desc": "tallow butter, rosemary, lemon"
     },
     {
      "name": "Mushrooms",
      "price": "14",
      "desc": "confit garlic, chives, parsley"
     },
     {
      "name": "Vegetable Medley",
      "price": "15",
      "desc": "ganic local vegetables, herb butter glazed"
     },
     {
      "name": "Fries",
      "price": "12",
      "desc": "parmesan, truffle aioli"
     }
    ]
   }
  ]
 },
 {
  "id": "lunch-45",
  "title": "Lunch 45 on The Roof",
  "note": "",
  "sections": [
   {
    "title": "",
    "note": "",
    "items": [
     {
      "name": "Monday | Rigatoni Bolognese",
      "price": "20",
      "desc": "house ground aged beef, parmigiano reggiano"
     },
     {
      "name": "Tuesday | Jerk Chicken Cobb",
      "price": "20",
      "desc": "romaine, avocado, egg, gem tomatoes, blue cheese, maple smoked bacon, honey-dijon vinaigrette"
     },
     {
      "name": "Wednesday | Spring Salmon Tacos",
      "price": "20",
      "desc": "blackened salmon, pico de gallo, fennel slaw, spicy japanese tartare, sauce, flour tortilla"
     },
     {
      "name": "Thursday | Prime Beef Schnitzel",
      "price": "20",
      "desc": "golden fried panko-parmesan beef, brown butter & lemon, fresh herb salad, shaved fennel, gem tomatoes, olives, confit potatoes"
     }
    ]
   }
  ],
  "price": "$20 each"
 },
 {
  "id": "happy-hour",
  "title": "Happy Hour",
  "note": "On The Roof | Daily From 2:00pm – 5:00pm",
  "sections": [
   {
    "title": "TO SHARE",
    "note": "",
    "items": [
     {
      "name": "Feature Oysters",
      "price": "2.50 per",
      "desc": "red wine shallot mignonette, horseradish, cocktail sauce, lemon"
     },
     {
      "name": "Mac & Cheese Sticks (2pcs)",
      "price": "10",
      "desc": "truffle cheese sauce"
     },
     {
      "name": "Steak House Nachos",
      "price": "14",
      "desc": "house spiced potato chips, bacon, cheddar, jalapeño, sour cream, steak chili"
     },
     {
      "name": "Philly Cheesesteak Sliders",
      "price": "5 per",
      "desc": "thinly shaved ribeye, potato roll, provolone, american cheddar, green peppers, onions, jalapeño aioli"
     },
     {
      "name": "Prime Beef Sausages",
      "price": "15",
      "desc": "rosemary, black pepper, garlic, pickles, whole grain dijon & honey mustard"
     },
     {
      "name": "Fritto Misto",
      "price": "16",
      "desc": "crispy calamari, prawns, salmon, mussels, charred jalapeño aioli, italian parsley"
     },
     {
      "name": "Buttermilk Fried Chicken",
      "price": "15",
      "desc": "rissa honey, bread & butter pickles, sumac, ranch aioli"
     },
     {
      "name": "Beef Slider",
      "price": "5 Per",
      "desc": "prime beef patty, brioche, spiced ketchup, american cheddar"
     },
     {
      "name": "Steamed Mussels",
      "price": "16",
      "desc": "garlic, fresh herbs, white wine, roasted tomato broth, grilled sourdough"
     },
     {
      "name": "Phyllo Prawns",
      "price": "15",
      "desc": "kataifi wrapped prawns, watercress cream"
     },
     {
      "name": "All on Tap",
      "price": "7",
      "desc": ""
     }
    ]
   },
   {
    "title": "WINE",
    "note": "",
    "items": [
     {
      "name": "House Red or House White",
      "price": "8 | 12",
      "desc": ""
     },
     {
      "name": "Prosecco",
      "price": "9 | N/A",
      "desc": ""
     },
     {
      "name": "Poplar Grove Rosé",
      "price": "11 | 16",
      "desc": ""
     },
     {
      "name": "Poplar Grove Pinot Gris",
      "price": "11 | 16",
      "desc": ""
     },
     {
      "name": "Poplar Grove Merlot",
      "price": "11 | 16",
      "desc": ""
     }
    ]
   },
   {
    "title": "COCKTAILS",
    "note": "",
    "items": [
     {
      "name": "Negroni",
      "price": "9 (2 oz)",
      "desc": "tanqueray, campari, sweet vermouth, & fresh orange"
     },
     {
      "name": "Margarita",
      "price": "9 (1.5 oz)",
      "desc": "el tequileño blanco tequila, triple sec, lime"
     },
     {
      "name": "Spicy Pineapple Mule",
      "price": "8 (1.5 oz)",
      "desc": "vodka, pineapple juice, ginger beer, dash fire tincture"
     },
     {
      "name": "A’Pear’ol Spritz",
      "price": "9 (3 oz)",
      "desc": "aperol, pear nectar, prosecco, topped with soda"
     },
     {
      "name": "Highballs",
      "price": "7 (1oz)",
      "desc": "vodka, tequila gin, or ru"
     },
     {
      "name": "Classic Martini",
      "price": "10 (2oz)",
      "desc": "vodka or gin, dry vermouth"
     }
    ]
   },
   {
    "title": "DRAFT BEER",
    "note": "",
    "items": [
     {
      "name": "All Beers on Tap (12oz)",
      "price": "7",
      "desc": ""
     }
    ]
   }
  ]
 },
 {
  "id": "dessert",
  "title": "Dessert",
  "note": "",
  "sections": [
   {
    "title": "",
    "note": "",
    "items": [
     {
      "name": "Tableside Bananas Foster For Two",
      "price": "28",
      "desc": "flambé tableside rum caramel, vanilla ice cream, toasted pecans"
     },
     {
      "name": "Coconut Cream Pie",
      "price": "15",
      "desc": "vanilla sablé, blackberry compote, lime chantilly"
     },
     {
      "name": "Black+Blue Buttercake",
      "price": "16",
      "desc": "salted caramel sauce, white chantilly cream"
     },
     {
      "name": "Lemon Poppy Seed Chiffon Cake",
      "price": "15",
      "desc": "yogurt semifreddo, strawberry rhubarb compote, lemon crumble"
     },
     {
      "name": "Chocolate Hazelnut Cake",
      "price": "16",
      "desc": "soft baked flourless chocolate cake, hazelnut namelaka, candied hazelnuts, sesame tuille, orange crème anglaise"
     },
     {
      "name": "Espresso Cheesecake",
      "price": "16",
      "desc": "white chocolate chantilly, caramel drizzle, baileys crème anglaise, biscotti crumble"
     }
    ]
   }
  ]
 }
];
