/* Black+Blue Toronto menus, transcribed from blackandbluesteakhouse.ca/toronto-menu/ (HTML, 2026-10-22).
   Names, spellings and prices exactly as the client prints them. Prices in CAD, before tax.
   CONFIRM: brunch hours (home page 11:00 AM – 2:00 PM, contact page 10:30 AM – 2:00 PM). */
export type Item = { name: string; price: string; desc: string };
export type Section = { title: string; note: string; items: Item[] };
export type Menu = { id: string; title: string; note: string; price?: string; sections: Section[] };

export const menus: Menu[] = [
 {
  "id": "dinner",
  "title": "Dinner",
  "note": "",
  "sections": [
   {
    "title": "STARTERS",
    "note": "",
    "items": [
     {
      "name": "Black+Blue House Brioche",
      "price": "13",
      "desc": "gruyère, butter basted house brioche, served with seasonal butter & maldon salt"
     },
     {
      "name": "Beef Carpaccio",
      "price": "29",
      "desc": "horseradish crema, pickled shimeji mushrooms, crispy shallot, fried capers, shaved parmigiano reggiano"
     },
     {
      "name": "Crispy Calamari",
      "price": "26",
      "desc": "humboldt squid, lemon, italian parsley, charred jalapeño aioli"
     },
     {
      "name": "Crab Cake",
      "price": "36",
      "desc": "dungeness & rock crab, celery, charred lemon & dill aioli, celeriac & apple slaw, honey mustard vinaigrette"
     },
     {
      "name": "Tableside Steak Tartare",
      "price": "33",
      "desc": "hand cut beef tenderloin, pickled shallot, egg yolk, cornichon, charred jalapeño, spiced tomato ketchup, toast points"
     }
    ]
   },
   {
    "title": "RAW BAR",
    "note": "",
    "items": [
     {
      "name": "Seafood Tower",
      "price": "250",
      "desc": "½ dozen east coast oysters, colossal shrimp, ½ dungeness crab, ½ atlantic lobster, king crab marinated mussels & clams, cocktail sauce, marie rose, mignonette, horseradish"
     },
     {
      "name": "Deluxe Seafood Tower",
      "price": "450",
      "desc": "dozen east coast oysters, colossal shrimp, dungeness crab, atlantic lobster, king crab, marinated mussels & clams, king salmon roll, tuna nigiri, hamachi nigiri, scallop nigiri, cocktail sauce, marie rose, mignonette, horseradish"
     },
     {
      "name": "Fresh Oysters",
      "price": "30 ½ dozen | 55 dozen",
      "desc": "choice of premium east coast oysters tarragon mignonette, lemon, fresh horseradish"
     },
     {
      "name": "½-1.5lb Atlantic Lobster",
      "price": "45",
      "desc": "cocktail sauce, marie rose sauce, lemon"
     },
     {
      "name": "King Crab",
      "price": "MP",
      "desc": "cocktail sauce, marie rose sauce, lemon"
     },
     {
      "name": "Colossal Shrimp Cocktail",
      "price": "39",
      "desc": "cocktail sauce, marie rose sauce, lemon"
     },
     {
      "name": "Caviar",
      "price": "",
      "desc": "Royal Osetra (30 gram) 168 Imperial Osetra (30 gram) 174 Beluga (30 gram) 450 blini, traditional garnish or crème fraiche layered dip, potato chips"
     }
    ]
   },
   {
    "title": "SOUP & SALAD",
    "note": "",
    "items": [
     {
      "name": "French Onion Soup",
      "price": "22",
      "desc": "glazed onions, beef stock, gruyère, mozzarella, crouton"
     },
     {
      "name": "Lobster Bisque",
      "price": "26",
      "desc": "lobster salad, truffle foam, cognac crème fraiche, toast point crouton, poured tableside"
     },
     {
      "name": "Tableside Caesar Salad",
      "price": "19 pp",
      "desc": "crisp romaine, parmigiano-reggiano, lemon & anchovy dressing, gruyère brioche croutons"
     },
     {
      "name": "Burrata Salad",
      "price": "32",
      "desc": "heirloom tomatoes, basil, pickled shallots, toasted almonds, burnt honey vinaigrette"
     },
     {
      "name": "Boston Bibb Salad",
      "price": "23",
      "desc": "endive, lollo rosso lettuce, candied pecans, pickled shallots, radish, house made boursin cheese, honey mustard dressing"
     },
     {
      "name": "Beets",
      "price": "24",
      "desc": "whipped goat’s cheese, everything spice, red onion, watercress, fresh horseradish"
     }
    ]
   },
   {
    "title": "SIGNATURE ENTREES",
    "note": "",
    "items": [
     {
      "name": "Wild Mushroom Risotto",
      "price": "36",
      "desc": "parmigiano reggiano, wild seasonal mushrooms, fried sage"
     },
     {
      "name": "Pan Seared Halibut",
      "price": "56",
      "desc": "english peas, savoy cabbage, smoked bacon, fennel, truffle butter, fish velouté"
     },
     {
      "name": "King Salmon",
      "price": "45",
      "desc": "roasted leeks, spinach, coconut cream sauce, herb oil"
     },
     {
      "name": "Seared Scallops",
      "price": "65",
      "desc": "jalapeño cornbread, sweet corn bisque, green onion salsa, lime"
     },
     {
      "name": "Roasted Chicken",
      "price": "45",
      "desc": "creamed leeks, potato purée, charred green onion, morel mushroom cream sauce"
     },
     {
      "name": "Lobster Oscar",
      "price": "74",
      "desc": "1/2 atlantic lobster, crab cake, asparagus, hollandaise, aleppo pepper"
     }
    ]
   },
   {
    "title": "CANADIAN PRIME",
    "note": "Prime grade beef features abundant marbling; red meat laced with an even distribution of fat. The presence of this fat creates a more tender and juicy cut of beef that cooks well in all conditions. Only 2% of graded beef is rated Prime.",
    "items": [
     {
      "name": "New York Striploin",
      "price": "89 (14oz)",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "89 (8oz)",
      "desc": ""
     },
     {
      "name": "Rib Eye",
      "price": "109 (14oz)",
      "desc": ""
     },
     {
      "name": "Cowboy Rib-Eye",
      "price": "235 (36oz)",
      "desc": ""
     },
     {
      "name": "Beef Wellington for Two",
      "price": "169",
      "desc": "mushroom duxelles, crêpe, puff pastry, truffle jus, seasonal vegetables, pommes purée"
     },
     {
      "name": "Châteaubriand for Two",
      "price": "179 (16oz)",
      "desc": "beef tenderloin center cut, red wine jus, béarnaise, seasonal vegetables, pommes purée"
     },
     {
      "name": "Prime Rib",
      "price": "78 (14oz)",
      "desc": "slow-roasted, yorkshire pudding, pommes purée, seasonal vegetables, red wine jus"
     }
    ]
   },
   {
    "title": "JAPANESE A5 WAGYU",
    "note": "Wagyu cattle are known worldwide for producing meat with exceptional marbling and naturally enhanced flavour, tenderness, and juiciness. All of our Japanese Wagyu have a quality score of A5 and marble score between 8-10.",
    "items": [
     {
      "name": "Rib Eye",
      "price": "28 per oz",
      "desc": ""
     },
     {
      "name": "Striploin",
      "price": "31 per oz",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "39 per oz",
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
      "price": "56 per oz",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "69 per oz",
      "desc": ""
     }
    ]
   },
   {
    "title": "AUSTRALIAN WAGYU",
    "note": "",
    "items": [
     {
      "name": "Striploin",
      "price": "110 (10oz)",
      "desc": ""
     },
     {
      "name": "Rib-Eye",
      "price": "134 (10oz)",
      "desc": ""
     }
    ]
   },
   {
    "title": "PRIME BUTCHER CUTS",
    "note": "",
    "items": [
     {
      "name": "Prime Tomahawk | Porterhouse",
      "price": "MP",
      "desc": "ask server for daily availability"
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
      "name": "Sautéed Tiger Prawns",
      "price": "29",
      "desc": ""
     },
     {
      "name": "1/2 Atlantic Lobster",
      "price": "45",
      "desc": ""
     },
     {
      "name": "Trio of Sauces",
      "price": "15",
      "desc": ""
     },
     {
      "name": "Béarnaise",
      "price": "5",
      "desc": ""
     },
     {
      "name": "Truffle Jus",
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
    "title": "SIDES",
    "note": "",
    "items": [
     {
      "name": "Crispy Brussels Sprouts",
      "price": "18",
      "desc": "lemon, capers, parmesan, chilies"
     },
     {
      "name": "Fries",
      "price": "15",
      "desc": "parmesan, thyme, truffle aioli (add shaved black truffle MP)"
     },
     {
      "name": "Creamed Corn",
      "price": "18",
      "desc": "jalapeño, espelette"
     },
     {
      "name": "Asparagus",
      "price": "18",
      "desc": "yuzu hollandaise, toasted sesame seeds"
     },
     {
      "name": "Lobster Mashed Potatoes",
      "price": "39",
      "desc": "butter poached atlantic lobster"
     },
     {
      "name": "Wagyu Fried Rice",
      "price": "32",
      "desc": "sesame, eggs, garlic scallions, chilli oil, watercress"
     },
     {
      "name": "Mac & Cheese Sticks",
      "price": "19",
      "desc": "truffle cheese dip"
     },
     {
      "name": "Sugar Snap Peas",
      "price": "15",
      "desc": "feta haydari, toasted almonds, mint, shallot-caper vinaigrette"
     },
     {
      "name": "Mushrooms",
      "price": "20",
      "desc": "sautéed wild mushrooms, café de paris butter"
     },
     {
      "name": "Romanoff Potato Gratin",
      "price": "18",
      "desc": "whipped potatoes, cheddar, smoked bacon, sour cream"
     }
    ]
   }
  ]
 },
 {
  "id": "raw-bar",
  "title": "Raw Bar",
  "note": "",
  "sections": [
   {
    "title": "NIGIRI & SASHIMI",
    "note": "NIGIRI (1 PIECE ON RICE) | SASHIMI (2 PIECES)",
    "items": [
     {
      "name": "Masunosuke",
      "price": "6 | 9",
      "desc": "king salmon"
     },
     {
      "name": "Hamachi",
      "price": "9 | 12",
      "desc": "yellowtail"
     },
     {
      "name": "Maguro",
      "price": "12 | 15",
      "desc": "bluefin tuna"
     },
     {
      "name": "Otoro",
      "price": "16 | 20",
      "desc": "bluefin tuna belly"
     },
     {
      "name": "Amaebi",
      "price": "8 | 11",
      "desc": "sweet shrimp"
     },
     {
      "name": "Hotate",
      "price": "9 | 12",
      "desc": "japanese sea scallop"
     },
     {
      "name": "Unagi",
      "price": "8 | 11",
      "desc": "bbq eel"
     },
     {
      "name": "Madai",
      "price": "9 | 14",
      "desc": "sea bream"
     },
     {
      "name": "Wagyu",
      "price": "18 | --",
      "desc": "japanese A5 beef"
     },
     {
      "name": "Shima-Aji",
      "price": "8 | 12",
      "desc": "striped jack"
     },
     {
      "name": "Hokkaido Uni",
      "price": "20 | 36",
      "desc": "sea urchin"
     },
     {
      "name": "Nigiri Omakase",
      "price": "48",
      "desc": "(8 pieces) king salmon, bluefin tuna, hamachi, scallop, bbq eel, sea bream, shrimp"
     },
     {
      "name": "Premium Nigiri Omakase",
      "price": "79",
      "desc": "(14 pieces) king salmon, bluefin tuna, hamachi, scallop, striped jack, tuna belly, bbq eel, sea bream, shrimp"
     },
     {
      "name": "Sashimi Omakase",
      "price": "58",
      "desc": "(10 pieces) king salmon, bluefin tuna, hamachi, scallop, sea bream"
     },
     {
      "name": "Premium Sashimi Omakase",
      "price": "95",
      "desc": "(18 pieces) king salmon, bluefin tuna, hamachi, scallop, striped jack, tuna belly, sea bream"
     }
    ]
   },
   {
    "title": "ROLLS",
    "note": "",
    "items": [
     {
      "name": "King Salmon Aburi",
      "price": "29",
      "desc": "avocado, cucumber, lump crab, kewpie mayo, shichimi powder, masatake sauce"
     },
     {
      "name": "Spicy Bluefin Tuna Roll",
      "price": "32",
      "desc": "bluefin tuna, shichimi togarashi, garlic chili crisp, cucumber, ginger, scallion"
     },
     {
      "name": "Black+Blue Surf & Turf",
      "price": "38",
      "desc": "a5 wagyu, lobster, avocado, puffed rice, bbq soy glaze, seven spice ginger aioli"
     },
     {
      "name": "Sea Treasure Roll",
      "price": "31",
      "desc": "king salmon, bluefin tuna, hamachi, sea bream, shrimp tempura, tobiko, ginger-yuzu ponzu, scallion"
     },
     {
      "name": "Garden Roll",
      "price": "19",
      "desc": "shiso pesto, marinated shitake, cucumber, charred bell pepper, avocado"
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
      "name": "Black+Blue House Brioche",
      "price": "13",
      "desc": "gruyère, butter basted house brioche, served with seasonal butter & maldon salt"
     },
     {
      "name": "Fresh Oysters",
      "price": "30 ½ dozen | 55 dozen",
      "desc": "premium east coast oysters, tarragon mignonette, cocktail sauce, fresh horseradish"
     },
     {
      "name": "Beef Carpaccio",
      "price": "29",
      "desc": "horseradish crema, pickled shimeji mushrooms, crispy shallot, fried capers, shaved parmigiano reggiano"
     },
     {
      "name": "Crispy Calamari",
      "price": "26",
      "desc": "humboldt squid, lemon, italian parsley, charred jalapeño aioli"
     },
     {
      "name": "Crab Cake",
      "price": "36",
      "desc": "dungeness & rock crab, celery, charred lemon & dill aioli, celeriac & apple slaw, honey mustard vinaigrette"
     },
     {
      "name": "Colossal Shrimp Cocktail",
      "price": "39",
      "desc": "cocktail sauce, marie rose sauce, lemon"
     }
    ]
   },
   {
    "title": "NIGIRI & SASHIMI",
    "note": "NIGIRI (1 PIECE ON RICE) | SASHIMI (2 PIECES)",
    "items": [
     {
      "name": "Masunosuke",
      "price": "6 | 9",
      "desc": "king salmon"
     },
     {
      "name": "Hamachi",
      "price": "9 | 12",
      "desc": "yellowtail"
     },
     {
      "name": "Maguro",
      "price": "12 | 15",
      "desc": "bluefin tuna"
     },
     {
      "name": "Otoro",
      "price": "16 | 20",
      "desc": "bluefin tuna belly"
     },
     {
      "name": "Amaebi",
      "price": "8 | 11",
      "desc": "sweet shrimp"
     },
     {
      "name": "Hotate",
      "price": "9 | 12",
      "desc": "japanese sea scallop"
     },
     {
      "name": "Wagyu",
      "price": "18 | --",
      "desc": "japanese A5 beef"
     },
     {
      "name": "Hokkaido Uni",
      "price": "20 | 36",
      "desc": "sea urchin"
     },
     {
      "name": "Nigiri Omakase",
      "price": "48",
      "desc": "(8 pieces) king salmon, bluefin tuna, hamachi, scallop, bbq eel, sea bream, shrimp"
     },
     {
      "name": "Sashimi Omakase",
      "price": "58",
      "desc": "(10 pieces) king salmon, bluefin tuna, hamachi, scallop, sea bream"
     }
    ]
   },
   {
    "title": "ROLLS",
    "note": "",
    "items": [
     {
      "name": "King Salmon Aburi",
      "price": "29",
      "desc": "avocado, cucumber, lump crab, kewpie mayo, shichimi powder, masatake sauce"
     },
     {
      "name": "Spicy Bluefin Tuna Roll",
      "price": "32",
      "desc": "bluefin tuna, shichimi togarashi, garlic chili crisp, cucumber, ginger, scallion"
     },
     {
      "name": "Black+Blue Surf & Turf",
      "price": "38",
      "desc": "a5 wagyu, lobster, avocado, puffed rice, bbq soy glaze, seven spice ginger aioli"
     },
     {
      "name": "Sea Treasure Roll",
      "price": "31",
      "desc": "king salmon, bluefin tuna, hamachi, sea bream, shrimp tempura, tobiko, ginger-yuzu ponzu, scallion"
     },
     {
      "name": "Garden Roll",
      "price": "19",
      "desc": "shiso pesto, marinated shitake, cucumber, charred bell pepper, avocado"
     }
    ]
   },
   {
    "title": "BENTO BOX",
    "note": "",
    "items": [
     {
      "name": "Black+Blue Bento Box",
      "price": "39",
      "desc": "bluefin tuna, king salmon sashimi, feature maki roll, crispy prawn & yam tempura, miso broth"
     }
    ]
   },
   {
    "title": "SOUP & SALAD",
    "note": "",
    "items": [
     {
      "name": "French Onion Soup",
      "price": "22",
      "desc": "glazed onions, beef stock, gruyère, mozzarella, crouton"
     },
     {
      "name": "Lobster Bisque",
      "price": "26",
      "desc": "lobster salad, truffle foam, cognac crème fraîche, toast point crouton, poured tableside"
     },
     {
      "name": "Niçoise Salad",
      "price": "34",
      "desc": "seared tuna, green beans, fingerling potatoes, niçoise olives, cherry tomatoes, baby gem lettuce, soft boiled egg, crispy shallots, mustard vinaigrette"
     },
     {
      "name": "Tableside Caesar Salad",
      "price": "19 pp",
      "desc": "crisp romaine, parmigiano-reggiano, lemon & anchovy dressing, gruyère brioche croutons"
     },
     {
      "name": "Burrata Salad",
      "price": "32",
      "desc": "heirloom tomatoes, basil, pickled shallots, toasted almonds, burnt honey vinaigrette"
     },
     {
      "name": "Chicken Cobb Salad",
      "price": "28",
      "desc": "avocado, smoked bacon, blue cheese, soft boiled egg, green goddess dressing"
     }
    ]
   },
   {
    "title": "SIGNATURE ENTREES",
    "note": "",
    "items": [
     {
      "name": "Smash Burger",
      "price": "26",
      "desc": "two prime beef patties, provolone, brioche bun, spiced ketchup, thousand island, iceberg lettuce, tomato, parmesan fries"
     },
     {
      "name": "Steak & Frites",
      "price": "59",
      "desc": "10oz canadian prime striploin, red wine jus, parmesan fries, truffle aioli"
     },
     {
      "name": "King Salmon",
      "price": "39",
      "desc": "roasted leeks, spinach, coconut cream sauce, herb oil"
     },
     {
      "name": "Wild Mushroom Risotto",
      "price": "35",
      "desc": "parmigiano reggiano, wild seasonal mushrooms, fried sage"
     },
     {
      "name": "Roasted Chicken",
      "price": "38",
      "desc": "creamed leeks, potato purée, charred green onion, morel mushroom cream sauce"
     },
     {
      "name": "Australian Wagyu",
      "price": "",
      "desc": ""
     }
    ]
   },
   {
    "title": "CANADIAN PRIME",
    "note": "Prime grade beef features abundant marbling; red meat laced with an even distribution of fat. The presence of this fat creates a more tender and juicy cut of beef that cooks well in all conditions. Only 2% of graded beef is rated Prime.",
    "items": [
     {
      "name": "New York Striploin",
      "price": "89 (14oz)",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "89 (8oz)",
      "desc": ""
     },
     {
      "name": "Rib Eye",
      "price": "109 (14oz)",
      "desc": ""
     },
     {
      "name": "Cowboy Rib-Eye",
      "price": "235 (36oz)",
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
      "price": "28 per oz",
      "desc": ""
     },
     {
      "name": "Striploin",
      "price": "31 per oz",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "39 per oz",
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
      "price": "56 per oz",
      "desc": ""
     },
     {
      "name": "Tenderloin",
      "price": "69 per oz",
      "desc": ""
     }
    ]
   },
   {
    "title": "AUSTRALIAN WAGYU",
    "note": "",
    "items": [
     {
      "name": "Striploin",
      "price": "110 (10oz)",
      "desc": ""
     },
     {
      "name": "Rib-Eye",
      "price": "134 (10oz)",
      "desc": ""
     }
    ]
   },
   {
    "title": "BUTCHER CUTS",
    "note": "",
    "items": [
     {
      "name": "Tomahawk | Porterhouse",
      "price": "",
      "desc": "see server for daily availability"
     }
    ]
   },
   {
    "title": "STEAK ADD ONS",
    "note": "",
    "items": [
     {
      "name": "Trio of Sauces",
      "price": "15",
      "desc": ""
     },
     {
      "name": "Béarnaise",
      "price": "5",
      "desc": ""
     },
     {
      "name": "Truffle Jus",
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
    "title": "SIDES",
    "note": "",
    "items": [
     {
      "name": "Crispy Brussels Sprouts",
      "price": "18",
      "desc": "lemon, capers, parmesan, chilies"
     },
     {
      "name": "Creamed Corn",
      "price": "18",
      "desc": "jalapeño, espelette"
     },
     {
      "name": "Fries",
      "price": "15",
      "desc": "parmesan, thyme, truffle aioli"
     },
     {
      "name": "Asparagus",
      "price": "18",
      "desc": "yuzu hollandaise, toasted sesame seeds"
     },
     {
      "name": "Mushrooms",
      "price": "20",
      "desc": "sautéed wild mushrooms, café de paris butter"
     },
     {
      "name": "Mac & Cheese Sticks",
      "price": "19",
      "desc": "truffle cheese dip"
     }
    ]
   }
  ]
 },
 {
  "id": "lunch-45",
  "title": "Lunch 45",
  "note": "Monday to Thursday. We understand that your time is valuable, and we’re committed to providing you with a delicious, satisfying meal without the wait. Our Express Lunch 45 Menu is designed to get you in and out in 45 minutes!",
  "sections": [
   {
    "title": "",
    "note": "",
    "items": [
     {
      "name": "Monday | Prime Rib Steak Sandwich",
      "price": "25",
      "desc": "shaved prime rib, provolone, caramelized onions, truffle aioli"
     },
     {
      "name": "Tuesdays | Beef Bourguignon",
      "price": "25",
      "desc": "braised prime beef, red wine, crisp puff pastry"
     },
     {
      "name": "Wednesdays | Rigatoni Bolognese",
      "price": "25",
      "desc": "house ground aged beef, parmigiano reggiano"
     },
     {
      "name": "Thursdays | Chopped Steak",
      "price": "25",
      "desc": "mashed potatoes, carrots, asparagus, mushroom sauce"
     }
    ]
   }
  ]
 },
 {
  "id": "prix-fixe",
  "title": "Lunch Prix Fixe",
  "note": "choose either appetizer & main or main & dessert",
  "sections": [
   {
    "title": "APPETIZERS",
    "note": "",
    "items": [
     {
      "name": "French Onion Soup",
      "price": "",
      "desc": "glazed onions, beef stock, gruyère, mozzarella, crouton"
     },
     {
      "name": "Boston Bibb Salad",
      "price": "",
      "desc": "endive, lollo rosso, candied pecans, pickled shallots, radish, house made boursin cheese, honey mustard vinaigrette"
     },
     {
      "name": "Lobster Bisque +$6",
      "price": "",
      "desc": "lobster salad, truffle foam, cognac crème fraîche, toast point crouton, poured tableside"
     },
     {
      "name": "Beef Carpaccio",
      "price": "",
      "desc": "horseradish crema, pickled shimeji mushrooms, crispy shallot, fried capers, shaved parmigiano reggiano"
     },
     {
      "name": "Crispy Calamari",
      "price": "",
      "desc": "humboldt squid, lemon zest, italian parsley, charred jalapeño aioli"
     }
    ]
   },
   {
    "title": "MAINS",
    "note": "",
    "items": [
     {
      "name": "Smash Burger",
      "price": "",
      "desc": "two prime beef patties, provolone, brioche bun, spiced ketchup, thousand island, iceberg lettuce, tomato, parmesan fries"
     },
     {
      "name": "Niçoise Salad",
      "price": "",
      "desc": "seared blue fin tuna, green beans, fingerling potatoes, niçoise olives, cherry tomatoes, baby gem lettuce, soft boiled egg, crispy shallots, mustard vinaigrette"
     },
     {
      "name": "King Salmon",
      "price": "",
      "desc": "roasted leeks, spinach, coconut cream sauce, herb oil"
     },
     {
      "name": "Wild Mushroom Risotto",
      "price": "",
      "desc": "parmigiano reggiano, wild seasonal mushrooms"
     },
     {
      "name": "Chicken Cobb Salad",
      "price": "",
      "desc": "avocado, smoked bacon, blue cheese, soft boiled egg, green goddess dressing"
     },
     {
      "name": "Black+Blue Bento Box +$5",
      "price": "",
      "desc": "bluefin tuna, king salmon sashimi, feature maki roll, crispy prawn & yam tempura, miso broth"
     },
     {
      "name": "Steak & Frites +$25",
      "price": "",
      "desc": "10oz canadian prime striploin, parmesan fries, truffle aioli, red wine jus"
     }
    ]
   },
   {
    "title": "DESSERT",
    "note": "",
    "items": [
     {
      "name": "Black+Blue Buttercake",
      "price": "",
      "desc": "salted caramel sauce, white chantilly cream, fresh berries"
     },
     {
      "name": "Eton Mess",
      "price": "18",
      "desc": "crisp meringue, strawberries, rhubarb, whipped cream"
     }
    ]
   }
  ],
  "price": "48"
 },
 {
  "id": "brunch",
  "title": "Weekend Brunch",
  "note": "Sat & Sun",
  "sections": [
   {
    "title": "TO START",
    "note": "",
    "items": [
     {
      "name": "Fresh Oysters",
      "price": "30 ½ dozen | 55 dozen",
      "desc": "choice of premium east coast, tarragon mignonette, lemon, fresh horseradish"
     },
     {
      "name": "Colossal Shrimp Cocktail",
      "price": "39",
      "desc": "cocktail sauce, marie rose sauce, lemon"
     },
     {
      "name": "Crispy Calamari",
      "price": "26",
      "desc": "humboldt squid, lemon zest, italian parsley, charred jalapeño aioli"
     },
     {
      "name": "Crab Cake",
      "price": "36",
      "desc": "dungeness & rock crab, celery, charred lemon & dill aioli, celeriac & apple slaw, honey mustard vinaigrette"
     },
     {
      "name": "Beef Carpaccio",
      "price": "28",
      "desc": "horseradish crema, pickled shimeji mushrooms, crispy shallots, fried capers, shaved parmigiano, reggiano"
     }
    ]
   },
   {
    "title": "SALADS",
    "note": "",
    "items": [
     {
      "name": "Boston Bibb Salad",
      "price": "23",
      "desc": "endive, lollo rosso lettuce, candied pecans, pickled shallots, radish, house made boursin cheese, honey mustard dressing"
     },
     {
      "name": "Tableside Caesar Salad",
      "price": "19pp",
      "desc": "crisp romaine, parmigiano-reggiano, lemon & anchovy dressing, gruyère brioche croutons"
     }
    ]
   },
   {
    "title": "BRUNCH ENTREES",
    "note": "",
    "items": [
     {
      "name": "Canadian Breakfast",
      "price": "22",
      "desc": "2 eggs any style, double smoked bacon, sausage, grilled sour dough, fried tomato, brunch potatoes"
     },
     {
      "name": "Lobster Omelette",
      "price": "34",
      "desc": "atlantic lobster, asparagus, mascarpone, brunch potatoes, petite salad"
     },
     {
      "name": "Bacon & Cheddar Omelette",
      "price": "24",
      "desc": "double smoked bacon, tomatoes, caramelized onions, cheddar cheese, brunch potatoes, petite salad"
     },
     {
      "name": "Black Truffle & Mushroom Omelette",
      "price": "28",
      "desc": "wild mushrooms, boursin cheese, shaved black truffles, brunch potatoes, petite salad"
     },
     {
      "name": "Salmon Benny",
      "price": "26",
      "desc": "house cured gravlax, english muffin, fried capers, hollandaise, brunch potatoes, petite salad"
     },
     {
      "name": "Black+Blue Benny",
      "price": "24",
      "desc": "crispy pancetta, english muffin, hollandaise, brunch potatoes, petite salad"
     },
     {
      "name": "Crab Benny",
      "price": "28",
      "desc": "dungeness & rock crab, avocado, english muffin, hollandaise, brunch potatoes, petite salad"
     },
     {
      "name": "Smash Burger",
      "price": "26",
      "desc": "two prime beef patties, provolone, brioche bun, spiced ketchup, thousand island, iceberg lettuce, tomato, parmesan fries"
     },
     {
      "name": "‘Banoffee’ Pancake",
      "price": "22",
      "desc": "buttermilk pancakes, dulce de leche, brûlée banana, chantilly cream, toasted coconut"
     }
    ]
   },
   {
    "title": "BRUNCH SIDES",
    "note": "",
    "items": [
     {
      "name": "Eggs any Style",
      "price": "8",
      "desc": ""
     },
     {
      "name": "Double Smoked Bacon",
      "price": "8",
      "desc": ""
     },
     {
      "name": "Pork Sausage",
      "price": "8",
      "desc": ""
     },
     {
      "name": "Brunch Potatoes",
      "price": "6",
      "desc": ""
     }
    ]
   },
   {
    "title": "ENTREES",
    "note": "",
    "items": [
     {
      "name": "Canadian Prime Beef Tenderloin",
      "price": "89 (8oz)",
      "desc": "roasted potatoes, asparagus, red wine jus"
     },
     {
      "name": "Canadian Prime NY Striploin",
      "price": "89 (14oz)",
      "desc": "roasted potatoes, asparagus, red wine jus"
     },
     {
      "name": "Salmon",
      "price": "39",
      "desc": "smoked eggplant puree, sweet & sour onions caramelized, lemon garlic emulsion"
     }
    ]
   },
   {
    "title": "SIDES",
    "note": "",
    "items": [
     {
      "name": "Fries",
      "price": "15",
      "desc": "parmesan, thyme, truffle aioli"
     },
     {
      "name": "Brussels Sprouts",
      "price": "18",
      "desc": "lemon, capers, chilies, parmesan cheese"
     },
     {
      "name": "Mushrooms",
      "price": "20",
      "desc": "truffle, thyme, 25-year-old madeira vinegar"
     }
    ]
   }
  ]
 },
 {
  "id": "happy-hour",
  "title": "Happy Hour",
  "note": "Daily | 2:30pm to 5:30pm",
  "sections": [
   {
    "title": "FOOD",
    "note": "",
    "items": [
     {
      "name": "Fresh Oysters",
      "price": "2 per piece",
      "desc": "east coast oysters, tarragon mignonette, horseradish"
     },
     {
      "name": "Steak Tartare Bites",
      "price": "5.5 per piece",
      "desc": "hand cut beef tenderloin, pickled shallots, grated egg yolk, cornichon, crispy potato rösti"
     },
     {
      "name": "Mini Yorkshire",
      "price": "5.50 per piece",
      "desc": "shaved prime rib, caramelized onions, au jus, horseradish crema"
     },
     {
      "name": "Beef Slider",
      "price": "5.50 per piece",
      "desc": "prime beef patty, brioche, spiced ketchup, american cheddar"
     },
     {
      "name": "Lobster Roll",
      "price": "6.50 per piece",
      "desc": "yuzu mayo, tobico, pickled jalapeno & carrots, brioche bun"
     },
     {
      "name": "Mac & Cheese Sticks",
      "price": "9",
      "desc": "truffle cheese dip"
     },
     {
      "name": "Crispy Calamari",
      "price": "14",
      "desc": "humboldt squid, lemon, italian parsley, charred jalapeño aioli"
     },
     {
      "name": "Phyllo Prawns",
      "price": "15",
      "desc": "kataifi wrapped prawns, watercress cream"
     },
     {
      "name": "Buttermilk Fried Chicken",
      "price": "14",
      "desc": "harissa honey, bread & butter pickles, sumac, ranch aioli"
     },
     {
      "name": "Steak House Nachos",
      "price": "16",
      "desc": "house spiced potato chips, bacon, cheddar jalapeño, sour cream, steak chili"
     },
     {
      "name": "Wagyu Hot Stone",
      "price": "34",
      "desc": "A5 japanese wagyu, shoyu reduction, egg yolk, miso sauce, cooked on a salt brick"
     },
     {
      "name": "Sushi Hand Rolls",
      "price": "",
      "desc": ""
     },
     {
      "name": "Sake",
      "price": "6.50 per piece",
      "desc": "king salmon, avocado, ginger mayo, tobiko"
     },
     {
      "name": "Negitoro",
      "price": "6.50 per piece",
      "desc": "bluefin tuna, ginger, scallion, soy"
     },
     {
      "name": "Negihama",
      "price": "6.50 per piece",
      "desc": "hamachi, cucumber, shiso, ginger scallion"
     },
     {
      "name": "Sushi Rolls",
      "price": "",
      "desc": ""
     },
     {
      "name": "Avocado Maki",
      "price": "8",
      "desc": "avocado, cucumber, shiso"
     },
     {
      "name": "Sake Maki",
      "price": "11",
      "desc": "king salmon, ginger-aioli"
     },
     {
      "name": "Negitoro Maki",
      "price": "14",
      "desc": "bluefin tuna, scallion"
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
   },
   {
    "title": "WINE",
    "note": "",
    "items": [
     {
      "name": "House Red or White (5oz)",
      "price": "7",
      "desc": ""
     },
     {
      "name": "Prosecco (5oz)",
      "price": "8",
      "desc": ""
     }
    ]
   },
   {
    "title": "COCKTAILS",
    "note": "",
    "items": [
     {
      "name": "Highballs (1 oz)",
      "price": "7",
      "desc": "vodka, tequila, gin, rum, rye"
     },
     {
      "name": "Classic Martini (2 oz)",
      "price": "10",
      "desc": "dirty devil vodka or dillon’s dry 7 gin, dry vermouth"
     },
     {
      "name": "La Dolce Vita (4 oz)",
      "price": "10",
      "desc": "aperol, limoncello, prosecco, soda"
     },
     {
      "name": "Watermelon Margarita (2oz)",
      "price": "11",
      "desc": "hornitos tequila, cointreu, lime, watermelon juice"
     },
     {
      "name": "Guava Cosmo (2oz)",
      "price": "10",
      "desc": "dillion’s vodka, cointreau, lime, guava juice"
     },
     {
      "name": "Elderflower Spritz (2oz)",
      "price": "10",
      "desc": "dillion’s gin, st. germaine, cucumber syrup, lemon juice, soda"
     },
     {
      "name": "Strawberry Lychee Sakegria (3.25 oz)",
      "price": "12",
      "desc": "hakutsuru junmai sake, ginger liquor, lycee juice, lemon, simple syrup"
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
      "name": "Tableside Crepe Suzette for Two",
      "price": "28",
      "desc": "cointreau flambéed strawberries, balsamic ice cream, fresh cracked black pepper"
     },
     {
      "name": "Black+Blue Buttercake",
      "price": "18",
      "desc": "salted caramel sauce, white chocolate cream, fresh berries"
     },
     {
      "name": "Eton Mess",
      "price": "18",
      "desc": "crisp meringue, strawberries, rhubarb, whipped cream"
     },
     {
      "name": "Basque Cheesecake",
      "price": "18",
      "desc": "chantilly cream, berry compote"
     },
     {
      "name": "Dark Chocolate Torte",
      "price": "18",
      "desc": "white chocolate sesame crémeux, miso caramel, cocoa nib crumble, sesame tuile, chantilly cream"
     },
     {
      "name": "Sticky Toffee Pudding",
      "price": "17",
      "desc": "toffee sauce, vanilla ice cream"
     }
    ]
   }
  ]
 }
];
