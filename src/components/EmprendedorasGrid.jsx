import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { testimonios } from '@/data/speakData';

const EmprendedorasGrid = ({ limit = 4, showCTA = true }) => {
  const items = testimonios.slice(0, limit);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#4CA7C0]">Ellas son </span>
            <span className="text-[#A169A2]">Emprendiendo Juntas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mujeres reales, con negocios reales, creciendo juntas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-[#A169A2]/40 p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-3 ring-[#A169A2]/20 group-hover:ring-[#A169A2]/50 transition-all">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>

              <p className="text-[#A169A2] text-sm font-medium mb-1">{item.role}</p>

              {item.ciudad && (
                <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-3">
                  <MapPin className="w-3 h-3" />
                  {item.ciudad}
                </div>
              )}

              <p className="text-gray-500 text-sm italic mb-4 line-clamp-2">
                "{item.quote}"
              </p>

              {item.emprendimiento && (
                <a
                  href={item.emprendimiento}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4CA7C0] hover:text-[#A169A2] transition-colors"
                >
                  {item.emprende_name}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/comunidad">
              <Button
                variant="outline"
                size="lg"
                className="border-[#A169A2] text-[#A169A2] hover:bg-[#A169A2] hover:text-white rounded-full px-8 group"
              >
                Conoce a todas las emprendedoras
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EmprendedorasGrid;

