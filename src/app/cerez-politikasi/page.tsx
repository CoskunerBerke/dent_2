import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Çerez Politikası | Atakule Dent",
  description: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği web sitesi çerez politikası ve kullanımı hakkında bilgilendirme.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 bg-[#07111F] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-bold text-brand-gold hover:text-brand-gold-warm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Ana Sayfaya Dön
        </Link>

        <div className="bg-[#0D1B2A]/40 border border-brand-gold/15 rounded p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3 text-brand-gold">
            <Shield className="w-8 h-8" />
            <h1 className="text-3xl font-serif font-bold text-brand-white">Çerez Politikası</h1>
          </div>
          <div className="h-[2px] w-20 bg-brand-gold"></div>

          <div className="space-y-6 text-sm text-brand-offwhite/90 leading-relaxed">
            <p>
              <strong>Atakule Dent</strong> olarak web sitemizde çerezler (cookies) kullanmaktayız. Bu Çerez Politikası, web sitemizi ziyaretiniz sırasında kullanılan çerezleri ve bunlara dair tercihlerinizi nasıl yönetebileceğinizi açıklamaktadır.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">1. Çerez Nedir?</h3>
            <p>
              Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır. Çerezler, web sitelerinin daha verimli çalışmasını sağlamak amacıyla yaygın olarak kullanılmaktadır.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">2. Hangi Tür Çerezleri Kullanıyoruz?</h3>
            <p>
              Sitemizde yalnızca kullanımı zorunlu olan teknik çerezler (sitenin düzgün görüntülenmesi ve fontların yüklenmesi için) ile kullanıcı deneyimini optimize etmeye yarayan temel analiz çerezleri kullanılmaktadır. Reklam veya pazarlama amaçlı izleme çerezleri barındırmamaktayız.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">3. Çerez Tercihlerini Nasıl Yönetebilirsiniz?</h3>
            <p>
              Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi özelleştirme imkanına sahipsiniz. Çerezleri engellemeniz durumunda, sitemizdeki bazı özelliklerin ve sayfaların düzgün görüntülenmeyebileceğini lütfen unutmayın.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
