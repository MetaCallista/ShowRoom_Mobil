import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogPostCard from './BlogPostCard.jsx';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const LatestBlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Data contoh yang sudah diterjemahkan
    const placeholderPosts = [
      {
        id: 1,
        category: 'Ulasan',
        author: 'ADMIN',
        date: '23 Nov 2023',
        title: 'Detail Eksklusif dan Luar Biasa dari BMW ALPINA XB7 2024.',
        imageUrl: '/assets/images/bmw-alpina.png',
      },
      {
        id: 2,
        category: 'Aksesoris',
        author: 'ADMIN',
        date: '15 Okt 2023',
        title: 'BMW X6 M50i: Didesain untuk Melampaui Sisi Sporty Anda.',
        imageUrl: '/assets/images/bmw-x6.png',
      },
      {
        id: 3,
        category: 'Tips & Trik',
        author: 'ADMIN',
        date: '05 Sep 2023',
        title: 'Ulasan BMW X5 Gold 2024: Ringan Namun Tetap Sporty',
        imageUrl: '/assets/images/bmw-x5-gold.png',
      },
    ];
    setPosts(placeholderPosts);
  }, []);


  return (
    <div className="bg-gray-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Artikel & Berita Terbaru
          </h2>
          <Link to="/blog" className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2">
            Lihat Semua <ArrowRightOutlined />
          </Link>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
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