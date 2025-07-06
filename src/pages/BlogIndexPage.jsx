import React, { useState, useEffect } from 'react';
import { Input, Pagination } from 'antd';
import BlogPostCard from '../components/BlogPostCard.jsx';
import BlogSidebar from '../components/BlogSidebar.jsx';
import PageHero from '../components/PageHero.jsx';

const { Search } = Input;

const BlogIndexPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 6; // Jumlah artikel per halaman

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
      { id: 8, category: 'Ulasan', author: 'ADMIN', date: '20 Jun 2023', title: 'Toyota Camry Hybrid: Kombinasi Sempurna Antara Kenyamanan dan Efisiensi', imageUrl: '/assets/images/camry.png' },
      { id: 9, category: 'Tips', author: 'ADMIN', date: '15 Jun 2023', title: 'Cara Memilih Mobil SUV yang Tepat untuk Keluarga', imageUrl: '/assets/images/ford-explorer.png' },
      { id: 10, category: 'Perawatan', author: 'ADMIN', date: '10 Jun 2023', title: 'Panduan Lengkap Merawat Mesin Mobil Diesel', imageUrl: '/assets/images/ford-transit.png' },
      { id: 11, category: 'Berita', author: 'ADMIN', date: '05 Jun 2023', title: 'Honda CR-V Terbaru Hadir dengan Fitur Keselamatan Canggih', imageUrl: '/assets/images/t-cross.png' },
      { id: 12, category: 'Ulasan', author: 'ADMIN', date: '01 Jun 2023', title: 'Mazda CX-5: SUV Premium dengan Performa Maksimal', imageUrl: '/assets/images/bmw-alpina.png' },
    ];
    setTimeout(() => {
    setPosts(placeholderPosts);
    setLoading(false);
    }, 500);
  }, []);

  // Filter posts berdasarkan search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hitung total halaman
  const totalPages = Math.ceil(filteredPosts.length / pageSize);

  // Ambil posts untuk halaman saat ini
  const getCurrentPagePosts = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredPosts.slice(startIndex, endIndex);
  };

  // Handle perubahan halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle search
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset ke halaman pertama saat search
  };

  // Komponen Skeleton Card sederhana untuk mobil
  const SkeletonBlogPostCard = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse h-[300px]"> {/* Sesuaikan tinggi */}
      <div className="h-48 bg-gray-200"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="bg-white">
        <PageHero
          title="Artikel & Berita"
          desc="Temukan berita, ulasan, dan tips terbaru seputar otomotif dari tim Showcar Buleleng."
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              {/* Search bar skeleton */}
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.from({ length: 6 }).map((_, index) => ( // Tampilkan beberapa skeleton card
                  <SkeletonBlogPostCard key={index} />
                ))}
              </div>
              {/* Pagination skeleton */}
              <div className="flex justify-center mt-8">
                <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
            {/* Sidebar Skeleton (bisa disalin dari BlogPostPage) */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white p-6 rounded-xl shadow-lg border space-y-6 animate-pulse">
                  <div className="h-10 bg-gray-200 rounded"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 mt-6"></div>
                  <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                          <div key={i} className="flex items-center gap-3">
                              <div className="h-16 w-16 bg-gray-200 rounded-lg"></div>
                              <div className="flex-1 space-y-1">
                                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Blog Hero Section */}
      <PageHero
        title="Artikel & Berita"
        desc="Temukan berita, ulasan, dan tips terbaru seputar otomotif dari tim Showcar Buleleng."
      />

      {/* Konten Utama & Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Kolom Kiri: Daftar Artikel */}
          <div className="lg:col-span-2 space-y-8">
            <Search
              placeholder="Cari artikel..."
              enterButton="Cari"
              size="large"
              onSearch={handleSearch}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            
            {/* Info hasil pencarian */}
            <div className="text-gray-600">
              {searchTerm ? (
                `Menampilkan ${filteredPosts.length} hasil untuk "${searchTerm}"`
              ) : (
                `Menampilkan ${filteredPosts.length} artikel tersedia`
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getCurrentPagePosts().map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <Pagination 
                  current={currentPage}
                  total={filteredPosts.length} 
                  pageSize={pageSize}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                  showQuickJumper
                  showTotal={(total, range) => 
                    `${range[0]}-${range[1]} dari ${total} artikel`
                  }
                />
              </div>
            )}
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
