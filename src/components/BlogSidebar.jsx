import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';

// Data contoh, nantinya bisa diambil dari database
const recentPosts = [
    { id: 1, title: 'BMW X6 M50i: Didesain untuk Melampaui Sisi Sporty Anda.' },
    { id: 2, title: 'Sedan Listrik Terbaru: All-New Mercedes-Benz EQE' },
    { id: 3, title: '5 Hal yang Wajib Dicek Sebelum Membeli Mobil Bekas di Bali' },
];

const categories = [
    { name: 'Ulasan', count: 5 },
    { name: 'Tips & Trik', count: 8 },
    { name: 'Berita Otomotif', count: 12 },
    { name: 'Perawatan', count: 3 },
];

const BlogSidebar = () => {
    return (
        <div className="space-y-8">
            {/* Widget Artikel Terbaru */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Artikel Terbaru</h3>
                <div className="space-y-4">
                    {recentPosts.map(post => (
                        <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                            <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{post.title}</p>
                            <p className="text-xs text-gray-400 mt-1">23 November 2023</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Widget Kategori */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Kategori</h3>
                <div className="space-y-3">
                    {categories.map(cat => (
                        <Link key={cat.name} to="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                            <span>{cat.name}</span>
                            <span className="bg-gray-200 text-xs font-semibold px-2 py-1 rounded-full">{cat.count}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
