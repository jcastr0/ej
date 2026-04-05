import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, BookOpen, MessageCircle, ChevronDown, ChevronRight,
  Globe, Instagram, Facebook, Play, Compass, Lightbulb,
  Flower2, Smartphone, Heart, Network, Target, Sparkles,
  TrendingUp, Calendar, Award, DollarSign, Building2,
  Banknote, CreditCard, Handshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portafolio = () => {
  const [activeTab, setActiveTab] = useState('servicios');
  const [openAccordion, setOpenAccordion] = useState('l1');

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const tabs = [
    { id: 'servicios', label: 'Servicios', icon: Users },
    { id: 'valor', label: 'Propuesta de Valor', icon: Target },
    { id: 'ingresos', label: 'Modelo de Ingresos', icon: TrendingUp },
    { id: 'canales', label: 'Canales', icon: Network },
  ];

  const servicios = [
    {
      id: 'l1',
      number: '1',
      color: '#A169A2',
      title: 'Formación y Talleres',
      subtitle: 'Comunicación estratégica · Identidad de marca · Marketing digital',
      icon: BookOpen,
      cards: [
        {
          type: 'primary',
          color: '#A169A2',
          icon: '📚',
          title: 'Talleres Grupales de Formación',
          items: [
            'Comunicación efectiva para emprendedoras',
            'Identidad de marca y storytelling',
            'Marketing digital y presencia en redes',
            'Servicio al cliente y fidelización',
            'Organización del negocio y claridad estratégica'
          ],
          modalitas: ['🌐 Virtual', '📍 Presencial']
        },
        {
          type: 'secondary',
          color: '#4CA7C0',
          icon: '💡',
          title: 'Áreas de especialización',
          items: [
            'Comunicación estratégica',
            'Identidad de marca personal y empresarial',
            'Estrategias de marketing digital',
            'Construcción de audiencia orgánica',
            'Storytelling para emprendedores'
          ]
        }
      ]
    },
    {
      id: 'l2',
      number: '2',
      color: '#4CA7C0',
      title: 'Mentoría y Acompañamiento Empresarial',
      subtitle: 'Orientación personalizada · Diagnóstico y estrategia',
      icon: Compass,
      cards: [
        {
          type: 'secondary',
          color: '#4CA7C0',
          icon: '🧭',
          title: 'Mentorías para Emprendedoras',
          items: [
            'Diagnóstico básico del emprendimiento',
            'Orientación en organización del negocio',
            'Estrategias de comunicación de marca',
            'Recomendaciones para mejorar la visibilidad',
            'Estrategias iniciales de servicio al cliente'
          ],
          modalitas: ['🌐 Virtual', '📍 Presencial']
        },
        {
          type: 'primary',
          color: '#A169A2',
          icon: '💡',
          title: 'Áreas de enfoque',
          items: [
            'Organización y claridad del negocio',
            'Comunicación y visibilidad de marca',
            'Estrategia digital y presencia en redes',
            'Relación con clientes y fidelización'
          ]
        }
      ]
    },
    {
      id: 'l3',
      number: '3',
      color: '#C49A2B',
      title: 'Comunidad y Networking de Emprendedoras',
      subtitle: 'Encuentros · Red de apoyo · Visibilidad colectiva',
      icon: Flower2,
      cards: [
        {
          type: 'tertiary',
          color: '#C49A2B',
          icon: '🌸',
          title: 'Encuentros de Emprendedoras',
          items: [
            'Compartir experiencias y aprendizajes reales',
            'Generar alianzas entre emprendedoras',
            'Promover la visibilidad de los emprendimientos',
            'Fortalecer redes de apoyo y confianza mutua'
          ]
        },
        {
          type: 'primary',
          color: '#A169A2',
          icon: '📱',
          title: 'Comunidad Digital',
          items: [
            'Visibilidad de emprendimientos en redes',
            'Intercambio de experiencias y recursos',
            'Difusión de oportunidades del ecosistema',
            'Participación en actividades de la comunidad',
            '~60 emprendedoras activas en WhatsApp'
          ]
        }
      ]
    }
  ];

  const ingresos = [
    {
      id: 'c1',
      color: '#A169A2',
      number: '1',
      icon: '📚',
      title: 'Talleres y Formaciones',
      description: 'Ingresos por talleres grupales presenciales y virtuales, dirigidos a emprendedoras que buscan fortalecer comunicación, branding y estrategia digital.',
      tags: ['Presencial', 'Virtual', 'Grupal']
    },
    {
      id: 'c2',
      color: '#4CA7C0',
      number: '2',
      icon: '🧭',
      title: 'Mentorías Individuales',
      description: 'Acompañamiento personalizado uno a uno para emprendedoras que necesitan orientación específica en organización, branding y crecimiento.',
      tags: ['1:1', 'Personalizado', 'Diagnóstico']
    },
    {
      id: 'c3',
      color: '#C49A2B',
      number: '3',
      icon: '💳',
      title: 'Membresías de Comunidad',
      description: 'Acceso premium a la red de emprendedoras con beneficios exclusivos, contenido especializado y networking dirigido.',
      tags: ['Mensual', 'Comunidad', 'Networking']
    },
    {
      id: 'c4',
      color: '#2E7D32',
      number: '4',
      icon: '🤝',
      title: 'Alianzas y Colaboraciones',
      description: 'Ingresos por partnerships con marcas, instituciones educativas, eventos y colaboraciones estratégicas del ecosistema emprendedor.',
      tags: ['Partnerships', 'Eventos', 'Colaboraciones']
    }
  ];

  const canales = [
    {
      name: 'Página Web',
      handle: 'emprendiendojuntas.com.co',
      description: 'Portafolio de servicios, blog y captación',
      url: 'https://emprendiendojuntas.com.co',
      icon: Globe,
      color: '#A169A2'
    },
    {
      name: 'Instagram',
      handle: '@emprendiendo.juntas',
      description: 'Contenido educativo y visibilización de marcas emprendedoras',
      url: 'https://www.instagram.com/emprendiendo.juntas/',
      icon: Instagram,
      color: '#C13584'
    },
    {
      name: 'Facebook',
      handle: 'Emprendiendo Juntas',
      description: 'Difusión de eventos, actividades y comunidad de apoyo',
      url: 'https://www.facebook.com/people/Emprendiendo-Juntas/100067189676481/',
      icon: Facebook,
      color: '#1877F2'
    },
    {
      name: 'TikTok',
      handle: '@emprendiendo.juntas',
      description: 'Contenido breve, motivacional y formativo',
      url: 'https://www.tiktok.com/@emprendiendo.juntas',
      icon: Play,
      color: '#010101'
    },
    {
      name: 'WhatsApp',
      handle: 'Comunidad privada',
      description: '~60 emprendedoras activas · Únete a la comunidad',
      url: 'https://chat.whatsapp.com/H7tDkda2guM37g2o4GEEIr',
      icon: MessageCircle,
      color: '#25D366'
    }
  ];

  const AccordionItem = ({ servicio }) => {
    const isOpen = openAccordion === servicio.id;
    const IconComponent = servicio.icon;

    return (
      <div className="border border-gray-200 rounded-2xl overflow-hidden mb-3 transition-all duration-300">
        <button
          onClick={() => toggleAccordion(servicio.id)}
          className="w-full p-6 bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center gap-4"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
            style={{ backgroundColor: servicio.color }}
          >
            {servicio.number}
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg font-bold text-[#19152A] mb-1">{servicio.title}</h3>
            <p className="text-sm text-[#8A7E96]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {servicio.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <IconComponent className="w-5 h-5 text-[#8A7E96]" />
            {isOpen ? (
              <ChevronDown className="w-5 h-5 text-[#8A7E96]" />
            ) : (
              <ChevronRight className="w-5 h-5 text-[#8A7E96]" />
            )}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 grid md:grid-cols-2 gap-4">
                {servicio.cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{
                      borderColor: card.type === 'primary' ? '#A169A2' + '30' :
                                   card.type === 'secondary' ? '#4CA7C0' + '30' :
                                   '#C49A2B' + '30'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{card.icon}</span>
                      <h4 className="font-bold text-[#19152A] text-base leading-tight">{card.title}</h4>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: card.color }}
                          />
                          <span className="text-sm text-[#48405E] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {card.modalitas && (
                      <div className="flex gap-2 flex-wrap">
                        {card.modalitas.map((modalidad, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full font-medium"
                            style={{
                              backgroundColor: card.color + '20',
                              color: card.color
                            }}
                          >
                            {modalidad}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8FC] overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#A169A2]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-[#4CA7C0]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#FAF8FC]/90 backdrop-blur-lg border-b border-[#A169A2]/10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center gap-4">
          <div className="flex items-center gap-2 mr-4">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] animate-pulse" />
            <span className="font-bold text-[#A169A2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Emprendiendo Juntas
            </span>
          </div>
          <div className="flex gap-1 overflow-x-auto scrollbar-hide flex-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#A169A2] text-white shadow-lg'
                      : 'text-[#8A7E96] hover:text-[#A169A2] hover:bg-[#A169A2]/5'
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
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#A169A2]/10 border border-[#A169A2]/20 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-[#A169A2]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A169A2]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Portafolio de Servicios
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-[#19152A] mb-4 leading-tight">
          Emprendiendo <span className="italic text-[#A169A2]">Juntas</span>
        </h1>

        <p className="text-lg text-[#8A7E96] max-w-2xl mx-auto mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Formación, mentoría y comunidad para emprendedoras que buscan claridad estratégica,
          visibilidad y crecimiento sostenible en Santa Marta, Colombia.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-[#A169A2]/10 text-[#A169A2] px-4 py-2 rounded-full text-sm font-medium">Formación</span>
          <span className="bg-[#4CA7C0]/10 text-[#4CA7C0] px-4 py-2 rounded-full text-sm font-medium">Mentoría</span>
          <span className="bg-[#A169A2]/10 text-[#A169A2] px-4 py-2 rounded-full text-sm font-medium">Comunidad</span>
          <span className="bg-[#4CA7C0]/10 text-[#4CA7C0] px-4 py-2 rounded-full text-sm font-medium">Networking</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'servicios' && (
            <motion.div
              key="servicios"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#19152A] mb-3">Líneas de Servicio</h2>
                <p className="text-[#8A7E96]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Haz clic en cada línea para explorar los detalles de formación, mentoría y comunidad.
                </p>
              </div>

              <div className="space-y-3">
                {servicios.map((servicio) => (
                  <AccordionItem key={servicio.id} servicio={servicio} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'valor' && (
            <motion.div
              key="valor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#19152A] mb-3">Propuesta de Valor</h2>
                <p className="text-[#8A7E96]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Lo que hace única a Emprendiendo Juntas frente a cualquier otra red o comunidad de emprendimiento.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Hero card */}
                <div className="lg:col-span-3 bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                  <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-white/5 rounded-full translate-y-4" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Más que una comunidad — un ecosistema de crecimiento
                    </h3>
                    <p className="text-white/90 mb-6 max-w-3xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Emprendiendo Juntas combina formación técnica, acompañamiento humano y redes de apoyo reales
                      para fortalecer los emprendimientos desde adentro: comunicación, visibilidad, servicio al cliente
                      y claridad estratégica. No solo una vitrina — una red que acompaña, motiva y abre puertas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Formación', 'Mentoría', 'Comunidad', 'Networking', 'Visibilidad'].map((tag, i) => (
                        <span key={i} className="bg-white/20 border border-white/30 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Value cards */}
                {[
                  {
                    icon: Heart,
                    title: 'Acompañamiento humano real',
                    description: 'No solo técnicas — contención, motivación y apoyo emocional en el proceso de emprender.'
                  },
                  {
                    icon: Network,
                    title: 'Red de contactos verificada',
                    description: 'Conexiones reales con emprendedoras activas, no solo números en un grupo.'
                  },
                  {
                    icon: Award,
                    title: 'Formación práctica y aplicable',
                    description: 'Talleres diseñados desde la experiencia real, no teoría académica desconectada.'
                  }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-[#A169A2] mb-4" />
                      <h4 className="font-bold text-[#19152A] mb-2">{item.title}</h4>
                      <p className="text-[#8A7E96] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'ingresos' && (
            <motion.div
              key="ingresos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#19152A] mb-3">Modelo de Ingresos</h2>
                <p className="text-[#8A7E96]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Fuentes de ingresos diversificadas que garantizan la sostenibilidad y el crecimiento de Emprendiendo Juntas.
                </p>
              </div>

              {/* Intro card */}
              <div className="bg-white border border-[#4CA7C0]/20 rounded-2xl p-6 mb-8 flex gap-4">
                <div className="w-12 h-12 bg-[#4CA7C0]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-[#4CA7C0]" />
                </div>
                <div>
                  <p className="text-[#48405E] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <strong className="text-[#19152A]">Modelo mixto de ingresos</strong> que combina formación, mentoría personalizada,
                    membresías de comunidad y alianzas estratégicas para crear un ecosistema sostenible y escalable.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {ingresos.map((item, i) => (
                  <div
                    key={item.id}
                    className="relative bg-white border-2 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    style={{
                      borderColor: item.color + '30',
                      background: `linear-gradient(145deg, ${item.color}05, white)`
                    }}
                  >
                    <div className="absolute top-4 right-4 text-4xl font-bold opacity-5 text-[#19152A]">
                      {item.number}
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl mb-3 block">{item.icon}</span>
                      <h3 className="text-lg font-bold text-[#19152A] mb-2">{item.title}</h3>
                      <p className="text-[#48405E] text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: item.color + '15',
                            color: item.color
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sustainability card */}
              <div className="bg-[#19152A] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-60 h-60 bg-[#A169A2]/20 rounded-full blur-3xl -translate-x-20 -translate-y-20" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#4CA7C0]/20 rounded-full blur-3xl translate-x-20 translate-y-20" />
                <div className="relative">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#4CA7C0] mb-2">
                    Sostenibilidad
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Crecimiento sostenible y escalable
                  </h3>
                  <p className="text-white/70 mb-6 max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    El modelo diversificado permite reinvertir en mejor contenido, más recursos para las emprendedoras
                    y expansión a nuevas ciudades, manteniendo siempre el enfoque humano y la calidad del acompañamiento.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: '📈', text: 'Crecimiento escalable sin perder calidad' },
                      { icon: '🤝', text: 'Reinversión en la comunidad' },
                      { icon: '🌱', text: 'Expansión a nuevas ciudades' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 border border-white/10 rounded-xl p-4">
                        <span className="text-lg mb-2 block">{item.icon}</span>
                        <p className="text-white/80 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'canales' && (
            <motion.div
              key="canales"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#19152A] mb-3">Canales de Comunicación</h2>
                <p className="text-[#8A7E96]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Haz clic en cada tarjeta para visitar la plataforma. Emprendiendo Juntas está activa
                  en todos estos espacios generando contenido y comunidad.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {canales.map((canal, i) => {
                  const IconComponent = canal.icon;
                  return (
                    <a
                      key={i}
                      href={canal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                      style={{ '--canal-color': canal.color }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ background: canal.color }} />
                      <div
                        className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300"
                        style={{
                          backgroundColor: canal.color + '15',
                          color: canal.color
                        }}
                      >
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-[#19152A] mb-1">{canal.name}</h3>
                      <p className="text-sm text-[#A169A2] font-medium mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {canal.handle}
                      </p>
                      <p className="text-xs text-[#8A7E96] leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {canal.description}
                      </p>
                      <div className="text-xs font-semibold text-[#A169A2] group-hover:translate-x-1 transition-transform">
                        {canal.name === 'WhatsApp' ? 'Unirse' : 'Visitar'} →
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white/50 py-8">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A169A2] to-[#4CA7C0]" />
            <span className="font-bold text-[#A169A2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Emprendiendo Juntas
            </span>
          </div>
          <span className="text-sm text-[#8A7E96]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Portafolio de Servicios · Santa Marta, Colombia · 2026
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
