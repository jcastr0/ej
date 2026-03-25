import React, { useState } from 'react';
import { Search, Loader2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '@/data/categories';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { subscribeToNewsletter } from '@/lib/subscription';

const BlogSidebar = ({ onSearch, onCategorySelect, activeCategory }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay for better UX
    setTimeout(() => {
      const result = subscribeToNewsletter(email);

      if (result.success) {
        toast({
          title: "¡Bienvenida!",
          description: result.message,
          variant: "success", // Ensure you have styles for this or default is fine
          className: "bg-green-50 border-green-200 text-green-800",
        });
        setEmail('');
      } else {
        toast({
          title: "Atención",
          description: result.message,
          variant: "destructive",
        });
      }

      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="space-y-8 sticky top-24">
      
      {/* Search Widget */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Buscar</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar artículos..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#A169A2]/20 focus:border-[#A169A2]"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Categorías</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategorySelect(null)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                activeCategory === null
                  ? "bg-[#A169A2]/10 text-[#A169A2] font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              Todas las categorías
            </button>
          </li>
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onCategorySelect(category.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between group",
                  activeCategory === category.id
                    ? "bg-[#A169A2]/10 text-[#A169A2] font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                <span>{category.name}</span>
                {/* Optional: Indicator dot matching category color */}
                <span className={cn(
                  "w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity", 
                  category.color.split(' ')[0].replace('bg-', 'bg-') // Extract bg class
                )} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-[#A169A2] p-6 rounded-2xl shadow-sm text-white text-center">
        <h3 className="font-bold text-lg mb-2">Suscríbete</h3>
        <p className="text-white/90 text-sm mb-4">
          Recibe los mejores consejos para tu emprendimiento semanalmente.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-2">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico" 
            className="w-full px-3 py-2 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-white text-[#A169A2] font-bold rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-80"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Guardando...
              </>
            ) : (
              'Suscribirme'
            )}
          </button>
        </form>
      </div>

      {/* Membership CTA Widget */}
      <div className="bg-[#F5EEF8] p-6 rounded-2xl border border-purple-200">
        <h3 className="font-bold text-gray-900 text-lg mb-2">¿Quieres crecer con acompañamiento real?</h3>
        <p className="text-gray-600 text-sm mb-4">
          Conoce el Círculo Emprendiendo Juntas — planes desde $25.000/mes.
        </p>
        <Link
          to="/membresia"
          className="inline-flex items-center gap-1.5 bg-[#A169A2] text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#8d5a8e] transition-colors"
        >
          Ver planes
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};

export default BlogSidebar;