import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Award, Heart, MessageSquare } from "lucide-react";
import { siteSettings } from "@/data/siteSettings";

export const metadata = {
  title: "Hakkımızda | Atakule Dent Ankara",
  description: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği hakkında bilgi edinin. Ankara Çankaya'da kişiye özel tedavi yaklaşımları.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#07111F]">
      {/* Page Header */}
      <section className="relative py-20 bg-brand-blue/30 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Biz Kimiz?</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-white">Hakkımızda</h1>
          <p className="text-sm text-brand-gray max-w-xl mx-auto">
            Atakule Dent Ağız ve Diş Sağlığı Polikliniği olarak, ağız ve diş sağlığınızı geleceğe güvenle taşıyoruz.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Block */}
            <div className="relative h-[450px] rounded overflow-hidden border border-brand-gold/10 shadow-2xl">
              <Image
                src="/images/clinic-reception.webp"
                alt="Atakule Dent Klinik Lobi"
                fill
                className="object-cover"
              />
            </div>

            {/* Description Text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-brand-white">Atakule'nin yanı başında premium hizmet</h2>
              <p className="text-sm text-brand-offwhite/80 leading-relaxed">
                Atakule Dent, Çankaya Aziziye Mahallesi'nde, Ankara'nın simgesel yapısı Atakule'nin hemen yakınında kurulmuş modern bir ağız ve diş sağlığı polikliniğidir. Misyonumuz, hastalarımıza en doğru tıbbi değerlendirmeleri sunarak kişiselleştirilmiş tedavi planları oluşturmaktır.
              </p>
              <p className="text-sm text-brand-offwhite/80 leading-relaxed">
                Hekimlerimizin Gazi Üniversitesi kökenli güçlü akademik altyapısı ve klinikteki sterilizasyon standartlarımız ile sağlığınızı en üst düzeyde koruyoruz. Her hastamızın beklentilerini dinliyor, tedavi öncesinde ve sonrasında kesintisiz iletişim kurmaya önem veriyoruz.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start">
                  <ShieldCheck className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-brand-white text-sm">Üst Düzey Sterilizasyon</h4>
                    <p className="text-xs text-brand-gray mt-1">
                      Klinik içi hijyen standartlarımızı Avrupa standartlarında ekipmanlarla sağlıyoruz.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-brand-white text-sm">Doğruluk ve Şeffaflık</h4>
                    <p className="text-xs text-brand-gray mt-1">
                      Garantili olmayan hiçbir tedaviyi önermiyor, hastalarımıza en doğru yaklaşımı sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-brand-blue/20 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Prensiplerimiz</span>
            <h2 className="text-3xl font-serif font-bold text-brand-white">Tedavi Felsefemiz</h2>
            <p className="text-sm text-brand-gray">
              Diş hekimliği uygulamalarında odaklandığımız temel prensipler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#07111F] p-8 border border-brand-gold/10 rounded space-y-4 text-center">
              <Award className="w-10 h-10 text-brand-gold mx-auto" />
              <h3 className="text-xl font-serif font-bold text-brand-white">Doğal Estetik</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Amacımız yapay görünen dişler değil; yüz hatlarınızla, mimiklerinizle ve ten renginizle mükemmel uyum sağlayan, doğal ve ışıltılı gülüşler tasarlamaktır.
              </p>
            </div>
            <div className="bg-[#07111F] p-8 border border-brand-gold/10 rounded space-y-4 text-center">
              <Heart className="w-10 h-10 text-brand-gold mx-auto" />
              <h3 className="text-xl font-serif font-bold text-brand-white">Hasta Konforu</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Tedavi sürecinin başından sonuna kadar kendinizi güvende ve konforlu hissetmeniz için sıcak bir karşılama, hijyenik bekleme odası ve güler yüzlü hizmet sunuyoruz.
              </p>
            </div>
            <div className="bg-[#07111F] p-8 border border-brand-gold/10 rounded space-y-4 text-center">
              <ShieldCheck className="w-10 h-10 text-brand-gold mx-auto" />
              <h3 className="text-xl font-serif font-bold text-brand-white">Sterilizasyon</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Kullandığımız her aletin temizliğinden emin olmak için otoklav cihazlarımız ve paketleme sistemlerimizle en ufak bir çapraz enfeksiyon riskine dahi yer bırakmıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-gold text-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-serif font-bold">Kişiye Özel Tedavi Planınızı Oluşturalım</h2>
          <p className="text-sm font-semibold max-w-xl mx-auto">
            Atakule bölgesindeki kliniğimizde diş hekimlerimiz eşliğinde detaylı ağız içi muayenenizi planlamak için WhatsApp üzerinden bizimle iletişime geçin.
          </p>
          <div>
            <a
              href={siteSettings.whatsappAppointmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-[#07111F] text-brand-white font-bold rounded hover:bg-[#0D1B2A] transition-all duration-300 shadow-xl"
            >
              <MessageSquare className="w-5 h-5 mr-2 text-brand-gold" />
              WhatsApp ile İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
