import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, Tag, Divider, Form, Input, Button, List } from 'antd'; // Import List for rendering comments
import { CheckCircleFilled, FacebookFilled, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

// Impor komponen pendukung
import DetailHero from '../components/DetailHero.jsx'; // Make sure this path is correct
import BlogSidebar from '../components/BlogSidebar.jsx'; // Make sure this path is correct

const BlogPostPage = () => {
    // Mengambil ID postingan dari URL, contoh: /blog/1
    const { postId } = useParams();

    // State untuk menampung data artikel dan status loading
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    // State BARU untuk menampung komentar
    const [comments, setComments] = useState([]);

    // Ant Design Form instance untuk mereset input setelah submit
    const [form] = Form.useForm();

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
                    `,
                    comments: [ // Komentar awal untuk postingan ini
                        { id: 1, author: 'Budi Santoso', content: 'Artikel yang sangat informatif, terima kasih!', date: '24 November 2023' },
                        { id: 2, author: 'Siti Aminah', content: 'Saya jadi tertarik dengan BMW X6 setelah membaca ini.', date: '25 November 2023' },
                    ]
                },
                '2': {
                    id: 2,
                    title: 'Sedan Listrik Terbaru: All-New Mercedes-Benz EQE',
                    author: 'Admin',
                    date: '15 Oktober 2023',
                    imageUrl: '/assets/images/c-class.png',
                    tags: ['Berita', 'Mobil Listrik'],
                    content: `
                        <p>Mercedes-Benz kembali menggebrak pasar mobil listrik dengan meluncurkan EQE Sedan. Mobil ini menawarkan kemewahan, teknologi canggih, dan jarak tempuh yang impresif, menjadikannya pesaing kuat di segmen sedan listrik premium.</p>
                    `,
                    comments: [
                        { id: 3, author: 'Agus Salim', content: 'Mobil listrik memang masa depan! EQE ini terlihat sangat menjanjikan.', date: '16 Oktober 2023' }
                    ]
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
                    `,
                    comments: [] // Tidak ada komentar awal
                }
            };

            const result = blogDatabase[postId];
            setPost(result);
            // Inisialisasi komentar saat data post dimuat
            setComments(result ? result.comments : []);
            setLoading(false);
        };

        fetchPostData();
    }, [postId]); // Efek ini akan berjalan lagi jika postId berubah

    // Handler untuk mengirim komentar baru
    const onFinishComment = (values) => {
        const newComment = {
            id: comments.length + 1, // ID sederhana, di dunia nyata pakai UUID
            author: values.name || 'Anonim', // Gunakan 'Anonim' jika nama tidak diisi
            content: values.comment,
            date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }), // Tanggal saat ini
        };
        setComments(prevComments => [...prevComments, newComment]);
        form.resetFields(); // Reset form setelah submit
    };

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
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><FacebookFilled /></a>
                                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><TwitterOutlined /></a>
                                <a href={`https://www.instagram.com/share?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600"><InstagramOutlined /></a>
                            </div>
                        </div>

                        <Divider />

                        {/* === Daftar Komentar === */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Komentar ({comments.length})</h3>
                            <List
                                itemLayout="horizontal"
                                dataSource={comments}
                                renderItem={comment => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.author}`} />} // Avatar random berdasarkan inisial nama
                                            title={
                                                <div className="flex justify-between items-center">
                                                    <span className="font-semibold">{comment.author}</span>
                                                    <span className="text-xs text-gray-500">{comment.date}</span>
                                                </div>
                                            }
                                            description={<p className="text-gray-700">{comment.content}</p>}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>

                        <Divider />

                        {/* === Formulir Komentar === */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Tinggalkan Komentar</h3>
                            <Form form={form} layout="vertical" onFinish={onFinishComment}>
                                <Form.Item
                                    name="comment"
                                    label="Komentar Anda"
                                    rules={[{ required: true, message: 'Harap tulis komentar Anda!' }]}
                                >
                                    <Input.TextArea rows={4} placeholder="Tulis komentar Anda di sini..." />
                                </Form.Item>
                                <Form.Item
                                    name="name"
                                    label="Nama"
                                    // rules={[{ required: true, message: 'Harap masukkan nama Anda!' }]} // Opsional, bisa dihapus jika nama tidak wajib
                                >
                                    <Input placeholder="Nama Anda (opsional)" />
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