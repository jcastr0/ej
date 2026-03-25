import React from 'react';
import LaVozMarcaContent from '@/components/content/LaVozMarcaContent';
import TrabajoAvanzoContent from '@/components/content/TrabajoAvanzoContent';
import LaPerfeccionContent from '@/components/content/LaPerfeccionContent';

// Increment this version number to invalidate localStorage cache
export const DATA_VERSION = '1.6';

export const authors = {
  alexis: {
    name: "Alexis",
    role: "Colaborador",
    gender: "male",
    image: "/images/autor_alexis.jpg",
    bio: "Editor apasionado por la Productividad y el Crecimiento personal."
  },
  bedealar: {
    name: "Bedealar",
    role: "Colaboradora",
    gender: "female",
    image: "/images/autor_bedealar.jpg",
    bio: "Experta en Branding y Comunicación Estratégica para marcas conscientes."
  },
  carolina: {
    name: "Carolina Granados",
    role: "Directora",
    gender: "female",
    image: "/images/carolina_granados.jpg",
    bio: "Directora de Emprendiendo Juntas."
  }
};

export const blogPosts = [
  {
    id: 1,
    slug: 'la-voz-de-tu-marca-no-es-lo-que-dices-es-como-lo-dices',
    title: "La voz de tu marca no es lo que dices, es cómo lo dices",
    excerpt: "¿Alguna vez has leído un post y sabido quién lo escribió sin ver el nombre? Eso es tener voz de marca.",
    author: authors.bedealar,
    date: "2026-01-05",
    readTime: "5 min",
    category: "marketing",
    image: "/images/blog_voz_marca.png",
    content: LaVozMarcaContent,
    toc: [
      { id: 'construccion', label: 'La comunicación también construye marca' },
      { id: 'cercania', label: 'Cuando la voz acerca… o aleja' },
      { id: 'propia-voz', label: 'Encuentra tu propia voz' },
      { id: 'valores', label: 'Hablar desde los valores del negocio' },
      { id: 'estrategia', label: 'La voz como herramienta estratégica' },
    ]
  },
  {
    id: 2,
    slug: 'trabajo-todo-el-dia-y-no-avanzo',
    title: "Trabajo todo el día y siento que no avanzo: por qué la planeación sigue siendo el mayor reto al emprender",
    excerpt: "Estar ocupada no es lo mismo que ser productiva. Aprende a diferenciar el movimiento del avance real.",
    author: authors.alexis,
    date: "2026-01-05",
    readTime: "4 min",
    category: "gestion",
    image: "/images/blog_trabajo_avanzo.png",
    content: TrabajoAvanzoContent,
    toc: [
      { id: 'trampa', label: 'Estar ocupada vs. productiva' },
      { id: 'recursos', label: 'Organizar los recursos' },
      { id: 'administrativo', label: 'Lo administrativo cuenta' },
      { id: 'planeacion', label: 'Planeación constante' },
      { id: 'agenda', label: 'Agenda semanal efectiva' },
      { id: 'herramientas', label: 'Herramientas prácticas' },
    ]
  },
  {
    id: 3,
    slug: 'la-perfeccion-tambien-puede-ser-un-freno',
    title: "La perfección también puede ser un freno para tu emprendimiento",
    excerpt: "Buscar que todo salga impecable desde el primer intento puede paralizarte. Descubre por qué hecho es mejor que perfecto.",
    author: authors.carolina,
    date: "2026-01-06",
    readTime: "6 min",
    category: "mindset",
    image: "/images/blog_perfeccion.jpg",
    content: LaPerfeccionContent,
    toc: [
      { id: 'perfeccionismo-trampa', label: 'El perfeccionismo: una trampa silenciosa' },
      { id: 'comunicar-vender', label: 'Cuando comunicar se vuelve más difícil que vender' },
      { id: 'avanzar-imperfectamente', label: 'Avanzar imperfectamente no es improvisar' },
      { id: 'paralisis-analisis', label: 'La parálisis por análisis' },
      { id: 'equilibrio', label: 'Buscando el equilibrio: La mejora continua' },
    ]
  }
];