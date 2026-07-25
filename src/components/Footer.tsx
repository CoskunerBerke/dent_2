import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import { Instagram } from "@/components/icons/Instagram";
import { siteSettings } from "@/data/siteSettings";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07111F] text-brand-offwhite border-t border-brand-gold/10 pt-16 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo-light.svg"
                alt="Atakule Dent Logo"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-brand-gray leading-relaxed">
              Atakule'nin yanı başında; estetik, fonksiyon ve konforu bir araya getiren kişiye özel ağız ve diş sağlığı hizmetleri.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteSettings.instagramClinic}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Klinik"
                className="w-8 h-8 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteSettings.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp İletişim"
                className="w-8 h-8 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-gold font-serif font-bold text-lg mb-6">Kurumsal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors duration-200">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-brand-gold transition-colors duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hekimlerimiz" className="hover:text-brand-gold transition-colors duration-200">
                  Hekimlerimiz
                </Link>
              </li>
              <li>
                <Link href="/klinigimiz" className="hover:text-brand-gold transition-colors duration-200">
                  Kliniğimiz
                </Link>
              </li>
              <li>
                <Link href="/vaka-galerisi" className="hover:text-brand-gold transition-colors duration-200">
                  Vaka Galerisi
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-brand-gold transition-colors duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Treatments */}
          <div>
            <h3 className="text-brand-gold font-serif font-bold text-lg mb-6">Öne Çıkan Tedaviler</h3>
            <ul className="space-y-3 text-sm">
              {treatments.slice(0, 5).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tedaviler/${t.slug}`}
                    className="hover:text-brand-gold transition-colors duration-200"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tedaviler" className="text-brand-gold/80 hover:text-brand-gold font-semibold transition-colors duration-200">
                  Tüm Tedaviler →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-brand-gold font-serif font-bold text-lg mb-6">İletişim</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-gold flex-shrink-0 mt-0.5" />
                <a
                  href={siteSettings.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors duration-200 leading-relaxed"
                >
                  {siteSettings.address}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-brand-gold flex-shrink-0" />
                <a href={siteSettings.formattedPrimaryPhone} className="hover:text-brand-gold transition-colors duration-200">
                  {siteSettings.primaryPhone}
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-3 text-brand-gold flex-shrink-0" />
                <a
                  href={siteSettings.whatsappAppointmentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  {siteSettings.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Warning */}
        <div className="mt-16 pt-8 border-t border-brand-gold/10 text-center space-y-6">
          <p className="text-xs text-brand-gray max-w-4xl mx-auto leading-relaxed">
            ⚠️ <strong>Yasal Bilgilendirme:</strong> Bu web sitesinde yer alan tüm bilgiler yalnızca bilgilendirme amaçlıdır ve tanı, tedavi ya da hekim tavsiyesi yerine geçmez. Sağlığınızla ilgili en doğru tanı ve tedavi yöntemini belirlemek için lütfen hekiminize danışın.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-brand-gray">
            <Link href="/kvkk" className="hover:text-brand-gold transition-colors duration-200">
              KVKK Aydınlatma Metni
            </Link>
            <span>•</span>
            <Link href="/gizlilik-politikasi" className="hover:text-brand-gold transition-colors duration-200">
              Gizlilik Politikası
            </Link>
            <span>•</span>
            <Link href="/cerez-politikasi" className="hover:text-brand-gold transition-colors duration-200">
              Çerez Politikası
            </Link>
          </div>

          <p className="text-xs text-brand-gray">
            © {currentYear} {siteSettings.shortName}. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
