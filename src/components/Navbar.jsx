import React from 'react';
import { Button, notification, Dropdown, Avatar, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { UserOutlined, LogoutOutlined, LayoutOutlined } from '@ant-design/icons';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const handleLogout = () => {
    logout();
    api.success({
        message: 'Berhasil Keluar',
        description: 'Anda telah berhasil keluar dari akun Anda.',
        placement: 'topRight'
    });
    navigate('/');
  };

  // Menu untuk dropdown pengguna yang sudah login
  const userMenu = (
    <Menu>
        {/* Tampilkan link berdasarkan peran */}
        {currentUser?.role === 'admin' && (
            <Menu.Item key="admin-dashboard" icon={<LayoutOutlined />}>
                <Link to="/admin">Dasbor Admin</Link>
            </Menu.Item>
        )}
        {currentUser?.role === 'penjual' && (
            <Menu.Item key="user-profile" icon={<UserOutlined />}>
                <Link to="/profil">Profil Saya</Link>
            </Menu.Item>
        )}
        <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
            Keluar
        </Menu.Item>
    </Menu>
  );

  return (
    <>
      {contextHolder}
      <nav className="max-w-7xl mx-auto mt-6 mb-8 px-8 py-4 bg-white rounded-xl shadow flex justify-between items-center">
        <Link to="/" className="text-black text-2xl font-bold">SHOWCAR</Link>
        
        {/* Menu Navigasi Utama */}
        <div className="hidden md:flex gap-6 items-center text-black font-medium">
          <Link to="/" className="hover:text-blue-600">Beranda</Link>
          <Link to="/listing" className="hover:text-blue-600">Daftar Mobil</Link>
          <Link to="/blog" className="hover:text-blue-600">Artikel</Link>
          <Link to="/bantuan" className="hover:text-blue-600">Bantuan</Link>
          <Link to="/kontak" className="hover:text-blue-600">Kontak</Link>
        </div>
        
        {/* Bagian Kanan: Tombol Aksi & Info Pengguna */}
        <div className="hidden md:flex items-center gap-4 text-black font-medium">
          {currentUser ? (
            // Jika ada pengguna yang login, tampilkan tombol Jual Mobil dan Dropdown Profil
            <>
              <Button type="primary" shape="round" onClick={() => navigate('/admin/mobil/tambah')}>
                Jual Mobil
              </Button>
              <Dropdown overlay={userMenu} trigger={['click']}>
                <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                  <Avatar src={currentUser.avatar || '/assets/images/seller-avatar.png'} />
                  <span className="font-semibold">{currentUser.nama}</span>
                </div>
              </Dropdown>
            </>
          ) : (
            // Jika tidak ada yang login
            <>
              <Link to="/login" className="hover:text-blue-600">Masuk</Link>
              <Button type="primary" shape="round" onClick={() => navigate('/login')}>
                Jual Mobil
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
