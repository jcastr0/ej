import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import BlogSidebar from '@/components/BlogSidebar';
import { useBlog } from '@/context/BlogContext';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';

const ITEMS_PER_PAGE = 9;

const BlogList = () => {
  const { posts } = useBlog();
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    let result = [...posts];

    // Search
    if (searchTerm) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        result.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'rated':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.id - a.id);
    }

    setFilteredPosts(result);
    setCurrentPage(1); // Reset to page 1 on filter change
  }, [searchTerm, selectedCategory, sortBy, posts]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <title>Blog - Emprendiendo Juntas</title>
        <meta name="description" content="Recursos, consejos y experiencias para mujeres emprendedoras en Santa Marta." />
      </Helmet>

      <main className="container mx-auto max-w-7xl px-4 py-12">
        
        {/* Header with Breadcrumbs */}
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-[#A169A2]">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Blog</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CA7C0] to-[#A169A2]">
                  Emprendiendo y Aprendiendo
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Aquí compartimos herramientas, experiencias y consejos prácticos para que crezcas como emprendedora.
                Desde mindset hasta marketing digital, cada artículo está diseñado para impulsar tu negocio y tu desarrollo personal.
              </p>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#A169A2]/20"
            >
              <option value="newest">Más recientes</option>
              <option value="popular">Más leídos</option>
              <option value="rated">Mejor valorados</option>
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Grid */}
          <div className="lg:col-span-3">
            {currentPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPosts.map((post, idx) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    index={idx}
                    imageHeight="h-48" // Shorter images for grid density
                    showAuthor={true}
                    showReadTime={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl">
                <p className="text-gray-500 text-lg">No se encontraron artículos con estos filtros.</p>
                <Button 
                  onClick={() => { setSearchTerm(''); setSelectedCategory(null); }}
                  variant="link" 
                  className="text-[#A169A2]"
                >
                  Limpiar filtros
                </Button>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === i + 1
                        ? 'bg-[#A169A2] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar 
              onSearch={setSearchTerm} 
              onCategorySelect={setSelectedCategory}
              activeCategory={selectedCategory}
            />
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
};

export default BlogList;