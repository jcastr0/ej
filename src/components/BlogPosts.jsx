import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useBlog } from '@/context/BlogContext'; 
import BlogCard from '@/components/BlogCard';

const BlogPosts = () => {
  const { posts } = useBlog();
  
  // Sort posts by ID descending (newest first)
  const recentPosts = [...posts]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <section className="py-20 px-2 sm:px-4 bg-white" id="blog">
      <div className="container px-2 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#4CA7C0]">Desde el blog:</span> <span className="text-[#A169A2]">aprende con nosotras</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Recursos, consejos y experiencias compartidas para impulsar tu crecimiento
          </p>
          <Link to="/blog">
            <Button variant="outline" className="border-[#A169A2] text-[#A169A2] hover:bg-[#A169A2] hover:text-white transition-all duration-300">
              Ver todos los artículos
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              index={index}
              imageHeight="h-64" // Taller images for home page feature
              showAuthor={false}
              showReadTime={false}
              className="shadow-lg hover:shadow-2xl" // Slightly stronger shadow on home
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogPosts;