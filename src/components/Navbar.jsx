import React from 'react';
import { Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // <-- 1. Impor useAuth

const Navbar = () => {
  const { currentUser, logout } = useAuth(); // <-- 2. Ambil info pengguna dan fungsi logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    message.success('Anda berhasil keluar.');
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent absolute top-0 left-0 w-full z-20">
      <Link to="/" className="text-white text-2xl font-bold">SHOWCAR BULELENG</Link>
      
      {/* Menu Navigasi Utama */}
      <div className="hidden md:flex gap-6 items-center text-white font-medium">
        <Link to="/" className="hover:text-gray-300">Beranda</Link>
        <Link to="/listing" className="hover:text-gray-300">Daftar Mobil</Link>
        <Link to="/blog" className="hover:text-gray-300">Blog</Link>
        <Link to="/bantuan" className="hover:text-gray-300">Bantuan</Link>
        <Link to="/kontak" className="hover:text-gray-300">Kontak</Link>
        
        {/* Tampilkan link Dashboard Admin hanya jika peran adalah 'admin' */}
        {currentUser && currentUser.role === 'admin' && (
            <Link to="/admin" className="text-yellow-400 hover:text-yellow-300 font-bold">Dashboard Admin</Link>
        )}
      </div>

      {/* Bagian Kanan: Tombol Aksi & Info Pengguna */}
      <div className="hidden md:flex items-center gap-4 text-white font-medium">
        {currentUser ? (
          // Jika ada pengguna yang login
          <>
            <span>Halo, {currentUser.nama}</span>
            <Button type="primary" shape="round" onClick={() => navigate('/jual-mobil')}>
              Jual Mobil
            </Button>
            <Button shape="round" ghost onClick={handleLogout}>
              Keluar
            </Button>
          </>
        ) : (
          // Jika tidak ada yang login
          <>
            <Link to="/login" className="hover:text-gray-300">Masuk</Link>
            <Button type="primary" shape="round" onClick={() => navigate('/login')}>
              Jual Mobil
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
