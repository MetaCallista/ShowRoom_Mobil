// src/components/LatestBlogPosts.jsx
import React from 'react';
import BlogPostCard from './BlogPostCard';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const blogPosts = [
  {
    id: 1,
    category: 'Saloon',
    author: 'ADMIN',
    date: 'November 23, 2023',
    title: '2024 BMW ALPINA XB7 with exclusive details, extraordinary.',
    imageUrl: '/assets/images/bmw-alpina.png',
  },
  {
    id: 2,
    category: 'Accessories',
    author: 'ADMIN',
    date: 'November 23, 2023',
    title: 'BMW X6 M50i is designed to exceed your sportiest.',
    imageUrl: '/assets/images/bmw-x6.png',
  },
  {
    id: 3,
    category: 'Review',
    author: 'ADMIN',
    date: 'November 23, 2023',
    title: 'BMW X5 Gold 2024 Sport Review: Light on Sport',
    imageUrl: '/assets/images/bmw-x5-gold.png',
  },
];

const LatestBlogPosts = () => {
  return (
    <div className="bg-gray-50 pt-8 sm:pt-12 pb-8 sm:pb-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Blog Posts
          </h2>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2">
            View All <ArrowRightOutlined />
          </a>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12 gap-4">
            <Button shape="circle" icon={<ArrowLeftOutlined />} />
            <Button shape="circle" icon={<ArrowRightOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default LatestBlogPosts;