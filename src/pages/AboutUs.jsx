import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Leaf, Globe, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet';
import CarolinaSection from '@/components/CarolinaSection';
import TimelineHistory from '@/components/TimelineHistory';
import Contact from '@/components/Contact';

const AboutUs = () => {
  const values = [
    { icon: Sparkles, title: 'Empoderamiento', emoji: '💪', description: 'Creemos en el poder de las mujeres para transformar sus vidas y comunidades a través del emprendimiento.', color: 'bg-purple-100 text-purple-600' },
    { icon: Users, title: 'Colaboración', emoji: '🤝', description: 'Fomentamos redes de apoyo y trabajo conjunto entre emprendedoras.', color: 'bg-teal-100 text-teal-600' },
    { icon: Lightbulb, title: 'Innovación', emoji: '💡', description: 'Promovemos la adopción de nuevas ideas y tecnologías para crear valor.', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Leaf, title: 'Sostenibilidad', emoji: '🌱', description: 'Nos comprometemos con proyectos económica, social y ambientalmente sostenibles.', color: 'bg-green-100 text-green-600' },
    { icon: Globe, title: 'Inclusión', emoji: '🌈', description: 'Trabajamos para que mujeres de todos los orígenes accedan a nuestras oportunidades.', color: 'bg-pink-100 text-pink-600' },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Nosotras - Emprendiendo Juntas</title>
        <meta name="description" content="Conoce la historia de Emprendiendo Juntas: de un grupo de WhatsApp en pandemia a una comunidad de 60+ emprendedoras." />
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-white border border-[#A169A2]/30 text-[#A169A2] text-sm font-semibold tracking-wide mb-6 shadow-sm"
            >
              Nuestra Historia
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Nacimos en pandemia.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A169A2] to-[#4CA7C0]">
                Hoy somos 60.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              Lo que empezó como un grupo de WhatsApp para visibilizar emprendimientos de mujeres
              en Santa Marta, hoy es una comunidad real presente en 6 ciudades.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-50" />
      </section>

      {/* Timeline */}
      <TimelineHistory />

      {/* Carolina — versión completa */}
      <CarolinaSection variant="full" />

      {/* Misión / Visión */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-md border-l-4 border-[#A169A2]"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-[#A169A2]" />
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Empoderar a las mujeres del departamento del Magdalena a través del emprendimiento,
                proporcionando las herramientas, conocimientos y recursos necesarios para desarrollar y
                consolidar sus propios negocios, fomentando su independencia económica y contribuyendo al
                desarrollo sostenible de la región.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-md border-l-4 border-[#4CA7C0]"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-[#4CA7C0]" />
                Nuestra Visión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la comunidad líder en el departamento del Magdalena en el fomento del emprendimiento
                femenino, reconocida por su capacidad para impulsar proyectos innovadores y sostenibles
                que transformen positivamente la vida de las mujeres y sus comunidades.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los pilares que sostienen cada paso que damos como comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 text-center"
              >
                <div className={`w-14 h-14 rounded-full ${value.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <span className="text-2xl mb-2 block">{value.emoji}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Círculo de Oro */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#4CA7C0]">Nuestro </span>
              <span className="text-[#A169A2]">Círculo de Oro</span>
            </h2>
            <p className="text-gray-600">La esencia de por qué existimos, cómo lo hacemos y qué somos.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white rounded-3xl p-8 shadow-md border-t-4 border-[#A169A2] text-center"
            >
              <span className="text-4xl mb-4 block">💜</span>
              <h3 className="text-xl font-bold text-[#A169A2] mb-3">¿Por qué?</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Porque muchas mujeres emprenden con pasión, pero sin el acompañamiento suficiente para
                sostener sus procesos. El crecimiento empresarial también requiere comunidad, orientación,
                visibilidad y contención humana.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-md border-t-4 border-[#4CA7C0] text-center"
            >
              <span className="text-4xl mb-4 block">🔧</span>
              <h3 className="text-xl font-bold text-[#4CA7C0] mb-3">¿Cómo?</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A través de una comunidad de WhatsApp activa, presencia digital en redes, actividades
                presenciales en Santa Marta, formaciones, mentorías y una página web que fortalece el
                posicionamiento del proyecto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-md border-t-4 border-[#A169A2] text-center"
            >
              <span className="text-4xl mb-4 block">✨</span>
              <h3 className="text-xl font-bold text-[#A169A2] mb-3">¿Qué?</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Emprendiendo Juntas es una comunidad híbrida — digital y presencial — que acompaña a mujeres
                emprendedoras en procesos de visibilidad, formación, conexión, motivación y fortalecimiento
                de sus negocios.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Contact />
    </div>
  );
};

export default AboutUs;

