import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDate, cn } from '@/lib/utils';
import { CATEGORIES } from '@/data/categories';

const BlogCard = ({ 
  post, 
  showAuthor, // accepted for compatibility — author is now always shown
  showReadTime = false,
  imageHeight = "h-64", 
  className = "",
  index = 0 
}) => {
  // Find category configuration by ID since post.category stores the ID
  const categoryConfig = CATEGORIES.find(c => c.id === post.category);
  
  // Fallback values if category not found
  const categoryName = categoryConfig ? categoryConfig.name : post.category;
  const categoryColor = categoryConfig ? categoryConfig.color : 'bg-gray-100 text-gray-800';

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-50px" }} 
      transition={{ duration: 0.5, delay: index * 0.1 }} 
      className={cn(
        "group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full",
        className
      )}
    >
      {/* Image Section */}
      <div className={cn("relative overflow-hidden flex-shrink-0", imageHeight)}>
        <Link to={`/blog/${post.slug}`} className="block h-full w-full">
          <img 
            src={post.image}
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
          />
        </Link>
        <div className="absolute top-4 left-4">
           <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${categoryColor}`}>
            {categoryName}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Meta Info */}
        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
          {post.author && post.author.image && (
            <img src={post.author.image} alt={post.author.name} className="w-6 h-6 rounded-full object-cover ring-1 ring-gray-200" />
          )}
          {post.author && (
            <span className="font-medium text-gray-700">{post.author.name}</span>
          )}
          <span className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#A169A2]" /> 
            {formatDate(post.date)}
          </span>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`} className="block mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#A169A2] transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>

        {/* Footer Actions */}
        <div className={cn("pt-4 border-t border-gray-50 flex items-center mt-auto", showReadTime ? "justify-between" : "justify-end")}>
          {showReadTime && (
            <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded">
              {post.readTime} de lectura
            </span>
          )}
          
          <Link to={`/blog/${post.slug}`}>
            <Button 
              variant="ghost" 
              className="text-[#A169A2] hover:text-[#8d5a8e] hover:bg-[#A169A2]/5 p-0 h-auto font-semibold group/btn text-sm px-2 py-1"
            >
              Leer más
              <ArrowRight className="ml-1.5 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;