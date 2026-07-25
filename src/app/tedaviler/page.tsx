import Link from "next/link";
import { Sparkles, ArrowRight, MessageSquare } from "lucide-react";
import { treatments } from "@/data/treatments";

export const metadata = {
  title: "Tedavilerimiz | Atakule Dent Ankara",
  description: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği bünyesinde uygulanan estetik diş hekimliği, implant, zirkonyum kaplama ve genel dental tedaviler.",
};

export default function TreatmentsPage() {
  return (
    <div className="pt-24 bg-[#07111F] min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-brand-blue/30 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Hizmetlerimiz</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-white">Tedavilerimiz</h1>
          <p className="text-sm text-brand-gray max-w-xl mx-auto">
            Atakule Dent'te estetik ve fonksiyonu bir araya getiren kapsamlı ağız ve diş sağlığı uygulamaları sunuyoruz.
          </p>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => {
              const waLink = `https://wa.me/905345063368?text=${encodeURIComponent(treatment.whatsappMessage)}`;

              return (
                <div
                  key={treatment.slug}
                  className="bg-[#0D1B2A]/40 border border-brand-gold/10 rounded p-8 flex flex-col justify-between hover:border-brand-gold/30 hover:bg-[#0D1B2A]/70 transition-all duration-300 shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded border border-brand-gold/25 flex items-center justify-center text-brand-gold bg-brand-gold/5">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-brand-white">{treatment.name}</h2>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {treatment.shortDescription}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {treatment.details.slice(0, 3).map((detail, index) => (
                        <li key={index} className="text-xs text-brand-offwhite/80 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-brand-gold/10 mt-6">
                    <Link
                      href={`/tedaviler/${treatment.slug}`}
                      className="flex-1 text-center py-2.5 text-xs font-semibold border border-brand-gold/30 rounded text-brand-gold hover:bg-brand-gold/5 transition-all duration-200"
                    >
                      Detay İncele
                    </Link>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 text-xs font-bold bg-brand-gold text-brand-dark rounded hover:bg-brand-gold-warm transition-all duration-200"
                    >
                      Bilgi Al
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
