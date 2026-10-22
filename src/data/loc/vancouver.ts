/* Black+Blue Vancouver. Copy verbatim from blackandbluesteakhouse.ca/vancouver-home/, /van-about/, /van-private-dining/,
   /van-a-superior-selection/, /van-contact/, /van-faq/ and /van-menu/ (2026-10-22). */
import type { Location } from "../locations";
import { vancouverMenus } from "../menu-vancouver";
import { faqVancouver } from "./faq-vancouver";
import { policies } from "./policies";

export const vanBook = "http://www.sevenrooms.com/explore/blackandbluevancouver/reservations/create/search/?venues=blackandbluevancouver,glowbalvancouver,coast,italiankitchenvancouver,rileysfishandsteak";
const tour = "https://viewer.threshold360.com/?thresholdId=8503270-1647117146";
const groupMenus = "https://blackandbluesteakhouse.ca/wp-content/uploads/2026/10/BB-Van-Group-Menus-2026.pdf";
const landSea = "https://blackandbluesteakhouse.ca/wp-content/uploads/2025/11/bb-van-land-sea-june-2025.pdf";

export const vanHours: Location["hours"] = [
  { label: "Hours", days: "Monday – Sunday", time: "11:30 am – 12:00 am", spec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "11:30", closes: "23:59" } },
  { label: "Lunch", days: "Monday – Sunday", time: "11:30 am – 2:00 pm", spec: null },
  { label: "Happy Hour", days: "Monday – Sunday", time: "2:00 pm – 5:00 pm", spec: null },
];
export const vanParking = [
  "Valet services are available Thursday to Sunday from 5:00pm-11pm. As this is a third-party service, we cannot include valet charges on your final bill.",
  "There are several private parkades within a 5-minute walk of the restaurant, as well as street parking in the vicinity.",
];
export const vanDistinctions = [
  { title: "Kobe-Beef Certified", sub: "Canada" },
  { title: "Voted Vancouver’s Best Steakhouse", sub: "Golden Plates · 2025" },
  { title: "#1 in Vancouver", sub: "Tripadvisor" },
  { title: "Award of Excellence", sub: "DiRōNA" },
];
export const vanSelectionLots: Location["selection"]["lots"] = [
  { no: "Lot 01", where: "Canada", title: "Canadian Prime", img: "van-porterhouse", alt: "A prime porterhouse dry-aging in front of the salt wall", body: "Canadian prime-grade beef features abundant marbling (red meat laced with an even fat distribution). The presence of this fat creates a more tender and juicy cut of beef that cooks well in all conditions. Only 2% of graded Canadian beef is rated prime.", spec: [["New York Striploin", "79 (12oz)"], ["Tenderloin", "79 (8oz)"], ["Rib-Eye", "112 (14oz)"], ["Cowboy Rib-Eye", "145 (24oz)"], ["Prime Butcher Cuts", "MP"]], link: "dishes/canadian-prime/" },
  { no: "Lot 02", where: "United States", title: "USDA Prime", alt: "", body: "USDA prime is the most tender, flavourful and highest quality beef that comes from the US. We offer the long-bone ribeye steak, charred to perfection.", spec: [["Long-bone rib eye", "ask your server"]], link: "menu/#dinner" },
  { no: "Lot 03", where: "Japan · A5 · BMS 8–10", title: "Japanese A5 Wagyu", img: "striploin", alt: "A5 Wagyu striploin with dense marbling", body: "Japanese Wagyu cattle are known worldwide for producing meat with exceptional marbling, naturally enhanced flavour, tenderness and juiciness. All of our Japanese Wagyu cuts have a quality score of A5 and a marbling score between 8-10.", spec: [["Rib Eye", "32 per oz"], ["Striploin", "34 per oz"], ["Tenderloin", "42 per oz"]], link: "dishes/a5-wagyu/" },
  { no: "Lot 04", where: "Hyogo, Japan · certified", title: "Japanese Kobe Beef", img: "kobe", alt: "Certified Kobe beef striploin beside its bronze bull certificate", body: "Black+Blue takes great pride in being one of the select few dining rooms in North America that offers certified Kobe beef ribeye and striploin cuts. The secret behind this prestige cut of meat is the umami flavour that’s embedded in the “shimofuri” marbling. The fatty “sashi” content dissolves at low temperatures, which literally means it melts in your mouth.", spec: [["Rib Eye", "52 per oz"], ["Striploin", "55 per oz"], ["Tenderloin", "68 per oz"]], link: "dishes/kobe-beef/" },
];

export const vancouver: Location = {
  key: "vancouver", slug: "vancouver", name: "Black+Blue Vancouver", short: "Vancouver",
  logo: { src: "assets/brand/wordmark.png", w: 292, h: 37, wordmark: true },
  address: { street: "1032 Alberni St", city: "Vancouver", region: "BC", postal: "V6E 1A3", country: "CA" },
  phone: "604 637 0777", tel: "tel:+16046370777", email: "info@blackandblue.ca",
  maps: "https://www.google.com/maps/search/?api=1&query=Black%2BBlue+1032+Alberni+St+Vancouver",
  book: vanBook, events: "https://glowbalrestaurantgroup.tripleseat.com/dynamic_party_request/1767", groupMenus,
  festive: "https://glowbalgroup.com/holiday-events/vancouver/black-blue/", tour, facebook: "https://www.facebook.com/blackandbluevancouver",
  hours: vanHours,
  pages: ["menu", "selection", "private", "about", "contact"],
  seo: {
    title: "Black+Blue Vancouver | Kobe-Beef Certified Steakhouse, Alberni St",
    description: "Black+Blue Vancouver, 1032 Alberni St: dry-aged Canadian Prime, certified Kobe and A5 Wagyu, Land & Sea Mondays, prime rib happy hour and The Roof upstairs.",
  },
  film: {
    clips: [
      { id: "vlocker", dir: "frames/van_locker", prefix: "vl_", count: 61, fy: 0.45 },     // their porterhouse in the salt locker (prime2.jpg): push-in
      { id: "vwagyu", dir: "frames/striploin", prefix: "st_", count: 61, fy: 0.5 },        // their Wagyu striploin (kobe-2.jpg), also on /van-a-superior-selection/
      { id: "vlandsea", dir: "frames/van_landsea", prefix: "vs_", count: 61, fy: 0.5 },    // Land & Sea Mondays (land-sea.jpg): jus over the steak
      { id: "vprimerib", dir: "frames/van_primerib", prefix: "vp_", count: 61, fy: 0.45 }, // prime rib happy hour (bb-1.jpg, sharpened): the jus pour
      { id: "vroom", dir: "frames/van_room", prefix: "vr_", count: 61, units: 0.9 },       // the dining room at night (blackblue-van.jpg, sharpened)
    ],
    preload: 18,
    heroEyebrow: "Vancouver · 1032 Alberni St",
    heroTitle: ["The Golden Age", "of Steak"],
    tagline: "A decidedly unique dining experience",
    heroActions: [["Book Now", vanBook], ["Menu", "menu/"], ["Group Event Booking", "private-dining/"]],
    lots: [
      { no: "Lot 01 · Seeing is believing", title: ["Dry-aged", "28 – 45 days"], body: "We dry-age all of our beef in our one-of-a-kind, Himalayan salt-lined meat locker. Strict temperature and moisture-controls allow the salt air to penetrate the meat over time which provides unparalleled flavour and tenderness.", spec: [["NY Striploin", "79 (12oz)"], ["Rib-Eye", "112 (14oz)"], ["Cowboy Rib-Eye", "145 (24oz)"], ["Butcher cuts", "MP"]] },
      { no: "Lot 02 · Japan · A5", title: ["Japanese", "A5 Wagyu"], body: "Japanese Wagyu cattle are known worldwide for producing meat with exceptional marbling, naturally enhanced flavour, tenderness and juiciness. All of our Japanese Wagyu cuts have a quality score of A5 and a marbling score between 8-10.", spec: [["Rib Eye", "32 per oz"], ["Striploin", "34 per oz"], ["Tenderloin", "42 per oz"], ["Kobe Striploin", "55 per oz"]] },
      { no: "Lot 03 · Every Monday night", title: ["Land & Sea", "Mondays"], body: "Select your cut of beef with tiger prawns, lobster, or scallops, served with sides, sauces, and finished with a decadent layered chocolate cake.", spec: [["To start", "tableside chopped salad"], ["Sea", "prawns · lobster · scallops"]], actions: [["View Menu", landSea]] },
      { no: "Lot 04 · Mon – Sat · 2:00 – 5:00pm", title: ["Canadian Prime Rib", "Happy Hour"], body: "Savour this perfectly prepared slow-roasted Canadian Prime Rib served with Yorkshire pudding, mashed potatoes, and seasonal vegetables.", spec: [["Happy Hour", "$45"], ["Prime Rib (dinner)", "73 (14oz)"], ["Sunday Dinner", "$59 · three courses"]] },
      { no: "Lot 05 · 1032 Alberni St", title: ["The", "Restaurant"], body: "A genuine smile at the door, friendly and knowledgeable service, table-side creativity, a wine list that’s second to none, and of course steaks that are simply world class.", spec: [["Open daily", "11:30am – 12:00am"]], actions: [["Book a Table", vanBook], ["Virtual Tour", tour]] },
    ],
  },
  welcome: "Welcome to Black+Blue, Canada’s premier steak dining experience. We offer the magic of the classic steak house combined with a modern and energetic twist. We take great pride in being Kobe Beef certified, in addition to offering our guests a selection of the world’s rarest cuts.",
  week: [
    { day: "Mon", items: [["Land & Sea Mondays", "every Monday night"], ["Lunch 45", "Rigatoni Bolognese · 20"]] },
    { day: "Tue", items: [["Lunch 45", "Jerk Chicken Cobb · 20"]] },
    { day: "Wed", items: [["Lunch 45", "Spring Salmon Tacos · 20"]] },
    { day: "Thu", items: [["Lunch 45", "Prime Beef Schnitzel · 20"]] },
    { day: "Fri", items: [["$20 Burger & Beer Friday", "until 2:00pm"]] },
    { day: "Sat", items: [["Prime Rib Happy Hour", "$45 · 2:00 – 5:00pm"]] },
    { day: "Sun", items: [["Prime Rib Sunday Dinner", "$59 · three courses"]] },
  ],
  weekFoot: ["Canadian Prime Rib Happy Hour · Mon – Sat · 2:00pm – 5:00pm · $45", "Open daily 11:30am – 12:00am"],
  features: [
    { title: "Land & Sea Mondays", sub: "Every Monday night", img: "van-land-sea", alt: "Steak, lobster, prawns and sides for Land & Sea Mondays",
      body: "Enjoy our exclusive weekly Land & Sea dinner, starting with a fresh tableside chopped salad. Select your cut of beef with tiger prawns, lobster, or scallops, served with sides, sauces, and finished with a decadent layered chocolate cake.",
      links: [["Book a Table", "https://sevn.ly/xrlxRwYd"], ["View Menu", landSea]] },
    { title: "Lunch Features | $20", sub: "Monday to Thursday  |  “Lunch 45” Menu", img: "roof-cobb", alt: "Jerk chicken cobb salad from the Lunch 45 menu",
      body: "Our “Lunch 45” menu is designed to have you in and out in just 45 minutes, Monday to Thursday. Perfect for lunch breaks or days packed with meetings, it delivers a delicious weekday lunch without the wait.",
      links: [["Book a Table", vanBook], ["View Menu", "menu/#lunch-45"]] },
    { title: "Canadian Prime Rib Happy Hour", sub: "Mon - Sat | 2:00pm – 5:00pm | $45", img: "van-prime-rib", alt: "Jus poured over slow-roasted Canadian prime rib",
      body: "Savour this perfectly prepared slow-roasted Canadian Prime Rib served with Yorkshire pudding, mashed potatoes, and seasonal vegetables.",
      links: [["Book Now", "https://sevn.ly/xYbd07WY"]] },
    { title: "$20 Burger & Beer Friday", sub: "Fridays until 2:00pm", img: "van-burger", alt: "Smash burger, fries and a beer",
      body: "Elevate your burger experience with additional toppings for $3.50 each including half-sliced avocado, maple smoked bacon, and sautéed mushrooms. Or make it The Ultimate for $25 by adding all three toppings.",
      links: [["Book Now", "https://sevn.ly/xGW2IO8F"]] },
    { title: "Canadian Prime Rib Sunday Dinner", sub: "$59 | Three-Courses | Every Sunday", img: "prime-rib", alt: "Jus poured over prime rib with Yorkshire pudding",
      body: "Join us every Sunday for our famous Prime Rib Dinner including Caesar salad, 12oz slow-roasted Canadian Prime Rib, Yorkshire pudding, mashed potatoes, seasonal vegetables, B+B’s Signature Butter Cake! Please note, this feature is only available in Black+Blue dining room.",
      links: [["Book a Table", vanBook]] },
    { title: "Happy Hour on The Roof", sub: "Daily | 2:00pm – 5:00pm", img: "roof-guests", alt: "Guests at a table on The Roof",
      body: "Feature Oysters 2.50 per · Philly Cheesesteak Sliders 5 per · Fritto Misto 16 · All on Tap 7 · Negroni 9.",
      links: [["Happy Hour Menu", "menu/#happy-hour"], ["The Roof", "/the-roof/"]] },
  ],
  sections: [
    { kind: "split", eyebrow: "Upstairs", title: ["The Roof at", "Black+Blue"], img: "roof-garden", alt: "Long tables under hanging greenery on The Roof",
      body: ["The Roof, Black+Blue’s third floor outdoor restaurant and lounge, is Vancouver’s largest rooftop dining destination offering platinum seating to the city’s patio scene."],
      actions: [["Visit The Roof", "/the-roof/"], ["Roof Menu", "/the-roof/menu/"]] },
    { kind: "split", eyebrow: "Events & Private Dining", title: ["Explore Our Holiday", "Event Options"], img: "van-private", alt: "A laid private dining table at Black+Blue Vancouver", flip: true,
      body: ["Discover private dining rooms, semi-private spaces and full restaurant buyouts across Vancouver and Toronto for corporate holiday parties, team dinners, client receptions, holiday lunches and year-end celebrations."],
      actions: [["Group Event Booking", "private-dining/"], ["Holiday Details", "https://glowbalgroup.com/holiday-events/vancouver/black-blue/"], ["Group Menus", groupMenus]] },
  ],
  distinctions: vanDistinctions,
  distinctionsConfirm: "the Golden Plates badge (Georgia Straight, 2025) and #1 in Vancouver (Tripadvisor) as shown on the live Vancouver home; DiRōNA",
  visit: { title: ["1032 Alberni", "Street"], note: "The Roof, our third floor outdoor restaurant and lounge, is upstairs.", parking: vanParking, access: "Yes, there is an elevator that serves all levels of the restaurant." },
  heroes: {
    menu: { loop: "van-menu", title: ["Menus", ""], label: "Jus poured over the steak on a Land & Sea spread", lede: "Dinner, lunch, Lunch 45, happy hour and dessert at Black+Blue Vancouver. Open daily 11:30am – 12:00am." },
    selection: { loop: "van-selection", title: ["Superior selection,", "superior flavour"], label: "A prime porterhouse in front of the glowing salt wall", lede: "We proudly display our beef in the centre of the dining room. The pale pink and orange wall is made of Himalayan salt bricks. The salt purifies the air and naturally removes moisture." },
    private: { loop: "van-private", title: ["Events &", "Private Dining"], label: "A slow move along a laid private dining table", lede: "From executive meetings to celebratory receptions, corporate dinners and weddings, we house an array of beautiful spaces for every occasion.", actions: [["Event Request", "#inquiry"], ["Group Menus", groupMenus]] },
    about: { loop: "van-about", title: ["Join", "us"], label: "From the Black+Blue Vancouver film: the grill, Wagyu being sliced, a steak carved", lede: "For an experience to last a lifetime. Our team is in the business of providing delightful and memorable experiences.", actions: [["Virtual Tour", tour], ["Book a Table", vanBook]] },
    contact: { loop: "van-contact", title: ["Contact", "& Hours"], label: "The dining room with tufted banquettes and lamp shades", lede: "1032 Alberni St, Vancouver, BC V6E 1A3 · 604 637 0777 · info@blackandblue.ca" },
  },
  menus: vancouverMenus,
  selection: {
    intro: [
      "We dry-age all of our beef in our one-of-a-kind, Himalayan salt-lined meat locker.",
      "Strict temperature and moisture-controls allow the salt air to penetrate the meat over time which provides unparalleled flavour and tenderness. It’s one of our little secrets that we keep in plain sight, for all to enjoy.",
    ],
    lots: vanSelectionLots,
  },
  privateDining: {
    intro: ["Black+Blue would love to host you for any of your event needs. From executive meetings to celebratory receptions, corporate dinners and weddings, we house an array of beautiful spaces for every occasion. At Black+Blue, you are an honoured guest, taken care of with exceptional service and mouth-watering menus."],
    rooms: [{ figure: "901", label: "Private Dining Room, with projector and screen" }, { figure: "20 – 30", label: "Glass Atrium on The Roof" }, { figure: "Buyout", label: "Full buyouts, including The Roof" }],
    roomsConfirm: "Vancouver room names and capacities beyond Room 901 and the Glass Atrium",
    gallery: [
      { img: "van-private", alt: "A laid private dining table", wide: true },
      { img: "van-bar", alt: "The bar at Black+Blue Vancouver" },
      { img: "van-wine-room", alt: "The dining room under the chandelier" },
      { img: "van-fireside", alt: "The dining room beside the fireplace", wide: true },
    ],
    formNote: "A Group Set Menu is required for all groups of 10 guests and larger. Tell us the date, the size of your party and the space you have in mind, and our events team will reply with availability and the minimum spend for that day.",
    spaces: ["Private Dining Room 901", "Semi-private", "Glass Atrium on The Roof (20–30)", "Full buyout", "Not sure yet"],
    faq: faqVancouver,
    faqNote: "The final guaranteed guest count is required 72 hours prior to your event. Menu and beverage selections are required 2 weeks prior to your event.",
    maxGuests: 400,
  },
  about: {
    letter: {
      title: ["Join us", "For an experience to last a lifetime"],
      body: [
        "Our team is in the business of providing delightful and memorable experiences. A genuine smile at the door, friendly and knowledgeable service, table-side creativity, a wine list that’s second to none, and of course steaks that are simply world class. Here at Black+Blue, we are all about you.",
        "I invite you to join us soon, and discover why we sell more steaks than any other restaurant in Vancouver. And why our customers keep coming back for more.",
      ],
      sign: ["Emad Yacoub, CEO", "The Glowbal Restaurant Group"],
    },
    room: { eyebrow: "Seeing is believing", title: ["Dry-aged", "28 – 45 days"], img: "van-locker", alt: "The salt-lined dry-aging locker at Black+Blue Vancouver",
      body: ["We dry-age all of our beef in our one-of-a-kind, Himalayan salt-lined meat locker.", "Strict temperature and moisture-controls allow the salt air to penetrate the meat over time which provides unparalleled flavour and tenderness. It’s one of our little secrets that we keep in plain sight, for all to enjoy."] },
    policies,
  },
  contactNote: "For reservations, please book a table online or call 604 637 0777. For groups and private dining, use the event request.",
  schema: { telephone: "+1-604-637-0777" },
};
