export const PHONE = "(318) 789-5240";
export const PHONE_HREF = "tel:+13187895240";
export const PHONE_DISPLAY = PHONE;

export const BUSINESS = {
  name: "Dyer's AIRCO Heating & Cooling",
  shortName: "Dyer's AIRCO",
  email: "info@dyersairco.com",
  facebook: "https://www.facebook.com/",
  address: {
    street: "Monroe, LA",
    city: "Monroe",
    state: "LA",
    zip: "71201",
    country: "US",
  },
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Emergency Calls Only" },
  ],
  serviceAreas: [
    "Monroe",
    "West Monroe",
    "Sterlington",
    "Swartz",
    "Calhoun",
    "Rayville",
    "Richwood",
  ],
  googleRating: 5.0,
  googleReviewCount: 50,
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact", href: "#contact" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Locally Owned",
    description:
      "A family business rooted in Northeast Louisiana, serving neighbors we know by name.",
    icon: "home" as const,
  },
  {
    title: "Licensed & Experienced",
    description:
      "Skilled technicians with years of hands-on HVAC expertise you can trust.",
    icon: "badge" as const,
  },
  {
    title: "Fast Response Times",
    description:
      "When your comfort is on the line, we show up quickly and get to work.",
    icon: "clock" as const,
  },
  {
    title: "Honest Pricing",
    description:
      "Upfront, transparent quotes with no hidden fees or surprise charges.",
    icon: "dollar" as const,
  },
  {
    title: "Quality Workmanship",
    description:
      "Every job done right the first time, backed by professional standards.",
    icon: "wrench" as const,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your comfort and peace of mind are our top priority on every call.",
    icon: "heart" as const,
  },
];

export const SERVICES = [
  {
    title: "AC Repair",
    description:
      "Fast, reliable air conditioning repair to restore your comfort when Louisiana heat strikes.",
    shortDescription: "Fast, reliable AC repair when Louisiana heat strikes.",
    icon: "snowflake" as const,
  },
  {
    title: "Heating Repair",
    description:
      "Expert heating system diagnostics and repair to keep your home warm all winter.",
    shortDescription: "Expert heating diagnostics and repair all winter long.",
    icon: "flame" as const,
  },
  {
    title: "HVAC Installation",
    description:
      "Professional installation of energy-efficient heating and cooling systems tailored to your home.",
    shortDescription: "Energy-efficient heating and cooling system installation.",
    icon: "install" as const,
  },
  {
    title: "Preventative Maintenance",
    description:
      "Routine tune-ups that extend equipment life, improve efficiency, and prevent costly breakdowns.",
    shortDescription: "Tune-ups that extend equipment life and prevent breakdowns.",
    icon: "shield" as const,
  },
  {
    title: "Residential HVAC",
    description:
      "Complete heating and cooling solutions for homeowners across Northeast Louisiana.",
    shortDescription: "Complete heating and cooling for Northeast Louisiana homes.",
    icon: "house" as const,
  },
  {
    title: "Commercial HVAC",
    description:
      "Reliable climate control for businesses, offices, and commercial properties of all sizes.",
    shortDescription: "Reliable climate control for businesses and offices.",
    icon: "building" as const,
  },
];

export const REVIEWS = [
  {
    text: "Damien Dyer is an outstanding HVAC professional with many years experience. Very prompt and always there anytime you need him.",
    author: "James Holloway",
  },
  {
    text: "They quickly identified the issue with my older AC unit that another company said couldn't be fixed.",
    author: "Lauren Carlson",
  },
  {
    text: "Professional and timely. Highly recommend.",
    author: "Vicki Fletcher",
  },
  {
    text: "Excellent service. Always gets the job done.",
    author: "Mitch Jefcoat",
  },
];
