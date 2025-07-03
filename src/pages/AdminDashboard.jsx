import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { CarOutlined, UserOutlined, FileTextOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Cek apakah user bukan admin
  if (!currentUser || currentUser.role !== 'admin') {
    message.error('Akses ditolak. Halaman khusus admin.');
    navigate('/');
    return null;
  }

  const cards = [
    {
      icon: <CarOutlined className="text-blue-600 text-4xl" />,
      title: 'Kelola Mobil',
      description: 'Tambah, edit, dan hapus mobil.',
      path: '/admin/mobil'
    },
    {
      icon: <UserOutlined className="text-green-600 text-4xl" />,
      title: 'Kelola Pengguna',
      description: 'Pantau dan kelola pengguna.',
      path: '/admin/pengguna'
    },
    {
      icon: <FileTextOutlined className="text-purple-600 text-4xl" />,
      title: 'Kelola Blog',
      description: 'Kelola artikel dan berita.',
      path: '/admin/blog'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-100 to-white pt-24 px-6 pb-10">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Admin</h2>
        <p className="text-gray-500 mb-8">
          Selamat datang, <span className="font-semibold">{currentUser.nama}</span>. Silakan pilih menu pengelolaan di bawah ini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{card.title}</h3>
              <p className="text-gray-500 mb-4">{card.description}</p>
              <Button type="primary" block onClick={() => navigate(card.path)}>
                Kelola
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
