import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Lightbulb, TrendingUp, Heart, BookOpen, Calendar } from 'lucide-react';

const benefits = [
  { icon: Users, title: "Red de apoyo", desc: "Emprendedoras que entienden tus desafíos.", color: "#A169A2", plan: "Todos los planes" },
  { icon: Lightbulb, title: "Mentoría real", desc: "Talleres con expertas que recorrieron tu camino.", color: "#4CA7C0", plan: "Desde Semilla" },
  { icon: TrendingUp, title: "Crecimiento", desc: "Estrategias probadas para escalar.", color: "#A169A2", plan: "Desde Raíces" },
  { icon: Heart, title: "Espacio seguro", desc: "Sin juicios. Un lugar para ser vulnerable.", color: "#4CA7C0", plan: "Todos los planes" },
  { icon: BookOpen, title: "Recursos", desc: "Plantillas, guías y herramientas.", color: "#A169A2", plan: "Desde Semilla" },
  { icon: Calendar, title: "Eventos", desc: "Encuentros presenciales en Santa Marta.", color: "#4CA7C0", plan: "Desde Raíces" },
];

const Benefits = () => (
  <section className="py-16 sm:py-24 bg-[#19152A]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
        <span className="inline-block bg-white/10 text-white/60 font-semibold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Beneficios</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3">¿Qué encontrarás <span className="italic text-[#4CA7C0]">aquí?</span></h2>
        <p className="text-sm sm:text-lg text-white/50 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>Emprender no tiene que ser un camino solitario.</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {benefits.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-7 hover:bg-white/10 transition-all duration-500">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-5" style={{ backgroundColor: b.color + '20' }}>
              <b.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: b.color }} />
            </div>
            <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">{b.title}</h3>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{b.desc}</p>
            <Link to="/membresia" className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase" style={{ color: b.color, fontFamily: "'DM Sans', sans-serif" }}>{b.plan} →</Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;