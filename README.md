# Atakule Dent Ağız ve Diş Sağlığı Polikliniği Web Sitesi

Atakule Dent için Next.js App Router, Tailwind CSS, TypeScript ve Framer Motion kullanılarak tasarlanmış, modern, koyu temalı ve premium görünümlü bir web sitesidir.

## Özellikler
- **Next.js App Router**: Yüksek performanslı ve SEO uyumlu yönlendirme.
- **Koyu Premium Tasarım**: Referans kalitesinde gece laciverti, şampanya altını ve klinik turkuazı renkleri ile lüks bir duruş.
- **Tamamen Responsive**: Mobil, tablet ve masaüstü ekran boyutları ile tam uyum (320px genişliğe kadar test edilmiştir).
- **Görsel Optimizasyon**: WebP formatında optimize edilmiş, lazy load destekli ve layout shift yaratmayan görsel yerleşimleri.
- **WhatsApp Randevu Entegrasyonu**: Randevu ve bilgi talep formları doğrudan kullanıcının girdiği detayları özel bir WhatsApp mesajına dönüştürerek doğrudan kliniğe ulaştırır.
- **SEO ve JSON-LD**: Dentist/MedicalClinic, Breadcrumbs ve sosyal profil şemaları eklenmiştir. Dinamik `sitemap.xml` ve `robots.txt` entegrasyonu mevcuttur.

## Teknolojik Altyapı
- Next.js (v16)
- React (v19)
- Tailwind CSS (v4)
- TypeScript
- Framer Motion
- Lucide React (Özelleştirilmiş SVG Ikonları)

---

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları uygulayın:

1. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```
   Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek siteyi görüntüleyebilirsiniz.

3. **Production Build Alın ve Test Edin:**
   ```bash
   npm run build
   npm run start
   ```

---

## Veri Güncelleme Rehberi

Sitedeki tüm içerikler, bileşenlerin içinde dağınık yazılmak yerine `src/data/` klasöründeki merkezi TypeScript dosyalarından yönetilir.

### 1. Klinik Bilgilerini ve İletişim Detaylarını Değiştirme
Telefon numarası, adres, WhatsApp randevu linki gibi ayarları değiştirmek için:
- Dosya: [siteSettings.ts](file:///c:/Users/berke/OneDrive/Masa%C3%BCst%C3%BC/dent2/src/data/siteSettings.ts)
- Bu dosyada yer alan `siteSettings` objesini düzenlemeniz yeterlidir. Değişiklikler sitedeki tüm iletişim alanlarında ve SEO şemalarında anında güncellenir.

### 2. Doktor Bilgisi Ekleme veya Düzenleme
Hekim listesini, isimleri, biyografileri veya Instagram hesaplarını yönetmek için:
- Dosya: [doctors.ts](file:///c:/Users/berke/OneDrive/Masa%C3%BCst%C3%BC/dent2/src/data/doctors.ts)
- `doctors` dizisine yeni bir hekim objesi ekleyebilir ya da mevcut hekimleri düzenleyebilirsiniz. Her bir hekim için dinamik biyografi sayfası otomatik olarak oluşturulur (`/hekimlerimiz/[slug]`).

### 3. Tedavi Ekleme veya Çıkarma
Kliniğin sunduğu tedavileri ve bunlara tıklanıldığında açılacak WhatsApp mesaj şablonlarını yönetmek için:
- Dosya: [treatments.ts](file:///c:/Users/berke/OneDrive/Masa%C3%BCst%C3%BC/dent2/src/data/treatments.ts)
- `treatments` dizisine yeni bir tedavi ekleyebilir veya çıkarabilirsiniz. Tedaviye özel detay sayfaları otomatik olarak oluşturulur (`/tedaviler/[slug]`).

---

## Fotoğrafları Değiştirme Rehberi

Görseller `/public` klasöründe yer alır. Site performansını en üst düzeyde tutmak için görsellerinizi WebP formatında optimize ederek aşağıdaki yollarla değiştirin:

- **Atakule Gece Manzaralı Hero Visual (Desktop):** `/public/images/atakule-hero.webp`
- **Atakule Gece Manzaralı Hero Visual (Mobil):** `/public/images/atakule-hero-mobile.webp`
- **Atakule Gündüz/Sunset Konum Görseli:** `/public/images/atakule-location.webp`
- **Klinik Girişi:** `/public/images/clinic-exterior.webp`
- **Bekleme Odası / Resepsiyon:** `/public/images/clinic-reception.webp`
- **Tedavi Odası 01:** `/public/images/clinic-room-01.webp`
- **Tedavi Odası 02 (Sterilizasyon):** `/public/images/clinic-room-02.webp`
- **Dt. Özgür Önder Portresi:** `/public/doctors/ozgur-onder.webp`
- **Dt. İrem Önder Portresi:** `/public/doctors/irem-onder.webp`
- **Vaka Karşılaştırma Önce:** `/public/cases/case-01-before.webp`
- **Vaka Karşılaştırma Sonra:** `/public/cases/case-01-after.webp`
