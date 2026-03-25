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
      toast({
        title: "🚧 Esta funcionalidad aún no está implementada",
        description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀"
      });
    }
  };

  // Custom icons for brands not in standard Lucide version or for specificity
  const TikTokIcon = ({
    className
  }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>;
  const ThreadsIcon = ({
    className
  }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12.5 7.5c-2.41 0 -5.5 .5 -5.5 4.5s2.5 4.5 5.5 4.5c2.5 0 3.5 -2.5 3.5 -2.5s-.5 -2.5 -3.5 -2.5c-2.4 0 -3 2 -3 2" /><path d="M16 11v-1a2 2 0 1 1 4 0v6" />
    </svg>;

  const FacebookIcon = ({
    className
  }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>;

  const socialLinks = [{
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/emprendiendo.juntas/",
    color: "text-[#E1306C]"
  }, {
    icon: FacebookIcon,
    label: "Facebook",
    url: "https://www.facebook.com/people/Emprendiendo-Juntas/100067189676481/",
    color: "text-[#1877F2]"
  }, {
    icon: ThreadsIcon,
    label: "Threads",
    url: "https://www.threads.com/@emprendiendo.juntas",
    color: "text-black"
  }, {
    icon: TikTokIcon,
    label: "TikTok",
    url: "https://www.tiktok.com/@emprendiendo.juntas?_r=1&_t=ZS-92phKpKwSP3",
    color: "text-black"
  }];

  return <footer className="bg-purple-50 border-t border-purple-100 text-gray-900 py-12 px-4">
    <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-4">
            <img src="https://horizons-cdn.hostinger.com/44782cdd-45ed-40ed-9124-e0edcb8986e7/logo_ej-K18L6.png" alt="Emprendiendo Juntas logo" className="h-14 w-auto" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Comunidad de mujeres emprendedoras en Santa Marta, Colombia. 
              Crecemos juntas, apoyándonos mutuamente en cada paso del camino.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="space-y-3">
            <h3 className="text-lg font-bold text-[#A169A2]">Contacto</h3>
            <div className="space-y-3">
              <a 
                href="https://www.google.com/maps/place/Santa+Marta,+Colombia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:opacity-75 transition-opacity"
              >
                <MapPin className="h-5 w-5 text-[#4CA7C0] flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">Santa Marta, Colombia</span>
              </a>
              <a 
                href="mailto:info@emprendiendojuntas.com.co"
                className="flex items-start space-x-3 hover:opacity-75 transition-opacity"
              >
                <Mail className="h-5 w-5 text-[#4CA7C0] flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">info@emprendiendojuntas.com.co</span>
              </a>
              <a
                href="https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:opacity-75 transition-opacity"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">Únete al grupo — es gratis 💬</span>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-3">
            <h3 className="text-lg font-bold text-[#A169A2]">Enlaces rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/nosotras"
                className="text-gray-600 text-sm hover:text-[#A169A2] transition-colors text-left font-medium"
              >
                Sobre nosotras
              </Link>
              <Link
                to="/comunidad"
                className="text-gray-600 text-sm hover:text-[#A169A2] transition-colors text-left font-medium"
              >
                Comunidad
              </Link>
              <Link 
                to="/blog"
                className="text-gray-600 text-sm hover:text-[#A169A2] transition-colors text-left font-medium"
              >
                Blog
              </Link>
              <Link
                to="/membresia"
                className="text-gray-600 text-sm hover:text-[#A169A2] transition-colors text-left font-medium"
              >
                Membresía
              </Link>
            </nav>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="space-y-3">
            <h3 className="text-lg font-bold text-[#A169A2]">Síguenos</h3>
            <p className="text-gray-600 text-sm mb-4">
              Conéctate con nosotras en redes sociales
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <button key={index} onClick={() => handleSocialClick(social.url)} className={`bg-white p-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ring-1 ring-gray-100`} aria-label={social.label}>
                  <social.icon className={`h-5 w-5 ${social.color}`} />
                </button>)}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Emprendiendo Juntas. Todos los derechos reservados. 
            <span className="text-[#A169A2] ml-2 block sm:inline mt-1 sm:mt-0">Hecho con ❤️ en Santa Marta</span>
          </p>
        </motion.div>
      </div>
    </footer>;
};

export default Contact;