import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Gizlilik Politikası | Atakule Dent",
  description: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği web sitesi gizlilik politikası.",
};

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl font-serif font-bold text-brand-white">Gizlilik Politikası</h1>
          </div>
          <div className="h-[2px] w-20 bg-brand-gold"></div>

          <div className="space-y-6 text-sm text-brand-offwhite/90 leading-relaxed">
            <p>
              <strong>Atakule Dent</strong> olarak, web sitemizi ziyaret eden kullanıcıların gizliliğini korumak en temel önceliklerimizden biridir. Bu Gizlilik Politikası, sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığını ve korunduğunu açıklamaktadır.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">1. Toplanan Bilgiler</h3>
            <p>
              Web sitemizde bulunan randevu talep formunu doldurduğunuzda; adınız, soyadınız, telefon numaranız, tercih ettiğiniz tedavi ve hekim bilgileri form aracılığıyla alınır. Bu bilgiler üçüncü taraf veri tabanlarına kaydedilmeden doğrudan hedeflenen WhatsApp hattımıza mesaj olarak iletilir.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">2. Bilgilerin Kullanımı</h3>
            <p>
              Toplanan iletişim bilgileri yalnızca randevu takviminizi organize etmek ve diş sağlığı tedavilerinizle ilgili sorularınızı cevaplamak amacıyla hekimlerimiz ve yetkili klinik personeli tarafından kullanılır.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">3. Çerezler (Cookies)</h3>
            <p>
              Sitemizin performansını artırmak ve kullanıcı deneyimini iyileştirmek amacıyla tarayıcı çerezleri kullanılmaktadır. Detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">4. Güvenlik</h3>
            <p>
              Kişisel verilerinizin güvenliğini sağlamak amacıyla sitemiz üzerinde SSL sertifikası (güvenli soket katmanı) aktif olarak kullanılmakta ve tüm veri trafiği şifrelenmektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
