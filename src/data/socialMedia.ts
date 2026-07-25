export interface InstagramPost {
  id: string;
  image: string;
  link: string;
  caption: string;
  likes: string;
  comments: string;
}

export const clinicInstagramFeed: InstagramPost[] = [
  {
    id: "post-01",
    image: "/images/clinic-exterior.webp",
    link: "https://www.instagram.com/atakuledent.clinic/",
    caption: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği olarak Atakule'nin yanı başında, güler yüzlü ekibimizle hizmetinizdeyiz. 📍 Çankaya, Ankara",
    likes: "142",
    comments: "8"
  },
  {
    id: "post-02",
    image: "/images/clinic-reception.webp",
    link: "https://www.instagram.com/atakuledent.clinic/",
    caption: "Klinik ortamımızda sizlerin konforu ve güvenliği için sterilizasyon standartlarımızı en üst düzeyde tutuyoruz. Bekleme alanımızda kahvenizi yudumlarken güvendesiniz. ☕✨",
    likes: "98",
    comments: "4"
  },
  {
    id: "post-03",
    image: "/images/clinic-room-01.webp",
    link: "https://www.instagram.com/atakuledent.clinic/",
    caption: "Estetik gülüş tasarımlarında kişiye özel çözümler sunuyoruz. Detaylı bilgi ve randevu için bize profilimizdeki linkten ulaşabilirsiniz. 🦷💎",
    likes: "210",
    comments: "12"
  }
];

export const doctorInstagramFeed: InstagramPost[] = [
  {
    id: "post-doc-01",
    image: "/doctors/ozgur-onder.webp",
    link: "https://www.instagram.com/dtozguronderr/",
    caption: "Doğal ve fonksiyonel monolitik zirkonyum uygulamaları ile hastalarımızın gülüşlerini yeniliyoruz. Her gülüş bir sanattır. 🦷✨ #gülüştasarımı #zirkonyum",
    likes: "320",
    comments: "18"
  },
  {
    id: "post-doc-02",
    image: "/cases/case-01-after.webp",
    link: "https://www.instagram.com/dtozguronderr/",
    caption: "All-on-Six implant uygulaması ile tam dişsizlik problemi yaşayan hastalarımıza aynı gün konforlu ve sabit diş çözümleri sunabiliyoruz. 🎯 #allonsix #implant",
    likes: "275",
    comments: "15"
  },
  {
    id: "post-doc-03",
    image: "/images/clinic-room-02.webp",
    link: "https://www.instagram.com/dtozguronderr/",
    caption: "Gazi Üniversitesi mezuniyetimizden bu yana, edindiğimiz bilgi ve tecrübeyi Ankara Çankaya'daki kliniğimiz Atakule Dent'te hastalarımızla paylaşıyoruz. 💼",
    likes: "412",
    comments: "24"
  }
];
