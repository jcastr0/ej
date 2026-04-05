import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sprout, Leaf, Flower2, MessageCircle, ChevronDown, ChevronUp, Users, BookOpen, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import { testimonios } from '@/data/speakData';

const plans = [
  {
    name: 'Semilla',
    emoji: '🌱',
    icon: Sprout,
    price: 'Gratuito',
    originalPrice: null,
    color: '#4CA7C0',
    description: 'Para emprendedoras que están comenzando su camino y buscan comunidad de apoyo.',
    ideal: 'Emprendedoras en etapa inicial que tienen un producto o servicio pero necesitan claridad, comunidad y primeros pasos.',
    features: [
      'Acceso al grupo general de WhatsApp',
      'Publicaciones educativas en redes sociales',
      'Talleres abiertos ocasionales',
      'Menciones en la comunidad',
      'Acceso a eventos abiertos'
    ],
    validation: 'Base actual: ~60 emprendedoras activas demuestran el valor de la comunidad gratuita'
  },
  {
    name: 'Raíces',
    emoji: '🌿',
    icon: Leaf,
    price: '49.900',
    originalPrice: null,
    color: '#A169A2',
    popular: true,
    description: 'Para emprendedoras que quieren estructurar su crecimiento con acompañamiento.',
    ideal: 'Emprendedoras con negocios activos que buscan formación sistemática y mayor visibilidad.',
    features: [
      'Grupo general + canal VIP en WhatsApp',
      'Publicaciones en redes + guías descargables',
      '1 taller mensual grupal',
      '1 feature mensual en redes sociales',
      'Eventos exclusivos trimestrales'
    ],
    validation: 'Conversión estimada del 20% = ~$599.000/mes de ingresos base'
  },
  {
    name: 'Florecer',
    emoji: '🌸',
    icon: Flower2,
    price: '99.900',
    originalPrice: null,
    color: '#C49A2B',
    description: 'Para emprendedoras comprometidas que buscan acompañamiento profundo y personalizado.',
    ideal: 'Emprendedoras que quieren ser vistas y están listas para invertir en acompañamiento 1:1.',
    features: [
      'General + VIP + directorio privado en WhatsApp',
      'Guías descargables + masterclasses exclusivas',
      'Talleres grupales + 1 mentoría 1:1 mensual',
      'Feature en web + redes + eventos',
      'Acceso prioritario a aliados y ferias'
    ],
    validation: 'Retroalimentación: alta demanda por mentorías personalizadas'
  },
];

const transversalBenefits = [
  { icon: Users, title: 'Red de confianza', description: 'Una comunidad real de mujeres que entienden los retos de emprender.' },
  { icon: BookOpen, title: 'Contenido educativo continuo', description: 'Material práctico sobre comunicación, marca, costos, ventas y comunidad.' },
  { icon: Heart, title: 'Espacio libre de comparación', description: 'Un lugar para crecer sin juzgarse ni compararse con grandes marcas.' },
  { icon: Eye, title: 'Voz colectiva', description: 'Tu negocio forma parte de una red con más alcance que cualquier emprendimiento individual.' },
];

const faqs = [
  { q: '¿Puedo cancelar cuando quiera?', a: 'Sí. La membresía se renueva mensualmente y puede cancelarse en cualquier momento sin costo ni penalización.' },
  { q: '¿Es necesario estar en Santa Marta para acceder?', a: 'No. Los talleres, mentorías grupales y la comunidad de WhatsApp son completamente virtuales. Los encuentros presenciales son opcionales.' },
  { q: '¿Qué pasa con la comunidad gratuita que ya existe?', a: 'Sigue existiendo. La membresía es un nivel adicional para quienes quieren ir más lejos. El grupo base de apoyo no desaparece.' },
  { q: '¿Puedo cambiar de plan?', a: 'Sí, puedes subir o bajar de plan en cualquier momento. El cambio aplica a partir del siguiente ciclo de facturación.' },
  { q: '¿Cómo pago?', a: 'El pago se realiza a través de Nequi, Bancolombia o pasarela de pago disponible. Se enviará confirmación por WhatsApp o correo electrónico.' },
  { q: '¿Qué necesito para unirme?', a: 'Ser una mujer emprendedora (o en proceso de serlo), tener disposición para aprender, compartir y crecer. No se requiere un negocio formal ni experiencia previa.' },
];

const whatsappLink = 'https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr';

const PlanCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className={`relative bg-white rounded-3xl shadow-xl border-2 p-8 flex flex-col ${
      plan.popular ? 'border-[#A169A2] scale-105 z-10' : 'border-gray-100'
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A169A2] text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-lg">
        Más popular
      </div>
    )}

    <div className="text-center mb-6">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ backgroundColor: plan.color + '20' }}
      >
        <plan.icon className="w-8 h-8" style={{ color: plan.color }} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">
        {plan.emoji} Plan {plan.name}
      </h3>
      <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
    </div>

    <div className="text-center mb-6">
      {plan.price === 'Gratuito' ? (
        <div>
          <span className="text-5xl font-extrabold text-[#4CA7C0]">Gratuito</span>
          <div className="text-gray-500 text-sm mt-1">Siempre</div>
        </div>
      ) : (
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-lg text-gray-500">$</span>
          <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
          <div className="flex flex-col items-start">
            <span className="text-gray-500 text-sm leading-none">COP</span>
            <span className="text-gray-500 text-xs leading-none">/ mes</span>
          </div>
        </div>
      )}
    </div>

    <ul className="space-y-3 mb-6 flex-1">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
          <span className="text-gray-600 text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <div className="bg-gray-50 rounded-xl p-4 mb-4">
      <p className="text-xs text-gray-500 mb-2 font-medium">IDEAL PARA:</p>
      <p className="text-xs text-gray-600 leading-relaxed">{plan.ideal}</p>
    </div>

    {plan.validation && (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <p className="text-xs text-blue-800 leading-relaxed">
          <strong>Validación:</strong> {plan.validation}
        </p>
      </div>
    )}

    <Button
      onClick={() => window.open(whatsappLink, '_blank')}
      size="lg"
      className={`w-full rounded-full text-white font-semibold py-6 text-base transition-all duration-300 group ${
        plan.price === 'Gratuito'
          ? 'bg-[#4CA7C0] hover:bg-[#3a8fa8] shadow-lg hover:shadow-xl'
          : plan.popular
          ? 'bg-[#A169A2] hover:bg-[#8d5a8e] shadow-lg hover:shadow-xl'
          : 'bg-[#C49A2B] hover:bg-[#a67d1f] shadow-lg hover:shadow-xl'
      }`}
    >
      {plan.price === 'Gratuito' ? 'Únete gratis' : 'Quiero unirme'}
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  </motion.div>
);

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#A169A2]/30 transition-all text-left group"
      >
        <span className="font-semibold text-gray-900 group-hover:text-[#A169A2] transition-colors pr-4">
          {faq.q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#A169A2] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-6 pb-4 pt-2 text-gray-600 text-sm leading-relaxed"
        >
          {faq.a}
        </motion.div>
      )}
    </motion.div>
  );
};

const Membresia = () => {
  return (
    <>
      <Helmet>
        <title>Prototipo de Membresía - Círculo Emprendiendo Juntas</title>
        <meta
          name="description"
          content="Prototipo del modelo de servicio: tres niveles de membresía diseñados con metodología Design Thinking para emprendedoras."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A169A2]/10 via-transparent to-[#4CA7C0]/10" />
        <div className="absolute inset-0 bg-[#F5EEF8]/40" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block bg-[#A169A2]/10 text-[#A169A2] font-semibold text-sm px-4 py-2 rounded-full">
              Prototipo de Servicio · Círculo Emprendiendo Juntas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#19152A] leading-tight">
              Modelo de Membresía{' '}
              <span className="text-[#A169A2]">Estructurado</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Evolución natural de la comunidad gratuita: tres niveles de acompañamiento
              diseñados según metodología de Design Thinking.
            </p>
            <p className="text-lg font-semibold text-[#4CA7C0]">
              Desde Plan Gratuito hasta $99.900/mes
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button
                onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-[#A169A2] hover:bg-[#8d5a8e] text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Conoce los planes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="border-2 border-[#4CA7C0] text-[#4CA7C0] hover:bg-[#4CA7C0] hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Habla con nosotras
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué es el Círculo? */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-[#4CA7C0]">¿Qué es el </span>
              <span className="text-[#A169A2]">Círculo?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Emprendiendo Juntas lleva 5 años acompañando a mujeres emprendedoras de manera gratuita y comunitaria.
              El Círculo es un modelo de membresía que <strong>no reemplaza ese espíritu</strong> — lo fortalece.
              Permite que el proyecto crezca, se sostenga y llegue a más mujeres, sin perder su esencia de comunidad accesible y humana.
            </p>
            <p className="text-base text-gray-500 italic max-w-2xl mx-auto">
              Diseñado para emprendedoras que quieren ir más allá de la comunidad abierta: recibir acompañamiento real,
              acceso prioritario a formaciones y una red activa que las impulse de verdad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Elige tu plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tres niveles diseñados para acompañar diferentes momentos de tu emprendimiento.
            </p>

            {/* Launch badge */}
            <div className="inline-block bg-yellow-50 border border-yellow-300 text-yellow-800 text-sm font-bold px-6 py-2.5 rounded-full mt-4">
              🚀 Precio de lanzamiento: 30% off para las primeras 20 inscritas
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Validación Preliminar del Prototipo */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#4CA7C0]">Validación Preliminar </span>
              <span className="text-[#A169A2]">del Prototipo</span>
            </h2>
            <p className="text-lg text-gray-600">
              Indicadores que sustentan la viabilidad del modelo de membresía
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Antecedente de Monetización</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Las capacitaciones con <strong>Exposamarios y Hempremagd</strong> demostraron
                disposición del mercado a pagar por formación especializada.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Proyección de Ingresos</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Con <strong>~60 emprendedoras activas</strong>, una conversión del 20% al plan Raíces
                generaría ingresos base de <strong>~$599.000/mes</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">💬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Retroalimentación Directa</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Las integrantes han expresado <strong>interés en servicios más estructurados</strong>
                y acceso a mentorías personalizadas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Benchmarking</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Comunidades similares en <strong>Latinoamérica</strong> operan exitosamente
                con modelos de membresía en rangos similares de precio.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-gray-50 rounded-2xl p-8 text-center"
          >
            <p className="text-gray-600 italic">
              <strong>Nota:</strong> El prototipo será sometido a validación mediante focus group en la siguiente fase (ACA 3).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabla Comparativa del Prototipo */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comparativa del <span className="text-[#A169A2]">Modelo de Servicio</span>
            </h2>
            <p className="text-lg text-gray-600">
              Estructura detallada de los tres niveles del prototipo
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] text-white">
                    <th className="text-left py-4 px-6 font-bold">Aspecto</th>
                    <th className="text-center py-4 px-6 font-bold">🌱 Semilla (Gratuito)</th>
                    <th className="text-center py-4 px-6 font-bold bg-[#A169A2]/20">🌿 Raíces ($49.900/mes)</th>
                    <th className="text-center py-4 px-6 font-bold">🌸 Florecer ($99.900/mes)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-4 px-6 font-medium">Comunidad WhatsApp</td>
                    <td className="py-4 px-6 text-center">✓ Grupo general</td>
                    <td className="py-4 px-6 text-center bg-[#A169A2]/5">✓ General + canal VIP</td>
                    <td className="py-4 px-6 text-center">✓ General + VIP + directorio</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium">Contenido educativo</td>
                    <td className="py-4 px-6 text-center">✓ Publicaciones en redes</td>
                    <td className="py-4 px-6 text-center bg-[#A169A2]/5">✓ + Guías descargables</td>
                    <td className="py-4 px-6 text-center">✓ + Masterclasses exclusivas</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-4 px-6 font-medium">Formación</td>
                    <td className="py-4 px-6 text-center">Talleres abiertos ocasionales</td>
                    <td className="py-4 px-6 text-center bg-[#A169A2]/5">1 taller mensual grupal</td>
                    <td className="py-4 px-6 text-center">Talleres + 1 mentoría 1:1 mensual</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium">Visibilidad</td>
                    <td className="py-4 px-6 text-center">Menciones en comunidad</td>
                    <td className="py-4 px-6 text-center bg-[#A169A2]/5">+ 1 feature mensual en redes</td>
                    <td className="py-4 px-6 text-center">+ Feature en web + redes + eventos</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-4 px-6 font-medium">Networking</td>
                    <td className="py-4 px-6 text-center">Eventos abiertos</td>
                    <td className="py-4 px-6 text-center bg-[#A169A2]/5">+ Eventos exclusivos trimestrales</td>
                    <td className="py-4 px-6 text-center">+ Acceso prioritario a aliados y ferias</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 italic text-sm">
              <strong>Diseño del Prototipo:</strong> Siguiendo la metodología de Design Thinking,
              cada nivel responde a diferentes momentos del journey emprendedor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beneficios transversales */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#4CA7C0]">Beneficios </span>
              <span className="text-[#A169A2]">para todas</span>
            </h2>
            <p className="text-lg text-gray-600">
              Todos los miembros del Círculo acceden a:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {transversalBenefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-[#F5EEF8]/60 rounded-2xl p-6 border border-purple-100"
              >
                <div className="bg-[#A169A2] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Mini testimonios */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Lo que dicen nuestras{' '}
            <span className="text-[#A169A2]">emprendedoras</span>
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonios.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F5EEF8]/60 rounded-2xl p-6 border border-purple-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Lista para avanzar acompañada?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Elige tu plan, activa tu membresía y empieza a crecer con una comunidad real.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-white text-[#A169A2] hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Ver planes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="border-2 border-white text-white hover:bg-white hover:text-[#A169A2] px-8 py-6 text-lg font-bold rounded-full transition-all duration-300 group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Membresia;

