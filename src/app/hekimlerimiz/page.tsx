import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Award } from "lucide-react";
import { Instagram } from "@/components/icons/Instagram";
import { doctors } from "@/data/doctors";
import { siteSettings } from "@/data/siteSettings";

export const metadata = {
  title: "Hekimlerimiz | Atakule Dent Ankara",
  description: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği hekim kadrosu. Dt. Özgür Önder ve Diş Hekimi İrem Önder hakkında bilgi edinin.",
};

export default function DoctorsPage() {
  return (
    <div className="pt-24 bg-[#07111F]">
      {/* Page Header */}
      <section className="relative py-20 bg-brand-blue/30 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Uzmanlığımız</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-white">Hekimlerimiz</h1>
          <p className="text-sm text-brand-gray max-w-xl mx-auto">
            Gazi Üniversitesi temelli ve etik diş hekimliği prensiplerine bağlı kadromuzla yanınızdayız.
          </p>
        </div>
      </section>

      {/* Doctor Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {doctors.map((doc) => (
              <div
                key={doc.slug}
                className="bg-[#0D1B2A]/40 border border-brand-gold/10 rounded overflow-hidden flex flex-col justify-between group hover:border-brand-gold/30 hover:bg-[#0D1B2A]/70 transition-all duration-300 shadow-xl"
              >
                <div className="relative h-[400px] w-full bg-brand-blue">
                  <Image
                    src={doc.image}
                    alt={`${doc.name} Portre Fotoğrafı`}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/10 to-transparent"></div>
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-semibold uppercase text-brand-gold tracking-widest">{doc.title}</span>
                    <h3 className="text-2xl font-serif font-bold text-brand-white mt-1">{doc.name}</h3>
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-sm text-brand-offwhite/90 leading-relaxed">
                      {doc.longBio}
                    </p>
                    
                    {doc.education && (
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">Eğitim</h4>
                        {doc.education.map((edu, idx) => (
                          <div key={idx} className="flex items-center text-xs text-brand-gray">
                            <Award className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                            <span>{edu}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 pt-6 border-t border-brand-gold/10 mt-6">
                    <a
                      href={doc.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-brand-gold font-semibold hover:text-brand-gold-warm transition-colors"
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Hekim Instagram Paylaşımları
                    </a>

                    <div className="flex gap-4">
                      <Link
                        href={`/hekimlerimiz/${doc.slug}`}
                        className="flex-1 text-center py-2.5 border border-brand-gold/30 text-xs font-bold rounded text-brand-gold hover:bg-brand-gold/10 transition-all duration-300"
                      >
                        Biyografi & Vakalar
                      </Link>
                      <a
                        href={siteSettings.whatsappAppointmentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 bg-brand-gold text-brand-dark text-xs font-bold rounded hover:bg-brand-gold-warm transition-all duration-300"
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
    </div>
  );
}
