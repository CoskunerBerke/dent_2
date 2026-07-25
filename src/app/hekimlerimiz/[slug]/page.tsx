import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, MessageSquare } from "lucide-react";
import { Instagram } from "@/components/icons/Instagram";
import { doctors } from "@/data/doctors";
import { siteSettings } from "@/data/siteSettings";

interface DoctorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DoctorDetailPage({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="pt-24 bg-[#07111F] min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/hekimlerimiz"
          className="inline-flex items-center text-xs font-bold text-brand-gold hover:text-brand-gold-warm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Hekimlerimize Geri Dön
        </Link>
      </div>

      {/* Main Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Portrait Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="relative h-[450px] w-full rounded overflow-hidden border border-brand-gold/10 bg-brand-blue shadow-2xl">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} Portre Görseli`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="bg-[#0D1B2A]/40 border border-brand-gold/10 p-6 rounded text-center space-y-4">
                <div>
                  <span className="text-xs text-brand-gold uppercase tracking-widest">{doctor.title}</span>
                  <h2 className="text-2xl font-serif font-bold text-brand-white mt-1">{doctor.name}</h2>
                  <p className="text-xs text-brand-gray mt-1">Atakule Dent Çankaya Ankara</p>
                </div>

                <a
                  href={doctor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold rounded hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram Profilini Gör
                </a>
              </div>
            </div>

            {/* Right Biography Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-white">Hekim Özgeçmişi</h1>
                <div className="h-[2px] w-20 bg-brand-gold"></div>
              </div>

              <p className="text-brand-offwhite/90 leading-relaxed text-base">
                {doctor.longBio}
              </p>

              {/* Verified Education section */}
              {doctor.education && (
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-brand-white">Eğitim Geçmişi</h3>
                  <ul className="space-y-2 text-sm text-brand-gray">
                    {doctor.education.map((edu, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4.5 h-4.5 mr-2 text-brand-gold flex-shrink-0" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Treatments Focus */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-brand-white">Hekimin Klinik Uygulamaları</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.treatments.map((treat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-brand-blue/30 border border-brand-gold/10 rounded text-sm text-brand-offwhite"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-gold mr-3 flex-shrink-0" />
                      <span>{treat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Button */}
              <div className="pt-6">
                <a
                  href={`https://wa.me/905345063368?text=${encodeURIComponent(`Merhaba, Dt. ${doctor.name} için randevu almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded shadow-lg hover:bg-brand-gold-warm transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 mr-2 text-brand-dark" />
                  Dt. {doctor.name} İçin Randevu Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
