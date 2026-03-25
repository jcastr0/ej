import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Lightbulb, TrendingUp, Heart, BookOpen, Calendar } from 'lucide-react';
import StatsBar from '@/components/StatsBar';

const Benefits = () => {
  const benefits = [{
    icon: Users,
    title: "Red de apoyo constante",
    description: "Conéctate con emprendedoras que entienden tus desafíos y celebran tus logros. Aquí encuentras amigas, no solo contactos.",
    color: "bg-[#A169A2]",
    plan: "Incluido en todos los planes"
  }, {
    icon: Lightbulb,
    title: "Mentoría y recursos",
    description: "Accede a talleres, webinars y sesiones de mentoría con expertas que han recorrido el camino que estás empezando.",
    color: "bg-[#4CA7C0]",
    plan: "Desde Plan Semilla"
  }, {
    icon: TrendingUp,
    title: "Crecimiento acelerado",
    description: "Aprende estrategias probadas para escalar tu negocio y evita los errores comunes del emprendimiento.",
    color: "bg-[#A169A2]",
    plan: "Desde Plan Raíces"
  }, {
    icon: Heart,
    title: "Comunidad auténtica",
    description: "Un espacio seguro donde puedes ser vulnerable, pedir ayuda y compartir tus victorias sin juicios.",
    color: "bg-[#4CA7C0]",
    plan: "Incluido en todos los planes"
  }, {
    icon: BookOpen,
    title: "Recursos exclusivos",
    description: "Plantillas, guías y herramientas diseñadas específicamente para emprendedoras que buscan profesionalizar su negocio.",
    color: "bg-[#A169A2]",
    plan: "Desde Plan Semilla"
  }, {
    icon: Calendar,
    title: "Eventos presenciales",
    description: "Participa en encuentros, networking y actividades en Santa Marta para fortalecer vínculos cara a cara.",
    color: "bg-[#4CA7C0]",
    plan: "Desde Plan Raíces"
  }];

  return (
    <section className="py-20 px-2 sm:px-4 bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <div className="container px-2 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#4CA7C0]">¿Qué encontrarás </span>
            <span className="text-[#A169A2]">aquí?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Emprender puede sentirse como un camino solitario, pero no tiene que serlo. Descubre los beneficios
            de crecer junto a mujeres que comparten tus sueños y desafíos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#A169A2]/30"
            >
              <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#A169A2] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {benefit.description}
              </p>
              <Link
                to="/membresia"
                className="text-sm font-semibold text-[#A169A2] hover:text-[#4CA7C0] transition-colors"
              >
                {benefit.plan} →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <StatsBar variant="dark" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;