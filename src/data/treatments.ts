export interface Treatment {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  whatsappMessage: string;
  details: string[];
}

export const treatments: Treatment[] = [
  {
    slug: "estetik-gulus-tasarimi",
    name: "Estetik Gülüş Tasarımı",
    shortDescription: "Yüz hatlarınıza ve ağız yapınıza en uygun, doğal ve estetik gülüşün kişiye özel olarak tasarlanması süreci.",
    fullDescription: "Estetik Gülüş Tasarımı, bireyin yüz şekli, ten rengi, dudak yapısı ve diş eti konumlandırması gibi parametreler dikkate alınarak en doğal ve çekici gülüşün oluşturulmasını amaçlayan kapsamlı bir tedavidir. Lamine, zirkonyum kaplama ve diş eti şekillendirme gibi yöntemler kombine edilerek uygulanır.",
    whatsappMessage: "Merhaba, Atakule Dent'te estetik gülüş tasarımı tedavisi hakkında bilgi almak istiyorum.",
    details: [
      "Kişiye özel anatomik analiz",
      "Dijital gülüş planlaması",
      "Doğal diş tonu ve form eşleme",
      "Dudak ve diş uyumunun sağlanması"
    ]
  },
  {
    slug: "implant-tedavisi",
    name: "İmplant Tedavisi",
    shortDescription: "Diş eksikliklerinin giderilmesinde, çene kemiğine yerleştirilen titanyum vidalarla yapılan kalıcı ve sağlam çözüm.",
    fullDescription: "İmplant Tedavisi, eksik dişlerin yerine çene kemiğine yerleştirilen yapay diş kökleri (titanyum vidalar) üzerine protez diş yapılması işlemidir. Diğer sağlıklı dişlerinize zarar vermeden, doğal diş fonksiyonunu ve estetiğini en iyi şekilde geri kazandırır.",
    whatsappMessage: "Merhaba, Atakule Dent'te implant tedavisi hakkında bilgi almak istiyorum.",
    details: [
      "Kalıcı ve ömürlük dental çözüm",
      "Çene kemiği erimesinin önlenmesi",
      "Doğal çiğneme hissi ve konuşma konforu",
      "Komşu dişlere dokunmadan boşluk doldurma"
    ]
  },
  {
    slug: "all-on-six-uygulamalari",
    name: "All-on-Six Uygulamaları",
    shortDescription: "Tam dişsizlik durumlarında, tek çeneye yerleştirilen 6 implant üzerine sabitlenen hibrit protez uygulaması.",
    fullDescription: "All-on-Six uygulaması, tüm dişlerini kaybetmiş hastalarda belirli açılarla yerleştirilen 6 adet dental implant üzerine aynı gün geçici veya kısa sürede kalıcı sabit protez yerleştirilmesini sağlayan ileri seviye bir implant teknolojisidir. Kemik erimesi olan hastalar için de uygundur.",
    whatsappMessage: "Merhaba, Atakule Dent'te All-on-Six uygulaması hakkında bilgi almak istiyorum.",
    details: [
      "Tam dişsiz ağızlara hızlı ve konforlu çözüm",
      "Maksimum stabilite ve yük dağılımı",
      "Kolay temizlenebilir protez altyapısı",
      "Kemik grefti ihtiyacını azaltan implant açıları"
    ]
  },
  {
    slug: "monolitik-zirkonyum-kaplama",
    name: "Monolitik Zirkonyum Kaplama",
    shortDescription: "Dayanıklılığı ve yüksek ışık geçirgenliğiyle doğal diş görünümünü en iyi yansıtan restoratif kaplama.",
    fullDescription: "Monolitik Zirkonyum Kaplama, porselen katmanı olmadan tek blok zirkonyumdan üretilen son derece dirençli ve estetik bir diş kaplama türüdür. Kırılmaya karşı maksimum dayanıklılığı sayesinde özellikle arka dişlerde ve bruksizm (diş gıcırdatma) hastalarında yüksek başarıyla tercih edilir.",
    whatsappMessage: "Merhaba, Atakule Dent'te monolitik zirkonyum kaplama tedavisi hakkında bilgi almak istiyorum.",
    details: [
      "Yüksek ışık geçirgenliği ile doğal diş görünümü",
      "Kırılma ve aşınmalara karşı ekstra direnç",
      "Metal altyapı içermediği için gri çizgi oluşturmaz",
      "Biyouyumlu malzeme ile diş eti dostu koruma"
    ]
  },
  {
    slug: "dis-beyazlatma",
    name: "Diş Beyazlatma",
    shortDescription: "Zamanla renk değiştiren veya sararan dişlerin klinik ortamında güvenle tonlarca açılması işlemi.",
    fullDescription: "Diş Beyazlatma (Bleaching), dişlerin gözenekli mine ve dentin yapısında oluşan renkli organik maddelerin beyazlatma jelleri ile giderilmesi işlemidir. Klinik ortamında hekim kontrolünde gerçekleştirilen ofis tipi beyazlatma ile dişleriniz çok kısa sürede göz alıcı bir parlaklığa kavuşur.",
    whatsappMessage: "Merhaba, Atakule Dent'te diş beyazlatma tedavisi hakkında bilgi almak istiyorum.",
    details: [
      "Kısa sürede 2 ila 8 tona kadar açılma",
      "Hekim kontrolünde güvenli uygulama",
      "Diş minesine zarar vermeyen formüller",
      "Uzun süreli etki ve canlılık"
    ]
  },
  {
    slug: "estetik-diş-hekimliği",
    name: "Estetik Diş Hekimliği",
    shortDescription: "Gülüşünüzün fonksiyonel başarısını sanatsal estetik dokunuşlarla tamamlayan tedaviler.",
    fullDescription: "Estetik Diş Hekimliği; bonding uygulamaları, pembe estetik (diş eti şekillendirme), kompozit dolgular ve lamine diş gibi estetiği ön planda tutan konservatif tedavileri kapsar. Dişlerin sağlığını korurken görünümünü sanatsal olarak iyileştirir.",
    whatsappMessage: "Merhaba, Atakule Dent'te estetik diş hekimliği hakkında bilgi almak istiyorum.",
    details: [
      "Bonding ve kompozit lamina uygulamaları",
      "Diş eti simetrisinin sağlanması (Pembe Estetik)",
      "Minimal aşındırmalı veya aşındırmasız yaklaşımlar",
      "Bireysel gülüş profili tasarımı"
    ]
  },
  {
    slug: "genel-agiz-ve-diş-sağlığı",
    name: "Genel Ağız ve Diş Sağlığı",
    shortDescription: "Ağız içindeki sorunların erken teşhisi, periyodik kontroller ve koruyucu dental tedaviler.",
    fullDescription: "Genel Ağız ve Diş Sağlığı; ağız içi muayene, röntgen analizi, teşhis ve koruyucu diş hekimliği uygulamalarını içerir. Ağız ve diş sağlığını korumanın ilk adımı düzenli hekim kontrollerinden ve koruyucu uygulamalardan geçer.",
    whatsappMessage: "Merhaba, Atakule Dent'te genel ağız ve diş sağlığı hakkında bilgi almak istiyorum.",
    details: [
      "Detaylı ağız içi muayene ve radyolojik kontrol",
      "Koruyucu diş tedavileri",
      "Ağız hijyeni eğitimi ve danışmanlık",
      "Erken tanı ile büyük sorunların önüne geçilmesi"
    ]
  },
  {
    slug: "dolgu-ve-restoratif-tedaviler",
    name: "Dolgu ve Restoratif Tedaviler",
    shortDescription: "Çürük veya kırık dişlerin, diş rengindeki kompozit dolgularla restore edilerek fonksiyonunun kazandırılması.",
    fullDescription: "Dolgu ve Restoratif Tedaviler, çürük veya travma nedeniyle madde kaybı uğramış dişlerin temizlenerek estetik kompozit (diş renginde) veya porselen dolgularla (inley/onley) işlevsel ve görsel olarak restore edilmesini sağlar.",
    whatsappMessage: "Merhaba, Atakule Dent'te dolgu ve restoratif tedaviler hakkında bilgi almak istiyorum.",
    details: [
      "Doğal diş renginde estetik dolgular",
      "Çiğneme kuvvetlerine dayanıklı yapı",
      "Diş dokusunun korunması ve güçlendirilmesi",
      "Diş hassasiyetinin giderilmesi"
    ]
  },
  {
    slug: "kanal-tedavisi",
    name: "Kanal Tedavisi",
    shortDescription: "Derin çürük veya enfeksiyon sebebiyle canlılığını yitiren dişleri çekilmekten kurtaran kök kanalı uygulaması.",
    fullDescription: "Kanal Tedavisi (Endodonti), dişin içindeki sinir ve damar paketinin (pulpa) enfekte olduğu durumlarda, bu dokuların temizlenmesi, dezenfekte edilmesi ve sızdırmaz dolgu maddeleriyle kök kanallarının doldurulması işlemidir. Dişi ağızda tutmayı hedefler.",
    whatsappMessage: "Merhaba, Atakule Dent'te kanal tedavisi hakkında bilgi almak istiyorum.",
    details: [
      "Şiddetli diş ağrısının sonlandırılması",
      "Doğal dişi çekilmekten kurtarma",
      "Çevre kemik dokusunun enfeksiyondan korunması",
      "Konforlu ve ağrısız anestezi altında işlem"
    ]
  },
  {
    slug: "dis-tasi-temizligi",
    name: "Diş Taşı Temizliği",
    shortDescription: "Diş eti sağlığını korumak için tartar, plak ve lekelerin profesyonel yöntemlerle uzaklaştırılması.",
    fullDescription: "Diş Taşı Temizliği (Detertraj), diş yüzeylerinde biriken plak ve sertleşmiş tartar tabakalarının ultrasonik cihazlarla temizlenmesi işlemidir. Diş eti hastalıklarının (gingivitis) ve diş eti çekilmelerinin önlenmesinde en temel koruyucu işlemdir.",
    whatsappMessage: "Merhaba, Atakule Dent'te diş taşı temizliği hakkında bilgi almak istiyorum.",
    details: [
      "Diş eti kanaması ve ağız kokusunun önlenmesi",
      "Tartar ve plak birikiminin temizlenmesi",
      "Diş yüzeyi cilalama (Polisaj) ile leke giderme",
      "Sağlıklı pembe diş etlerine kavuşma"
    ]
  }
];
export const getTreatmentBySlug = (slug: string): Treatment | undefined => {
  return treatments.find(t => t.slug === slug);
};
