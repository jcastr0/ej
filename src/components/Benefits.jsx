import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Lightbulb, TrendingUp, Heart, BookOpen, Calendar } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { icon: Users, title: "Red de apoyo", description: "Emprendedoras que entienden tus desafíos y celebran tus logros.", color: "#A169A2", plan: "Todos los planes" },
    { icon: Lightbulb, title: "Mentoría real", description: "Talleres y sesiones con expertas que recorrieron tu mismo camino.", color: "#4CA7C0", plan: "Desde Semilla" },
    { icon: TrendingUp, title: "Crecimiento", description: "Estrategias probadas para escalar sin improvisar.", color: "#A169A2", plan: "Desde Raíces" },
    { icon: Heart, title: "Espacio seguro", description: "Sin juicios. Un lugar para ser vulnerable y pedir ayuda.", color: "#4CA7C0", plan: "Todos los planes" },
    { icon: BookOpen, title: "Recursos", description: "Plantillas, guías y herramientas para profesionalizar tu negocio.", color: "#A169A2", plan: "Desde Semilla" },
    { icon: Calendar, title: "Eventos", description: "Encuentros presenciales en Santa Marta para crear vínculos reales.", color: "#4CA7C0", plan: "Desde Raíces" },
  ];

  return (
    <section className="py-24 px-6 bg-[#19152A]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-white/70 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Beneficios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Qué encontrarás <span className="italic text-[#4CA7C0]">aquí?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Emprender no tiene que ser un camino solitario.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-500"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: b.color + '20' }}
              >
                <b.icon className="w-6 h-6" style={{ color: b.color }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {b.description}
              </p>
              <Link
                to="/membresia"
                className="text-xs font-semibold tracking-wide uppercase"
                style={{ color: b.color, fontFamily: "'DM Sans', sans-serif" }}
              >
                {b.plan} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;