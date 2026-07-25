"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { siteSettings } from "@/data/siteSettings";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname, isOpen]);

  const navLinks = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Hekimlerimiz", path: "/hekimlerimiz" },
    { name: "Tedaviler", path: "/tedaviler" },
    { name: "Kliniğimiz", path: "/klinigimiz" },
    { name: "Vaka Galerisi", path: "/vaka-galerisi" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07111F]/90 backdrop-blur-md border-b border-brand-gold/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/brand/logo-light.svg"
              alt="Atakule Dent Logo"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-4 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-brand-gold border-b-2 border-brand-gold"
                      : "text-brand-offwhite hover:text-brand-gold"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={siteSettings.formattedPrimaryPhone}
              className="flex items-center text-sm font-semibold text-brand-offwhite hover:text-brand-gold transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-gold" />
              {siteSettings.primaryPhone}
            </a>
            <a
              href={siteSettings.whatsappAppointmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-brand-gold text-sm font-semibold rounded text-brand-dark bg-brand-gold hover:bg-transparent hover:text-brand-gold transition-all duration-300"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Randevu Al
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-offwhite hover:text-brand-gold focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Menüyü aç/kapat"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-[#07111F] z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-5 pb-6 space-y-3 shadow-inner bg-[#0D1B2A]/90 h-full border-t border-brand-gold/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-4 py-3 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-brand-gold/10 text-brand-gold border-l-4 border-brand-gold"
                    : "text-brand-offwhite hover:bg-brand-blue hover:text-brand-gold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="pt-6 border-t border-brand-gold/10 space-y-4 px-4">
            <a
              href={siteSettings.formattedPrimaryPhone}
              className="flex items-center text-base font-semibold text-brand-offwhite hover:text-brand-gold"
            >
              <Phone className="w-5 h-5 mr-3 text-brand-gold" />
              {siteSettings.primaryPhone}
            </a>
            <a
              href={siteSettings.whatsappAppointmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center inline-flex items-center justify-center px-4 py-3 border border-brand-gold text-base font-bold rounded text-brand-dark bg-brand-gold hover:bg-transparent hover:text-brand-gold transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Randevu Al (WhatsApp)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
