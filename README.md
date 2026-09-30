# Atakule Dent — Dental Clinic Website

Dark, premium-styled website for **Atakule Dent Ağız ve Diş Sağlığı Polikliniği**, a dental clinic in Çankaya, Ankara, with WhatsApp-based appointment requests.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

**Live:** https://atakuledent.com

> Client project — designed and developed by Berke Coşkuner for Atakule Dent Ağız ve Diş Sağlığı Polikliniği.

## Overview

A multi-page clinic website for patients looking for a dentist in Çankaya. It presents the clinic, its dentists and treatments, and turns every appointment or information request into a pre-filled WhatsApp message to the clinic — no backend or database needed.

**Design:** night navy, champagne gold and clinical turquoise palette; fully responsive (tested down to 320 px wide); WebP images with lazy loading and no layout shift.

All content is managed from typed data files in `src/data/`.

## Features

- **Home page** — hero, trust bar, about, dentists, treatments, before/after case preview (with a medical disclaimer), "Why Atakule Dent", location with embedded Google Map, and Instagram section
- **Treatments** (`/tedaviler`, `/tedaviler/[slug]`) — 12 treatments, each with a statically generated detail page and its own WhatsApp message template
- **Dentists** (`/hekimlerimiz`, `/hekimlerimiz/[slug]`) — statically generated profile pages
- **Clinic** (`/klinigimiz`) — photo gallery with lightbox · **Case gallery** (`/vaka-galerisi`) — before/after comparisons with disclaimer
- **Contact** (`/iletisim`) — appointment form (name, phone, treatment, preferred dentist, date, message) with required KVKK consent; on submit it opens WhatsApp with the details pre-filled
- **Mobile bottom navigation** — one-tap call and WhatsApp appointment
- **Legal pages** — KVKK, privacy policy, cookie policy
- **SEO** — `Dentist` JSON-LD (address, geo, opening hours, social profiles), Open Graph metadata, dynamic `sitemap.xml` and `robots.txt`, web app manifest

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React + custom Instagram SVG |
| Images | `next/image`, WebP assets |

## Project structure

```text
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── tedaviler/[slug]/        # Treatment list + detail pages
│   ├── hekimlerimiz/[slug]/     # Dentist list + profile pages
│   ├── klinigimiz/  vaka-galerisi/  hakkimizda/  iletisim/
│   ├── kvkk/  gizlilik-politikasi/  cerez-politikasi/
│   └── layout.tsx  sitemap.ts  robots.ts
├── components/                  # Header, Footer, MobileBottomNav, JsonLd, icons
└── data/
    ├── siteSettings.ts          # Clinic name, address, phones, WhatsApp, maps, SEO
    ├── doctors.ts  treatments.ts  cases.ts  gallery.ts  socialMedia.ts
public/
└── brand/  images/  doctors/  cases/  manifest.json
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run lint
```

No environment variables are required.

## Content management

| What | Where |
| --- | --- |
| Clinic info, phones, WhatsApp links, address, maps, SEO defaults | `src/data/siteSettings.ts` — changes apply to every contact block and the JSON-LD |
| Dentists (name, title, bio, Instagram) — a profile page is generated per entry | `src/data/doctors.ts` |
| Treatments and their WhatsApp message templates — a detail page is generated per entry | `src/data/treatments.ts` |
| Before/after cases and disclaimer | `src/data/cases.ts` |
| Clinic gallery | `src/data/gallery.ts` |

**Images** live in `public/` — replace them with optimised WebP files at the same paths: hero (`images/atakule-hero.webp`, `images/atakule-hero-mobile.webp`), location (`images/atakule-location.webp`), clinic photos (`images/clinic-*.webp`), dentist portraits (`doctors/`) and case photos (`cases/`).

---

## Türkçe

Çankaya, Ankara'daki **Atakule Dent Ağız ve Diş Sağlığı Polikliniği** için koyu temalı, premium görünümlü, WhatsApp üzerinden randevu talebi alan web sitesi.

> Müşteri projesi — Atakule Dent için Berke Coşkuner tarafından tasarlanıp geliştirilmiştir.

**Canlı:** https://atakuledent.com

### Özellikler

- Ana sayfa: hero, güven şeridi, hakkımızda, hekimler, tedaviler, önce/sonra vaka önizlemesi (uyarı metniyle), "Neden Atakule Dent?", Google Harita ile konum ve Instagram bölümü
- 12 tedavi için statik detay sayfaları ve her tedaviye özel WhatsApp mesaj şablonu
- Hekim profil sayfaları, lightbox'lı klinik galerisi, önce/sonra vaka galerisi
- İletişim: KVKK onaylı randevu formu — gönderildiğinde bilgiler hazır bir WhatsApp mesajına dönüştürülür
- Mobil alt menü (tek dokunuşla arama ve WhatsApp randevu), KVKK / gizlilik / çerez sayfaları
- SEO: `Dentist` JSON-LD, Open Graph, dinamik `sitemap.xml` ve `robots.txt`, web app manifest

**Tasarım:** gece laciverti, şampanya altını ve klinik turkuazı renk paleti; 320 px genişliğe kadar test edilmiş responsive arayüz; WebP ve lazy load ile optimize görseller.

### Teknolojiler

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide ikonları.

### Kurulum

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

Ortam değişkeni gerekmez.

### Veri güncelleme

- Klinik bilgileri, telefon, WhatsApp, adres, harita ve SEO: `src/data/siteSettings.ts`
- Hekimler: `src/data/doctors.ts` (her hekim için `/hekimlerimiz/[slug]` sayfası otomatik oluşur)
- Tedaviler ve WhatsApp şablonları: `src/data/treatments.ts` (her tedavi için `/tedaviler/[slug]` sayfası otomatik oluşur)
- Vakalar: `src/data/cases.ts` · Galeri: `src/data/gallery.ts`
- Fotoğraflar: `public/images/`, `public/doctors/`, `public/cases/` altındaki dosyaları aynı adla, WebP formatında değiştirin.

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)
