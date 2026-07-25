"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, MessageSquare, Calendar } from "lucide-react";
import { Instagram } from "@/components/icons/Instagram";
import { siteSettings } from "@/data/siteSettings";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [kvkkChecked, setKvkkChecked] = useState(false);

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
    <div className="pt-24 bg-[#07111F] min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 bg-brand-blue/30 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Bize Ulaşın</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-white">İletişim</h1>
          <p className="text-sm text-brand-gray max-w-xl mx-auto">
            Atakule bölgesindeki kliniğimiz için yol tarifi alın, bizi arayın veya randevu talebi oluşturun.
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information Cards */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold text-brand-white">Klinik Bilgilerimiz</h2>
                <p className="text-sm text-brand-gray leading-relaxed">
                  Çankaya Aziziye Mahallesi'nde, Atakule'nin yanı başında kolay ulaşılabilir ve sakin bir sokakta hizmet sunmaktayız.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#0D1B2A]/40 border border-brand-gold/10 p-6 rounded space-y-3">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                  <h4 className="font-bold text-brand-white text-base">Adres</h4>
                  <p className="text-xs text-brand-gray leading-relaxed">{siteSettings.address}</p>
                  <a
                    href={siteSettings.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs font-bold text-brand-gold hover:underline pt-2"
                  >
                    Google Haritalarda Aç →
                  </a>
                </div>

                <div className="bg-[#0D1B2A]/40 border border-brand-gold/10 p-6 rounded space-y-3">
                  <Phone className="w-6 h-6 text-brand-gold" />
                  <h4 className="font-bold text-brand-white text-base">Telefon</h4>
                  <p className="text-xs text-brand-gray">
                    Birincil: <a href={siteSettings.formattedPrimaryPhone} className="hover:text-brand-gold">{siteSettings.primaryPhone}</a>
                  </p>
                  <p className="text-xs text-brand-gray">
                    Sabit: <a href={siteSettings.formattedSecondaryPhone} className="hover:text-brand-gold">{siteSettings.secondaryPhone}</a>
                  </p>
                </div>

                <div className="bg-[#0D1B2A]/40 border border-brand-gold/10 p-6 rounded space-y-3">
                  <MessageSquare className="w-6 h-6 text-brand-turquoise" />
                  <h4 className="font-bold text-brand-white text-base">WhatsApp</h4>
                  <p className="text-xs text-brand-gray">
                    <a href={siteSettings.whatsappAppointmentLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">{siteSettings.whatsappNumber}</a>
                  </p>
                  <p className="text-[10px] text-brand-gray italic">Randevu ve danışma hattı</p>
                </div>

                <div className="bg-[#0D1B2A]/40 border border-brand-gold/10 p-6 rounded space-y-3">
                  <Instagram className="w-6 h-6 text-brand-gold" />
                  <h4 className="font-bold text-brand-white text-base">Instagram</h4>
                  <p className="text-xs text-brand-gray">
                    Klinik: <a href={siteSettings.instagramClinic} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">@atakuledent.clinic</a>
                  </p>
                  <p className="text-xs text-brand-gray">
                    Hekim: <a href={siteSettings.instagramDoctor} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">@dtozguronderr</a>
                  </p>
                </div>
              </div>

              {/* Lazy loaded map iframe */}
              <div className="w-full h-[300px] rounded overflow-hidden border border-brand-gold/10 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.2726543160686!2d32.85764097656641!3d39.890479787508494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0e4b85c15f%3A0xe54df6fe0478051!2sAtakule%20Dent%20A%C4%9F%C4%B1z%20ve%20Di%C5%9F%20Sa%C4%9Fl%C4%B1%C4%9F%C4%B1%20Poliklini%C4%9Fi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Atakule Dent İletişim Haritası"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-[#0D1B2A]/40 border border-brand-gold/15 rounded p-8 sm:p-10 shadow-xl space-y-6">
              <h3 className="text-2xl font-serif font-bold text-brand-white">Randevu Talep Formu</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="iletisim-name" className="text-xs font-semibold text-brand-gray">Ad Soyad *</label>
                    <input
                      id="iletisim-name"
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      className="form-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="iletisim-phone" className="text-xs font-semibold text-brand-gray">Telefon Numarası *</label>
                    <input
                      id="iletisim-phone"
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
                    <label htmlFor="iletisim-treatment" className="text-xs font-semibold text-brand-gray">Tedavi Seçimi</label>
                    <select
                      id="iletisim-treatment"
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
                    <label htmlFor="iletisim-doctor" className="text-xs font-semibold text-brand-gray">Hekim Tercihi</label>
                    <select
                      id="iletisim-doctor"
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
                  <label htmlFor="iletisim-date" className="text-xs font-semibold text-brand-gray">Tercih Edilen Tarih</label>
                  <input
                    id="iletisim-date"
                    type="date"
                    className="form-input"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="iletisim-message" className="text-xs font-semibold text-brand-gray">Mesajınız</label>
                  <textarea
                    id="iletisim-message"
                    rows={4}
                    placeholder="Sormak istediğiniz sorular..."
                    className="form-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <input
                    id="iletisim-kvkk"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-brand-gold/30 text-brand-gold bg-brand-blue focus:ring-brand-gold mt-1"
                    checked={kvkkChecked}
                    onChange={(e) => setKvkkChecked(e.target.checked)}
                  />
                  <label htmlFor="iletisim-kvkk" className="text-xs text-brand-gray leading-relaxed">
                    <Link href="/kvkk" target="_blank" className="underline text-brand-gold hover:text-brand-gold-warm">
                      KVKK Aydınlatma Metni
                    </Link>'ni okudum, kişisel verilerimin işlenmesini kabul ediyorum. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-gold text-brand-dark font-bold rounded hover:bg-brand-gold-warm transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
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
