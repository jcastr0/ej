import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
const CTA = () => {
  const handleJoinClick = () => {
    window.open('https://forms.gle/dWsJkrFRC5dkt6mF8', '_blank');
  };
  const features = ["Acceso a la comunidad privada", "Recursos descargables exclusivos", "Invitación a eventos y talleres", "Mentoría grupal mensual", "Red de apoyo 24/7"];
  return <section className="py-20 px-2 sm:px-4 bg-white">
    <div className="container px-2 mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="relative bg-gradient-to-br from-[#A169A2] via-[#8d5a8e] to-[#4CA7C0] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNGMwIDItMiA0LTIgNHMtMi0yLTItNHptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 items-center">
            <div className="space-y-6 text-white">
              <motion.h2 initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Únete hoy y comienza a <span className="text-yellow-300">transformar</span> tu negocio
              </motion.h2>

              <motion.p initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="text-lg opacity-90 leading-relaxed">
                No esperes más para rodearte del apoyo que necesitas. 
                Da el primer paso hacia el crecimiento que mereces.
              </motion.p>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="space-y-3">
                {features.map((feature, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                    <span className="text-base">{feature}</span>
                  </div>)}
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.5
            }}>
                <Button onClick={handleJoinClick} size="lg" className="bg-white text-[#A169A2] hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  Únete ahora!
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Emprendedoras celebrando juntas el éxito de sus negocios" className="w-full h-[400px] object-cover" src="https://horizons-cdn.hostinger.com/44782cdd-45ed-40ed-9124-e0edcb8986e7/img_0419-MhleE.jpeg" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-yellow-300 rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold text-[#A169A2]">¡Gratis!</p>
                <p className="text-sm text-gray-700 font-semibold">Sin costo de membresía</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CTA;