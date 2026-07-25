export interface Doctor {
  slug: string;
  name: string;
  title: string; // ONLY "Dt." or "Diş Hekimi"
  education?: string[];
  description: string;
  longBio: string;
  instagram: string;
  image: string;
  treatments: string[];
}

export const doctors: Doctor[] = [
  {
    slug: "ozgur-onder",
    name: "Özgür Önder",
    title: "Dt. (Diş Hekimi)",
    education: ["Gazi Üniversitesi Diş Hekimliği Fakültesi"],
    description: "İmplantoloji, All-on-Six uygulamaları ve monolitik zirkonyum kaplama tedavilerinde hizmet vermektedir.",
    longBio: "Dt. Özgür Önder, Gazi Üniversitesi Diş Hekimliği Fakültesi mezunudur. Ankara Çankaya'da, Atakule Dent bünyesinde hizmet vermektedir. Klinik pratiklerinde özellikle implant tedavisi, All-on-Six implant uygulamaları, monolitik zirkonyum estetik kaplamalar ve gülüş tasarımı üzerine yoğunlaşmaktadır.",
    instagram: "https://www.instagram.com/dtozguronderr/",
    image: "/doctors/ozgur-onder.webp",
    treatments: ["İmplant Tedavisi", "All-on-Six Uygulamaları", "Monolitik Zirkonyum Kaplama", "Estetik Gülüş Tasarımı"]
  },
  {
    slug: "irem-onder",
    name: "İrem Önder",
    title: "Diş Hekimi",
    description: "Atakule Dent bünyesinde genel ağız ve diş sağlığı ile estetik restoratif dental tedaviler sunmaktadır.",
    longBio: "Diş Hekimi İrem Önder, Atakule Dent bünyesinde çalışmalarını sürdürmektedir. Genel ağız ve diş sağlığı, diş beyazlatma, restoratif dolgu tedavileri ve estetik diş hekimliği uygulamalarında hastalara hizmet vermektedir.",
    instagram: "https://www.instagram.com/iremivrendi/",
    image: "/doctors/irem-onder.webp",
    treatments: ["Estetik Diş Hekimliği", "Diş Beyazlatma", "Dolgu ve Restoratif Tedaviler", "Kanal Tedavisi", "Diş Taşı Temizliği"]
  }
];
