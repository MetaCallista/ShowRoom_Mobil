import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, Tag, Divider, Form, Input, Button } from 'antd';
import { CheckCircleFilled, FacebookFilled, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

// Impor komponen pendukung
import DetailHero from '../components/DetailHero.jsx';
import BlogSidebar from '../components/BlogSidebar.jsx';

const BlogPostPage = () => {
    // Mengambil ID postingan dari URL, contoh: /blog/1
    const { postId } = useParams();
    
    // State untuk menampung data artikel dan status loading
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // --- DI SINI ANDA AKAN MENGAMBIL DATA DARI DATABASE ---
        // Logika ini akan mengambil data artikel berdasarkan `postId`

        // Simulasi pengambilan data
        const fetchPostData = () => {
            const blogDatabase = {
                '1': {
                    id: 1,
                    title: 'BMW X6 M50i: Didesain untuk Melampaui Sisi Sporty Anda.',
                    author: 'Admin',
                    date: '23 November 2023',
                    imageUrl: '/assets/images/bmw-x6.png',
                    tags: ['Ulasan', 'BMW'],
                    content: `
                        <p>Ini adalah pertanyaan yang sulit dijawab karena tidak jelas apa yang Anda tanyakan. Jika Anda bertanya tentang cara terbaik untuk memformat serangkaian postingan blog, maka jawabannya adalah menggunakan format yang konsisten untuk setiap postingan. Ini akan memudahkan pembaca untuk mengikuti postingan Anda dan menemukan informasi yang mereka cari.</p>
                        <img src="/assets/images/bmw-interior.png" alt="Interior BMW" class="w-full rounded-lg my-8" />
                        <h4>Apa yang akan Anda pelajari</h4>
                        <ul>
                            <li>Cara memformat seri postingan blog</li>
                            <li>Cara terbaik memformat sebuah seri</li>
                        </ul>
                    `
                },
                // --- PERUBAHAN DI SINI: Menambahkan data untuk artikel lain ---
                '2': {
                    id: 2,
                    title: 'Sedan Listrik Terbaru: All-New Mercedes-Benz EQE',
                    author: 'Admin',
                    date: '15 Oktober 2023',
                    imageUrl: '/assets/images/c-class.png',
                    tags: ['Berita', 'Mobil Listrik'],
                    content: `
                        <p>Mercedes-Benz kembali menggebrak pasar mobil listrik dengan meluncurkan EQE Sedan. Mobil ini menawarkan kemewahan, teknologi canggih, dan jarak tempuh yang impresif, menjadikannya pesaing kuat di segmen sedan listrik premium.</p>
                    `
                },
                '3': {
                    id: 3,
                    title: '5 Hal yang Wajib Dicek Sebelum Membeli Mobil Bekas di Bali',
                    author: 'Admin',
                    date: '05 September 2023',
                    imageUrl: '/assets/images/audi-a6.png',
                    tags: ['Tips', 'Buleleng'],
                    content: `
                        <p>Membeli mobil bekas bisa menjadi pilihan cerdas, namun ada beberapa hal yang perlu diperhatikan agar tidak salah pilih, terutama dengan kondisi di Bali. Berikut adalah 5 tips dari tim Showcar Buleleng:</p>
                        <ol>
                            <li>Periksa riwayat servis dan kelengkapan surat.</li>
                            <li>Lakukan inspeksi bodi untuk bekas tabrakan atau karat.</li>
                            <li>Cek kondisi mesin dan lakukan test drive.</li>
                            <li>Pastikan sistem kelistrikan berfungsi normal.</li>
                            <li>Beli dari dealer terpercaya yang memberikan garansi.</li>
                        </ol>
                    `
                }
            };

            const result = blogDatabase[postId];
            setPost(result);
            setLoading(false);
        };

        fetchPostData();
    }, [postId]); // Efek ini akan berjalan lagi jika postId berubah

    if (loading) {
        return <div className="text-center py-40">Memuat artikel...</div>;
    }

    if (!post) {
        return <div className="text-center py-40">404: Artikel Tidak Ditemukan!</div>;
    }

    return (
        <div className="bg-white">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 mt-20 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    {/* Kolom Kiri: Konten Artikel Utama */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border space-y-8">
                        {/* === Judul & Metadata === */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 border-b pb-6">
                            <Avatar src="/assets/images/seller-avatar.png" size="large" />
                            <div>
                                <p className="font-semibold">{post.author}</p>
                                <p className="text-sm text-gray-500">{post.date}</p>
                            </div>
                        </div>

                        {/* === Gambar Utama & Konten Artikel === */}
                        <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg" />
                        <article 
                            className="prose lg:prose-xl max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <Divider />

                        {/* === Tags & Share === */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex items-center gap-4">
                                <span className="font-bold">Bagikan:</span>
                                <a href="#" className="text-gray-500 hover:text-blue-600"><FacebookFilled /></a>
                                <a href="#" className="text-gray-500 hover:text-blue-600"><TwitterOutlined /></a>
                                <a href="#" className="text-gray-500 hover:text-blue-600"><InstagramOutlined /></a>
                            </div>
                        </div>
                        
                        <Divider />

                        {/* === Formulir Komentar === */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Tinggalkan Komentar</h3>
                            <Form layout="vertical">
                                <Form.Item name="comment" label="Komentar Anda">
                                    <Input.TextArea rows={4} placeholder="Tulis komentar Anda di sini..." />
                                </Form.Item>
                                <Form.Item name="name" label="Nama">
                                    <Input placeholder="Nama Anda" />
                                </Form.Item>
                                <Button type="primary" htmlType="submit">Kirim Komentar</Button>
                            </Form>
                        </div>
                    </div>

                    {/* Kolom Kanan: Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-0">
                            <BlogSidebar />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
