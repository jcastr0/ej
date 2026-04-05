import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target, Users, Package, Sparkles, Heart, Shield,
  CheckCircle2, ArrowRight, Award, Building2
} from 'lucide-react';

const PropuestaValor = () => {
  const [activeTab, setActiveTab] = useState('pilares');

  const pilares = [
    {
      id: 'comunidad',
      icon: Users,
      emoji: '🤝',
      title: 'Comunidad',
      subtitle: 'Red de apoyo activa',
      description: 'Red de apoyo activa donde las emprendedoras comparten experiencias, se motivan mutuamente y construyen vínculos de confianza.',
      features: [
        'WhatsApp con ~60 emprendedoras activas',
        'Intercambio de experiencias reales',
        'Apoyo emocional y motivacional',
        'Construcción de vínculos duraderos',
        'Red de contactos verificada'
      ],
      color: '#A169A2'
    },
    {
      id: 'formacion',
      icon: Package,
      emoji: '📚',
      title: 'Formación',
      subtitle: 'Capacitación práctica',
      description: 'Capacitación práctica en costos, marketing, marca, ventas, servicio al cliente y comunicación.',
      features: [
        'Talleres en costos y fijación de precios',
        'Estrategias de marketing digital',
        'Construcción de identidad de marca',
        'Técnicas de ventas efectivas',
        'Comunicación estratégica'
      ],
      color: '#4CA7C0'
    },
    {
      id: 'visibilidad',
      icon: Sparkles,
      emoji: '📣',
      title: 'Visibilidad',
      subtitle: 'Amplificación de marca',
      description: 'Amplificación de marcas a través de redes sociales, web, eventos presenciales y alianzas estratégicas.',
      features: [
        'Promoción en redes sociales',
        'Visibilización en la web oficial',
        'Acceso a ferias y eventos',
        'Conexión con aliados estratégicos',
        'Oportunidades de networking'
      ],
      color: '#C49A2B'
    }
  ];

  const diferenciales = [
    {
      title: 'Híbrido Digital + Presencial',
      description: 'Combinamos lo mejor de ambos mundos: comunidad digital activa y encuentros presenciales para crear vínculos reales.',
      icon: Building2,
      color: '#A169A2'
    },
    {
      title: 'Acompañamiento Humano',
      description: 'No solo técnicas, sino contención emocional, motivación y apoyo durante todo el proceso emprendedor.',
      icon: Heart,
      color: '#4CA7C0'
    },
    {
      title: 'Enfoque Integral',
      description: 'Abordamos lo emocional, lo técnico, lo comunicativo y lo estratégico en un solo espacio accesible.',
      icon: Shield,
      color: '#C49A2B'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-5" style={{ background: "linear-gradient(160deg, #F8FAFC 0%, #F0FDF4 25%, #FEF7ED 50%, #FDF2F8 75%, #F3F4F6 100%)" }}>

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100/50 border border-purple-200 rounded-full px-4 py-2 mb-4">
          <Target className="w-4 h-4 text-purple-600" />
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Estrategia de Valor · Emprendiendo Juntas
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          Propuesta de <span className="italic text-[#A169A2]">Valor</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          La intersección de tres pilares fundamentales que responden directamente a las necesidades
          de las emprendedoras de Santa Marta y el Caribe colombiano.
        </p>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'pilares', label: 'Tres Pilares', icon: Target },
            { id: 'declaracion', label: 'Declaración', icon: Award },
            { id: 'diferenciacion', label: 'Diferenciación', icon: CheckCircle2 }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#A169A2] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#A169A2] hover:bg-gray-100'
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* Tres Pilares */}
        {activeTab === 'pilares' && (
          <motion.div
            key="pilares"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {pilares.map((pilar, i) => {
                const IconComponent = pilar.icon;
                return (
                  <motion.div
                    key={pilar.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 group"
                  >
                    <div className="text-center mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: pilar.color + '15' }}
                      >
                        <span className="text-3xl">{pilar.emoji}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#19152A] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {pilar.title}
                      </h3>
                      <p className="text-sm font-medium text-[#8A7E96] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {pilar.subtitle}
                      </p>
                      <p className="text-[#48405E] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {pilar.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {pilar.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: pilar.color }}
                          />
                          <span className="text-sm text-[#48405E] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Interconexión */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-[#19152A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Sinergia de los Tres Pilares
              </h3>
              <p className="text-[#48405E] leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                La magia de Emprendiendo Juntas radica en la <strong>interconexión</strong> de estos tres pilares.
                La comunidad amplifica la formación, la formación potencia la visibilidad, y la visibilidad
                fortalece la comunidad, creando un <strong>círculo virtuoso de crecimiento</strong> que beneficia
                a todas las emprendedoras del ecosistema.
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Declaración de Propuesta de Valor */}
        {activeTab === 'declaracion' && (
          <motion.div
            key="declaracion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-2xl p-12 text-white relative overflow-hidden mb-16">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
              <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/5 rounded-full translate-y-8" />

              <div className="relative text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Declaración de Propuesta de Valor
                </h2>

                <div className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
                  <blockquote className="text-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Para <strong className="text-yellow-300">mujeres emprendedoras de Santa Marta y el Caribe colombiano</strong> que
                    necesitan visibilidad, formación y acompañamiento para sostener sus negocios,
                    <strong className="text-yellow-300"> Emprendiendo Juntas</strong> es una comunidad híbrida de apoyo integral
                    que ofrece cercanía humana, orientación estratégica y proyección de marca.
                    <br /><br />
                    A diferencia de programas institucionales o comunidades exclusivamente digitales,
                    <strong className="text-yellow-300"> Emprendiendo Juntas combina lo emocional, lo contable,
                    lo comunicativo y lo presencial</strong> en un solo espacio accesible.
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Componentes de la Declaración */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Target',
                  content: 'Mujeres emprendedoras de Santa Marta y el Caribe colombiano',
                  color: '#DC2626'
                },
                {
                  title: 'Necesidad',
                  content: 'Visibilidad, formación y acompañamiento para sostener sus negocios',
                  color: '#EA580C'
                },
                {
                  title: 'Solución',
                  content: 'Comunidad híbrida de apoyo integral con cercanía humana',
                  color: '#A169A2'
                },
                {
                  title: 'Diferenciación',
                  content: 'Combina lo emocional, contable, comunicativo y presencial',
                  color: '#4CA7C0'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border-l-4 shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ borderLeftColor: item.color }}
                >
                  <h4 className="font-bold text-[#19152A] mb-2" style={{ color: item.color }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#48405E] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Diferenciación */}
        {activeTab === 'diferenciacion' && (
          <motion.div
            key="diferenciacion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#19152A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                ¿Qué nos hace <span className="italic text-[#A169A2]">únicos?</span>
              </h2>
              <p className="text-lg text-[#8A7E96] max-w-3xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Frente a otras alternativas del mercado, Emprendiendo Juntas ofrece una propuesta diferenciada
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {diferenciales.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: item.color + '15' }}
                    >
                      <IconComponent className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-[#19152A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#48405E] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Comparación */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#19152A] mb-6 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Emprendiendo Juntas vs. Otras Alternativas
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-[#19152A]">Aspecto</th>
                      <th className="text-left py-3 px-4 font-semibold text-[#A169A2]">Emprendiendo Juntas</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-500">Programas Institucionales</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-500">Comunidades Solo Digitales</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#48405E]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Acompañamiento</td>
                      <td className="py-3 px-4 text-[#A169A2]">✅ Humano y estratégico</td>
                      <td className="py-3 px-4">❌ Formal y distante</td>
                      <td className="py-3 px-4">⚠️ Solo virtual</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Modalidad</td>
                      <td className="py-3 px-4 text-[#A169A2]">✅ Híbrida (digital + presencial)</td>
                      <td className="py-3 px-4">⚠️ Principalmente presencial</td>
                      <td className="py-3 px-4">❌ Solo digital</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Comunidad</td>
                      <td className="py-3 px-4 text-[#A169A2]">✅ Activa y comprometida</td>
                      <td className="py-3 px-4">❌ Limitada interacción</td>
                      <td className="py-3 px-4">⚠️ Variable calidad</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Accesibilidad</td>
                      <td className="py-3 px-4 text-[#A169A2]">✅ Flexible y accesible</td>
                      <td className="py-3 px-4">❌ Rígida y burocrática</td>
                      <td className="py-3 px-4">✅ Accesible pero impersonal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-5xl mx-auto mt-20 bg-[#19152A] rounded-2xl p-12 text-white text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#A169A2]/20 rounded-full -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4CA7C0]/20 rounded-full translate-y-8 -translate-x-8" />

        <div className="relative">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            ¿Lista para crecer <span className="italic text-[#4CA7C0]">acompañada?</span>
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Únete a una comunidad que entiende tus desafíos y celebra tus logros.
            Tu emprendimiento no tiene que crecer solo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => window.open('https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr', '_blank')}
              className="bg-[#A169A2] hover:bg-[#8d5a8e] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Únete al WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.location.href = '/membresia'}
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Ver Membresías
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-16 flex items-center justify-between border-t border-gray-200 pt-8 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A169A2] to-[#4CA7C0]" />
          <span className="font-semibold text-[#A169A2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Emprendiendo Juntas
          </span>
        </div>
        <span className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Propuesta de Valor · Santa Marta, Colombia · 2026
        </span>
      </div>
    </div>
  );
};

export default PropuestaValor;
