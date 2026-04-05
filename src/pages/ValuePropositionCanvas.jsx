import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target, Users, AlertTriangle, Trophy, Package,
  Shield, Sparkles, Info, Eye, EyeOff, ArrowRight,
  Heart, TrendingUp, Award, Zap, CheckCircle2
} from 'lucide-react';

const ValuePropositionCanvas = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  const perfilCliente = {
    trabajos: {
      title: 'Trabajos del Cliente',
      subtitle: 'Jobs to be done',
      icon: Target,
      color: '#DC2626',
      items: [
        'Vender de forma constante',
        'Posicionar su marca',
        'Aprender sobre costos',
        'Sentirse parte de una red',
        'Crecer como empresaria'
      ],
      description: '¿Qué tareas funcionales, emocionales y sociales busca realizar la cliente?'
    },
    dolores: {
      title: 'Dolores',
      subtitle: 'Pain Points',
      icon: AlertTriangle,
      color: '#DC2626',
      items: [
        'Falta de visibilidad',
        'Desconocimiento en marketing',
        'Dificultad para fijar precios',
        'Soledad y agotamiento',
        'Comparación con marcas grandes'
      ],
      description: 'Frustraciones, obstáculos y riesgos que experimenta'
    },
    ganancias: {
      title: 'Ganancias Esperadas',
      subtitle: 'Gains',
      icon: Trophy,
      color: '#DC2626',
      items: [
        'Ventas sostenidas',
        'Marca reconocible',
        'Clientes fieles',
        'Mayor confianza empresarial',
        'Comunidad que abra puertas'
      ],
      description: 'Beneficios concretos que busca obtener'
    }
  };

  const mapaValor = {
    productos: {
      title: 'Productos y Servicios',
      subtitle: 'Products & Services',
      icon: Package,
      color: '#059669',
      items: [
        'Comunidad WhatsApp',
        'Talleres grupales',
        'Mentorías 1 a 1',
        'Contenido educativo',
        'Web y portafolio',
        'Eventos presenciales'
      ],
      description: 'Lista de productos y servicios que ofrece Emprendiendo Juntas'
    },
    aliviadores: {
      title: 'Aliviadores de Dolor',
      subtitle: 'Pain Relievers',
      icon: Shield,
      color: '#059669',
      items: [
        'Formación en costos y precios',
        'Orientación en marca',
        'Acompañamiento emocional',
        'Espacio seguro',
        'Circulación de oportunidades',
        'Red de apoyo constante'
      ],
      description: 'Cómo aliviamos dolores específicos del cliente'
    },
    creadores: {
      title: 'Creadores de Ganancia',
      subtitle: 'Gain Creators',
      icon: Sparkles,
      color: '#059669',
      items: [
        'Visibilización en redes y web',
        'Conexión con aliados',
        'Acceso a ferias y eventos',
        'Conocimientos aplicables',
        'Sentido de pertenencia',
        'Crecimiento conjunto'
      ],
      description: 'Cómo generamos las ganancias que el cliente busca'
    }
  };

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const CanvasSection = ({ section, side = 'left', isActive, onClick }) => {
    const IconComponent = section.icon;

    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={onClick}
        className={`cursor-pointer bg-white border-2 rounded-2xl p-6 transition-all duration-300 min-h-[200px] relative overflow-hidden ${
          isActive 
            ? 'shadow-2xl border-opacity-80 transform -translate-y-1' 
            : 'shadow-sm hover:shadow-lg border-gray-200'
        }`}
        style={{
          borderColor: isActive ? section.color : undefined,
          boxShadow: isActive ? `0 12px 40px ${section.color}40` : undefined
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ backgroundColor: section.color }}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-[#19152A] text-base leading-tight">
              {section.title}
            </h3>
            <p className="text-xs text-[#8A7E96] font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {section.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 mb-4">
          {section.items.slice(0, isActive ? section.items.length : 3).map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: section.color }}
              />
              <p className="text-sm text-[#48405E] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item}
              </p>
            </div>
          ))}

          {!isActive && section.items.length > 3 && (
            <p className="text-xs text-[#8A7E96] italic mt-2">
              +{section.items.length - 3} más...
            </p>
          )}
        </div>

        {/* Description */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-xs text-[#8A7E96] italic leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {section.description}
          </p>
        </div>

        {/* Active pulse */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-2xl animate-pulse opacity-10"
            style={{ backgroundColor: section.color }}
          />
        )}
      </motion.div>
    );
  };

  const FitIndicator = ({ clientSection, valueSection, strength = 'high' }) => {
    const getStrengthColor = () => {
      switch(strength) {
        case 'high': return '#059669';
        case 'medium': return '#D97706';
        case 'low': return '#DC2626';
        default: return '#6B7280';
      }
    };

    const getStrengthIcon = () => {
      switch(strength) {
        case 'high': return CheckCircle2;
        case 'medium': return Zap;
        case 'low': return AlertTriangle;
        default: return Target;
      }
    };

    const StrengthIcon = getStrengthIcon();

    return (
      <div
        className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border"
        style={{
          backgroundColor: getStrengthColor() + '15',
          borderColor: getStrengthColor() + '30',
          color: getStrengthColor()
        }}
      >
        <StrengthIcon className="w-3 h-3" />
        <span>Fit: {strength === 'high' ? 'Alto' : strength === 'medium' ? 'Medio' : 'Bajo'}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-20 px-5" style={{ background: "linear-gradient(160deg, #FFF1F2 0%, #F0FDF4 35%, #FFFBEB 70%, #F3F4F6 100%)" }}>

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-green-100/50 border border-green-200 rounded-full px-4 py-2 mb-4">
          <Target className="w-4 h-4 text-green-600" />
          <span className="text-xs font-semibold uppercase tracking-widest text-green-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Design Thinking · Osterwalder et al. (2014)
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
          Lienzo de Propuesta de Valor
        </h1>

        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Herramienta que alinea la oferta de Emprendiendo Juntas con las necesidades, dolores y ganancias
          esperadas por las emprendedoras. Haz clic en cada sección para explorar los detalles.
        </p>

        {/* Propuesta de Valor - Tres Pilares */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-2xl p-8 mb-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
          <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-white/5 rounded-full translate-y-6" />

          <div className="relative">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Propuesta de Valor Diferenciada
              </h2>
              <p className="text-white/80 text-sm max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Tres pilares fundamentales que responden directamente a las necesidades de nuestras emprendedoras
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">🤝 Comunidad</h3>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Red de apoyo activa donde las emprendedoras comparten experiencias, se motivan mutuamente y construyen vínculos de confianza.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">📚 Formación</h3>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Capacitación práctica en costos, marketing, marca, ventas, servicio al cliente y comunicación.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">📣 Visibilidad</h3>
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Amplificación de marcas a través de redes sociales, web, eventos presenciales y alianzas estratégicas.
                </p>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h4 className="font-bold text-center mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Declaración de Propuesta de Valor
              </h4>
              <p className="text-white/90 text-sm leading-relaxed text-center max-w-4xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Para <strong>mujeres emprendedoras de Santa Marta y el Caribe colombiano</strong> que necesitan visibilidad,
                formación y acompañamiento para sostener sus negocios, <strong>Emprendiendo Juntas</strong> es una comunidad
                híbrida de apoyo integral que ofrece cercanía humana, orientación estratégica y proyección de marca.
                A diferencia de programas institucionales o comunidades exclusivamente digitales,
                <strong> Emprendiendo Juntas combina lo emocional, lo contable, lo comunicativo y lo presencial</strong> en un solo espacio accesible.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
          >
            {showGuide ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showGuide ? 'Ocultar' : 'Mostrar'} Guía
          </button>
        </div>

        <AnimatePresence>
          {showGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-left mb-8 overflow-hidden"
            >
              <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Cómo usar el Value Proposition Canvas
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">👥 Perfil del Cliente (Derecha):</h4>
                  <ul className="space-y-1 text-xs">
                    <li><strong>Trabajos:</strong> Tareas que el cliente busca realizar</li>
                    <li><strong>Dolores:</strong> Frustraciones y obstáculos que enfrenta</li>
                    <li><strong>Ganancias:</strong> Beneficios y resultados que espera</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">💎 Mapa de Valor (Izquierda):</h4>
                  <ul className="space-y-1 text-xs">
                    <li><strong>Productos:</strong> Lista de productos y servicios</li>
                    <li><strong>Aliviadores:</strong> Cómo aliviamos los dolores</li>
                    <li><strong>Creadores:</strong> Cómo generamos las ganancias</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-xl border border-blue-300">
                <p className="text-xs text-blue-900 font-medium">
                  🎯 <strong>Objetivo:</strong> Lograr un "Product-Market Fit" donde cada dolor tiene su aliviador
                  y cada ganancia esperada tiene su creador correspondiente.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Canvas */}
      <div className="max-w-6xl mx-auto">

        {/* Title Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-2">
              <Package className="w-4 h-4" />
              Mapa de Valor
            </div>
            <p className="text-xs text-gray-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Nuestra oferta de productos y servicios
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-2">
              <Users className="w-4 h-4" />
              Perfil del Cliente
            </div>
            <p className="text-xs text-gray-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Necesidades de nuestras emprendedoras
            </p>
          </div>
        </div>

        {/* Main Canvas Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* MAPA DE VALOR - Lado Izquierdo */}
          <div className="space-y-4">
            <CanvasSection
              section={mapaValor.productos}
              side="left"
              isActive={activeSection === 'productos'}
              onClick={() => toggleSection('productos')}
            />
            <CanvasSection
              section={mapaValor.aliviadores}
              side="left"
              isActive={activeSection === 'aliviadores'}
              onClick={() => toggleSection('aliviadores')}
            />
            <CanvasSection
              section={mapaValor.creadores}
              side="left"
              isActive={activeSection === 'creadores'}
              onClick={() => toggleSection('creadores')}
            />
          </div>

          {/* PERFIL DEL CLIENTE - Lado Derecho */}
          <div className="space-y-4">
            <CanvasSection
              section={perfilCliente.trabajos}
              side="right"
              isActive={activeSection === 'trabajos'}
              onClick={() => toggleSection('trabajos')}
            />
            <CanvasSection
              section={perfilCliente.dolores}
              side="right"
              isActive={activeSection === 'dolores'}
              onClick={() => toggleSection('dolores')}
            />
            <CanvasSection
              section={perfilCliente.ganancias}
              side="right"
              isActive={activeSection === 'ganancias'}
              onClick={() => toggleSection('ganancias')}
            />
          </div>
        </div>

        {/* Fit Analysis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-red-500 rounded-xl flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[#19152A] text-lg">Product-Market Fit Analysis</h3>
              <p className="text-sm text-[#8A7E96]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Grado de alineación entre nuestra propuesta y las necesidades del cliente
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-[#48405E]">Trabajos → Productos</span>
              <FitIndicator strength="high" />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-[#48405E]">Dolores → Aliviadores</span>
              <FitIndicator strength="high" />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-[#48405E]">Ganancias → Creadores</span>
              <FitIndicator strength="high" />
            </div>
          </div>
        </motion.div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-white/5 rounded-full translate-y-4" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Propuesta de Valor Diferenciada
                </h3>
                <p className="text-white/80 text-sm">Alineación estratégica validada</p>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Este lienzo demuestra la <strong>alta alineación</strong> entre lo que ofrecemos y lo que necesitan
              las emprendedoras de Santa Marta. Cada dolor identificado tiene un aliviador específico,
              y cada ganancia esperada cuenta con un creador correspondiente en nuestra propuesta de valor.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white mb-1">🎯 Diferenciación</p>
                <p className="text-white/80 text-sm">Comunidad híbrida digital + presencial</p>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white mb-1">💝 Valor Único</p>
                <p className="text-white/80 text-sm">Acompañamiento humano + estratégico</p>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white mb-1">📈 Resultados</p>
                <p className="text-white/80 text-sm">5 años de crecimiento validado</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-12 flex items-center justify-between border-t border-gray-200 pt-6 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A169A2] to-[#4CA7C0]" />
          <span className="font-semibold text-[#A169A2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Emprendiendo Juntas
          </span>
        </div>
        <span className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Value Proposition Canvas · Adaptado de Osterwalder et al. (2014) · CUN · 2026
        </span>
      </div>
    </div>
  );
};

export default ValuePropositionCanvas;
