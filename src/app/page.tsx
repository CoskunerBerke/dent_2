"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageSquare,
  CheckCircle,
  Calendar,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Map
} from "lucide-react";
import { Instagram } from "@/components/icons/Instagram";
import { siteSettings } from "@/data/siteSettings";
import { doctors } from "@/data/doctors";
import { treatments } from "@/data/treatments";
import { cases, caseDisclaimer } from "@/data/cases";
import { clinicInstagramFeed, doctorInstagramFeed } from "@/data/socialMedia";

export default function Home() {
  // State for Booking Form
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [kvkkChecked, setKvkkChecked] = useState(false);

  // Form submit handler - redirect to WhatsApp
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!kvkkChecked) {
      alert("Lütfen KVKK Aydınlatma Metnini onaylayınız.");
      return;
    }

    const waText = `Merhaba, Atakule Dent için randevu talebi oluşturmak istiyorum.

Ad Soyad: ${fullName}
Telefon: ${phone}
Tedavi: ${selectedTreatment || "Belirtilmedi"}
Hekim Tercihi: ${selectedDoctor || "Farketmez"}
Tarih: ${preferredDate || "En kısa sürede"}
Mesaj: ${message || "Yok"}`;

    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/905345063368?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#07111F]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Hero Image */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/atakule-hero.webp"
              alt="Ankara Gece Manzarası ve Atakule"
              fill
              className="object-cover object-right md:object-center opacity-85 transition-transform duration-10000 ease-out scale-100"
              priority
            />
          </div>
          {/* Mobile Hero Image */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/atakule-hero-mobile.webp"
              alt="Atakule Ankara Gece Görünümü"
              fill
              className="object-cover object-center opacity-80"
              priority
            />
          </div>
          {/* Dark overlay layer for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/80 to-transparent md:bg-[#07111F]/60"></div>
          <div className="absolute inset-0 bg-[#07111F]/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="max-w-2xl text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold">
                Diş Kliniği & Estetik | Ankara – Atakule
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-white leading-tight"
            >
              Ankara’nın kalbinde,
              <br />
              <span className="gold-gradient-text">gülüşünüze yeni bir bakış.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-offwhite/90 leading-relaxed max-w-xl"
            >
              {siteSettings.seo.defaultDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href={siteSettings.whatsappAppointmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-gold text-brand-dark font-bold rounded shadow-lg hover:bg-brand-gold-warm transition-all duration-300 group"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-brand-dark" />
                WhatsApp'tan Randevu Al
              </a>
              <Link
                href="/tedaviler"
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-offwhite/40 text-brand-white font-semibold rounded hover:bg-brand-white/10 transition-all duration-300"
              >
                Tedavileri İncele
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* Bottom Location Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-2 text-xs tracking-widest uppercase text-brand-gold/80 pt-6"
            >
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Atakule • Çankaya • Ankara</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. GÜVEN ŞERİDİ (TRUST BAR) */}
      <section className="bg-brand-blue border-y border-brand-gold/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-brand-gold font-serif font-bold text-lg sm:text-xl">Gazi Üniversitesi</div>
              <div className="text-xs text-brand-gray tracking-wider uppercase">Hekim Altyapısı</div>
            </div>
            <div className="space-y-1">
              <div className="text-brand-gold font-serif font-bold text-lg sm:text-xl">Atakule / Çankaya</div>
              <div className="text-xs text-brand-gray tracking-wider uppercase">Merkezi Konum</div>
            </div>
            <div className="space-y-1">
              <div className="text-brand-gold font-serif font-bold text-lg sm:text-xl">Kişiye Özel</div>
              <div className="text-xs text-brand-gray tracking-wider uppercase">Tedavi Yaklaşımı</div>
            </div>
            <div className="space-y-1">
              <div className="text-brand-gold font-serif font-bold text-lg sm:text-xl">Hızlı Randevu</div>
              <div className="text-xs text-brand-gray tracking-wider uppercase">WhatsApp İletişim</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HAKKIMIZDA SECTION */}
      <section className="py-20 bg-[#07111F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Collage */}
            <div className="relative h-[350px] sm:h-[450px]">
              {/* Back Image */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded overflow-hidden shadow-2xl border border-brand-gold/10">
                <Image
                  src="/images/clinic-reception.webp"
                  alt="Atakule Dent Bekleme Lobi Salonu"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Front Image */}
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded overflow-hidden shadow-2xl border border-brand-gold/20 z-10">
                <Image
                  src="/images/clinic-room-01.webp"
                  alt="Atakule Dent Muayene Odası Üniti"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* About Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-brand-gold"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Kurumsal</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">
                Gülüşünüz emin ellerde
              </h2>
              <p className="text-brand-offwhite/85 leading-relaxed text-base">
                Atakule Dent, Ankara’nın simge noktalarından Atakule’nin yanı başında, ağız ve diş sağlığı alanında kişiye özel değerlendirme ve tedavi yaklaşımı sunar. Her tedavi planı hastanın ihtiyaçları, ağız yapısı ve beklentileri dikkate alınarak hazırlanır.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3 text-sm text-brand-offwhite">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span>Steril ve Hijyenik Ortam</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-brand-offwhite">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span>Kişiye Özel Tedavi Planı</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-brand-offwhite">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span>Gazi Ünv. Hekim Altyapısı</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-brand-offwhite">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span>Atakule Bölgesinde Konum</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center text-brand-gold font-bold hover:text-brand-gold-warm transition-colors duration-200"
                >
                  Daha Fazla Bilgi
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HEKİMLERİMİZ SECTION */}
      <section className="py-20 bg-brand-blue/50 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Hekim Kadromuz</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">Hekimlerimiz</h2>
            <p className="text-sm text-brand-gray">
              Deneyimli hekim kadromuz ile Atakule bölgesinde ağız ve diş sağlığı standartlarınızı yükseltiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {doctors.map((doc) => (
              <div
                key={doc.slug}
                className="bg-[#07111F] rounded border border-brand-gold/10 overflow-hidden flex flex-col justify-between group hover:border-brand-gold/30 transition-all duration-300"
              >
                <div className="relative h-[380px] w-full bg-brand-blue">
                  <Image
                    src={doc.image}
                    alt={`${doc.name} Portre Görseli`}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/20 to-transparent"></div>
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-semibold uppercase text-brand-gold tracking-widest">{doc.title}</span>
                    <h3 className="text-2xl font-serif font-bold text-brand-white mt-1">{doc.name}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <p className="text-sm text-brand-offwhite/90 leading-relaxed">
                    {doc.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-brand-gold/10">
                    <a
                      href={doc.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-brand-gold font-semibold hover:text-brand-gold-warm transition-colors"
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram'da Takip Et
                    </a>
                    
                    <div className="flex gap-3 pt-2">
                      <Link
                        href={`/hekimlerimiz/${doc.slug}`}
                        className="flex-1 text-center py-2 border border-brand-gold/30 text-xs font-semibold rounded text-brand-gold hover:bg-brand-gold/10 transition-all duration-300"
                      >
                        Hekim Detayı
                      </Link>
                      <a
                        href={siteSettings.whatsappAppointmentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 bg-brand-gold text-brand-dark text-xs font-bold rounded hover:bg-brand-gold-warm transition-all duration-300"
                      >
                        Randevu Al
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEDAVİLER SECTION */}
      <section className="py-20 bg-[#07111F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Hizmetlerimiz</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">Tedavilerimiz</h2>
            <p className="text-sm text-brand-gray">
              Klinik uygulamalarımızda estetik, fonksiyon ve konforu bir arada sunan başlıca tedavilerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => {
              // Custom WhatsApp message link for this treatment
              const waLink = `https://wa.me/905345063368?text=${encodeURIComponent(treatment.whatsappMessage)}`;

              return (
                <div
                  key={treatment.slug}
                  className="bg-[#0D1B2A]/60 border border-brand-gold/10 rounded p-6 flex flex-col justify-between hover:border-brand-gold/30 hover:bg-[#0D1B2A]/90 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded border border-brand-gold/20 flex items-center justify-center text-brand-gold bg-brand-gold/5">
                      <Sparkles className="w-5 h-5 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-white">{treatment.name}</h3>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {treatment.shortDescription}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-brand-gold/10 mt-6">
                    <Link
                      href={`/tedaviler/${treatment.slug}`}
                      className="flex-1 text-center py-2 text-xs font-semibold border border-brand-gold/30 rounded text-brand-gold hover:bg-brand-gold/5 transition-all"
                    >
                      Detay İncele
                    </Link>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 text-xs font-bold bg-brand-gold text-brand-dark rounded hover:bg-brand-gold-warm transition-all"
                    >
                      Bilgi Al
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tedaviler"
              className="inline-flex items-center justify-center px-6 py-3 border border-brand-gold text-sm font-bold text-brand-gold rounded hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
            >
              Tüm Tedavileri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* 6. VAKA GALERİSİ (BEFORE/AFTER) */}
      <section className="py-20 bg-brand-blue/30 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Vaka Paylaşımları</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">Vaka Galerisi</h2>
            <p className="text-sm text-brand-gray">
              Klinik uygulamalarımızdan önce/sonra örnekleri.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#07111F] border border-brand-gold/15 rounded p-6 sm:p-10 space-y-8">
            {cases.map((cs) => (
              <div key={cs.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Before / After comparative view */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold tracking-wider text-brand-gray uppercase">Tedavi Öncesi</span>
                      <div className="relative h-[160px] rounded overflow-hidden border border-red-500/10">
                        <Image
                          src={cs.beforeImage}
                          alt="Tedavi öncesi hasta dişi"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold tracking-wider text-brand-gold uppercase">Tedavi Sonrası</span>
                      <div className="relative h-[160px] rounded overflow-hidden border border-brand-gold/20">
                        <Image
                          src={cs.afterImage}
                          alt="Tedavi sonrası estetik dişi"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description details */}
                <div className="space-y-4">
                  <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
                    {cs.treatmentName}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-brand-white">{cs.title}</h3>
                  <p className="text-sm text-brand-offwhite/80 leading-relaxed">
                    {cs.description}
                  </p>
                  <a
                    href={siteSettings.whatsappAppointmentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-brand-gold hover:text-brand-gold-warm transition-colors"
                  >
                    Böyle Bir Gülüş İstiyorum
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}

            {/* Warning Disclaimer */}
            <div className="border-t border-brand-gold/10 pt-6 text-center">
              <p className="text-xs text-brand-gray italic leading-relaxed">
                ⚠️ {caseDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEDEN ATAKULE DENT? */}
      <section className="py-20 bg-[#07111F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Neden Biz?</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">Neden Atakule Dent?</h2>
            <p className="text-sm text-brand-gray">
              Hasta memnuniyeti ve sürdürülebilir diş sağlığı hedeflerimiz doğrultusunda sunduğumuz ayrıcalıklar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-blue/30 border border-brand-gold/10 p-6 rounded space-y-4">
              <Award className="w-8 h-8 text-brand-gold" />
              <h3 className="text-lg font-serif font-bold text-brand-white">Kişiye Özel Yaklaşım</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Her ağız yapısının farklı olduğunu biliyoruz. Tedavilerimizi tamamen hastaya özel planlıyor ve uyguluyoruz.
              </p>
            </div>
            <div className="bg-brand-blue/30 border border-brand-gold/10 p-6 rounded space-y-4">
              <ShieldCheck className="w-8 h-8 text-brand-gold" />
              <h3 className="text-lg font-serif font-bold text-brand-white">Estetik & Fonksiyon</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Sadece güzel bir görünüm değil, aynı zamanda çiğneme fonksiyonu ve biyolojik uyumu da en üst düzeyde hedefliyoruz.
              </p>
            </div>
            <div className="bg-brand-blue/30 border border-brand-gold/10 p-6 rounded space-y-4">
              <MapPin className="w-8 h-8 text-brand-gold" />
              <h3 className="text-lg font-serif font-bold text-brand-white">Atakule'de Merkezi Konum</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Ankara'nın en prestijli ve merkezi bölgelerinden Çankaya Atakule civarında, kolay ulaşılabilir konumda hizmet veriyoruz.
              </p>
            </div>
            <div className="bg-brand-blue/30 border border-brand-gold/10 p-6 rounded space-y-4">
              <MessageSquare className="w-8 h-8 text-brand-gold" />
              <h3 className="text-lg font-serif font-bold text-brand-white">Kolay İletişim</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Randevularınızı ve tüm sorularınızı WhatsApp üzerinden saniyeler içerisinde hekimlerimize ulaştırabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ATAKULE KONUM VE HARİTA BÖLÜMÜ */}
      <section className="py-20 bg-brand-blue/40 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Location Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-brand-gold"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Ulaşım ve Konum</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">
                Ankara’nın simgesinin yanı başındayız
              </h2>
              <p className="text-sm text-brand-gray leading-relaxed">
                Atakule Dent, Çankaya Aziziye Mahallesi’nde, Atakule’ye yakın ve merkezi bir konumda hizmet vermektedir. Kolay tarifi ve otopark imkanıyla rahat bir muayene süreci sunar.
              </p>

              <div className="bg-[#07111F] p-6 rounded border border-brand-gold/10 space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-brand-offwhite leading-relaxed">{siteSettings.address}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={siteSettings.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-brand-gold text-xs font-bold rounded text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
                >
                  <Map className="w-4 h-4 mr-2" />
                  Yol Tarifi Al
                </a>
                <a
                  href={siteSettings.formattedPrimaryPhone}
                  className="inline-flex items-center justify-center px-4 py-2 border border-brand-offwhite/40 text-xs font-semibold rounded text-brand-white hover:bg-brand-white/10 transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Kliniği Ara
                </a>
                <a
                  href={siteSettings.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-brand-turquoise/40 text-xs font-semibold rounded text-brand-turquoise hover:bg-brand-turquoise/10 transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp'tan Yaz
                </a>
              </div>
            </div>

            {/* Map and Location Image side-by-side or Map Embed */}
            <div className="w-full h-[350px] sm:h-[400px] rounded overflow-hidden border border-brand-gold/10 shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.2726543160686!2d32.85764097656641!3d39.890479787508494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0e4b85c15f%3A0xe54df6fe0478051!2sAtakule%20Dent%20A%C4%9F%C4%B1z%20ve%20Di%C5%9F%20Sa%C4%9Fl%C4%B1%C4%9F%C4%B1%20Poliklini%C4%9Fi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atakule Dent Google Haritası"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM BÖLÜMÜ */}
      <section className="py-20 bg-[#07111F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Sosyal Medya</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">Bizi Instagram'da Takip Edin</h2>
            <p className="text-sm text-brand-gray">
              Klinik ortamımızdan güncel paylaşımlar ve hekimlerimizin vaka uygulamaları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Clinic Feed */}
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-brand-gold/10">
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-white">@atakuledent.clinic</h3>
                  <p className="text-xs text-brand-gray">Atakule Dent Kurumsal Instagram Hesabı</p>
                </div>
                <a
                  href={siteSettings.instagramClinic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 border border-brand-gold text-xs font-bold rounded text-brand-dark bg-brand-gold hover:bg-transparent hover:text-brand-gold transition-all duration-300"
                >
                  Takip Et
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {clinicInstagramFeed.map((post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square rounded overflow-hidden border border-brand-gold/5 group block"
                  >
                    <Image
                      src={post.image}
                      alt={post.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#07111F]/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-2 text-center transition-all duration-300">
                      <Instagram className="w-5 h-5 text-brand-gold mb-1" />
                      <p className="text-[10px] text-brand-offwhite line-clamp-3 px-1">{post.caption}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Doctor Feed */}
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-brand-gold/10">
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-white">@dtozguronderr</h3>
                  <p className="text-xs text-brand-gray">Dt. Özgür Önder Instagram Hesabı</p>
                </div>
                <a
                  href={siteSettings.instagramDoctor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 border border-brand-gold text-xs font-bold rounded text-brand-dark bg-brand-gold hover:bg-transparent hover:text-brand-gold transition-all duration-300"
                >
                  Takip Et
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {doctorInstagramFeed.map((post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square rounded overflow-hidden border border-brand-gold/5 group block"
                  >
                    <Image
                      src={post.image}
                      alt={post.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#07111F]/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-2 text-center transition-all duration-300">
                      <Instagram className="w-5 h-5 text-brand-gold mb-1" />
                      <p className="text-[10px] text-brand-offwhite line-clamp-3 px-1">{post.caption}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. RANDEVU VE İLETİŞİM */}
      <section className="py-20 bg-brand-blue/30 border-t border-brand-gold/10" id="randevu-formu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="w-8 h-[1px] bg-brand-gold"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">İletişim ve Detaylar</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">
                Sorularınız için bizimle iletişime geçin
              </h2>
              <p className="text-sm text-brand-gray leading-relaxed">
                Tedavilerimiz hakkında bilgi almak veya doğrudan randevu talep etmek için iletişim formunu doldurabilir ya da WhatsApp üzerinden doğrudan yazabilirsiniz.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-white">Klinik Adresi</h4>
                    <p className="text-xs text-brand-gray mt-1 leading-relaxed">{siteSettings.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-brand-gold mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-white">Telefon Numarası</h4>
                    <p className="text-xs text-brand-gray mt-0.5">
                      <a href={siteSettings.formattedPrimaryPhone} className="hover:text-brand-gold transition-colors">
                        {siteSettings.primaryPhone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-brand-gold mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-white">WhatsApp İletişim</h4>
                    <p className="text-xs text-brand-gray mt-0.5">
                      <a href={siteSettings.whatsappAppointmentLink} className="hover:text-brand-gold transition-colors">
                        {siteSettings.whatsappNumber}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-brand-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-white">Çalışma Saatleri</h4>
                    <p className="text-xs text-brand-gray mt-1 leading-relaxed">{siteSettings.hoursNote}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-[#07111F] rounded border border-brand-gold/10 p-6 sm:p-10 shadow-xl space-y-6">
              <h3 className="text-2xl font-serif font-bold text-brand-white">Randevu & Bilgi Formu</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="form-name" className="text-xs font-semibold text-brand-gray">Ad Soyad *</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      className="form-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="form-phone" className="text-xs font-semibold text-brand-gray">Telefon Numarası *</label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="05xx xxx xx xx"
                      className="form-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="form-treatment" className="text-xs font-semibold text-brand-gray">Tedavi Seçimi</label>
                    <select
                      id="form-treatment"
                      className="form-input text-brand-gray"
                      value={selectedTreatment}
                      onChange={(e) => setSelectedTreatment(e.target.value)}
                    >
                      <option value="">Seçiniz</option>
                      {treatments.map((t) => (
                        <option key={t.slug} value={t.name}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="form-doctor" className="text-xs font-semibold text-brand-gray">Hekim Tercihi</label>
                    <select
                      id="form-doctor"
                      className="form-input text-brand-gray"
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                    >
                      <option value="">Farketmez</option>
                      {doctors.map((d) => (
                        <option key={d.slug} value={d.name}>{d.title} {d.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="form-date" className="text-xs font-semibold text-brand-gray">Tercih Edilen Tarih</label>
                  <input
                    id="form-date"
                    type="date"
                    className="form-input"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="form-message" className="text-xs font-semibold text-brand-gray">Mesajınız</label>
                  <textarea
                    id="form-message"
                    rows={3}
                    placeholder="Eklemek istediğiniz notlar..."
                    className="form-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <input
                    id="form-kvkk"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-brand-gold/30 text-brand-gold bg-brand-blue focus:ring-brand-gold mt-1"
                    checked={kvkkChecked}
                    onChange={(e) => setKvkkChecked(e.target.checked)}
                  />
                  <label htmlFor="form-kvkk" className="text-xs text-brand-gray leading-relaxed">
                    <Link href="/kvkk" target="_blank" className="underline text-brand-gold hover:text-brand-gold-warm">
                      KVKK Aydınlatma Metni
                    </Link>'ni okudum, kişisel verilerimin işlenmesini kabul ediyorum. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-gold text-brand-dark font-bold rounded hover:bg-brand-gold-warm transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Randevu Talebini Gönder (WhatsApp)
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
