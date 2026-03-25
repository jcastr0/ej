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
    <section className="py-16 sm:py-24" id="blog">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="flex items-end justify-between mb-8 sm:mb-14 gap-3"
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

        {/* Horizontal scroll breakout */}
        <div className="-mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:overflow-visible sm:pb-0">
            {recentPosts.map((post, index) => (
              <div key={post.id} className="flex-shrink-0 w-[78%] sm:w-auto snap-start first:ml-5 last:mr-5 sm:first:ml-0 sm:last:mr-0">
                <BlogCard
                  post={post}
                  index={index}
                  imageHeight="h-44 sm:h-56"
                  showReadTime={false}
                  className="shadow-sm hover:shadow-xl border-gray-100 h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;