/* Dish glossary: one page per signature cut or dish, titled as the question people ask.
   General facts are standard steakhouse knowledge; everything under "At Black+Blue" is from the client's menu and pages.
   Prices as printed on blackandbluesteakhouse.ca/toronto-menu/ (2026-10-22). */
export type Dish = {
  slug: string; name: string; question: string; answer: string; img: string; alt: string;
  body: string[]; atBB: string; prices: [string, string][]; faqs: [string, string][];
};

export const dishes: Dish[] = [
  {
    slug: "kobe-beef", name: "Japanese Kobe Beef", question: "What is Kobe beef, and where can you eat it in Toronto?",
    answer: "Kobe beef is Wagyu from Tajima cattle raised in Hyogo Prefecture, Japan, sold only through certified members of the Kobe Beef Marketing & Distribution Promotion Association; Black+Blue in Toronto and Vancouver are certified Kobe-Beef restaurants.",
    img: "kobe", alt: "Certified Kobe beef striploin beside its bronze certificate in the Black+Blue salt locker",
    body: [
      "Kobe is not a breed but a protected name. To carry it, the beef has to come from Tajima-strain Japanese Black cattle born, raised and processed in Hyogo Prefecture and meet strict marbling and quality thresholds. Restaurants that sell it are licensed and display a bronze bull and a numbered certificate.",
      "What sets it apart is the marbling the Japanese call shimofuri: fine, even threads of fat through the muscle. That fat melts at a low temperature, which is why Kobe is served in small portions, cooked quickly, and priced by the ounce.",
    ],
    atBB: "Black+Blue takes great pride in being one of the select few dining rooms in North America that offers certified Kobe beef ribeye and striploin cuts. The secret behind this prestige cut of meat is the umami flavour that’s embedded in the “shimofuri” marbling.",
    prices: [["Rib Eye", "52 per oz"], ["Striploin", "56 per oz"], ["Tenderloin", "69 per oz · limited availability"]],
    faqs: [
      ["Is Kobe beef the same as Wagyu?", "All Kobe beef is Wagyu, but very little Wagyu is Kobe. Kobe is the certified name for Tajima Wagyu from Hyogo Prefecture."],
      ["How is Kobe beef priced at Black+Blue?", "By the ounce: rib eye 52, striploin 56 and tenderloin 69 per ounce, with tenderloin in limited availability."],
      ["Do I need to reserve Kobe beef in advance?", "Kobe is on the dinner and lunch menus; for a large party or a specific cut, mention it when you book a table."],
    ],
  },
  {
    slug: "a5-wagyu", name: "Japanese A5 Wagyu", question: "What does A5 Wagyu mean?",
    answer: "A5 is the top grade in the Japanese beef grading system: “A” for the highest yield and “5” for the highest quality, which requires exceptional marbling; at Black+Blue, in Toronto and Vancouver, every Japanese Wagyu cut is A5 with a marbling score of 8–10.",
    img: "striploin", alt: "A5 Wagyu striploin with dense white marbling",
    body: [
      "Japanese beef is graded on two scales. The letter (A to C) measures how much usable meat the carcass yields; the number (1 to 5) measures quality: marbling, colour, firmness and the fat itself. A5 is the best of both.",
      "Marbling is scored separately on the Beef Marbling Standard (BMS), from 1 to 12. A5 starts at 8, so “A5, BMS 8–10” describes beef with dense, fine marbling that cooks quickly and eats rich: a few ounces is a serving.",
    ],
    atBB: "Japanese Wagyu cattle are known worldwide for producing meat with exceptional marbling, naturally enhanced flavour, tenderness and juiciness. All of our Japanese Wagyu cuts have a quality score of A5 and a marbling score between 8-10, including the ultra-premium Miyazaki Wagyu.",
    prices: [["Rib Eye", "28 per oz"], ["Striploin", "31 per oz"], ["Tenderloin", "39 per oz · limited availability"], ["Wagyu Hot Stone (Happy Hour)", "34"]],
    faqs: [
      ["Is A5 Wagyu the same as Kobe beef?", "No. A5 is a grade any Japanese Wagyu can earn; Kobe is a protected origin, and Kobe beef must also reach quality grade 4 or 5 with a marbling score of 6 or more."],
      ["How much A5 Wagyu should I order?", "It is very rich. Many guests share three to six ounces as a course alongside a Canadian Prime steak."],
      ["Can I try A5 Wagyu without ordering a steak?", "Yes: the Wagyu nigiri on the raw bar, the Black+Blue Surf & Turf roll, and the Wagyu Hot Stone at Happy Hour, cooked on a salt brick."],
    ],
  },
  {
    slug: "dry-aged-steak", name: "Dry-Aged Beef", question: "What is dry-aged steak?",
    answer: "Dry-aged steak is beef rested uncovered in a cold, controlled locker for weeks, so moisture evaporates and natural enzymes tenderise the meat; at Black+Blue, in Toronto and Vancouver, every steak is dry-aged 28–45 days in a Himalayan salt-brick locker in the dining room.",
    img: "locker", alt: "Prime rib roasts dry-aging in front of the backlit Himalayan salt wall at Black+Blue",
    body: [
      "Fresh beef is mostly water. Hung on open racks at just above freezing, with air moving around it, a whole cut slowly loses moisture and concentrates; the meat’s own enzymes break down connective tissue at the same time. The result is a firmer, beefier, nuttier steak that is noticeably more tender.",
      "Ageing is measured in days. Around four weeks the texture changes most; past five or six weeks the flavour becomes deeper and more funky. The dried outer crust is trimmed away before the steaks are cut, which is part of why dry-aged beef costs more.",
    ],
    atBB: "We proudly display our beef in the centre of the dining room. The pale pink and orange wall is made of Himalayan salt bricks. The salt purifies the air and naturally removes moisture. This dry-aging process infuses an unforgettable flavour as it tenderizes the meat. All our steaks are kept in the cooler for 28-45 days and ensures a flavour concentration of the highest quality.",
    prices: [["Canadian Prime New York Striploin", "89 (14oz)"], ["Canadian Prime Tenderloin", "89 (8oz)"], ["Canadian Prime Rib Eye", "109 (14oz)"], ["Cowboy Rib-Eye", "235 (36oz)"]],
    faqs: [
      ["Can I see the salt locker?", "Yes. It is in the centre of the dining room, and guests can receive an interactive experience with a Black+Blue butcher to learn more about the restaurant’s steak program."],
      ["Does salt-ageing make the steak salty?", "No. The salt bricks draw moisture from the air in the locker and keep it clean; the beef is not salted by them."],
      ["How long is Black+Blue beef aged?", "28 to 45 days."],
    ],
  },
  {
    slug: "canadian-prime", name: "Canadian Prime", question: "What is Canadian Prime beef?",
    answer: "Canadian Prime is the highest grade in the Canadian beef grading system, given to beef with abundant marbling; only about 2% of graded Canadian beef earns it.",
    img: "platter", alt: "Sliced Canadian Prime steak on a silver platter with copper pots of sides",
    body: [
      "Canadian beef is graded for quality from Canada A up to Canada AAA and, above that, Canada Prime. The grade is set mostly by marbling: the fine fat laced through the red meat, which bastes the steak from the inside as it cooks.",
      "Prime is rare because few animals reach that level of marbling. It is the steak to order if you want the classic steakhouse experience: a thick-cut striploin or rib eye with a hard sear and a juicy, tender centre.",
    ],
    atBB: "Canadian prime-grade beef features abundant marbling (red meat laced with an even fat distribution). The presence of this fat creates a more tender and juicy cut of beef that cooks well in all conditions. Only 2% of graded Canadian beef is rated prime.",
    prices: [["New York Striploin", "89 (14oz)"], ["Tenderloin", "89 (8oz)"], ["Rib Eye", "109 (14oz)"], ["Cowboy Rib-Eye", "235 (36oz)"], ["Steak & Frites (lunch, 10oz striploin)", "59"]],
    faqs: [
      ["Is Canadian Prime the same as USDA Prime?", "They are separate grading systems with similar marbling standards. Black+Blue serves both Canadian and US prime-grade beef."],
      ["Which cut should I choose?", "Striploin for a firmer bite and beefy flavour, tenderloin for the most tender, rib eye for the richest; the 36oz Cowboy Rib-Eye is for sharing."],
      ["Are the Prime steaks dry-aged?", "Yes, all Black+Blue beef is dry-aged 28–45 days in the salt locker."],
    ],
  },
  {
    slug: "beef-wellington", name: "Beef Wellington", question: "What is Beef Wellington?",
    answer: "Beef Wellington is a centre-cut beef tenderloin wrapped in mushroom duxelles and puff pastry, baked and carved into thick slices; at Black+Blue Toronto it is served for two at 169 (and on Wellington Mondays), and Black+Blue Vancouver serves it at 74.",
    img: "wellington", alt: "Beef Wellington cut to show the pink tenderloin, duxelles and puff pastry",
    body: [
      "The tenderloin is seared, spread with duxelles (finely chopped mushrooms cooked down with shallots and butter), wrapped in a thin crêpe or ham to keep the pastry crisp, then enclosed in puff pastry and baked until the pastry is deep gold and the beef is pink.",
      "It is a dish for sharing and for occasions: it takes time to make, it has to be timed to the minute, and it is carved at the table or the pass.",
    ],
    atBB: "Beef Wellington for Two: mushroom duxelles, crêpe, puff pastry, truffle jus, seasonal vegetables, pommes purée. On Mondays: a three-course menu featuring a Tableside Warm Mushroom Salad to start, followed by a perfectly prepared Wellington with classic accompaniments, and dessert to finish.",
    prices: [["Beef Wellington for Two", "169"], ["Wellington Mondays, three courses", "$195 for two"]],
    faqs: [
      ["Do I need to pre-order the Wellington?", "It is on the dinner menu every night; on Mondays it is the feature. Book a table to be sure of a seat."],
      ["How many people does it serve?", "It is portioned for two."],
      ["What comes with it?", "Truffle jus, seasonal vegetables and pommes purée."],
    ],
  },
  {
    slug: "prime-rib", name: "Prime Rib", question: "What is prime rib?",
    answer: "Prime rib is a standing rib roast of beef, slow-roasted on the bone and carved into thick slices, traditionally with jus and Yorkshire pudding; at Black+Blue a 14oz cut is 78 in Toronto and 73 in Vancouver, with three-course prime rib dinners every Sunday in both.",
    img: "prime-rib", alt: "Jus poured over a slice of prime rib with Yorkshire pudding",
    body: [
      "The name comes from the rib primal, the section of the animal the roast is cut from. It is roasted slowly and whole so the centre stays evenly pink from edge to edge, then rested and sliced to order.",
      "The classic accompaniments are English: the roasting juices served as jus, horseradish, and a tall Yorkshire pudding made in the hot drippings.",
    ],
    atBB: "Prime Rib: slow-roasted, yorkshire pudding, pommes purée, seasonal vegetables, red wine jus. Join us every Sunday for our famous Prime Rib Dinner including Caesar salad, 10 oz Northern Gold slow-roasted Prime Rib, Yorkshire pudding, mashed potatoes, seasonal vegetables, B+B’s Signature Butter Cake!",
    prices: [["Prime Rib (dinner)", "78 (14oz)"], ["Prime Rib Sundays, three courses, from 3:00pm", "$69"], ["Prime Rib Steak Sandwich (Monday Lunch 45)", "25"]],
    faqs: [
      ["Is prime rib the same as rib eye?", "They come from the same section. Prime rib is roasted whole and sliced; a rib eye is cut first and grilled as a steak."],
      ["When is Prime Rib Sunday?", "Every Sunday from 3:00pm."],
      ["Is prime rib always Prime grade?", "Not necessarily: “prime” refers to the rib primal. Black+Blue’s Sunday prime rib is 10 oz Northern Gold."],
    ],
  },
  {
    slug: "seafood-tower", name: "Seafood Tower", question: "What is on a seafood tower?",
    answer: "A seafood tower is a tiered platter of chilled shellfish served on ice; at Black+Blue Toronto the Seafood Tower (250) has east coast oysters, colossal shrimp, Dungeness crab, Atlantic lobster, king crab and marinated mussels and clams; Vancouver’s Chilled Seafood Platter is 275.",
    img: "seafood-tower", alt: "A three-tier seafood tower with oysters, lobster and sushi at Black+Blue",
    body: [
      "Towers come from the French plateau de fruits de mer: everything cold, cracked and ready to eat, stacked so a table can share it as the first course of a steakhouse dinner.",
      "The usual sauces are cocktail sauce, a mignonette of shallots and vinegar for the oysters, fresh horseradish and lemon.",
    ],
    atBB: "Seafood Tower: ½ dozen east coast oysters, colossal shrimp, ½ dungeness crab, ½ atlantic lobster, king crab, marinated mussels & clams, cocktail sauce, marie rose, mignonette, horseradish. The Deluxe Seafood Tower adds a dozen oysters, a whole crab and lobster, a king salmon roll and tuna, hamachi and scallop nigiri.",
    prices: [["Seafood Tower", "250"], ["Deluxe Seafood Tower", "450"], ["Fresh Oysters", "30 ½ dozen | 55 dozen"], ["Fresh Oysters (Happy Hour)", "2 per piece"]],
    faqs: [
      ["How many people does a seafood tower serve?", "The Seafood Tower is a generous starter for a table to share; the Deluxe is built for a larger group."],
      ["Is there caviar?", "Yes: Royal Osetra (168), Imperial Osetra (174) and Beluga (450), 30 grams, with blini and traditional garnish."],
      ["When are oysters $2?", "At Happy Hour, daily from 2:30pm to 5:30pm."],
    ],
  },
  {
    slug: "tomahawk-steak", name: "Tomahawk Steak", question: "What is a tomahawk steak?",
    answer: "A tomahawk is a thick bone-in rib eye cut with the full rib bone left long and cleaned, so it looks like an axe; at Black+Blue the Prime Tomahawk is a butcher cut at market price, with daily availability from your server; Vancouver also offers an Australian Wagyu Tomahawk.",
    img: "carve", alt: "A chef carving at the Black+Blue butcher board",
    body: [
      "It is a rib eye, the richest of the classic steaks, left on a rib bone that has been frenched (scraped clean) to its full length. Most weigh well over two pounds and are cooked slowly, rested and carved for the table.",
      "The bone does not add much flavour on its own, but cooking on the bone keeps the meat beside it juicy, and the size makes it a shared centrepiece.",
    ],
    atBB: "Prime Butcher Cuts: Prime Tomahawk | Porterhouse, MP, ask server for daily availability. For a steak to share that is always on the menu, the Cowboy Rib-Eye is 36oz.",
    prices: [["Prime Tomahawk | Porterhouse", "MP"], ["Cowboy Rib-Eye", "235 (36oz)"]],
    faqs: [
      ["How many people does a tomahawk serve?", "Usually two to three, with sides."],
      ["Is a tomahawk always available?", "It is a butcher cut: ask your server for the day’s availability, or mention it when you book."],
      ["What sauces go with it?", "Béarnaise, truffle jus, red wine jus or peppercorn, 5 each, or the Trio of Sauces, 15."],
    ],
  },
];

/* Vancouver and The Roof prices for the same cuts (blackandbluesteakhouse.ca/van-menu/ and /van-roof-menu/, 2026-10-22) */
export const vanPrices: Record<string, [string, string][]> = {
  "kobe-beef": [["Rib Eye", "52 per oz"], ["Striploin", "55 per oz"], ["Tenderloin", "68 per oz"]],
  "a5-wagyu": [["Rib Eye", "32 per oz"], ["Striploin", "34 per oz"], ["Tenderloin", "42 per oz"], ["Wagyu Hot Stone (Happy Hour on The Roof)", "33"]],
  "dry-aged-steak": [["Canadian Prime New York Striploin", "79 (12oz)"], ["Canadian Prime Tenderloin", "79 (8oz)"], ["Canadian Prime Rib-Eye", "112 (14oz)"], ["Cowboy Rib-Eye", "145 (24oz)"]],
  "canadian-prime": [["New York Striploin", "79 (12oz)"], ["Tenderloin", "79 (8oz)"], ["Rib-Eye", "112 (14oz)"], ["Cowboy Rib-Eye", "145 (24oz)"], ["Steak & Frites (lunch, 10oz striploin)", "56"]],
  "beef-wellington": [["Beef Wellington (Black+Blue Vancouver dinner)", "74"]],
  "prime-rib": [["Slow Roasted Prime Rib (dinner)", "73 (14oz)"], ["Canadian Prime Rib Happy Hour, Mon – Sat 2:00 – 5:00pm", "$45"], ["Prime Rib Sunday Dinner, three courses", "$59"]],
  "seafood-tower": [["Chilled Seafood Platter", "275"], ["Fresh Oysters", "28 doz 50 doz"], ["Feature Oysters (Happy Hour on The Roof)", "2.50 per"]],
  "tomahawk-steak": [["Prime Butcher Cuts: Prime Tomahawk | Porterhouse | Australian Wagyu Tomahawk", "MP"], ["Cowboy Rib-Eye", "145 (24oz)"]],
};
