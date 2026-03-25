import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, ChevronRight, Linkedin } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { blogPosts } from '@/data/blogData';
import { getCategoryById } from '@/data/categories';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import ArticleAuthor from '@/components/content/ArticleAuthor';
import ArticleTags from '@/components/content/ArticleTags';

// --- Rich Content Map Refactored ---
const RICH_CONTENT_MAP = blogPosts.reduce((acc, post) => {
  acc[post.slug] = {
    component: post.content,
    toc: post.toc || []
  };
  return acc;
}, {});

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const post = blogPosts.find(p => p.slug === slug);
  const richContent = RICH_CONTENT_MAP[slug];

  // Resolve category configuration
  const categoryConfig = post ? getCategoryById(post.category) : null;
  const categoryName = categoryConfig ? categoryConfig.name : (post?.category || 'General');
  const categoryHex = categoryConfig ? categoryConfig.hex : '#4CA7C0';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAFAFA]">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
          <h1 className="text-4xl font-bold text-[#1D1D1D] mb-4">Post no encontrado</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Lo sentimos, el artículo que buscas no existe o ha sido movido.
          </p>
          <Button
            onClick={() => navigate('/blog')}
            className="bg-[#1D1D1D] text-white hover:bg-[#333]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Blog
          </Button>
        </div>
        <Contact />
      </div>
    );
  }

  const ContentComponent = richContent?.component || (() => <p>Contenido no disponible.</p>);
  const tableOfContents = richContent?.toc || [];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Enlace copiado",
      description: "El enlace al artículo ha sido copiado al portapapeles.",
    });
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`¡Mira este artículo interesante! ${post.title} ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] selection:bg-[#E0E7FF] selection:text-[#1D1D1D]">
      <Helmet>
        <title>{post.title} | Emprendiendo Juntas</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60]"
        style={{ scaleX, backgroundColor: categoryHex }}
      />


      {/* Header / Hero Section */}
      <header className="relative w-full h-[50vh] md:h-[60vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-12 max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              className="text-white border-none mb-6 px-4 py-1 text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
              style={{ backgroundColor: categoryHex }}
            >
              {categoryName}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-shadow-sm">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-200">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-white/20">
                  <AvatarImage src={post.author.image} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{post.author.name}</span>
              </div>

              <Separator orientation="vertical" className="h-4 bg-white/30 hidden md:block" />

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>

              <Separator orientation="vertical" className="h-4 bg-white/30 hidden md:block" />

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de lectura</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

          {/* Sidebar / Table of Contents (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              <Button
                variant="ghost"
                onClick={() => navigate('/blog')}
                className="group pl-0 hover:pl-2 transition-all duration-300 text-gray-500 hover:text-[#1D1D1D]"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Volver
              </Button>

              {tableOfContents.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#1D1D1D] font-bold uppercase tracking-wider text-xs">
                    <BookOpen className="h-4 w-4" />
                    <span>Contenido</span>
                  </div>
                  <nav className="border-l-2 border-gray-100 pl-4 space-y-3">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block text-left text-sm text-gray-500 hover:text-[#4CA7C0] transition-colors leading-relaxed hover:translate-x-1 duration-200"
                        style={{ '--hover-color': categoryHex }}
                        onMouseEnter={(e) => e.currentTarget.style.color = categoryHex}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs font-bold text-[#1D1D1D] uppercase tracking-wider mb-4">Compartir</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={handleShareLinkedIn} className="rounded-full hover:border-[#0077b5] hover:text-[#0077b5] transition-colors" title="Compartir en LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleShareWhatsApp} className="rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-colors" title="Compartir en WhatsApp">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleCopyLink} className="rounded-full hover:border-[#4CA7C0] hover:text-[#4CA7C0] transition-colors" title="Copiar enlace">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <main className="flex-grow max-w-3xl">
            {/* Mobile Back Button + Share Icons */}
            <div className="lg:hidden mb-8 flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => navigate('/blog')}
                className="pl-0 text-gray-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Blog
              </Button>

              {/* Mobile Share Icons */}
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={handleShareLinkedIn} className="p-2 hover:bg-gray-100 rounded-full" title="Compartir en LinkedIn">
                  <Linkedin className="h-4 w-4 text-gray-600" />
                </Button>
                <Button variant="ghost" size="sm" onClick={handleShareWhatsApp} className="p-2 hover:bg-gray-100 rounded-full" title="Compartir en WhatsApp">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-gray-600" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </Button>
                <Button variant="ghost" size="sm" onClick={handleCopyLink} className="p-2 hover:bg-gray-100 rounded-full" title="Copiar enlace">
                  <Share2 className="h-4 w-4 text-gray-600" />
                </Button>
              </div>
            </div>

            {/* Content Render */}
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-[#1D1D1D] prose-p:text-gray-600 prose-a:text-[#4CA7C0] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
              <ContentComponent />
            </div>

            {/* Footer Tags & Author */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <ArticleTags
                categories={post.category ? [post.category] : []}
                className="mb-8"
              />

              <ArticleAuthor
                author={post.author}
                roleColor={categoryHex}
              />
            </div>

            {/* Next Post Navigation (Simple Implementation) */}
            <div className="mt-12 flex justify-end">
              <Button
                variant="ghost"
                className="group hover:bg-transparent px-0"
                style={{ color: categoryHex }}
                onClick={() => navigate('/blog')}
              >
                Leer más artículos
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </main>
        </div>
      </div>
      <Contact />
    </div>

  );
};

export default BlogPostPage;