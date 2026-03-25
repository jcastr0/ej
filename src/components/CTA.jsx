import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-10 sm:py-24 px-0 sm:px-6">
      <div className="sm:container sm:mx-auto sm:max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative sm:rounded-[2rem] overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img src="/images/cta_grupo.jpeg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#19152A]/85 backdrop-blur-sm" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-12 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              ¿Lista para avanzar
              <br />
              <span className="italic text-[#4CA7C0]">acompañada?</span>
            </h2>
            <p className="text-sm sm:text-lg text-white/60 max-w-xl mx-auto mb-8 sm:mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Elige tu plan, activa tu membresía y empieza a crecer con una comunidad real.
              Planes desde $25.000/mes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/membresia">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#A169A2] hover:bg-[#8d5a8e] text-white px-7 py-5 text-base font-semibold rounded-full shadow-2xl transition-all duration-300 group"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Conoce los planes
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => window.open('https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr', '_blank')}
                className="w-full sm:w-auto text-white/80 hover:text-white hover:bg-white/10 px-7 py-5 text-base font-semibold rounded-full border border-white/15 transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

