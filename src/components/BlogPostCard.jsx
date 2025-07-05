import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

const BlogPostCard = ({ post }) => {
  return (
    <Link 
      to={`/blog/${post.id}`} 
      className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
    >
      {/* Bagian Gambar */}
      <div className="relative overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      
      {/* Bagian Konten Teks */}
      <div className="p-6 flex flex-col">
        <p className="text-xs text-gray-500 mb-2">
          <span className="font-semibold uppercase">{post.author}</span> &bull; <time>{post.date}</time>
        </p>
        <h3 className="text-xl font-bold text-gray-800 flex-grow mb-4 min-h-[56px]">
          {post.title}
        </h3>
        <div className="mt-auto flex items-center text-blue-600 font-semibold">
          <span>Baca Selengkapnya</span>
          <ArrowRightOutlined className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
