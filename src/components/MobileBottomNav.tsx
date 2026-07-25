import { Phone, MessageSquare } from "lucide-react";
import { siteSettings } from "@/data/siteSettings";

export default function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07111F]/95 backdrop-blur-md border-t border-brand-gold/20 shadow-2xl">
      <div className="grid grid-cols-2 h-16 divide-x divide-brand-gold/10">
        {/* Call Button */}
        <a
          href={siteSettings.formattedPrimaryPhone}
          className="flex flex-col items-center justify-center text-brand-offwhite active:bg-brand-blue/50 transition-colors"
        >
          <Phone className="w-5 h-5 text-brand-gold mb-1" />
          <span className="text-xs font-semibold tracking-wide">Hemen Ara</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={siteSettings.whatsappAppointmentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-brand-offwhite active:bg-brand-blue/50 transition-colors"
        >
          <MessageSquare className="w-5 h-5 text-brand-turquoise mb-1" />
          <span className="text-xs font-semibold tracking-wide">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
