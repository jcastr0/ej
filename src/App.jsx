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
import Navbar from '@/components/Navbar';

const HomePage = () => (
  <>
    <Hero />
    {/* Using a modified section for homepage that links to full blog */}
    <BlogPosts /> 
    <Benefits />
    <TestimoniosSection />
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
      
      <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-teal-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotras" element={<AboutUs />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Toaster />
      </div>
    </BlogProvider>
  );
}

export default App;