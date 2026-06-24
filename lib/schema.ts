import { BUSINESS, PHONE_HREF } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: BUSINESS.name,
    image: "https://dyersairco.com/logo.png",
    telephone: PHONE_HREF.replace("tel:", ""),
    url: "https://dyersairco.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.5093,
      longitude: -92.1193,
    },
    areaServed: BUSINESS.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, LA`,
    })),
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.googleRating,
      reviewCount: BUSINESS.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    sameAs: [BUSINESS.facebook],
    description:
      "Professional HVAC repair, heating services, AC installation, and maintenance serving Monroe, West Monroe, Sterlington, Rayville, Calhoun, and Northeast Louisiana.",
    knowsAbout: [
      "HVAC Monroe LA",
      "AC Repair Monroe LA",
      "Heating Repair Monroe LA",
      "HVAC Contractor West Monroe",
      "Emergency HVAC Service",
      "Air Conditioning Repair Near Me",
    ],
  };
}
