import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBlog } from '@/context/BlogContext'; 
import BlogCard from '@/components/BlogCard';

const BlogPosts = () => {
  const { posts } = useBlog();
  const recentPosts = [...posts].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <section className="py-24 px-6" id="blog">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <span className="inline-block bg-[#A169A2]/10 text-[#A169A2] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#19152A]">
              Aprende <span className="italic text-[#4CA7C0]">con nosotras</span>
            </h2>
          </div>
          <Link to="/blog">
            <Button variant="ghost" className="text-[#A169A2] hover:bg-[#A169A2]/5 rounded-full group" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ver todos los artículos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              index={index}
              imageHeight="h-56"
              showReadTime={false}
              className="shadow-sm hover:shadow-xl border-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;