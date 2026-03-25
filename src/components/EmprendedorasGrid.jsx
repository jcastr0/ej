import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { testimonios } from '@/data/speakData';

const EmprendedorasGrid = ({ limit = 4, showCTA = true }) => {
  const items = testimonios.slice(0, limit);

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#4CA7C0]/10 text-[#4CA7C0] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            La comunidad
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#19152A] mb-4">
            Ellas son <span className="italic text-[#A169A2]">Emprendiendo Juntas</span>
          </h2>
          <p className="text-lg text-[#8A7E96] max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Mujeres reales, con negocios reales, creciendo juntas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#A169A2]/20"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-[#F5EEF8] group-hover:ring-[#A169A2]/30 transition-all duration-500">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="font-bold text-[#19152A] text-base mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.name}</h3>
              <p className="text-[#A169A2] text-xs font-medium mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.role}</p>

              {item.ciudad && (
                <div className="flex items-center justify-center gap-1 text-[10px] text-[#8A7E96] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <MapPin className="w-3 h-3" />
                  {item.ciudad}
                </div>
              )}

              <p className="text-[#48405E] text-sm italic mb-4 line-clamp-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                "{item.quote}"
              </p>

              {item.emprendimiento && (
                <a
                  href={item.emprendimiento}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4CA7C0] hover:text-[#A169A2] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.emprende_name}
                  <ExternalLink className="w-3 h-3" />
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
            className="text-center mt-14"
          >
            <Link to="/comunidad">
              <Button
                variant="ghost"
                size="lg"
                className="text-[#A169A2] hover:bg-[#A169A2]/5 rounded-full px-8 group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
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

