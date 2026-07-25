export interface GalleryItem {
  id: string;
  category: "exterior" | "reception" | "room" | "sterilization" | "surroundings";
  categoryLabel: string;
  image: string;
  altText: string;
  title: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    category: "exterior",
    categoryLabel: "Klinik Girişi",
    image: "/images/clinic-exterior.webp",
    altText: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği dış giriş kapısı ve tabelası",
    title: "Klinik Girişi"
  },
  {
    id: "gal-02",
    category: "reception",
    categoryLabel: "Bekleme Alanı",
    image: "/images/clinic-reception.webp",
    altText: "Atakule Dent bekleme salonu ve lobi resepsiyon bankosu",
    title: "Bekleme Alanı & Resepsiyon"
  },
  {
    id: "gal-03",
    category: "room",
    categoryLabel: "Tedavi Odaları",
    image: "/images/clinic-room-01.webp",
    altText: "Modern ünit ve dental ekipmanların yer aldığı muayene odası",
    title: "Tedavi Odası 01"
  },
  {
    id: "gal-04",
    category: "sterilization",
    categoryLabel: "Sterilizasyon Alanı",
    image: "/images/clinic-room-02.webp",
    altText: "Atakule Dent sterilizasyon ünitesi ve hijyen odası",
    title: "Hijyen & Sterilizasyon Odası"
  },
  {
    id: "gal-05",
    category: "surroundings",
    categoryLabel: "Atakule Çevresi",
    image: "/images/atakule-location.webp",
    altText: "Çankaya Atakule bölgesi dış mekan görünümü",
    title: "Atakule Çevresi"
  }
];
