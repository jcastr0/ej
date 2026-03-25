import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';
import { testimonios } from '@/data/speakData';

const TestimoniosSection = () => {
  return (
    <section className="py-12 sm:py-24 overflow-hidden">
      <div className="px-4 sm:px-6 sm:container sm:mx-auto sm:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-14"
        >
          <span className="inline-block bg-[#A169A2]/10 text-[#A169A2] font-semibold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#19152A]">
            Lo que dicen <span className="italic text-[#4CA7C0]">ellas</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll — full bleed mobile */}
      <div className="pl-4 sm:px-6 sm:container sm:mx-auto sm:max-w-6xl">
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0 pr-4 sm:pr-0">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex-shrink-0 w-[75vw] sm:w-auto snap-start bg-white rounded-2xl p-5 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Quote className="w-5 h-5 text-[#A169A2]/30 mb-3 flex-shrink-0" />
              <p className="text-[#48405E] text-sm sm:text-base italic leading-relaxed mb-5 flex-grow" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#F5EEF8]" />
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[#19152A] text-sm truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.name}</p>
                  <p className="text-[#8A7E96] text-xs truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.role}</p>
                </div>
                {t.emprendimiento && (
                  <a href={t.emprendimiento} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-[#4CA7C0] hover:text-[#A169A2]">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;

