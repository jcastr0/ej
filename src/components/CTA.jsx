import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="py-16 sm:py-24">
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img src="/images/cta_grupo.jpeg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#19152A]/85 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 px-6 py-14 sm:px-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            ¿Lista para avanzar
            <br />
            <span className="italic text-[#4CA7C0]">acompañada?</span>
          </h2>
          <p
            className="text-sm sm:text-lg text-white/60 max-w-xl mx-auto mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Elige tu plan y empieza a crecer con una comunidad real. Planes desde $25.000/mes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/membresia">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#A169A2] hover:bg-[#8d5a8e] text-white px-7 py-5 text-sm font-semibold rounded-full shadow-2xl group"
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
              className="w-full sm:w-auto text-white/80 hover:text-white hover:bg-white/10 px-7 py-5 text-sm font-semibold rounded-full border border-white/20"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
