import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const handleJoinClick = () => {
    window.open('https://forms.gle/dWsJkrFRC5dkt6mF8', '_blank');
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4 py-20">
    <div className="absolute inset-0 bg-gradient-to-br from-[#A169A2]/10 via-transparent to-[#4CA7C0]/10" />

    <div className="container mx-auto max-w-7xl relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="space-y-8">
          <div className="inline-block">
            <img src="https://horizons-cdn.hostinger.com/44782cdd-45ed-40ed-9124-e0edcb8986e7/logo_ej-K18L6.png" alt="Emprendiendo Juntas - Comunidad de emprendedoras en Santa Marta" className="h-24 w-auto" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-[#4CA7C0]">Emprendiendo y </span>{' '}
            <span className="text-[#A169A2]">Aprendiendo juntas</span> 
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Un espacio donde mujeres emprendedoras comparten experiencias, fortalecen sus procesos y crecen desde el aprendizaje colectivo.</p>

          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="flex flex-wrap gap-4">
            <Button onClick={handleJoinClick} size="lg" className="bg-[#A169A2] hover:bg-[#8d5a8e] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              Únete a la comunidad
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Link to="/nosotras">
              <Button variant="outline" size="lg" className="border-2 border-[#4CA7C0] text-[#4CA7C0] hover:bg-[#4CA7C0] hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300">
                Conoce más
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img alt="Mujeres emprendedoras trabajando juntas en Santa Marta" className="w-full h-[500px] object-cover" src="https://horizons-cdn.hostinger.com/44782cdd-45ed-40ed-9124-e0edcb8986e7/empre_juntas-UPvCI.webp" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#A169A2]/20 to-transparent" />
          </div>

          <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }} className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
            <div className="flex items-center space-x-4">
              <div className="bg-[#4CA7C0] rounded-full p-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">60+</p>
                <p className="text-sm text-gray-600">Emprendedoras activas</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>;
};
export default Hero;