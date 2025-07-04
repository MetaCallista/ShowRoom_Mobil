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
    <nav className="max-w-7xl mx-auto mt-6 mb-8 px-8 py-4 bg-white rounded-xl shadow flex justify-between items-center">
      <Link to="/" className="text-black text-2xl font-bold">SHOWCAR</Link>
      
      {/* Menu Navigasi Utama */}
      <div className="hidden md:flex gap-6 items-center text-black font-medium">
        <Link to="/" className="hover:text-blue-600">Beranda</Link>
        <Link to="/listing" className="hover:text-blue-600">Daftar Mobil</Link>
        <Link to="/blog" className="hover:text-blue-600">Artikel</Link>
        <Link to="/bantuan" className="hover:text-blue-600">Bantuan</Link>
        <Link to="/kontak" className="hover:text-blue-600">Contact</Link>
        
        {/* Tampilkan link Dashboard Admin hanya jika peran adalah 'admin' */}
        {currentUser && currentUser.role === 'admin' && (
            <Link to="/admin" className="text-yellow-500 hover:text-yellow-400 font-bold">Dashboard Admin</Link>
        )}
      </div>

      {/* Bagian Kanan: Tombol Aksi & Info Pengguna */}
      <div className="hidden md:flex items-center gap-4 text-black font-medium">
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
            <Link to="/login" className="hover:text-blue-600">Sign in</Link>
            <Button shape="round" className="border border-black text-black hover:bg-blue-50" onClick={() => navigate('/login')}>
            Jual Mobil
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
