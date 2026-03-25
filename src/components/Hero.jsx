import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/empre_juntas.webp"
          alt="Emprendiendo Juntas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19152A] via-[#19152A]/60 to-[#19152A]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#A169A2]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 pb-20 pt-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2"
            >
              <span className="w-2 h-2 bg-[#4CA7C0] rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide">5 años de comunidad · 60+ emprendedoras</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Tu emprendimiento
              <br />
              <span className="italic text-[#4CA7C0]">no tiene que</span>
              <br />
              <span className="italic text-[#4CA7C0]">crecer solo.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Formación, mentoría y una red real de mujeres que impulsa tu negocio.
              Desde Santa Marta para Colombia y el mundo.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to="/membresia">
                <Button
                  size="lg"
                  className="bg-[#A169A2] hover:bg-[#8d5a8e] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-[#A169A2]/25 transition-all duration-300 group"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Conoce los planes
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/nosotras">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white/90 hover:text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 group border border-white/20"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Nuestra historia
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '5+', label: 'Años' },
            { value: '60+', label: 'Emprendedoras' },
            { value: '6', label: 'Ciudades' },
            { value: '100%', label: 'Acompañamiento' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

