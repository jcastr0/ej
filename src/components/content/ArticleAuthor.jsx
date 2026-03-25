import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ArticleAuthor = ({ author, roleColor = '#A169A2' }) => {
  if (!author) return null;

  return (
    <div className="bg-[#F8F9FA] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
      <Avatar className="h-20 w-20 border-4 border-white shadow-sm shrink-0">
        <AvatarImage src={author.image} alt={author.name} />
        <AvatarFallback>{author.name?.[0] || 'A'}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-lg font-bold text-[#1D1D1D] mb-2">{author.name}</h3>
        <p 
          className="text-sm font-medium mb-3 uppercase tracking-wide" 
          style={{ color: roleColor }}
        >
          {author.role}
        </p>
        <p className="text-gray-600 leading-relaxed text-sm">
          {author.bio}
        </p>
      </div>
    </div>
  );
};

export default ArticleAuthor;