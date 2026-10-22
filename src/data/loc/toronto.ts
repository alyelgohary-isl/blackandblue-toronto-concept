/* Black+Blue Toronto. Copy verbatim from blackandbluesteakhouse.ca/toronto-*; sources per line in work/copy.md. */
import type { Location } from "../locations";
import { menus } from "../menu";
import { faqToronto } from "./faq-toronto";
import { policies } from "./policies";

const book = "https://www.sevenrooms.com/explore/blackbluetoronto/reservations/create/search/?venues=blackbluetoronto%2Crileystoronto%20";
const tour = "https://cloud.threshold360.com/locations/8486630-1175407377";
const groupMenus = "https://blackandbluesteakhouse.ca/wp-content/uploads/2026/09/BB-TO-Group-Menus-2026-5.pdf";

export const toronto: Location = {
  key: "toronto", slug: "toronto", name: "Black+Blue Toronto", short: "Toronto",
  logo: { src: "assets/brand/wordmark.png", w: 292, h: 37, wordmark: true },
  address: { street: "130 King St West", city: "Toronto", region: "ON", postal: "M5X 2A2", country: "CA" },
  phone: "647.368.8283", tel: "tel:+16473688283", email: "info@blackandbluetoronto.com",
  maps: "https://www.google.com/maps/search/?api=1&query=Black%2BBlue+Steakhouse+130+King+St+West+Toronto",
  book, events: "https://glowbalrestaurantgroup.tripleseat.com/party_request/26669", groupMenus,
  festive: "https://glowbalgroup.com/holiday-events/toronto/black-blue/", tour, facebook: "https://www.facebook.com/blackandbluetoronto",
  /* contact page widget, rendered 2026-10-22. CONFIRM brunch start: the home page says 11:00 AM */
  hours: [
    { label: "Lunch", days: "Monday – Friday", time: "11:30 am – 2:00 pm", spec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "11:30", closes: "14:00" } },
    { label: "Happy Hour", days: "Monday – Sunday", time: "2:30 pm – 5:30 pm", spec: null },
    { label: "Dinner", days: "Monday – Sunday", time: "3:00 pm – 12:00 am", spec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "15:00", closes: "23:59" } },
    { label: "Brunch", days: "Saturday – Sunday", time: "10:30 am – 2:00 pm", spec: { days: ["Saturday", "Sunday"], opens: "10:30", closes: "14:00" } },
  ],
  pages: ["menu", "selection", "private", "about", "contact"],
  seo: {
    title: "Black+Blue Toronto | Kobe-Beef Certified Steakhouse, King St W",
    description: "Black+Blue Toronto, 130 King St West: Canada’s premier steak dining experience. Dry-aged beef, certified Kobe, A5 Wagyu, raw bar and private dining.",
  },
  film: {
    clips: [
      { id: "locker", dir: "frames/locker", prefix: "lo_", count: 61, fy: 0.46 },     // their salt-locker photo (prime.jpg): slow push-in
      { id: "kobe", dir: "frames/kobe", prefix: "ko_", count: 61, fx: 0.56, fy: 0.58 }, // their Kobe striploin with the certificate
      { id: "carve", dir: "frames/carve", prefix: "ca_", count: 41, fy: 0.52 },       // the chef carving the Wellington; frames 41–60 rearranged the pastry, cut
      { id: "primerib", dir: "frames/primerib", prefix: "pr_", count: 61, fy: 0.42 }, // the jus pour (BB.jpg, sharpened)
      { id: "room", dir: "frames/room", prefix: "ro_", count: 61, units: 0.9 },       // the room (blackblue-tor.jpg, sharpened)
    ],
    preload: 18,
    heroEyebrow: "Toronto · 130 King St West",
    heroTitle: ["The Golden Age", "of Steak"],
    tagline: "A decidedly unique dining experience",
    heroActions: [["Book a Table", book], ["Menu", "menu/"], ["Private Dining", "private-dining/"]],
    lots: [
      { no: "Lot 01 · The salt locker", title: ["Superior selection,", "superior flavour"], body: "The pale pink and orange wall is made of Himalayan salt bricks. The salt purifies the air and naturally removes moisture. All our steaks are kept in the cooler for 28-45 days and ensures a flavour concentration of the highest quality.", spec: [["Dry-aged", "28 – 45 days"], ["NY Striploin", "89 (14oz)"], ["Rib Eye", "109 (14oz)"], ["Cowboy Rib-Eye", "235 (36oz)"]] },
      { no: "Lot 02 · Hyogo, Japan", title: ["Japanese", "Kobe Beef"], body: "Black+Blue takes great pride in being one of the select few dining rooms in North America that offers certified Kobe beef ribeye and striploin cuts. The fatty “sashi” content dissolves at low temperatures, which literally means it melts in your mouth.", spec: [["Rib Eye", "52 per oz"], ["Striploin", "56 per oz"], ["Tenderloin", "69 per oz"], ["Availability", "Limited"]] },
      { no: "Lot 03 · Canadian Prime", title: ["Beef Wellington", "for Two"], body: "mushroom duxelles, crêpe, puff pastry, truffle jus, seasonal vegetables, pommes purée", spec: [["For two", "169"], ["Wellington Mondays", "$195 for two"], ["Châteaubriand for Two", "179 (16oz)"]] },
      { no: "Lot 04 · Slow-roasted", title: ["Prime", "Rib"], body: "slow-roasted, yorkshire pudding, pommes purée, seasonal vegetables, red wine jus", spec: [["Prime Rib", "78 (14oz)"], ["Prime Rib Sundays", "$69 · three courses"], ["Sundays", "from 3:00pm"]] },
      { no: "Lot 05 · 130 King St West", title: ["The", "Restaurant"], body: "Black+Blue Toronto focuses on classic steakhouse offerings with a twist, and the world’s most premium cuts of meat.", spec: [["Dinner", "Daily · 3:00pm – 12:00am"]], actions: [["Book a Table", book], ["Virtual Tour", tour]] },
    ],
  },
  welcome: "Welcome to Black+Blue, Canada’s premier steak dining experience. We offer the magic of the classic steak house combined with a modern and energetic twist. We take great pride in being Kobe Beef certified, in addition to offering our guests a selection of the world’s rarest cuts.",
  week: [
    { day: "Mon", items: [["Lunch 45", "Prime Rib Steak Sandwich · 25"], ["Wellington Mondays", "$195 for two"]] },
    { day: "Tue", items: [["Lunch 45", "Beef Bourguignon · 25"]] },
    { day: "Wed", items: [["Lunch 45", "Rigatoni Bolognese · 25"]] },
    { day: "Thu", items: [["Lunch 45", "Chopped Steak · 25"]] },
    { day: "Fri", items: [["Burger & Beer Friday", "$25 · lunch until 2:00pm"]] },
    { day: "Sat", items: [["Weekend Brunch", "tableside caesar & mimosa carts"]] },
    { day: "Sun", items: [["Weekend Brunch", ""], ["Prime Rib Sundays", "$69 · from 3:00pm"]] },
  ],
  weekFoot: ["Happy Hour · Daily · 2:30pm – 5:30pm", "Lunch Mon – Fri · Dinner nightly from 3:00pm"],
  features: [
    { title: "Lunch Features | $25", sub: "Monday to Thursday  |  “Lunch 45” Menu", img: "prime-rib-sandwich", alt: "Prime rib steak sandwich at Black+Blue Toronto",
      body: "Our “Lunch 45” menu is designed to have you in and out in just 45 minutes, Monday to Thursday. Perfect for lunch breaks or days packed with meetings, it delivers a delicious weekday lunch without the wait.",
      links: [["Book a Table", book], ["View Menu", "menu/#lunch-45"]] },
    { title: "Wellington Mondays", sub: "Three-Courses | $195 for two", img: "wellington", alt: "Beef Wellington on a Black+Blue carving board",
      body: "Mondays are looking up! Join us for a three-course menu featuring a Tableside Warm Mushroom Salad to start, followed by a perfectly prepared Wellington with classic accompaniments, and dessert to finish.",
      links: [["Book a Table", book], ["View Menu", "https://blackandbluesteakhouse.ca/wp-content/uploads/2025/02/bb-to-Wellington-Mondays-2024.pdf"]] },
    { title: "$25 Burger & Beer Friday", sub: "Friday lunch until 2:00pm", img: "burger", alt: "Smash burger, fries and a beer at Black+Blue Toronto",
      body: "Enjoy the perfect Friday combo for just $25! Elevate your burger experience with additional toppings for $3.50 each including half-sliced avocado, maple smoked bacon, and sautéed mushrooms. Or make it The Ultimate for $32 by adding all three toppings.",
      links: [["Book a Table", book]] },
    { title: "Weekend Brunch", sub: "Sat & Sun | 11:00am – 2:00pm", img: "brunch", alt: "Weekend brunch spread at Black+Blue Toronto",
      body: "Join us on weekends for our steakhouse brunch including tableside caesar cart and tableside mimosa cart.",
      links: [["View Menu", "menu/#brunch"]], confirm: "Brunch start time: home page says 11:00AM, contact page says 10:30am" },
    { title: "Prime Rib Sundays", sub: "$69 | Three-Courses | Every Sunday from 3:00pm", img: "prime-rib", alt: "Jus poured over prime rib with Yorkshire pudding",
      body: "Join us every Sunday for our famous Prime Rib Dinner including Caesar salad, 10 oz Northern Gold slow-roasted Prime Rib, Yorkshire pudding, mashed potatoes, seasonal vegetables, B+B’s Signature Butter Cake!",
      links: [["Book a Table", book]] },
    { title: "Happy Hour", sub: "Daily | 2:30pm to 5:30pm", img: "seafood-tower", alt: "Seafood tower with east coast oysters",
      body: "Fresh Oysters 2 per piece · Steak Tartare Bites 5.5 · Wagyu Hot Stone 34, A5 japanese wagyu cooked on a salt brick · All Beers on Tap 7 · Classic Martini 10.",
      links: [["Happy Hour Menu", "menu/#happy-hour"]] },
  ],
  sections: [
    { kind: "split", eyebrow: "Events & Private Dining", title: ["Explore Our Holiday", "Event Options"], img: "private-room", alt: "The private dining room at Black+Blue Toronto, red velvet chairs and the wine wall",
      body: [
        "Discover private dining rooms, semi-private spaces and full restaurant buyouts for corporate holiday parties, team dinners, client receptions, holiday lunches and year-end celebrations.",
        "Our venue offers a variety of elegant dining spaces, including intimate private rooms for up to 16 and 32 guests, versatile mezzanine and garden patio options for larger gatherings, and full restaurant buyouts accommodating up to 350 guests.",
      ],
      actions: [["Group Event Booking", "private-dining/"], ["Holiday Details", "https://glowbalgroup.com/holiday-events/toronto/black-blue/"], ["Group Menus", groupMenus]] },
  ],
  distinctions: [
    { title: "Kobe-Beef Certified", sub: "Canada" }, { title: "Top 10% of Restaurants", sub: "Worldwide" },
    { title: "Travellers’ Choice", sub: "Tripadvisor · 2021" }, { title: "Award of Excellence", sub: "DiRōNA" },
  ],
  distinctionsConfirm: "which of these distinctions apply to the Toronto room (the live Toronto home shows all of them, plus \"#1 in Vancouver\")",
  visit: {
    title: ["130 King St", "West"], note: "In the Exchange Tower, in the heart of the Financial District.",
    parking: ["24/7 Underground parking facilities @ First Canadian Place Towers/Exchange", "Access from Adelaide & York Street (119 York St)", "Weekday 6am-6pm $30 · Weekday 24 Hour Rate $40", "Evening Flat Rate 6pm-6am $10 · Weekend & Holidays (per 24 hours): 6am-6am $12"],
    access: "The main floor of the restaurant is fully accessible, including both entrances, the garden patio and access to restrooms. The second-floor mezzanine can be accessed by stairs only.",
  },
  heroes: {
    menu: { loop: "tor-menu", title: ["Menus", ""], label: "Sliced steak on a silver platter, steam rising from copper pots of sides", lede: "Classic steakhouse offerings with a twist, and the world’s most premium cuts of meat. Dinner nightly from 3:00pm; lunch Monday to Friday; brunch on weekends." },
    selection: { loop: "striploin", title: ["Superior selection,", "superior flavour"], label: "The camera moves across a marbled Wagyu striploin", lede: "We proudly display our beef in the centre of the dining room. The pale pink and orange wall is made of Himalayan salt bricks. The salt purifies the air and naturally removes moisture." },
    private: { loop: "tor-private", title: ["Events &", "Private Dining"], label: "The camera moves slowly down the long private dining table toward the wine wall", lede: "Intimate private rooms for up to 16 and 32 guests, versatile mezzanine and garden patio options for larger gatherings, and full restaurant buyouts accommodating up to 350 guests.", actions: [["Event Request", "#inquiry"], ["Group Menus", groupMenus]] },
    about: { loop: "tor-about", title: ["Welcome!", "The Golden Age of Steak"], label: "The Black+Blue sign on King St West, from afternoon to dusk as the gold letters light up", lede: "Black+Blue is Canada’s premier steak dining experience with locations in Vancouver and Toronto offering the magic of a classic steak house combined with a modern and energetic ambiance.", actions: [["Virtual Tour", tour], ["Book a Table", book]] },
    contact: { loop: "tor-contact", title: ["Contact", "& Hours"], label: "The camera moves slowly through the garden dining room under hanging greenery", lede: "130 King St West, Toronto, ON, M5X 2A2 · 647.368.8283 · info@blackandbluetoronto.com" },
  },
  menus,
  selection: {
    intro: [
      "This dry-aging process infuses an unforgettable flavour as it tenderizes the meat. All our steaks are kept in the cooler for 28-45 days and ensures a flavour concentration of the highest quality.",
      "All beef is dry-aged in a one-of-a-kind Himalayan salt-lined meat locker, where guests can receive an interactive experience with a Black+Blue butcher to learn more about the restaurant’s unique steak program.",
    ],
    lots: [
      { no: "Lot 01", where: "Canada", title: "Canadian Prime", img: "platter", alt: "Sliced Canadian Prime steak on a silver platter", body: "Canadian prime-grade beef features abundant marbling (red meat laced with an even fat distribution). The presence of this fat creates a more tender and juicy cut of beef that cooks well in all conditions. Only 2% of graded Canadian beef is rated prime.", spec: [["New York Striploin", "89 (14oz)"], ["Tenderloin", "89 (8oz)"], ["Rib Eye", "109 (14oz)"], ["Cowboy Rib-Eye", "235 (36oz)"], ["Prime Tomahawk | Porterhouse", "MP"]], link: "dishes/canadian-prime/" },
      { no: "Lot 02", where: "Japan · A5 · BMS 8–10", title: "Japanese A5 Wagyu", img: "striploin", alt: "A5 Wagyu striploin with dense marbling", body: "Japanese Wagyu cattle are known worldwide for producing meat with exceptional marbling, naturally enhanced flavour, tenderness and juiciness. All of our Japanese Wagyu cuts have a quality score of A5 and a marbling score between 8-10.", spec: [["Rib Eye", "28 per oz"], ["Striploin", "31 per oz"], ["Tenderloin", "39 per oz · limited"]], link: "dishes/a5-wagyu/" },
      { no: "Lot 03", where: "Hyogo, Japan · certified", title: "Japanese Kobe Beef", img: "kobe", alt: "Certified Kobe beef striploin beside its bronze bull certificate", body: "Black+Blue takes great pride in being one of the select few dining rooms in North America that offers certified Kobe beef ribeye and striploin cuts. The secret behind this prestige cut of meat is the umami flavour that’s embedded in the “shimofuri” marbling. The fatty “sashi” content dissolves at low temperatures, which literally means it melts in your mouth.", spec: [["Rib Eye", "52 per oz"], ["Striploin", "56 per oz"], ["Tenderloin", "69 per oz · limited"]], link: "dishes/kobe-beef/" },
      { no: "Lot 04", where: "Australia", title: "Australian Wagyu", alt: "", body: "Australian Wagyu is renowned for its exceptional marbling, rich flavour, and buttery tenderness. Raised in Australia using a combination of traditional Japanese breeding and Australian farming practices, this premium beef offers a beautiful balance of flavour.", spec: [["Striploin", "110 (10oz)"], ["Rib-Eye", "134 (10oz)"]], link: "menu/#dinner" },
    ],
  },
  privateDining: {
    intro: [
      "Welcome to Black+Blue Toronto, Canada’s premier steak dining experience. Our restaurant blends the classic charm of a traditional steakhouse with a modern, energetic ambiance. We take great pride in being one of the few Kobe-Beef certified restaurants in Canada and offer an exquisite selection of the world’s most premium cuts of steak.",
      "We look forward to welcoming you to Black+Blue Toronto.",
    ],
    rooms: [{ figure: "16", label: "Intimate private room" }, { figure: "32", label: "Private room" }, { figure: "Mezzanine", label: "& garden patio, for larger gatherings" }, { figure: "350", label: "Full restaurant buyout" }],
    roomsConfirm: "capacities of the mezzanine and garden patio, and which room seats 16 vs 32",
    gallery: [
      { img: "long-table", alt: "The long private table with red velvet chairs", wide: true },
      { img: "tree-room", alt: "The olive tree and booths in the main dining room" },
      { img: "patio", alt: "The garden patio room under hanging greenery" },
      { img: "room", alt: "The main dining room and bar at Black+Blue Toronto", wide: true },
    ],
    formNote: "A Group Set Menu is required for all groups of 10 guests and larger. Tell us the date, the size of your party and the room you have in mind, and our events team will reply with availability and the minimum spend for that day.",
    spaces: ["Private room (up to 16)", "Private room (up to 32)", "Mezzanine", "Garden patio", "Full buyout (up to 350)", "Not sure yet"],
    faq: faqToronto,
    faqNote: "The final guaranteed guest count is required 72 hours prior to your event; menu and beverage selections 2 weeks prior.",
    maxGuests: 350,
  },
  about: {
    highlights: [
      ["Dry-Aged Beef (28 – 45 days)", "all beef is dry-aged in a one-of-a-kind Himalayan salt-lined meat locker, where guests can receive an interactive experience with a Black+Blue butcher to learn more about the restaurant’s unique steak program"],
      ["Kobe Beef Certified", "one of the only license holders in Canada to sell certified Japanese Kobe Beef"],
      ["Japanese A5 Wagyu", "including the ultra-premium Miyazaki Wagyu"],
      ["Canada and USDA Prime", "Canadian and US prime-grade beef creating the most tender and juicy cuts of beef"],
      ["Seasonal Seafood, Raw Bar and Caviar", "from seafood platters to seasonal oysters and the freshest of sushi, to Osetra and Beluga caviar"],
      ["Classic Steakhouse Starters and Sides (with a twist)", "from tableside caesar to creamed spinach and mac and cheese sticks, to the fully loaded B+B Millionaire Potato with crème fraiche, taleggio cheese and shaved black truffle"],
    ],
    room: { eyebrow: "The room", title: ["Two storeys at", "130 King St West"], img: "dining-room", alt: "The main dining room with the white bull mural and the olive tree",
      body: ["The main floor of the restaurant is fully accessible, including both entrances, the garden patio and access to restrooms. The second-floor mezzanine can be accessed by stairs only.", "We anticipate 2.5 – 3 hours of service for a full seated dinner."] },
    policies,
    press: [
      ["Toronto Life", "What’s on the menu at Black and Blue, a two-storey, 9,000-square-foot steakhouse in the old Toronto Stock Exchange space", "https://torontolife.com/food/whats-on-the-menu-at-black-and-blue-a-two-storey-9000-square-foot-steakhouse-in-the-old-toronto-stock-exchange-space/"],
      ["blogTO", "Black + Blue Toronto", "https://www.blogto.com/restaurants/black-blue-steakhouse-toronto/"],
      ["Daily Hive", "Black+Blue: Vancouver steakhouse opening in Toronto", "https://dailyhive.com/vancouver/black-blue-steakhouse-toronto"],
      ["Streets of Toronto", "Toronto’s financial district is now home to a swanky new steak house", "https://streetsoftoronto.com/torontos-financial-district-is-now-home-to-a-swanky-new-steak-house/"],
    ],
  },
  contactNote: "For reservations, please book a table online or call 647.368.8283. For groups and private dining, use the event request.",
  schema: { telephone: "+1-647-368-8283" },
};
