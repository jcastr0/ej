import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, TrendingUp, Heart, BookOpen, Calendar } from 'lucide-react';
const Benefits = () => {
  const benefits = [{
    icon: Users,
    title: "Red de apoyo constante",
    description: "Conéctate con emprendedoras que entienden tus desafíos y celebran tus logros. Aquí encuentras amigas, no solo contactos.",
    color: "bg-[#A169A2]"
  }, {
    icon: Lightbulb,
    title: "Mentoría y recursos",
    description: "Accede a talleres, webinars y sesiones de mentoría con expertas que han recorrido el camino que estás empezando.",
    color: "bg-[#4CA7C0]"
  }, {
    icon: TrendingUp,
    title: "Crecimiento acelerado",
    description: "Aprende estrategias probadas para escalar tu negocio y evita los errores comunes del emprendimiento.",
    color: "bg-[#A169A2]"
  }, {
    icon: Heart,
    title: "Comunidad auténtica",
    description: "Un espacio seguro donde puedes ser vulnerable, pedir ayuda y compartir tus victorias sin juicios.",
    color: "bg-[#4CA7C0]"
  }, {
    icon: BookOpen,
    title: "Recursos exclusivos",
    description: "Plantillas, guías y herramientas diseñadas específicamente para emprendedoras que buscan profesionalizar su negocio.",
    color: "bg-[#A169A2]"
  }, {
    icon: Calendar,
    title: "Eventos presenciales",
    description: "Participa en encuentros, networking y actividades en Santa Marta para fortalecer vínculos cara a cara.",
    color: "bg-[#4CA7C0]"
  }];
  return <section className="py-20 px-2 sm:px-4 bg-gradient-to-br from-purple-50 via-white to-teal-50">
    <div className="container px-2 mx-auto max-w-7xl">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="text-[#4CA7C0]">¿Por qué unirte a </span><span className="text-[#A169A2]">nuestra comunidad?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Emprender puede sentirse como un camino solitario, pero no tiene que serlo. Descubre los beneficios 
            de crecer junto a mujeres que comparten tus sueños y desafíos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#A169A2]/30">
              <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#A169A2] transition-colors duration-300">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.7
      }} className="mt-16 bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Lista para dar el siguiente paso?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Sesenta Emprendedoras ya están creciendo con nosotras. Es tu turno de brillar y construir el negocio de tus sueños.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">60+</p>
              <p className="text-sm opacity-90">Emprendedoras</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">50+</p>
              <p className="text-sm opacity-90">Conexiones realizadas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-sm opacity-90">Acompañamiento</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Benefits;