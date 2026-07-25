export interface CaseStudy {
  id: string;
  title: string;
  treatmentName: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export const cases: CaseStudy[] = [
  {
    id: "case-01",
    title: "Estetik Zirkonyum Restorasyonu",
    treatmentName: "Monolitik Zirkonyum Kaplama",
    beforeImage: "/cases/case-01-before.webp",
    afterImage: "/cases/case-01-after.webp",
    description: "Ön dişlerdeki şekil bozukluğu ve renk uyumsuzluğu monolitik zirkonyum kaplamalar ile giderildi, doğal bir gülüş profili sağlandı."
  }
];

export const caseDisclaimer = "Vaka paylaşımları bilgilendirme amaçlıdır. Tedavi sonuçları hastanın ağız yapısına ve kişisel koşullarına göre farklılık gösterebilir.";
