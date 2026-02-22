"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "5511919267938"; // Formato internacional
  const message = encodeURIComponent("Olá Leonardo, vi seu portfólio e gostaria de conversar sobre um projeto!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      {/* Efeito de Ondas (Pulsação) */}
      <span className="absolute inset-0 rounded-full bg-brand-cyan/20 animate-ping group-hover:pause" />
      
      {/* Botão Principal */}
      <div className="relative flex items-center justify-center w-16 h-16 bg-brand-dark/80 backdrop-blur-lg border border-white/10 text-brand-cyan rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-brand-cyan/50 group-hover:text-white">
        <FaWhatsapp size={32} />
        
        {/* Tooltip Lateral (Aparece no Hover) */}
        <span className="absolute right-20 px-4 py-2 rounded-lg bg-brand-dark/90 border border-white/10 text-white text-sm font-medium opacity-0 -translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
          Vamos conversar?
        </span>
      </div>
    </a>
  );
};

export default WhatsappButton;