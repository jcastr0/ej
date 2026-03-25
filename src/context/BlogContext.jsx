import React, { createContext, useContext, useState } from 'react';
import { blogPosts as initialBlogPosts } from '@/data/blogData';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  // Initialize directly from data file, ignoring any previous localStorage cache
  const [posts, setPosts] = useState(initialBlogPosts);

  // Track votes in memory only (resets on page reload)
  const [votedPosts, setVotedPosts] = useState([]);

  const getPostBySlug = (slug) => posts.find(p => p.slug === slug);

  const addVote = (postId, rating) => {
    if (votedPosts.includes(postId)) return false;

    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const newVotes = (post.votes || 0) + 1;
        // Calculate new average
        const currentTotal = (post.rating || 0) * (post.votes || 0);
        const newRating = (currentTotal + rating) / newVotes;
        return { ...post, votes: newVotes, rating: parseFloat(newRating.toFixed(1)) };
      }
      return post;
    }));

    setVotedPosts(prev => [...prev, postId]);
    return true;
  };

  const incrementViews = (slug) => {
    setPosts(prev => prev.map(post => 
      post.slug === slug ? { ...post, views: (post.views || 0) + 1 } : post
    ));
  };

  // Admin Actions
  const deletePost = (id) => {
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  const addPost = (newPost) => {
    const postWithId = { ...newPost, id: Date.now(), votes: 0, views: 0, rating: 0 };
    setPosts(prev => [postWithId, ...prev]);
  };

  const updatePost = (id, updatedData) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  const getStats = () => {
    return {
      totalPosts: posts.length,
      totalViews: posts.reduce((acc, curr) => acc + (curr.views || 0), 0),
      avgRating: (posts.reduce((acc, curr) => acc + (curr.rating || 0), 0) / posts.length).toFixed(1)
    };
  };

  return (
    <BlogContext.Provider value={{ 
      posts, 
      getPostBySlug, 
      addVote, 
      hasVoted: (id) => votedPosts.includes(id),
      incrementViews,
      deletePost,
      addPost,
      updatePost,
      getStats
    }}>
      {children}
    </BlogContext.Provider>
  );
};