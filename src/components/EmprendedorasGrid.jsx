import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { testimonios } from '@/data/speakData';

const EmprendedorasGrid = ({ limit = 4, showCTA = true }) => {
  const items = testimonios.slice(0, limit);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block bg-[#4CA7C0]/10 text-[#4CA7C0] font-semibold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            La comunidad
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#19152A] mb-2">
            Ellas son <span className="italic text-[#A169A2]">Emprendiendo Juntas</span>
          </h2>
          <p className="text-sm sm:text-lg text-[#8A7E96]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Mujeres reales, negocios reales.
          </p>
        </motion.div>

        {/* Horizontal scroll breaks out of padding */}
        <div className="-mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible sm:pb-0">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex-shrink-0 w-[70%] sm:w-auto snap-start bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#A169A2]/20 first:ml-5 last:mr-5 sm:first:ml-0 sm:last:mr-0"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 overflow-hidden ring-2 ring-[#F5EEF8] group-hover:ring-[#A169A2]/30 transition-all">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="font-bold text-[#19152A] text-sm sm:text-base mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.name}</h3>
                <p className="text-[#A169A2] text-[11px] sm:text-xs font-medium mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.role}</p>

                {item.ciudad && (
                  <div className="flex items-center justify-center gap-1 text-[9px] text-[#8A7E96] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <MapPin className="w-2.5 h-2.5" />
                    {item.ciudad}
                  </div>
                )}

                <p className="text-[#48405E] text-xs sm:text-sm italic mb-3 line-clamp-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  "{item.quote}"
                </p>

                {item.emprendimiento && (
                  <a
                    href={item.emprendimiento}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4CA7C0] hover:text-[#A169A2] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.emprende_name}
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {showCTA && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8 sm:mt-14">
            <Link to="/comunidad">
              <Button variant="ghost" className="text-[#A169A2] hover:bg-[#A169A2]/5 rounded-full px-6 group text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Conoce a todas <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EmprendedorasGrid;

