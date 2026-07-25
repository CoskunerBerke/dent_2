import Image from "next/image";
import Link from "next/link";
import { cases, caseDisclaimer } from "@/data/cases";
import { siteSettings } from "@/data/siteSettings";
import { MessageSquare, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Vaka Galerisi | Atakule Dent Ankara",
  description: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği vaka galerisi. Estetik zirkonyum kaplama ve gülüş tasarımı önce/sonra fotoğrafları.",
};

export default function CasesPage() {
  return (
    <div className="pt-24 bg-[#07111F] min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-brand-blue/30 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Uygulamalarımız</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-white">Vaka Galerisi</h1>
          <p className="text-sm text-brand-gray max-w-xl mx-auto">
            Hekimlerimizin gerçekleştirdiği estetik diş ve implant uygulamalarının önce / sonra karşılaştırmaları.
          </p>
        </div>
      </section>

      {/* Case Gallery List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((cs) => (
              <div
                key={cs.id}
                className="bg-[#0D1B2A]/40 border border-brand-gold/10 rounded p-6 sm:p-10 shadow-xl space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Before / After Images */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold tracking-wider text-brand-gray uppercase">Önce</span>
                      <div className="relative h-[180px] rounded overflow-hidden border border-red-500/10 bg-brand-blue">
                        <Image
                          src={cs.beforeImage}
                          alt="Tedavi öncesi hasta dişi"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold tracking-wider text-brand-gold uppercase">Sonra</span>
                      <div className="relative h-[180px] rounded overflow-hidden border border-brand-gold/25 bg-brand-blue">
                        <Image
                          src={cs.afterImage}
                          alt="Tedavi sonrası estetik dişi"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                      {cs.treatmentName}
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-brand-white">{cs.title}</h2>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {cs.description}
                    </p>
                    <a
                      href={`https://wa.me/905345063368?text=${encodeURIComponent(`Merhaba, vaka galerisindeki ${cs.title} uygulaması hakkında bilgi alabilir miyim?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-brand-gold hover:text-brand-gold-warm transition-colors"
                    >
                      WhatsApp'tan Sor
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Warning Notice */}
          <div className="mt-12 bg-brand-blue/20 border border-brand-gold/15 p-6 rounded text-center space-y-3">
            <div className="flex justify-center text-brand-gold">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="text-xs text-brand-gray leading-relaxed max-w-2xl mx-auto">
              {caseDisclaimer} Sitedeki vaka paylaşımları yalnızca bilgilendirme amaçlı olup tıbbi tanı ve tedavi tavsiyesi yerine kullanılamaz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
