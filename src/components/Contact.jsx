import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleSocialClick = url => {
    if (url) {
      window.open(url, '_blank');
    } else {
      toast({ title: "🚧 Próximamente", description: "Puedes solicitarla en tu próximo mensaje. 🚀" });
    }
  };

  const TikTokIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>;
  const ThreadsIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12.5 7.5c-2.41 0 -5.5 .5 -5.5 4.5s2.5 4.5 5.5 4.5c2.5 0 3.5 -2.5 3.5 -2.5s-.5 -2.5 -3.5 -2.5c-2.4 0 -3 2 -3 2" /><path d="M16 11v-1a2 2 0 1 1 4 0v6" /></svg>;
  const FacebookIcon = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/emprendiendo.juntas/", color: "text-[#E1306C]" },
    { icon: FacebookIcon, label: "Facebook", url: "https://www.facebook.com/people/Emprendiendo-Juntas/100067189676481/", color: "text-[#1877F2]" },
    { icon: ThreadsIcon, label: "Threads", url: "https://www.threads.com/@emprendiendo.juntas", color: "text-white" },
    { icon: TikTokIcon, label: "TikTok", url: "https://www.tiktok.com/@emprendiendo.juntas?_r=1&_t=ZS-92phKpKwSP3", color: "text-white" },
  ];

  return (
    <footer className="bg-[#19152A] text-white py-12 sm:py-14 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Logo + desc */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="col-span-2 lg:col-span-1 space-y-4">
            <img src="/images/logo_ej.svg" alt="Emprendiendo Juntas" className="h-12 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Comunidad de mujeres emprendedoras en Santa Marta, Colombia.
            </p>
          </motion.div>

          {/* Contacto */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-3">
            <h3 className="text-sm font-bold text-[#4CA7C0] uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Contacto</h3>
            <div className="space-y-2.5">
              <a href="https://www.google.com/maps/place/Santa+Marta,+Colombia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 text-sm hover:text-white/70 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <MapPin className="h-4 w-4 text-[#4CA7C0] flex-shrink-0" />Santa Marta, Colombia
              </a>
              <a href="mailto:info@emprendiendojuntas.com.co" className="flex items-center gap-2 text-white/50 text-sm hover:text-white/70 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <Mail className="h-4 w-4 text-[#4CA7C0] flex-shrink-0" />info@emprendiendojuntas.com.co
              </a>
              <a href="https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 text-sm hover:text-white/70 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <MessageCircle className="h-4 w-4 text-[#25D366] flex-shrink-0" />Grupo WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Enlaces */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-3">
            <h3 className="text-sm font-bold text-[#4CA7C0] uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Navegación</h3>
            <nav className="flex flex-col space-y-2">
              {[{ to: '/nosotras', label: 'Nosotras' }, { to: '/comunidad', label: 'Comunidad' }, { to: '/blog', label: 'Blog' }, { to: '/membresia', label: 'Membresía' }, { to: '/portafolio', label: 'Portafolio' }, { to: '/business-model-canvas', label: 'Business Model Canvas' }, { to: '/value-proposition-canvas', label: 'Value Proposition Canvas' }, { to: '/mapa-empatia', label: 'Mapa de Empatía' }, { to: '/arbol-problemas', label: 'Árbol de Problemas' }].map(link => (
                <Link key={link.to} to={link.to} className="text-white/50 text-sm hover:text-[#A169A2] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Redes */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="space-y-3">
            <h3 className="text-sm font-bold text-[#4CA7C0] uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Síguenos</h3>
            <p className="text-white/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>En redes sociales</p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <button key={i} onClick={() => handleSocialClick(social.url)} className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-all duration-300" aria-label={social.label}>
                  <social.icon className={`h-4 w-4 ${social.color}`} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-xs sm:text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © 2026 Emprendiendo Juntas. Todos los derechos reservados.
            <span className="text-[#4CA7C0] ml-1">Hecho con ❤️ en Santa Marta</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;