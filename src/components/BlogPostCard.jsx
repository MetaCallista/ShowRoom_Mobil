// src/components/BlogPostCard.jsx
import React from 'react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
          {post.category}
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-500 mb-2">
          <span className="font-bold uppercase">{post.author}</span> - <time>{post.date}</time>
        </p>
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>
      </div>
    </div>
  );
};

export default BlogPostCard;