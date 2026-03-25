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
    <section className="py-12 sm:py-24" id="blog">
      <div className="px-4 sm:px-6 sm:container sm:mx-auto sm:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="flex items-end justify-between mb-6 sm:mb-14 gap-3"
        >
          <div>
            <span className="inline-block bg-[#A169A2]/10 text-[#A169A2] font-semibold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Blog
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#19152A]">
              Aprende <span className="italic text-[#4CA7C0]">con nosotras</span>
            </h2>
          </div>
          <Link to="/blog" className="flex-shrink-0">
            <Button variant="ghost" className="text-[#A169A2] hover:bg-[#A169A2]/5 rounded-full group text-sm px-0 sm:px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Ver todos <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Full bleed scroll on mobile */}
      <div className="pl-4 sm:px-6 sm:container sm:mx-auto sm:max-w-6xl">
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0 pr-4 sm:pr-0">
          {recentPosts.map((post, index) => (
            <div key={post.id} className="flex-shrink-0 w-[75vw] sm:w-auto snap-start">
              <BlogCard
                post={post}
                index={index}
                imageHeight="h-40 sm:h-56"
                showReadTime={false}
                className="shadow-sm hover:shadow-xl border-0 h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;