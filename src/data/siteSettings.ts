export interface SiteSettings {
  clinicName: string;
  shortName: string;
  address: string;
  primaryPhone: string;
  formattedPrimaryPhone: string;
  secondaryPhone: string;
  formattedSecondaryPhone: string;
  whatsappNumber: string;
  whatsappLink: string;
  whatsappAppointmentLink: string;
  mapsLink: string;
  instagramClinic: string;
  instagramDoctor: string;
  hoursNote: string;
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    siteUrl: string;
  };
}

export const siteSettings: SiteSettings = {
  clinicName: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği",
  shortName: "Atakule Dent",
  address: "Aziziye Mahallesi, Ahenk Sokak No:7/B, 06690 Çankaya/Ankara",
  primaryPhone: "0534 506 33 68",
  formattedPrimaryPhone: "tel:+905345063368",
  secondaryPhone: "0312 439 89 99",
  formattedSecondaryPhone: "tel:+903124398999",
  whatsappNumber: "+90 534 506 33 68",
  whatsappLink: "https://wa.me/905345063368",
  whatsappAppointmentLink: "https://wa.me/905345063368?text=Merhaba%2C%20Atakule%20Dent%20i%C3%A7in%20randevu%20olu%C5%9Fturmak%20istiyorum.",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Atakule+Dent+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Poliklini%C4%9Fi+Aziziye+Ahenk+Sokak+7B+%C3%87ankaya+Ankara",
  instagramClinic: "https://www.instagram.com/atakuledent.clinic/",
  instagramDoctor: "https://www.instagram.com/dtozguronderr/",
  hoursNote: "Randevu ve güncel çalışma saatleri için WhatsApp üzerinden iletişime geçebilirsiniz.",
  seo: {
    defaultTitle: "Atakule Dent | Ankara Çankaya Diş Kliniği",
    defaultDescription: "Ankara Çankaya’da, Atakule’nin yanı başında kişiye özel ağız ve diş sağlığı hizmetleri. Atakule Dent için WhatsApp üzerinden randevu alın.",
    siteUrl: "https://atakuledent.com"
  }
};
