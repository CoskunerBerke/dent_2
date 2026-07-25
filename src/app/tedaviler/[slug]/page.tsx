import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageSquare, Sparkles } from "lucide-react";
import { treatments } from "@/data/treatments";
import { siteSettings } from "@/data/siteSettings";

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatments.map((t) => ({
    slug: t.slug,
  }));
}

export default async function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  const waLink = `https://wa.me/905345063368?text=${encodeURIComponent(treatment.whatsappMessage)}`;

  return (
    <div className="pt-24 bg-[#07111F] min-h-screen">
      {/* Navigation back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/tedaviler"
          className="inline-flex items-center text-xs font-bold text-brand-gold hover:text-brand-gold-warm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Tüm Tedavilere Geri Dön
        </Link>
      </div>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0D1B2A]/40 border border-brand-gold/15 rounded p-8 sm:p-12 space-y-8 shadow-2xl">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-brand-gold">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold tracking-widest uppercase">Atakule Dent Klinik Tedavileri</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">{treatment.name}</h1>
              <div className="h-[2px] w-24 bg-brand-gold"></div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-brand-offwhite/90 leading-relaxed text-base sm:text-lg">
                {treatment.fullDescription}
              </p>
            </div>

            {/* Details Points */}
            <div className="space-y-4 pt-4 border-t border-brand-gold/10">
              <h3 className="font-serif font-bold text-xl text-brand-white">Tedavi Ayrıntıları ve Özellikleri</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatment.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start p-3 bg-[#07111F]/60 border border-brand-gold/5 rounded text-sm text-brand-offwhite"
                  >
                    <CheckCircle className="w-4.5 h-4.5 text-brand-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-brand-gold/10">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3.5 bg-brand-gold text-brand-dark font-bold rounded shadow-lg hover:bg-brand-gold-warm transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-brand-dark" />
                WhatsApp ile Bilgi Al & Randevu Al
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-brand-offwhite/30 text-brand-white font-semibold rounded hover:bg-brand-white/10 transition-all duration-300"
              >
                İletişim Formunu Doldur
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
