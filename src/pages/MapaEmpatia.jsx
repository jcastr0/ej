import React, { useState } from 'react';

const MapaEmpatia = () => {
  const [active, setActive] = useState("piensa");
  const toggle = (id) => setActive((prev) => (prev === id ? null : id));

  const PURPLE = "#A169A2";
  const TEAL = "#4CA7C0";

  const persona = {
    name: "Valentina Romero",
    age: "31 años",
    city: "Santa Marta",
    role: "Emprendedora artesanal",
    bio: "Su negocio surgió por necesidad y deseo de independencia. Tiene un buen producto pero siente que le falta visibilidad, estrategia y comunidad que la acompañe.",
    tags: ["Vende por Instagram", "Participa en ferias", "Aprende sola", "Busca red de apoyo"],
  };

  const quadrants = [
    {
      id: "piensa", icon: "💭", label: "Piensa & Siente",
      accent: "#A169A2", light: "#F5EEF8",
      items: [
        "Piensa constantemente en cómo crecer y vender más",
        "Siente ilusión, pero también cansancio e incertidumbre",
        "Le preocupa no tener claridad sobre el rumbo de su negocio",
        "Desea sentirse acompañada, validada y parte de algo más grande",
        "Teme estancarse o no poder competir con marcas más consolidadas",
      ],
    },
    {
      id: "ve", icon: "👁", label: "Ve",
      accent: "#4CA7C0", light: "#EAF6FA",
      items: [
        "Otras marcas creciendo rápido en Instagram y TikTok",
        "Nuevas tendencias de marketing digital y storytelling",
        "Ferias, eventos y comunidades de emprendedoras que avanzan",
        "Un mercado competitivo que le exige adaptarse constantemente",
        "Mujeres que lograron independencia económica con su negocio",
      ],
    },
    {
      id: "oye", icon: "👂", label: "Oye",
      accent: "#C49A2B", light: "#FFF8E7",
      items: [
        "Que debe estar activa en redes todos los días sin falta",
        "Que sin publicidad paga es imposible crecer",
        "Historias de éxito que la motivan y también la comparan",
        "Que necesita identidad de marca sólida y profesional",
        "Que sin conocimiento de costos su negocio no será rentable",
      ],
    },
    {
      id: "hace", icon: "🗣", label: "Dice & Hace",
      accent: "#C0392B", light: "#FFF0F0",
      items: [
        "Habla con entusiasmo de su producto y sus sueños",
        "Promociona publicaciones y participa en ferias cuando puede",
        "Busca aprender por su cuenta en videos e internet",
        "A veces posterga decisiones por miedo a equivocarse",
        "Pide recomendaciones a emprendedoras de confianza",
      ],
    },
    {
      id: "duele", icon: "⚡", label: "Dolores",
      accent: "#7B2D8B", light: "#F9F0FF",
      items: [
        "Falta de visibilidad y alcance limitado en redes",
        "Poca claridad estratégica en marketing y ventas",
        "Dificultad para calcular costos y fijar precios justos",
        "Cansancio emocional y sensación de soledad al emprender",
        "Comparación constante con marcas más establecidas",
      ],
    },
    {
      id: "aspira", icon: "✦", label: "Ganancias",
      accent: "#0E8A7C", light: "#E6F7F5",
      items: [
        "Ventas sostenidas y crecimiento mensual constante",
        "Una marca reconocible con identidad clara y profesional",
        "Clientes fieles que valoren y recomienden su trabajo",
        "Mayor confianza en sí misma como empresaria",
        "Una comunidad que la acompañe y le abra puertas",
      ],
    },
  ];

  const Card = ({ q, active, onClick }) => {
    const isActive = active === q.id;
    return (
      <button
        onClick={() => onClick(q.id)}
        className="w-full text-left cursor-pointer transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
        style={{
          background: isActive ? q.light : "#FAFAFA",
          border: `1.5px solid ${isActive ? q.accent : "#E8E8EC"}`,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: isActive ? `0 6px 24px ${q.accent}28` : "0 1px 6px rgba(0,0,0,0.05)",
          transform: isActive ? "translateY(-2px)" : "none",
        }}
      >
        <div
          className="flex items-center gap-3 p-3"
          style={{
            background: isActive ? q.accent : "#F0F0F4",
            borderBottom: `1px solid ${isActive ? q.accent + "60" : "#E8E8EC"}`,
          }}
        >
          <span className="text-lg">{q.icon}</span>
          <span
            className="font-bold text-sm tracking-wide flex-1"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: isActive ? "#fff" : "#555",
            }}
          >
            {q.label}
          </span>
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{
              background: isActive ? "rgba(255,255,255,0.25)" : "#E0E0E6",
              color: isActive ? "#fff" : "#999",
            }}
          >
            {isActive ? "−" : "+"}
          </span>
        </div>

        <div className="p-3 min-h-[110px]">
          {isActive ? (
            <ul className="space-y-2">
              {q.items.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                    style={{ background: q.accent }}
                  />
                  <span
                    className="text-xs leading-relaxed text-gray-700"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center h-24 opacity-35">
              <span className="text-2xl">{q.icon}</span>
              <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                Expandir
              </span>
            </div>
          )}
        </div>
      </button>
    );
  };

  return (
    <div
      className="min-h-screen py-20 px-5"
      style={{
        background: "linear-gradient(160deg, #FAF5FF 0%, #F0FAFC 55%, #FFF8F0 100%)",
      }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100/50 border border-purple-200 rounded-full px-4 py-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Herramienta Estratégica · Emprendiendo Juntas
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
          Mapa de Empatía
        </h1>
        <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Perfil de <strong className="text-purple-600">Valentina Romero</strong> — cliente ideal,
          31 años, Santa Marta. Selecciona cada cuadrante para explorar su contenido.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-4xl mx-auto">
        {/* Fila superior */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {quadrants.slice(0, 2).map((q) => (
            <Card key={q.id} q={q} active={active} onClick={toggle} />
          ))}
        </div>

        {/* Persona central */}
        <div
          className="rounded-2xl p-6 mb-3 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${PURPLE} 0%, #C87CC8 45%, ${TEAL} 100%)`,
            boxShadow: "0 16px 48px rgba(161,105,162,0.32)",
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-1/3 w-20 h-20 rounded-full bg-white/5 translate-y-4" />

          <div className="flex items-center gap-5 relative flex-wrap">
            <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-3xl flex-shrink-0">
              👩‍💼
            </div>

            <div className="flex-1 min-w-48">
              <p className="font-bold text-lg text-white mb-1 tracking-tight">
                {persona.name}
              </p>
              <p className="text-xs text-white/75 mb-2">
                {persona.age} · {persona.city} · {persona.role}
              </p>
              <p className="text-xs text-white/65 leading-relaxed max-w-md" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {persona.bio}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 flex-shrink-0">
              {persona.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/15 border border-white/25 rounded-full px-3 py-1 text-xs text-white/90 whitespace-nowrap"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Fila media */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {quadrants.slice(2, 4).map((q) => (
            <Card key={q.id} q={q} active={active} onClick={toggle} />
          ))}
        </div>

        {/* Fila inferior */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quadrants.slice(4, 6).map((q) => (
            <Card key={q.id} q={q} active={active} onClick={toggle} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-8 flex items-center justify-between border-t border-purple-200/50 pt-5 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: `linear-gradient(135deg, ${PURPLE}, ${TEAL})` }}
          />
          <span className="font-semibold text-sm text-purple-600">
            Emprendiendo Juntas
          </span>
        </div>
        <span className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Trabajo ACA · Creación de Empresas 1 · CUN · 2026
        </span>
      </div>
    </div>
  );
};

export default MapaEmpatia;
