/* The Roof at Black+Blue, Vancouver. Copy verbatim from blackandbluesteakhouse.ca/the-roof-vancouver/, /van-roof-menu/,
   /van-roof-private-dining/, /van-roof-contact/ and the Vancouver FAQ (2026-10-22). */
import type { Location } from "../locations";
import { roofMenus } from "../menu-roof";
import { faqVancouver } from "./faq-vancouver";
import { vanBook, vanHours, vanParking, vanDistinctions, vanSelectionLots } from "./vancouver";

const book = vanBook + ",fivesails";
const groupRequest = "https://glowbalrestaurantgroup.tripleseat.com/party_request/5467";
const groupMenus = "https://blackandbluesteakhouse.ca/wp-content/uploads/2026/10/BB-Van-Group-Menus-2026.pdf";
const tour = "https://viewer.threshold360.com/?thresholdId=8503270-1647117146";

export const roof: Location = {
  key: "roof", slug: "the-roof", name: "The Roof at Black+Blue", short: "The Roof",
  logo: { src: "assets/brand/roof-gold.png", w: 740, h: 435 },
  address: { street: "1032 Alberni St", line2: "The Roof | Third Floor", city: "Vancouver", region: "BC", postal: "V6E 1A3", country: "CA" },
  phone: "604 637 0777", tel: "tel:+16046370777", email: "info@blackandblue.ca",
  maps: "https://www.google.com/maps/search/?api=1&query=Black%2BBlue+1032+Alberni+St+Vancouver",
  book, events: groupRequest, groupMenus,
  festive: "https://glowbalgroup.com/holiday-events/vancouver/black-blue/", tour, facebook: "https://www.facebook.com/blackandbluevancouver",
  hours: vanHours,
  pages: ["menu", "selection", "private", "contact"],
  seo: {
    title: "The Roof at Black+Blue | Rooftop Dining in Vancouver",
    description: "The Roof, Black+Blue’s third floor outdoor restaurant and lounge: Vancouver’s largest rooftop dining destination. Lunch 45, happy hour and dinner on Alberni St.",
  },
  film: {
    clips: [
      { id: "rgarden", dir: "frames/roof_garden", prefix: "rg_", count: 61, fy: 0.55 },  // their terrace photo (img4.jpg, sharpened): push-in under the greenery
      { id: "rheaters", dir: "frames/roof_heaters", prefix: "rh_", count: 61, fy: 0.5 }, // the patio heaters (img3-1.jpg, sharpened): flames flicker
      { id: "rtacos", dir: "frames/roof_tacos", prefix: "rt_", count: 61, fy: 0.5 },     // Lunch 45 salmon tacos (bb-2.jpg, sharpened): lime squeezed
      { id: "rbull", dir: "frames/roof_bull", prefix: "rb_", count: 61, fy: 0.25 },      // the bronze bull (2J6A9092.jpg): code-made push-in, the Kling clip reshaped the head
      { id: "rskyline", dir: "frames/roof_skyline", prefix: "rs_", count: 61, units: 0.9 }, // the terrace from afternoon to night (img4-1.jpg → night edit)
    ],
    preload: 18,
    heroEyebrow: "The Roof · Third Floor · 1032 Alberni St",
    heroTitle: ["Rooftop dining", "at its best"],
    tagline: "Serving Lunch, Happy Hour, and Dinner",
    heroActions: [["Book a Table", book], ["Menu", "menu/"], ["Group Event Booking", "private-dining/"]],
    lots: [
      { no: "Lot 01 · Third floor", title: ["Platinum seating", "to the city’s patio scene"], body: "The Roof, Black+Blue’s third floor outdoor restaurant and lounge, is Vancouver’s largest rooftop dining destination offering platinum seating to the city’s patio scene.", spec: [["Lunch", "daily · 11:30am – 2:00pm"], ["Dinner", "until 12:00am"]] },
      { no: "Lot 02 · Daily · 2:00 – 5:00pm", title: ["Happy Hour", "on The Roof"], body: "Feature Oysters 2.50 per, red wine shallot mignonette · Wagyu Hot Stone 33, A5 japanese wagyu cooked on a salt brick · Negroni 9 · All on Tap 7.", spec: [["Feature Oysters", "2.50 per"], ["Wagyu Hot Stone", "33"], ["All on Tap", "7"]] },
      { no: "Lot 03 · Wednesday · Lunch 45", title: ["Spring Salmon", "Tacos"], body: "blackened salmon, pico de gallo, fennel slaw, spicy japanese tartare. Our Express Lunch 45 Menu is designed to get you in and out in 45 minutes!", spec: [["Lunch 45", "$20 each"], ["Mon", "Rigatoni Bolognese"], ["Tue", "Jerk Chicken Cobb"], ["Thu", "Prime Beef Schnitzel"]] },
      { no: "Lot 04 · Over wood coals", title: ["Prime cuts,", "the Josper Grill"], body: "A menu with generous cuts of prime meats, skewered fish, seafood and poultry cooked over wood coals in Canada’s first-of-its-kind Josper Grill.", spec: [["New York Striploin", "79 (12oz)"], ["Rib-Eye", "112 (14oz)"], ["Cowboy Rib-Eye", "145 (24oz)"], ["Australian Wagyu Tomahawk", "MP"]] },
      { no: "Lot 05 · Serving Lunch, Happy Hour, and Dinner", title: ["Vancouver’s largest", "rooftop"], body: "Book your next group reservation with us! Click the Group Request button below and we would be happy to assist.", spec: [["Open daily", "11:30am – 12:00am"]], actions: [["Book a Table", book], ["Group Request", groupRequest]] },
    ],
  },
  welcome: "The Roof, Black+Blue’s third floor outdoor restaurant and lounge, is Vancouver’s largest rooftop dining destination offering platinum seating to the city’s patio scene.",
  week: [
    { day: "Mon", items: [["Lunch 45", "Rigatoni Bolognese · 20"]] },
    { day: "Tue", items: [["Lunch 45", "Jerk Chicken Cobb · 20"]] },
    { day: "Wed", items: [["Lunch 45", "Spring Salmon Tacos · 20"]] },
    { day: "Thu", items: [["Lunch 45", "Prime Beef Schnitzel · 20"]] },
    { day: "Fri", items: [["Happy Hour", "2:00 – 5:00pm"]] },
    { day: "Sat", items: [["Happy Hour", "2:00 – 5:00pm"]] },
    { day: "Sun", items: [["Happy Hour", "2:00 – 5:00pm"]] },
  ],
  weekFoot: ["Happy Hour · Daily · 2:00pm – 5:00pm", "Open daily 11:30am – 12:00am"],
  features: [
    { title: "Lunch 45 Menu", sub: "Weekday Features | $20", img: "roof-schnitzel", alt: "Prime beef schnitzel from the Lunch 45 menu",
      body: "Our Express Lunch 45 Menu is designed to get you in and out in 45 minutes! Available Monday to Friday at Lunch.",
      links: [["Book a Table", book], ["View Menu", "menu/#lunch-45"]], confirm: "Lunch 45 days: the Roof home says Monday to Friday, the menu lists Monday to Thursday" },
    { title: "Private Dining", sub: "Your Event, Your Way", img: "roof-walk", alt: "The walkway on The Roof with the bronze bull",
      body: "Book your next group reservation with us! Click the Group Request button below and we would be happy to assist.",
      links: [["Group Request", groupRequest], ["Private Dining", "private-dining/"]] },
    { title: "Happy Hour", sub: "Daily from 2:00pm to 5:00pm", img: "roof-guests", alt: "Guests at a table on The Roof",
      body: "Feature Oysters 2.50 per · Beef Carpaccio Pizza 18 · Philly Cheesesteak Sliders 5 per · Quattro Formaggio Flatbread 16 · All on Tap 7.",
      links: [["Happy Hour Menu", "menu/#happy-hour"]] },
    { title: "Black+Blue, downstairs", sub: "Canadian Prime Rib Sunday Dinner | $59", img: "van-dining", alt: "The Black+Blue Vancouver dining room",
      body: "Join us every Sunday for our famous Prime Rib Dinner including Caesar salad, 12oz slow-roasted Canadian Prime Rib, Yorkshire pudding, mashed potatoes, seasonal vegetables, B+B’s Signature Butter Cake! Please note, this feature is only available in Black+Blue dining room.",
      links: [["Black+Blue Vancouver", "/vancouver/"]] },
  ],
  sections: [
    { kind: "split", eyebrow: "Rooftop dining at its best", title: ["Over wood coals,", "the Josper Grill"], loop: "roof-menu", alt: "From The Roof film: the city, the bronze bull and steak over the flames",
      body: ["A menu with generous cuts of prime meats, skewered fish, seafood and poultry cooked over wood coals in Canada’s first-of-its-kind Josper Grill."],
      actions: [["View Menu", "menu/"], ["Book a Table", book]] },
  ],
  distinctions: vanDistinctions,
  distinctionsConfirm: "which distinctions The Roof should show (the live Roof home shows the same badges as Black+Blue)",
  visit: { title: ["The Roof |", "Third Floor"], note: "1032 Alberni St, Vancouver, BC V6E 1A3", parking: vanParking, access: "Yes, there is an elevator that serves all levels of the restaurant." },
  heroes: {
    menu: { loop: "roof-menu", title: ["The Roof", "Menus"], label: "From The Roof film: the city from the terrace, the bronze bull, steak over the Josper flames", lede: "A menu with generous cuts of prime meats, skewered fish, seafood and poultry cooked over wood coals in Canada’s first-of-its-kind Josper Grill." },
    selection: { loop: "striploin", focus: "12% 50%", title: ["Superior selection,", "superior flavour"], label: "The camera moves across a marbled Wagyu striploin", lede: "We proudly display our beef in the centre of the dining room. The pale pink and orange wall is made of Himalayan salt bricks. The salt purifies the air and naturally removes moisture." },
    private: { loop: "roof-private", title: ["Events &", "Private Dining"], label: "A slow move under the hanging greenery on The Roof", lede: "Please note all groups of 7 guests or larger must select a Group Set Menu. For groups of 6 guests or smaller, please make a regular dining room reservation.", actions: [["Event Request", "#inquiry"], ["Group Menus", groupMenus]] },
    contact: { loop: "roof-contact", title: ["Contact", "& Hours"], label: "Flames of the fire feature beside a table on The Roof", lede: "The Roof | Third Floor · 1032 Alberni St, Vancouver, BC V6E 1A3 · 604 637 0777" },
  },
  menus: roofMenus,
  selection: {
    intro: [
      "This dry-aging process infuses an unforgettable flavour as it tenderizes the meat. All our steaks are kept in the cooler for 28-45 days and ensures a flavour concentration of the highest quality.",
    ],
    lots: vanSelectionLots,
  },
  privateDining: {
    intro: [
      "Black+Blue would love to host you for any of your event needs. From executive meetings to celebratory receptions, corporate dinners and weddings, we house an array of beautiful spaces for every occasion. At Black+Blue, you are an honoured guest, taken care of with exceptional service and mouth-watering menus.",
      "We do not accept large party bookings at The Roof, with the exception of full buyouts or bookings in the Glass Atrium which accommodates 20-30 guests. We are only able to accommodate tables up to 6 guests, and this includes booking multiple tables in hopes that they are at the same time and within the same proximity.",
    ],
    rooms: [{ figure: "20 – 30", label: "The Glass Atrium" }, { figure: "6", label: "Largest regular table" }, { figure: "Buyout", label: "Full buyouts of The Roof" }],
    gallery: [
      { img: "roof-garden", alt: "Long tables under hanging greenery", wide: true },
      { img: "roof-bull", alt: "The bronze bull on The Roof" },
      { img: "roof-heaters", alt: "Patio heaters on The Roof" },
      { img: "roof-skyline", alt: "Tables at the glass edge of The Roof with the city behind", wide: true },
    ],
    formNote: "Please note all groups of 7 guests or larger must select a Group Set Menu. For groups of 6 guests or smaller, please make a regular dining room reservation.",
    spaces: ["The Glass Atrium (20–30)", "Full buyout of The Roof", "Not sure yet"],
    faq: faqVancouver,
    faqNote: "Balloons are not permitted on The Roof. The final guaranteed guest count is required 72 hours prior to your event.",
    maxGuests: 400,
  },
  contactNote: "For reservations, please book a table online or call 604 637 0777. For groups, use the group request.",
  schema: { telephone: "+1-604-637-0777", name: "The Roof at Black+Blue" },
};
