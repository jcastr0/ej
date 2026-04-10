import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotras', label: 'Nosotras' },
  { to: '/comunidad', label: 'Comunidad' },
  { to: '/blog', label: 'Blog' },
  { to: '/membresia', label: 'Membresía' },
  { to: '/bootcamp', label: '🔥 Bootcamp' },
];

const WHATSAPP_COMUNIDAD = 'https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr';

const MobileNav = ({ scrolled = false }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Abrir menú"
        >
          <svg className={`w-6 h-6 transition-colors ${scrolled ? 'text-[#19152A]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] bg-white p-0">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-100">
            <img
              src="/images/logo_ej.svg"
              alt="Emprendiendo Juntas"
              className="h-10 w-auto"
            />
          </div>

          {/* Links */}
          <nav className="flex-1 py-6">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.to}>
                <Link
                  to={link.to}
                  className="block px-6 py-3.5 text-base font-medium text-gray-700 hover:text-[#A169A2] hover:bg-purple-50 transition-colors"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div className="p-6 border-t border-gray-100 space-y-3">
            <SheetClose asChild>
              <Link to="/membresia" className="block">
                <Button className="w-full bg-[#A169A2] hover:bg-[#8d5a8e] text-white rounded-full font-semibold">
                  Únete
                </Button>
              </Link>
            </SheetClose>

            <Button
              variant="outline"
              className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full font-semibold"
              onClick={() => window.open(WHATSAPP_COMUNIDAD, '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Grupo de WhatsApp
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

