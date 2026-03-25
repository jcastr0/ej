import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { emprendedoras } from '@/data/comunidadData';

const WHATSAPP_COMUNIDAD = 'https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr';

const ComunidadPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Comunidad - Emprendiendo Juntas</title>
        <meta name="description" content="Conoce a las emprendedoras que forman parte de Emprendiendo Juntas. Mujeres reales con negocios reales." />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A169A2]/10 via-transparent to-[#4CA7C0]/10" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block bg-[#A169A2]/10 text-[#A169A2] font-semibold text-sm px-4 py-2 rounded-full">
              Nuestra comunidad
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#19152A] leading-tight">
              Detrás de cada emprendimiento hay una mujer con una{' '}
              <span className="text-[#A169A2]">historia.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Conoce a las emprendedoras que forman parte de nuestra comunidad.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-xl px-8 py-4"
            >
              <span className="text-5xl font-extrabold text-[#A169A2]">60+</span>
              <span className="text-gray-600 font-medium text-left text-sm">
                Emprendedoras
                <br />
                activas
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Grid de emprendedoras */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {emprendedoras.map((emp, i) => (
              <motion.div
                key={emp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-[#A169A2]/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8 text-center">
                  <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden ring-4 ring-[#A169A2]/10 group-hover:ring-[#A169A2]/40 transition-all">
                    <img
                      src={emp.imagen}
                      alt={emp.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-bold text-gray-900 text-xl mb-1">{emp.name}</h3>
                  <p className="text-[#A169A2] font-medium text-sm mb-2">{emp.emprendimiento}</p>

                  <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-3">
                    <MapPin className="w-3 h-3" />
                    {emp.ciudad}
                  </div>

                  {emp.descripcion && (
                    <p className="text-gray-500 text-sm mb-3">{emp.descripcion}</p>
                  )}

                  {emp.quote && (
                    <p className="text-gray-500 text-sm italic mb-4">"{emp.quote}"</p>
                  )}

                  {emp.instagramUrl && (
                    <a
                      href={emp.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4CA7C0] hover:text-[#A169A2] transition-colors"
                    >
                      {emp.instagram}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres ser parte de esta comunidad?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Únete a 60+ mujeres que están creciendo juntas. Hay un plan para cada momento de tu emprendimiento.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/membresia">
                <Button
                  size="lg"
                  className="bg-white text-[#A169A2] hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Conoce nuestros planes
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(WHATSAPP_COMUNIDAD, '_blank')}
                className="border-2 border-white text-white hover:bg-white hover:text-[#A169A2] px-8 py-6 text-lg font-bold rounded-full transition-all duration-300 group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Habla con nosotras
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComunidadPage;

