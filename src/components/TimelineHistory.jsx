import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    date: '2020',
    emoji: '💬',
    title: 'Nace la comunidad',
    description: 'Durante la pandemia, un grupo de WhatsApp se convierte en el primer espacio de visibilización para emprendedoras en Santa Marta.',
  },
  {
    date: '22 de enero de 2021',
    emoji: '🎂',
    title: 'Fecha oficial de inicio',
    description: 'Emprendiendo Juntas arranca formalmente. Madelaine, Leidy Casas y Anabella lideran la primera etapa.',
  },
  {
    date: '2024',
    emoji: '📋',
    title: 'Registro en Cámara de Comercio',
    description: 'Se formaliza el proyecto como establecimiento de persona natural en la Cámara de Comercio de Santa Marta.',
  },
  {
    date: 'Octubre 2025',
    emoji: '🌐',
    title: 'Lanzamiento de la página web',
    description: 'emprendiendojuntas.com.co sale al aire, desarrollada con el apoyo técnico de Jonathan Castro.',
  },
  {
    date: 'Marzo 2026',
    emoji: '🎓',
    title: 'Ruta CUNbre',
    description: 'Inician 8 mentorías institucionales de fortalecimiento empresarial con la CUN.',
  },
  {
    date: '2026',
    emoji: '🌎',
    title: 'Emprendiendo Juntas Aruba',
    description: 'Primera expansión internacional — la comunidad llega al Caribe holandés.',
  },
];

const TimelineHistory = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#4CA7C0]">Nuestra </span>
            <span className="text-[#A169A2]">historia</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            De un grupo de WhatsApp en pandemia a una comunidad de 60+ emprendedoras en 6 ciudades.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#A169A2] to-[#4CA7C0] hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#A169A2] to-[#4CA7C0] md:hidden" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                    {isLeft ? (
                      <>
                        <div className="text-right pr-8">
                          <span className="text-sm font-bold text-[#A169A2]">{m.date}</span>
                          <h3 className="text-xl font-bold text-gray-900 mt-1">
                            {m.emoji} {m.title}
                          </h3>
                          <p className="text-gray-600 mt-2 leading-relaxed">{m.description}</p>
                        </div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div className="pl-8">
                          <span className="text-sm font-bold text-[#4CA7C0]">{m.date}</span>
                          <h3 className="text-xl font-bold text-gray-900 mt-1">
                            {m.emoji} {m.title}
                          </h3>
                          <p className="text-gray-600 mt-2 leading-relaxed">{m.description}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Node circle (desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#A169A2] z-10" />

                  {/* Mobile layout */}
                  <div className="md:hidden pl-14 relative">
                    <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-white border-4 border-[#A169A2] z-10" />
                    <span className="text-sm font-bold text-[#A169A2]">{m.date}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">
                      {m.emoji} {m.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineHistory;

