import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  Check,
  Clock,
  Users,
  Zap,
  Camera,
  Brain,
  Target,
  Sparkles,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Gift,
  Star,
  CalendarDays,
  Monitor,
  FileText,
  Palette,
  BarChart3,
  Mic2,
  Award,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const whatsappLink = 'https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr';

/* ─── Data ───────────────────────────────────── */

const painPoints = [
  { icon: BarChart3, text: 'Publicas todos los días, consigues likes… pero al final del mes las ventas siguen igual. El contenido no está conectado con una estrategia que convierta.' },
  { icon: Palette, text: 'Tu producto es bueno, pero en redes se ve igual al de cien marcas más. Sin una propuesta visual y narrativa clara, el cliente no tiene razón para elegirte a ti.' },
  { icon: Brain, text: 'Existen herramientas de IA que pueden escribir tus textos, generar ideas y crear piezas visuales en minutos. Pero nadie te ha enseñado a usarlas para tu tipo de negocio.' },
  { icon: Camera, text: 'Las fotos de tu producto no reflejan lo que realmente vale. Un fondo desordenado, mala iluminación o el ángulo equivocado pueden costarte la venta antes de que lean tu texto.' },
];

const modules = [
  {
    number: '01',
    title: 'Diagnóstico Estratégico y Enfoque Comercial',
    time: '30 min',
    icon: Target,
    color: '#4CA7C0',
    description: 'Antes de ejecutar, necesitas claridad. En este módulo harás una radiografía honesta de tu negocio: dónde estás realmente, qué está funcionando, qué no, y cuál es el problema clave que está frenando tus ventas digitales. Con esa claridad, todo lo que construyas después, tiene dirección.',
    highlights: [
      'Radiografía completa de tu negocio (8 preguntas clave)',
      'Identificación de bloqueos reales en ventas',
      'Enfoque estratégico personalizado para el bootcamp',
    ],
  },
  {
    number: '02',
    title: 'Marketing Digital Aplicado a Producto Físico',
    time: '1h 15min',
    icon: Zap,
    color: '#A169A2',
    description: 'Publicar sin plan es como abrir una tienda sin vitrina. Aquí construirás tu ecosistema de contenido: los 4 tipos de publicaciones que necesitas para vender de forma constante, cómo distribuirlos en la semana sin agotarte, y la estructura exacta de un copy que mueve a la acción. Saldrás con 3 textos terminados, listos para publicar.',
    highlights: [
      'Ecosistema de contenido: inspirar, educar, probar y vender',
      'Estructura de copy: gancho → historia → prueba → CTA',
      '3 copies finalizados y revisados en el taller',
      'Calendario de contenido para las próximas 2 semanas',
    ],
  },
  {
    number: '03',
    title: 'Inteligencia Artificial para Emprendedoras',
    time: '1h 30min',
    icon: Brain,
    color: '#C49A2B',
    description: 'La IA no reemplaza tu voz, la amplifica. En este módulo usarás las tres herramientas más poderosas del momento — ChatGPT, Claude y Gemini — en tiempo real para generar descripciones de producto, responder objeciones de clientas, crear ideas de contenido y optimizar tu bio de Instagram. Todo personalizado para tu negocio, no genérico.',
    highlights: [
      '4 prompts personalizados listos para usar',
      'Banco de respuestas para objeciones en DMs',
      'ChatGPT, Claude y Gemini aplicados a tu negocio',
      'Plan de contenido de 10 piezas generado con IA',
    ],
  },
  {
    number: '04',
    title: 'Fotografía y Contenido Visual con tu Celular',
    time: '45 min',
    icon: Camera,
    color: '#E1306C',
    description: 'No necesitas cámara profesional ni estudio. Necesitas saber qué hacer con lo que ya tienes. En este módulo aprenderás los 3 errores que arruinan una foto de producto, cómo configurar tu celular, qué fondos usar sin gastar un peso, y cómo editar en 3 minutos con Lightroom Mobile. La diferencia entre una foto amateur y una profesional está en los detalles.',
    highlights: [
      'Fotografía de producto con celular: luz, fondo y composición',
      'Edición profesional en Lightroom Mobile (gratuito)',
      'Preset descargable listo para tu tipo de producto',
      'Formatos correctos para feed, historia y reels',
    ],
  },
];

const kitItems = [
  { icon: FileText, name: 'Ficha de diagnóstico', format: 'PDF interactivo' },
  { icon: CalendarDays, name: 'Calendario de contenido 30 días', format: 'Google Sheets' },
  { icon: FileText, name: 'Guía de estructura de copy', format: 'PDF con 5 ejemplos' },
  { icon: Sparkles, name: '3 copies listos para publicar', format: 'Editables' },
  { icon: Brain, name: 'Biblioteca de 4 prompts IA', format: 'Personalizados' },
  { icon: Palette, name: 'Pieza visual de tu producto', format: 'PNG exportado' },
  { icon: Camera, name: 'Checklist fotografía con celular', format: 'PDF imprimible' },
  { icon: Palette, name: 'Preset Lightroom Mobile', format: 'Archivo DNG' },
  { icon: Target, name: 'Plan de acción 7 días', format: 'Google Docs' },
];

const team = [
  {
    name: 'Leidy Carolina Granados',
    role: 'Dirección estratégica y metodología',
    image: '/images/carolina_granados.jpg',
    bio: 'Fundadora de Emprendiendo Juntas. Contadora pública y estudiante de Comunicación Social. Lleva 5 años acompañando emprendedoras desde la estrategia, el contenido y la cercanía humana. Ella diseñó la metodología de este bootcamp porque conoce de primera mano los retos que enfrentas.',
  },
  {
    name: 'Sharon Niebles',
    role: 'Marketing digital y fotografía de producto',
    image: '/images/sharon.JPG',
    bio: 'Administradora de empresas y fundadora de Shabbs Col, su propia marca de productos físicos. No te enseña desde la teoría: te enseña desde la trinchera de alguien que publica, vende y fideliza clientes todos los días.',
  },
  {
    name: 'Jhonatan Castro',
    role: 'Inteligencia artificial e infraestructura digital',
    image: '/images/jhonatan.png',
    bio: 'Ingeniero de sistemas, magíster y docente universitario. Traduce la inteligencia artificial a un lenguaje que puedes aplicar hoy mismo en tu negocio, sin necesidad de ser experta en tecnología.',
  },
];

const faqs = [
  {
    q: '¿Necesito saber de tecnología para participar?',
    a: 'Para nada. Este bootcamp está diseñado pensando en emprendedoras que nunca han usado herramientas de IA. Te guiamos paso a paso, con pantalla compartida, y cada ejercicio lo haces en tiempo real con acompañamiento directo.',
  },
  {
    q: '¿Es en vivo o grabado?',
    a: 'Es 100% en vivo por Zoom o Google Meet. Eso significa que puedes hacer preguntas, recibir retroalimentación inmediata y ajustar tu trabajo en el momento. Además, recibirás la grabación completa después del evento para que puedas revisarla cuantas veces quieras.',
  },
  {
    q: '¿Qué tipo de negocio necesito tener?',
    a: 'El bootcamp está optimizado para emprendedoras con productos físicos: artesanías, alimentos, cosméticos, moda, accesorios, decoración, etc. Si ya tienes un producto y has tenido ventas (aunque sean esporádicas), este bootcamp es para ti. Si vendes servicios o aún no tienes producto, esta edición no se ajusta a tu perfil.',
  },
  {
    q: '¿Por qué solo 10 personas?',
    a: 'Porque cada ejercicio se hace con tu negocio real y el equipo facilitador revisa tu trabajo en vivo. Con más de 10 personas, sería imposible darte la atención que mereces. Este no es un webinar masivo: es un taller intensivo donde sales con trabajo hecho.',
  },
  {
    q: '¿Qué pasa después del bootcamp?',
    a: 'No te dejamos sola. Durante los 7 días siguientes, tienes acceso a un grupo exclusivo de WhatsApp donde puedes compartir lo que publicaste, recibir retroalimentación del equipo y resolver dudas sobre los materiales. A mitad de semana hacemos una revisión de avances.',
  },
  {
    q: '¿Qué me llevo exactamente?',
    a: 'Un kit digital completo: ficha de diagnóstico de tu negocio, calendario de contenido para 30 días, guía de estructura de copy con 5 ejemplos, 3 copies listos que tú misma escribiste, biblioteca de 4 prompts de IA personalizados, una pieza visual exportada, checklist de fotografía, preset de Lightroom Mobile y tu plan de acción de 7 días.',
  },
  {
    q: '¿Cómo pago?',
    a: 'Transferencia bancaria, Nequi o Bancolombia. Una vez realices el pago, envías el comprobante por WhatsApp y recibes la confirmación con todos los detalles de conexión y materiales previos.',
  },
];

/* ─── Components ─────────────────────────────── */

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#C49A2B]/30 transition-all text-left group"
      >
        <span className="font-semibold text-gray-900 group-hover:text-[#C49A2B] transition-colors pr-4">
          {faq.q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#C49A2B] flex-shrink-0" />
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

const CountdownBadge = () => (
  <div className="inline-flex items-center gap-2 bg-[#C49A2B]/15 border border-[#C49A2B]/30 text-[#C49A2B] font-bold text-sm px-5 py-2.5 rounded-full">
    <Rocket className="w-4 h-4" />
    Cupos limitados — Máximo 10 participantes
  </div>
);

/* ─── Main Page ──────────────────────────────── */

const Bootcamp = () => {
  return (
    <>
      <Helmet>
        <title>Bootcamp Marketing Digital + IA — Emprendiendo Juntas</title>
        <meta
          name="description"
          content="En 4 horas construye tu sistema de contenido para ventas: estrategia, copies, IA y fotografía de producto. Bootcamp intensivo para emprendedoras con productos físicos."
        />
      </Helmet>

      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#19152A] via-[#1f1a35] to-[#19152A]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#A169A2] rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4CA7C0] rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C49A2B] rounded-full blur-[100px]" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 py-32 sm:py-20">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CountdownBadge />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
            >
              Marketing Digital
              <br />
              <span className="text-[#C49A2B] italic">+ Inteligencia Artificial</span>
              <br />
              <span className="text-[#4CA7C0]">para tu negocio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              En <strong className="text-white">4 horas intensivas</strong>, construye el sistema completo que tu negocio necesita
              para vender en redes: estrategia de contenido, textos que convierten, piezas visuales con IA y un plan de acción
              concreto para los próximos 7 días.{' '}
              <strong className="text-[#C49A2B]">Todo aplicado directamente a tu negocio real, en tiempo real.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/50 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-[#4CA7C0]" /> 100% Virtual en vivo
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A169A2]" /> 4 horas intensivas
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C49A2B]" /> Máx. 10 personas
              </span>
              <span className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-[#E1306C]" /> 7 días de seguimiento
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            >
              <Button
                onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-[#C49A2B] hover:bg-[#a67d1f] text-white px-10 py-7 text-lg font-bold rounded-full shadow-2xl shadow-[#C49A2B]/30 hover:shadow-[#C49A2B]/50 transition-all duration-300 group"
              >
                Quiero inscribirme
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/70 hover:text-white hover:bg-white/10 px-8 py-7 text-lg font-semibold rounded-full border border-white/15"
              >
                Ver programa completo
              </Button>
            </motion.div>

            {/* Price teaser */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-6"
            >
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3">
                <span className="text-white/40 text-sm line-through" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  $120.000
                </span>
                <span className="text-3xl font-bold text-white">$50.000</span>
                <span className="text-white/50 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  COP · Precio de lanzamiento
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ PAIN POINTS ══════ */}
      <section className="py-20 sm:py-28 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-[#C49A2B] font-semibold text-sm mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ¿Te suena familiar?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#19152A] leading-tight">
              Tu producto es bueno.
              <br />
              <span className="text-[#A169A2] italic">El problema es cómo lo comunicas.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-red-50/60 border border-red-100 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-[#A169A2]/10 to-[#4CA7C0]/10 rounded-2xl px-8 py-5 border border-purple-100">
              <p className="text-lg font-bold text-[#19152A]">
                Este bootcamp existe para resolver exactamente eso —{' '}
                <span className="text-[#C49A2B]">en una sola tarde.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ PROMISE ══════ */}
      <section className="py-20 sm:py-24 px-5 bg-gradient-to-br from-[#19152A] to-[#1f1a35] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C49A2B] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#A169A2] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Award className="w-14 h-14 text-[#C49A2B] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Lo que te prometemos
            </h2>
            <p className="text-xl sm:text-2xl text-white/70 mt-6 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Llegas con un producto que no se vende como debería. En <strong className="text-white">4 horas</strong>,
              construyes tu <strong className="text-[#C49A2B]">sistema completo de contenido para ventas</strong>:
              una estrategia clara, textos que convierten, piezas visuales creadas con IA y un plan de acción
              paso a paso para los próximos 7 días.{' '}
              <strong className="text-[#4CA7C0]">No es teoría. Es trabajo hecho, con tu negocio, en tiempo real.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
          >
            {[
              { icon: Monitor, label: 'En vivo', sub: 'No grabado' },
              { icon: Zap, label: 'Práctico', sub: 'Tu negocio real' },
              { icon: Users, label: '10 cupos', sub: 'Atención 1:1' },
              { icon: Gift, label: '7 días', sub: 'Post-bootcamp' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <item.icon className="w-7 h-7 text-[#C49A2B] mx-auto mb-2" />
                <p className="text-white font-bold text-sm">{item.label}</p>
                <p className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ PARA QUIÉN ES ══════ */}
      <section className="py-20 sm:py-24 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#19152A]">
              ¿Este bootcamp es para <span className="text-[#A169A2] italic">ti</span>?
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              No es para todas. Y eso es intencional. Preferimos ser claras desde el inicio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sí es para ti */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 border-2 border-green-200 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
                <Check className="w-6 h-6" /> Sí, es para ti si…
              </h3>
              <ul className="space-y-4">
                {[
                  'Vendes productos físicos: artesanías, alimentos, cosméticos, moda, accesorios, decoración…',
                  'Ya tienes ventas, aunque sean esporádicas o por temporada',
                  'Usas Instagram, Facebook o TikTok, pero sientes que publicas al vacío',
                  'Tu producto es bueno y puedes cumplir pedidos — el problema no es lo que vendes, sino cómo lo comunicas',
                  'Quieres salir del bootcamp con trabajo hecho, no con teoría para "aplicar después"',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-green-900 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* No es para ti */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                ✗ Quizá no es para ti si…
              </h3>
              <ul className="space-y-4">
                {[
                  'Estás en etapa de ideación — aún no tienes producto ni has hecho ventas',
                  'Tu negocio es de servicios (todo el contenido está diseñado para producto físico)',
                  'Buscas un curso grabado para ver "cuando puedas" — esto es en vivo y requiere tu presencia activa',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400 text-center font-bold">—</span>
                    <span className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ MÓDULOS ══════ */}
      <section id="modulos" className="py-20 sm:py-28 px-5 bg-[#FAF8FC]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-[#A169A2] font-semibold text-sm mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Programa completo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#19152A]">
              4 Módulos, <span className="text-[#C49A2B] italic">4 horas</span>,
              <br className="hidden sm:block" /> todo con tu negocio real
            </h2>
            <p
              className="text-gray-500 mt-4 max-w-2xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              No vendrás a escuchar una charla. Vendrás a trabajar. Cada módulo tiene ejercicios prácticos que
              ejecutarás en tiempo real, con retroalimentación directa del equipo facilitador.
            </p>
          </motion.div>

          <div className="space-y-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Module Number */}
                  <div
                    className="md:w-28 flex items-center justify-center py-4 md:py-0"
                    style={{ backgroundColor: mod.color + '10' }}
                  >
                    <span className="text-4xl font-bold" style={{ color: mod.color }}>
                      {mod.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <mod.icon className="w-6 h-6" style={{ color: mod.color }} />
                      <h3 className="text-xl sm:text-2xl font-bold text-[#19152A]">{mod.title}</h3>
                      <span
                        className="ml-auto text-sm font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: mod.color + '15', color: mod.color, fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <Clock className="w-3.5 h-3.5 inline mr-1" />
                        {mod.time}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {mod.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mod.highlights.map((h, j) => (
                        <span
                          key={j}
                          className="text-xs font-medium px-3 py-1.5 rounded-full border"
                          style={{
                            borderColor: mod.color + '30',
                            color: mod.color,
                            backgroundColor: mod.color + '08',
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Cierre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-3xl p-6 sm:p-8 text-white"
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Cierre: Tu Plan de Acción + 7 Días de Acompañamiento</h3>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    No saldrás con "tareas pendientes". Saldrás con un plan concreto de 7 días: qué publicar, cuándo, en qué canal y con qué objetivo. Además, durante la semana siguiente tendrás un grupo exclusivo de WhatsApp con revisión de avances y respuesta a dudas del equipo.
                  </p>
                </div>
                <span className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full flex-shrink-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <Clock className="w-3.5 h-3.5 inline mr-1" />30 min
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ KIT DIGITAL ══════ */}
      <section className="py-20 sm:py-24 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <Gift className="w-12 h-12 text-[#C49A2B] mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#19152A]">
              Tu <span className="text-[#C49A2B] italic">Kit Digital</span> completo
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              9 materiales listos para usar desde el día siguiente. No son plantillas genéricas: los construyes tú durante el bootcamp, adaptados a tu negocio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kitItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 bg-[#FAF8FC] rounded-2xl p-5 border border-purple-100 hover:border-[#A169A2]/30 transition-colors"
              >
                <div className="w-10 h-10 bg-[#A169A2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#A169A2]" />
                </div>
                <div>
                  <p className="font-semibold text-[#19152A] text-sm">{item.name}</p>
                  <p className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.format}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ EQUIPO ══════ */}
      <section className="py-20 sm:py-24 px-5 bg-[#FAF8FC]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#19152A]">
              Quiénes te <span className="text-[#A169A2] italic">acompañan</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              No son conferencistas que te hablan desde una pantalla. Son profesionales que combinan emprendimiento real,
              comunicación estratégica e inteligencia artificial. Cada una aporta desde su experiencia viva.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#19152A]">{member.name}</h3>
                  <span
                    className="inline-block text-xs font-semibold text-[#A169A2] bg-[#A169A2]/10 px-3 py-1 rounded-full"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {member.role}
                  </span>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PRECIOS ══════ */}
      <section id="precios" className="py-20 sm:py-28 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#19152A]">
              Una inversión que se paga <span className="text-[#C49A2B] italic">con tu primera venta</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Es la primera edición de este bootcamp. Por eso, las primeras inscritas acceden a un precio de lanzamiento
              que no se repetirá. Es nuestra forma de decir: confiamos tanto en esto que queremos que lo pruebes antes de que suba.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Early bird */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#C49A2B] to-[#a67d1f] rounded-3xl p-8 sm:p-10 text-white shadow-2xl shadow-[#C49A2B]/20"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#C49A2B] text-sm font-bold px-6 py-1.5 rounded-full shadow-lg">
                🔥 Primeras 5 inscritas
              </div>

              <div className="text-center space-y-4 pt-4">
                <h3 className="text-xl font-bold">Precio de Lanzamiento</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-lg text-white/60 line-through">$120.000</span>
                  <span className="text-6xl font-extrabold">$50.000</span>
                </div>
                <p className="text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>COP · Pago único</p>

                <div className="pt-4 space-y-3 text-left">
                  {[
                    '4 horas de bootcamp intensivo en vivo',
                    'Kit digital completo (9 materiales)',
                    '7 días de seguimiento post-bootcamp',
                    'Grabación del evento completo',
                    'Atención personalizada (máx. 10 personas)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-white/90 flex-shrink-0" />
                      <span className="text-white/90 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  size="lg"
                  className="w-full bg-white text-[#C49A2B] hover:bg-white/90 px-8 py-6 text-lg font-bold rounded-full shadow-lg mt-6 group"
                >
                  ¡Quiero este precio!
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Regular */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white border-2 border-gray-200 rounded-3xl p-8 sm:p-10"
            >
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-[#19152A]">Precio Regular</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-lg text-gray-400">$</span>
                  <span className="text-6xl font-extrabold text-[#19152A]">120.000</span>
                </div>
                <p className="text-gray-400 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>COP · Pago único</p>

                <div className="pt-4 space-y-3 text-left">
                  {[
                    '4 horas de bootcamp intensivo en vivo',
                    'Kit digital completo (9 materiales)',
                    '7 días de seguimiento post-bootcamp',
                    'Grabación del evento completo',
                    'Atención personalizada (máx. 10 personas)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  size="lg"
                  className="w-full bg-[#19152A] text-white hover:bg-[#2a2340] px-8 py-6 text-lg font-bold rounded-full shadow-lg mt-6 group"
                >
                  Inscribirme
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Payment methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Pagos por Nequi, Bancolombia o transferencia bancaria · Confirmación por WhatsApp
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="py-20 sm:py-24 px-5 bg-[#FAF8FC]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#19152A]">
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

      {/* ══════ CTA FINAL ══════ */}
      <section className="py-20 sm:py-28 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#19152A] to-[#1f1a35] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl overflow-hidden"
          >
            {/* Glows */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#A169A2] rounded-full blur-[80px] opacity-30" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#C49A2B] rounded-full blur-[80px] opacity-30" />

            <div className="relative z-10 space-y-6">
              <Sparkles className="w-12 h-12 text-[#C49A2B] mx-auto" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Llegaste hasta aquí por algo.
                <br />
                <span className="text-[#C49A2B] italic">Tu negocio merece este paso.</span>
              </h2>
              <p
                className="text-lg text-white/60 max-w-xl mx-auto"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Solo 10 cupos por edición. Las emprendedoras que se inscriben primero pagan menos y aseguran
                su lugar en un bootcamp que cambiará la forma en que comunicas y vendes tu producto.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  size="lg"
                  className="bg-[#C49A2B] hover:bg-[#a67d1f] text-white px-10 py-7 text-lg font-bold rounded-full shadow-2xl shadow-[#C49A2B]/30 group"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Inscríbete por WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p
                className="text-white/30 text-sm pt-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Emprendiendo Juntas · Bootcamp 2026 · Santa Marta, Colombia
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Bootcamp;

