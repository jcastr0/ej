import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/MobileNav';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/images/logo_ej.png" 
            alt="Emprendiendo Juntas" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-[#A169A2] transition-colors">
            Inicio
          </Link>
          <Link to="/nosotras" className="text-sm font-medium text-gray-600 hover:text-[#A169A2] transition-colors">
            Nosotras
          </Link>
          <Link to="/comunidad" className="text-sm font-medium text-gray-600 hover:text-[#A169A2] transition-colors">
            Comunidad
          </Link>
          <Link to="/blog" className="text-sm font-medium text-gray-600 hover:text-[#A169A2] transition-colors">
            Blog
          </Link>
          <Link to="/membresia" className="text-sm font-medium text-gray-600 hover:text-[#A169A2] transition-colors">
            Membresía
          </Link>
          <Link to="/membresia">
            <Button
              variant="outline"
              className="border-[#A169A2] text-[#A169A2] hover:bg-[#A169A2] hover:text-white transition-all"
            >
              Únete
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;