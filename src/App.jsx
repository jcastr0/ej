import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { BlogProvider } from '@/context/BlogContext';

import Hero from '@/components/Hero';
import BlogPosts from '@/components/BlogPosts'; 
import BlogList from '@/pages/BlogList'; 
import BlogPostPage from '@/components/BlogPostPage';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import AdminDashboard from '@/pages/AdminDashboard';
import TestimoniosSection from '@/components/TestimoniosSection';
import AboutUs from '@/pages/AboutUs';
import Membresia from '@/pages/Membresia';
import CarolinaSection from '@/components/CarolinaSection';
import EmprendedorasGrid from '@/components/EmprendedorasGrid';
import ComunidadPage from '@/pages/ComunidadPage';
import MapaEmpatia from '@/pages/MapaEmpatia';
import Portafolio from '@/pages/Portafolio';
import ArbolProblemas from '@/pages/ArbolProblemas';
import BusinessModelCanvas from '@/pages/BusinessModelCanvas';
import ValuePropositionCanvas from '@/pages/ValuePropositionCanvas';
import Navbar from '@/components/Navbar';

const HomePage = () => (
  <>
    <Hero />
    <CarolinaSection variant="compact" />
    <EmprendedorasGrid />
    <Benefits />
    <TestimoniosSection />
    <BlogPosts />
    <CTA />
    <Contact />
  </>
);

function App() {
  return (
    <BlogProvider>
      <Helmet>
        <title>Emprendiendo Juntas - Tu comunidad de emprendimiento femenino en Santa Marta</title>
        <meta name="description" content="Únete a Emprendiendo Juntas, la comunidad de emprendedoras en Santa Marta, Colombia. Crece tu negocio con el apoyo de otras mujeres. Aquí no estás sola en este camino." />
      </Helmet>
      
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotras" element={<AboutUs />} />
          <Route path="/comunidad" element={<ComunidadPage />} />
          <Route path="/membresia" element={<Membresia />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/mapa-empatia" element={<MapaEmpatia />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/arbol-problemas" element={<ArbolProblemas />} />
          <Route path="/business-model-canvas" element={<BusinessModelCanvas />} />
          <Route path="/value-proposition-canvas" element={<ValuePropositionCanvas />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Toaster />
      </div>
    </BlogProvider>
  );
}

export default App;