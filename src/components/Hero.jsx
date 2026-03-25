import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/empre_juntas.webp"
          alt="Emprendiendo Juntas"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19152A] via-[#19152A]/70 to-transparent" />
        <div className="absolute inset-0 bg-[#A169A2]/15 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 pb-6 sm:pb-16 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-5 sm:space-y-7"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5"
              >
                <span className="w-1.5 h-1.5 bg-[#4CA7C0] rounded-full animate-pulse" />
                <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  5 años · 60+ emprendedoras · 6 ciudades
                </span>
              </motion.div>

              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Tu emprendimiento
                <br />
                <span className="italic text-[#4CA7C0]">no tiene que</span>
                <br />
                <span className="italic text-[#4CA7C0]">crecer solo.</span>
              </h1>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Formación, mentoría y una red real de mujeres que impulsa tu negocio.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 pt-1"
              >
                <Link to="/membresia">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#A169A2] hover:bg-[#8d5a8e] text-white px-7 py-5 text-base font-semibold rounded-full shadow-2xl hover:shadow-[#A169A2]/25 transition-all duration-300 group"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Conoce los planes
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/nosotras">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto text-white/80 hover:text-white hover:bg-white/10 px-7 py-5 text-base font-semibold rounded-full transition-all duration-300 border border-white/15"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Nuestra historia
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 sm:mt-14 grid grid-cols-4 gap-2 sm:gap-4"
          >
            {[
              { value: '5+', label: 'Años' },
              { value: '60+', label: 'Emprendedoras' },
              { value: '6', label: 'Ciudades' },
              { value: '100%', label: 'Apoyo' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-2 sm:px-5 py-3 sm:py-4 text-center">
                <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/50 text-[10px] sm:text-sm mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

