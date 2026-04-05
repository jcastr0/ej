import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Target, Heart, Handshake, Settings, Package,
  MessageCircle, DollarSign, TrendingUp, Building,
  Lightbulb, Info, Eye, EyeOff, Sparkles
} from 'lucide-react';

const BusinessModelCanvas = () => {
  const [activeBlock, setActiveBlock] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  const canvasData = {
    sociosClave: {
      id: 'socios',
      title: 'Socios Clave',
      icon: Handshake,
      color: '#8B5CF6',
      items: [
        'CUN (CUNbre)',
        'Alcaldía — Eleva 500+',
        'Cámara de Comercio SM',
        'Exposamarios',
        'Hempremagd',
        'Cenit / Fund. Con.Ciencia'
      ],
      description: 'Red de alianzas estratégicas para amplificar el impacto'
    },
    actividadesClave: {
      id: 'actividades',
      title: 'Actividades Clave',
      icon: Settings,
      color: '#059669',
      items: [
        'Gestión de comunidad WhatsApp',
        'Producción de contenido educativo',
        'Talleres y mentorías',
        'Networking y eventos',
        'Articulación institucional'
      ],
      description: 'Procesos fundamentales para entregar la propuesta de valor'
    },
    propuestaValor: {
      id: 'propuesta',
      title: 'Propuesta de Valor',
      icon: Target,
      color: '#A169A2',
      items: [
        'Comunidad híbrida (digital + presencial)',
        'Acompañamiento integral a emprendedoras',
        'Formación práctica y aplicable',
        'Visibilidad y networking real',
        'Cercanía humana y orientación estratégica'
      ],
      description: 'El valor único que ofrecemos a nuestras emprendedoras',
      isCenter: true
    },
    relacionesClientes: {
      id: 'relaciones',
      title: 'Relación con Clientes',
      icon: Heart,
      color: '#DC2626',
      items: [
        'Acompañamiento cercano',
        'Comunidad privada WhatsApp',
        'Contenido educativo',
        'Encuentros presenciales',
        'Co-creación'
      ],
      description: 'Cómo construimos y mantenemos vínculos con las emprendedoras'
    },
    segmentosClientes: {
      id: 'segmentos',
      title: 'Segmentos de Clientes',
      icon: Users,
      color: '#DC2626',
      items: [
        'Emprendedoras 20-45 años',
        'Negocios etapa inicial/intermedia',
        'Base Santa Marta',
        'Venta por redes y ferias',
        'Buscan visibilidad y comunidad'
      ],
      description: 'Perfil específico de nuestro cliente ideal'
    },
    recursosKey: {
      id: 'recursos',
      title: 'Recursos Clave',
      icon: Package,
      color: '#059669',
      items: [
        'Comunidad (~60 miembros)',
        'Web y redes sociales',
        'Conocimiento multidisciplinar',
        'Red de aliados',
        'El Vlog de Carito'
      ],
      description: 'Activos esenciales para operar el modelo de negocio'
    },
    canales: {
      id: 'canales',
      title: 'Canales',
      icon: MessageCircle,
      color: '#DC2626',
      items: [
        'Instagram',
        'WhatsApp',
        'Web',
        'Facebook, TikTok, Threads',
        'Eventos presenciales'
      ],
      description: 'Medios por los cuales llegamos y nos comunicamos'
    },
    estructuraCostos: {
      id: 'costos',
      title: 'Estructura de Costos',
      icon: TrendingUp,
      color: '#DC2626',
      items: [
        'Hosting y dominio',
        'Herramientas de diseño',
        'Conectividad',
        'Tiempo de gestión',
        'Logística de eventos'
      ],
      description: 'Principales gastos para operar el modelo'
    },
    fuentesIngresos: {
      id: 'ingresos',
      title: 'Fuentes de Ingresos',
      icon: DollarSign,
      color: '#059669',
      items: [
        'Capacitaciones pagas',
        'Mentorías personalizadas',
        'Consultoría externa',
        'Membresía futura',
        'Alianzas institucionales'
      ],
      description: 'Formas de monetización del modelo de negocio'
    }
  };

  const handleBlockClick = (blockId) => {
    setActiveBlock(activeBlock === blockId ? null : blockId);
  };

  const CanvasBlock = ({ block, className = "", colspan = 1 }) => {
    const isActive = activeBlock === block.id;
    const IconComponent = block.icon;

    return (
      <motion.div
        className={`${className} cursor-pointer`}
        style={{ gridColumn: `span ${colspan}` }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <motion.div
          onClick={() => handleBlockClick(block.id)}
          className={`h-full bg-white border-2 rounded-2xl p-4 transition-all duration-300 ${
            isActive 
              ? 'shadow-xl border-opacity-80 transform -translate-y-1' 
              : 'shadow-sm hover:shadow-lg border-gray-200'
          } ${block.isCenter ? 'border-4 min-h-[200px] flex flex-col justify-center' : 'min-h-[160px]'}`}
          style={{
            borderColor: isActive ? block.color : undefined,
            boxShadow: isActive ? `0 8px 32px ${block.color}40` : undefined
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0"
              style={{ backgroundColor: block.color }}
            >
              <IconComponent className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h3 className={`font-bold text-[#19152A] leading-tight ${block.isCenter ? 'text-lg' : 'text-sm'}`}>
                {block.title}
              </h3>
              {block.isCenter && (
                <p className="text-xs text-[#8A7E96] mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {block.description}
                </p>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {block.isCenter ? (
              // Propuesta de Valor - Layout especial
              <div className="space-y-2">
                {block.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: block.color }}
                    />
                    <p className="text-sm text-[#48405E] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              // Otros bloques
              <div className="space-y-1.5">
                {block.items.slice(0, isActive ? block.items.length : 3).map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div
                      className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: block.color }}
                    />
                    <p className="text-xs text-[#48405E] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </p>
                  </div>
                ))}

                {!isActive && block.items.length > 3 && (
                  <p className="text-xs text-[#8A7E96] italic mt-2">
                    +{block.items.length - 3} más...
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Footer description para bloques no centrales */}
          {!block.isCenter && (
            <div className="mt-3 pt-2 border-t border-gray-100">
              <p className="text-[10px] text-[#8A7E96] italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {block.description}
              </p>
            </div>
          )}

          {/* Active indicator */}
          {isActive && (
            <div
              className="absolute inset-0 rounded-2xl animate-pulse opacity-20"
              style={{ backgroundColor: block.color }}
            />
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen py-20 px-5" style={{ background: "linear-gradient(160deg, #F8FAFC 0%, #F0FDF4 35%, #FEF7ED 70%, #FDF2F8 100%)" }}>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100/50 border border-purple-200 rounded-full px-4 py-2 mb-4">
          <Building className="w-4 h-4 text-purple-600" />
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Design Thinking · Osterwalder & Pigneur (2010)
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
          Business Model Canvas
        </h1>

        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Los nueve bloques fundamentales del modelo de negocio de Emprendiendo Juntas.
          Haz clic en cada bloque para explorar los detalles.
        </p>

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
                Cómo usar el Business Model Canvas
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div>
                  <h4 className="font-semibold mb-2">🎯 Lado Derecho (Mercado):</h4>
                  <ul className="space-y-1 text-xs">
                    <li><strong>Segmentos:</strong> ¿Para quién creamos valor?</li>
                    <li><strong>Propuesta:</strong> ¿Qué valor entregamos?</li>
                    <li><strong>Canales:</strong> ¿Cómo llegamos a los clientes?</li>
                    <li><strong>Relaciones:</strong> ¿Cómo nos relacionamos?</li>
                    <li><strong>Ingresos:</strong> ¿Por qué pagan los clientes?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🏗️ Lado Izquierdo (Infraestructura):</h4>
                  <ul className="space-y-1 text-xs">
                    <li><strong>Recursos:</strong> ¿Qué activos necesitamos?</li>
                    <li><strong>Actividades:</strong> ¿Qué hacemos clave?</li>
                    <li><strong>Socios:</strong> ¿Quiénes son nuestros aliados?</li>
                    <li><strong>Costos:</strong> ¿Cuáles son nuestros gastos?</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Canvas Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 auto-rows-fr">

          {/* Fila 1: Socios, Actividades, Propuesta, Relaciones, Segmentos */}
          <CanvasBlock block={canvasData.sociosClave} />
          <CanvasBlock block={canvasData.actividadesClave} />
          <CanvasBlock block={canvasData.propuestaValor} className="col-span-2 lg:col-span-1" />
          <CanvasBlock block={canvasData.relacionesClientes} />
          <CanvasBlock block={canvasData.segmentosClientes} className="lg:row-span-2" />

          {/* Fila 2: Recursos, [Propuesta continúa], Canales */}
          <CanvasBlock block={canvasData.recursosKey} />
          <div className="lg:hidden">
            {/* Spacer para mobile */}
          </div>
          <div className="hidden lg:block">
            {/* Spacer para que la propuesta ocupe 2 filas en desktop */}
          </div>
          <CanvasBlock block={canvasData.canales} />

          {/* Fila 3: Estructura de Costos, Fuentes de Ingresos */}
          <CanvasBlock block={canvasData.estructuraCostos} colspan={2} className="col-span-2" />
          <CanvasBlock block={canvasData.fuentesIngresos} colspan={2} className="col-span-2 lg:col-span-2" />
        </div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-[#A169A2] to-[#4CA7C0] rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-white/5 rounded-full translate-y-4" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Modelo de Negocio Validado
                </h3>
                <p className="text-white/80 text-sm">Basado en Design Thinking y experiencia real</p>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Este Business Model Canvas refleja <strong>cinco años de evolución</strong> de Emprendiendo Juntas,
              desde sus inicios hasta convertirse en una comunidad de más de 60 emprendedoras activas.
              El modelo integra elementos digitales y presenciales para crear un ecosistema de apoyo único en Santa Marta.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white mb-1">📊 Validación</p>
                <p className="text-white/80 text-sm">5 años de operación y crecimiento orgánico</p>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white mb-1">🎯 Enfoque</p>
                <p className="text-white/80 text-sm">Híbrido: digital + presencial</p>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white mb-1">📈 Escalabilidad</p>
                <p className="text-white/80 text-sm">Modelo replicable en otras ciudades</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-12 flex items-center justify-between border-t border-gray-200 pt-6 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A169A2] to-[#4CA7C0]" />
          <span className="font-semibold text-[#A169A2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Emprendiendo Juntas
          </span>
        </div>
        <span className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Business Model Canvas · Adaptado de Osterwalder y Pigneur (2010) · CUN · 2026
        </span>
      </div>
    </div>
  );
};

export default BusinessModelCanvas;
