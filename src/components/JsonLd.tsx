import { siteSettings } from "@/data/siteSettings";

export default function JsonLd() {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": siteSettings.clinicName,
    "alternateName": siteSettings.shortName,
    "image": `${siteSettings.seo.siteUrl}/images/clinic-exterior.webp`,
    "@id": `${siteSettings.seo.siteUrl}/#clinic`,
    "url": siteSettings.seo.siteUrl,
    "telephone": "+905345063368",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aziziye Mahallesi, Ahenk Sokak No:7/B",
      "addressLocality": "Çankaya",
      "addressRegion": "Ankara",
      "postalCode": "06690",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.897", // Near Atakule region
      "longitude": "32.860"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      siteSettings.instagramClinic,
      siteSettings.instagramDoctor
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
    />
  );
}
