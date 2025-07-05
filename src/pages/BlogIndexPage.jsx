import React, { useState, useEffect } from 'react';
import { Input, Pagination } from 'antd';
import BlogPostCard from '../components/BlogPostCard.jsx';
import BlogSidebar from '../components/BlogSidebar.jsx';
import PageHero from '../components/PageHero.jsx';

const { Search } = Input;

const BlogIndexPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Di aplikasi nyata, Anda akan mengambil data dari database
    const placeholderPosts = [
      { id: 1, category: 'Ulasan', author: 'ADMIN', date: '23 Nov 2023', title: 'BMW X6 M50i: Didesain untuk Melampaui Sisi Sporty Anda.', imageUrl: '/assets/images/bmw-x6.png' },
      { id: 2, category: 'Berita', author: 'ADMIN', date: '15 Okt 2023', title: 'Sedan Listrik Terbaru: All-New Mercedes-Benz EQE', imageUrl: '/assets/images/c-class.png' },
      { id: 3, category: 'Tips', author: 'ADMIN', date: '05 Sep 2023', title: '5 Hal yang Wajib Dicek Sebelum Membeli Mobil Bekas di Bali', imageUrl: '/assets/images/audi-a6.png' },
      { id: 4, category: 'Perawatan', author: 'ADMIN', date: '28 Agu 2023', title: 'Tips Merawat Cat Mobil Agar Tetap Kinclong di Cuaca Bali', imageUrl: '/assets/images/new-glc.png' },
      { id: 5, category: 'Ulasan', author: 'ADMIN', date: '12 Agu 2023', title: 'Review Jujur Toyota Raize untuk Jalanan di Buleleng', imageUrl: '/assets/images/audi-a4.png' },
      { id: 6, category: 'Berita', author: 'ADMIN', date: '01 Jul 2023', title: 'Pemerintah Buleleng Dukung Penggunaan Kendaraan Listrik', imageUrl: '/assets/images/corolla-altis.png' },
      { id: 7, category: 'Berita', author: 'ADMIN', date: '01 Jul 2023', title: 'Pemerintah Buleleng Dukung Penggunaan Kendaraan Listrik', imageUrl: '/assets/images/corolla-altis.png' },
    ];
    setPosts(placeholderPosts);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center py-40">Memuat artikel...</div>;
  }

  return (
    <div className="bg-white">
      {/* Blog Hero Section */}
      <PageHero
        title="Artikel & Berita"
        desc="Temukan berita, ulasan, dan tips terbaru seputar otomotif dari tim Showcar Buleleng."
      />

      {/* Konten Utama & Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Kolom Kiri: Daftar Artikel */}
          <div className="lg:col-span-2 space-y-8">
            <Search
              placeholder="Cari artikel..."
              enterButton="Cari"
              size="large"
              onSearch={value => console.log(value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Pagination defaultCurrent={1} total={posts.length} pageSize={6} />
            </div>
          </div>

          {/* Kolom Kanan: Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <BlogSidebar />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;
