import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Info, Target, AlertTriangle, Search } from 'lucide-react';

const ArbolProblemas = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const problemaCentral = {
    texto: "Las mujeres emprendedoras de Santa Marta carecen de acompañamiento estratégico, formación práctica y redes de apoyo que les permitan fortalecer y sostener sus negocios.",
    color: "#C0392B",
    colorLight: "#FFF0F0"
  };

  const efectos = [
    {
      id: "e1",
      texto: "Ventas esporádicas e ingresos insuficientes",
      color: "#8B0000",
      nivel: "directo"
    },
    {
      id: "e2",
      texto: "Marca débil sin diferenciación clara",
      color: "#8B0000",
      nivel: "directo"
    },
    {
      id: "e3",
      texto: "Decisiones basadas en intuición, no en datos",
      color: "#8B0000",
      nivel: "directo"
    }
  ];

  const causasDirectas = [
    {
      id: "cd1",
      texto: "Limitado acceso a formación en costos, marketing y ventas",
      color: "#D35400"
    },
    {
      id: "cd2",
      texto: "Ausencia de comunidades cercanas que integren lo emocional y lo estratégico",
      color: "#D35400"
    },
    {
      id: "cd3",
      texto: "Desconocimiento de herramientas digitales para visibilidad",
      color: "#D35400"
    }
  ];

  const causasRaiz = [
    {
      id: "cr1",
      texto: "Falta de orientación institucional accesible",
      color: "#E67E22"
    },
    {
      id: "cr2",
      texto: "Emprendimiento percibido como actividad individual y solitaria",
      color: "#E67E22"
    }
  ];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const NodoProblema = ({ item, isActive, onClick, showConnector = false, connectorDirection = "down" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {showConnector && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-300 ${
            connectorDirection === 'up' ? 'bottom-full h-8' : 'top-full h-8'
          }`}
        />
      )}

      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`relative w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
          isActive 
            ? 'shadow-xl transform -translate-y-1' 
            : 'shadow-sm hover:shadow-lg'
        }`}
        style={{
          backgroundColor: isActive ? item.color + '15' : 'white',
          borderColor: item.color + (isActive ? '80' : '30'),
          boxShadow: isActive ? `0 8px 32px ${item.color}40` : undefined
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
            style={{ backgroundColor: item.color }}
          />
          <div className="flex-1">
            <p
              className="text-sm sm:text-base font-medium leading-relaxed text-[#19152A]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {item.texto}
            </p>
          </div>
        </div>

        {/* Pulse effect for active */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-2xl animate-ping opacity-20"
            style={{ backgroundColor: item.color }}
          />
        )}
      </motion.button>
    </motion.div>
  );

  const NodoCentral = ({ problema, isActive, onClick }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      {/* Conectores hacia arriba */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full h-12 w-px bg-gray-300" />
      {/* Conectores hacia abajo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-12 w-px bg-gray-300" />

      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative w-full p-6 rounded-3xl border-3 transition-all duration-500 ${
          isActive ? 'shadow-2xl transform -translate-y-2' : 'shadow-lg'
        }`}
        style={{
          backgroundColor: isActive ? problema.colorLight : 'white',
          borderColor: problema.color,
          boxShadow: isActive ? `0 16px 48px ${problema.color}60` : `0 8px 24px ${problema.color}30`
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
            style={{ backgroundColor: problema.color }}
          >
            <Target className="w-6 h-6" />
          </div>
          <div className="flex-1 text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8A7E96] mb-1">
              Problema Central
            </div>
            <h3 className="text-lg font-bold text-[#19152A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Núcleo del Problema
            </h3>
          </div>
        </div>

        <p
          className="text-base leading-relaxed text-[#48405E] font-medium"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {problema.texto}
        </p>

        {/* Animated border */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-3xl animate-pulse opacity-30 border-2"
            style={{ borderColor: problema.color }}
          />
        )}
      </motion.button>
    </motion.div>
  );

  return (
    <div className="min-h-screen py-20 px-5" style={{ background: "linear-gradient(160deg, #FFF5F5 0%, #F0F9FF 55%, #FFF8F0 100%)" }}>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-red-100/50 border border-red-200 rounded-full px-4 py-2 mb-4">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <span className="text-xs font-semibold uppercase tracking-widest text-red-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Herramienta de Diagnóstico · Emprendiendo Juntas
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
          Árbol de Problemas
        </h1>

        <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Análisis visual de la problemática de las emprendedoras en Santa Marta.
          Haz clic en cada nivel para explorar la relación causa-efecto.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
          >
            <Info className="w-4 h-4" />
            {showInfo ? 'Ocultar' : 'Mostrar'} Guía
          </button>
        </div>

        {showInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-left mb-8"
          >
            <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Search className="w-5 h-5" />
              Cómo leer el Árbol de Problemas
            </h3>
            <div className="space-y-3 text-sm text-blue-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p><strong>⬆️ Efectos (Arriba):</strong> Consecuencias negativas del problema central</p>
              <p><strong>🎯 Centro:</strong> Problema principal identificado</p>
              <p><strong>⬇️ Causas Directas:</strong> Factores que generan directamente el problema</p>
              <p><strong>🌱 Causas Raíz (Abajo):</strong> Origen profundo del problema, factores estructurales</p>
              <p><em>Lectura: De abajo (causas) hacia arriba (efectos), pasando por el problema central.</em></p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Árbol de Problemas */}
      <div className="max-w-4xl mx-auto">

        {/* EFECTOS - Nivel Superior */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <button
              onClick={() => toggleSection('efectos')}
              className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-200 transition-colors"
            >
              <ChevronUp className="w-4 h-4" />
              EFECTOS (Consecuencias)
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {efectos.map((efecto, i) => (
              <NodoProblema
                key={efecto.id}
                item={efecto}
                isActive={activeSection === 'efectos'}
                onClick={() => toggleSection('efectos')}
                showConnector={i === 1}
                connectorDirection="down"
              />
            ))}
          </div>
        </div>

        {/* PROBLEMA CENTRAL */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-2xl">
            <NodoCentral
              problema={problemaCentral}
              isActive={activeSection === 'central'}
              onClick={() => toggleSection('central')}
            />
          </div>
        </div>

        {/* CAUSAS DIRECTAS */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <button
              onClick={() => toggleSection('causas-directas')}
              className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-200 transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
              CAUSAS DIRECTAS
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {causasDirectas.map((causa, i) => (
              <NodoProblema
                key={causa.id}
                item={causa}
                isActive={activeSection === 'causas-directas'}
                onClick={() => toggleSection('causas-directas')}
                showConnector={i === 1}
                connectorDirection="up"
              />
            ))}
          </div>
        </div>

        {/* CAUSAS RAÍZ */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <button
              onClick={() => toggleSection('causas-raiz')}
              className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-200 transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
              CAUSAS RAÍZ (Estructurales)
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {causasRaiz.map((causa, i) => (
              <NodoProblema
                key={causa.id}
                item={causa}
                isActive={activeSection === 'causas-raiz'}
                onClick={() => toggleSection('causas-raiz')}
                showConnector={i === 0}
                connectorDirection="up"
              />
            ))}
          </div>
        </div>

        {/* Insights y Solución */}
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
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Emprendiendo Juntas como Solución
                </h3>
                <p className="text-white/80 text-sm">Abordando cada nivel del problema</p>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Este árbol de problemas justifica la existencia y el enfoque de <strong>Emprendiendo Juntas</strong>:
              atacar las causas raíz mediante formación práctica, acompañamiento estratégico y construcción
              de una comunidad de apoyo que transforme el emprendimiento de una actividad solitaria
              a un proceso colaborativo y sostenible.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white mb-1">Formación Técnica</p>
                <p className="text-white/80 text-sm">Costos, marketing, ventas, herramientas digitales</p>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white mb-1">Acompañamiento</p>
                <p className="text-white/80 text-sm">Mentoría personalizada y decisiones basadas en datos</p>
              </div>
              <div className="bg-white/15 rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-white mb-1">Comunidad</p>
                <p className="text-white/80 text-sm">Red de apoyo emocional y estratégico</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-12 flex items-center justify-between border-t border-gray-200 pt-6 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A169A2] to-[#4CA7C0]" />
          <span className="font-semibold text-[#A169A2]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Emprendiendo Juntas
          </span>
        </div>
        <span className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Árbol de Problemas · Trabajo ACA · Creación de Empresas 1 · CUN · 2026
        </span>
      </div>
    </div>
  );
};

export default ArbolProblemas;
