import React from 'react';
import { Tag } from 'lucide-react';
import { getCategoryById } from '@/data/categories';
import { cn } from '@/lib/utils';

const ArticleTags = ({ categories = [], className }) => {
  if (!categories || categories.length === 0) return null;

  // Ensure categories is always an array
  const categoryIds = Array.isArray(categories) ? categories : [categories];

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <div className="flex items-center gap-2 text-gray-500">
        <Tag className="h-4 w-4" />
        <span className="font-medium text-[#1D1D1D] text-sm">
          {categoryIds.length > 1 ? 'Categorías:' : 'Categoría:'}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categoryIds.map((catId, index) => {
          const config = getCategoryById(catId);
          // Fallback if category ID not found
          const name = config ? config.name : catId;
          const hex = config ? config.hex : '#9CA3AF'; // Default gray
          
          return (
            <span 
              key={`${catId}-${index}`}
              className="px-3 py-1 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ 
                backgroundColor: `${hex}15`, // 15 = roughly 8-10% opacity
                color: hex 
              }}
            >
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleTags;