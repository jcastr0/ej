import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/573013528537?text=Hola%2C%20quiero%20información%20sobre%20Emprendiendo%20Juntas';

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escríbenos por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1fb855] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300"
  >
    <MessageCircle className="w-7 h-7 text-white" />
  </a>
);

export default WhatsAppFloat;

