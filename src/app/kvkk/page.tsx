import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { siteSettings } from "@/data/siteSettings";

export const metadata = {
  title: "KVKK Aydınlatma Metni | Atakule Dent",
  description: "Atakule Dent Ağız ve Diş Sağlığı Polikliniği Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni.",
};

export default function KvkkPage() {
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
            <h1 className="text-3xl font-serif font-bold text-brand-white">KVKK Aydınlatma Metni</h1>
          </div>
          <div className="h-[2px] w-20 bg-brand-gold"></div>

          <div className="space-y-6 text-sm text-brand-offwhite/90 leading-relaxed">
            <p>
              <strong>Atakule Dent Ağız ve Diş Sağlığı Polikliniği</strong> olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, kliniğimiz ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (“KVKK”) uygun olarak işlenmesine ve muhafaza edilmesine büyük önem atfetmekteyiz.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">1. Veri Sorumlusunun Kimliği</h3>
            <p>
              KVKK uyarınca, veri sorumlusu sıfatıyla kliniğimizin iletişim bilgileri aşağıda yer almaktadır:<br />
              <strong>Adres:</strong> {siteSettings.address}<br />
              <strong>Telefon:</strong> {siteSettings.primaryPhone}<br />
              <strong>WhatsApp:</strong> {siteSettings.whatsappNumber}
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">2. Kişisel Verilerin İşlenme Amacı</h3>
            <p>
              Toplanan kişisel verileriniz, ağız ve diş sağlığı hizmetlerinin (teşhis, tedavi, protez uygulamaları vb.) sunulması, randevu oluşturulması, hasta takibi, faturalandırma işlemlerinin yürütülmesi ve yasal bildirim yükümlülüklerinin yerine getirilmesi amacıyla işlenmektedir.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">3. İşlenen Kişisel Verilerin Aktarılması</h3>
            <p>
              Kişisel verileriniz, Kanun'da belirtilen güvenlik ve gizlilik esasları çerçevesinde; yasal yükümlülüklerimizin yerine getirilmesi amacıyla Sağlık Bakanlığı, İl Sağlık Müdürlüğü ve diğer yetkili kamu kurum ve kuruluşları ile kanunen yetkili özel hukuk kişilerine aktarılabilecektir.
            </p>

            <h3 className="text-brand-gold font-serif font-bold text-lg pt-4">4. Veri Sahibinin Hakları</h3>
            <p>
              KVKK'nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, verilerin düzeltilmesini veya silinmesini isteme hakkına sahiptir. Taleplerinizi yazılı olarak veya kayıtlı e-posta adresiniz üzerinden kliniğimize iletebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
