import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Sparkles, ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
const AboutUs = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  const values = [{
    icon: Heart,
    title: "Sororidad",
    description: "Creemos en la fuerza de la unión femenina. Nos apoyamos, nos celebramos y crecemos juntas sin competencia desleal.",
    color: "bg-pink-100 text-pink-600"
  }, {
    icon: Target,
    title: "Crecimiento",
    description: "Impulsamos el desarrollo profesional y personal de cada miembro a través de capacitación continua y mentoría.",
    color: "bg-purple-100 text-purple-600"
  }, {
    icon: Users,
    title: "Comunidad",
    description: "Construimos redes de contacto sólidas y duraderas que trascienden lo comercial para convertirse en verdaderos lazos de amistad.",
    color: "bg-teal-100 text-teal-600"
  }, {
    icon: Lightbulb,
    title: "Innovación",
    description: "Fomentamos la creatividad y la búsqueda de nuevas soluciones para los desafíos del mercado actual.",
    color: "bg-yellow-100 text-yellow-600"
  }];
  return <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="inline-block py-1 px-3 rounded-full bg-white border border-[#A169A2]/30 text-[#A169A2] text-sm font-semibold tracking-wide mb-6 shadow-sm">
              Nuestra Historia
            </motion.span>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empoderando mujeres, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A169A2] to-[#4CA7C0]">transformando vidas</span>
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Somos más que una comunidad; somos un movimiento dedicado a impulsar el potencial de las mujeres emprendedoras en Santa Marta y más allá.
            </motion.p>
          </div>
        </div>
        
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-50" />
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-2xl opacity-20 blur-lg transform rotate-2"></div>
              <img src="https://horizons-cdn.hostinger.com/44782cdd-45ed-40ed-9124-e0edcb8986e7/27a938c514b8a0a2044f29bb9450862b.jpg" alt="Grupo de mujeres emprendedoras trabajando juntas" className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <Sparkles className="w-8 h-8 text-[#A169A2]" />
                  <span className="font-bold text-gray-900 text-lg">Impacto Real</span>
                </div>
                <p className="text-sm text-gray-600">Hemos ayudado a más de 60 mujeres a digitalizar y escalar sus negocios.</p>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                ¿Quiénes somos?
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong className="text-[#A169A2]">Emprendiendo Juntas</strong> nació en Santa Marta como una respuesta a la necesidad de crear espacios seguros y colaborativos para mujeres visionarias.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Entendemos que el camino del emprendimiento puede ser solitario, pero creemos firmemente que no tiene por qué serlo. Nuestra plataforma conecta a mujeres talentosas, brindándoles las herramientas, la visibilidad y el apoyo emocional necesario para convertir sus sueños en negocios sostenibles.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Desde mentorías personalizadas hasta ferias comerciales y networking, cada iniciativa que tomamos está diseñada con un único propósito: <strong>verte brillar.</strong>
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Los pilares fundamentales que sostienen cada paso que damos como comunidad.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-full ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Vision/Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div whileHover={{
            scale: 1.02
          }} className="bg-white p-10 rounded-3xl shadow-md border-l-4 border-[#A169A2]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-[#A169A2]" />
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">Facilitar el empoderamiento económico y social de las mujeres en Santa Marta, Barranquilla, Cartagena, Bucaramanga, Medellin y Aruba, proporcionando una plataforma integral de educación, networking y visibilidad que impulse el crecimiento de sus emprendimientos.</p>
            </motion.div>

            <motion.div whileHover={{
            scale: 1.02
          }} className="bg-white p-10 rounded-3xl shadow-md border-l-4 border-[#4CA7C0]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-[#4CA7C0]" />
                Nuestra Visión
              </h3>
              <p className="text-gray-600 leading-relaxed">En el 2028 Emprendiendo Juntas será la comunidad de emprendimiento femenino referente en Colombia, reconocida por transformar la vida de miles de mujeres y contribuir activamente al desarrollo económico local.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Contact />
    </div>;
};
export default AboutUs;