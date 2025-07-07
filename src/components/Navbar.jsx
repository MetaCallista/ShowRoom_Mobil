import React from 'react';
import { Button, notification, Dropdown, Avatar, Menu } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { UserOutlined, LogoutOutlined, LayoutOutlined } from '@ant-design/icons';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
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
                <Link to="/admin">Dashboard Admin</Link>
            </Menu.Item>
        )}
        {currentUser?.role === 'penjual' && (
            <Menu.Item key="user-profile" icon={<UserOutlined />}>
                <Link to="/user">Dashboard User</Link>
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
          <Link
            to="/"
            className={`relative flex flex-col items-center font-medium hover:text-blue-600
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100
              ${location.pathname === '/' ? 'font-semibold after:scale-x-100' : ''}`}
          >
            Beranda
          </Link>
          <Link
            to="/listing"
            className={`relative flex flex-col items-center font-medium hover:text-blue-600
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100
              ${location.pathname === '/listing' ? 'font-semibold after:scale-x-100' : ''}`}
          >
            Daftar Mobil
          </Link>
          <Link
            to="/blog"
            className={`relative flex flex-col items-center font-medium hover:text-blue-600
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100
              ${location.pathname === '/blog' ? 'font-semibold after:scale-x-100' : ''}`}
          >
            Artikel
          </Link>
          <Link
            to="/bantuan"
            className={`relative flex flex-col items-center font-medium hover:text-blue-600
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100
              ${location.pathname === '/bantuan' ? 'font-semibold after:scale-x-100' : ''}`}
          >
            Bantuan
          </Link>
          <Link
            to="/kontak"
            className={`relative flex flex-col items-center font-medium hover:text-blue-600
              after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100
              ${location.pathname === '/kontak' ? 'font-semibold after:scale-x-100' : ''}`}
          >
            Kontak
          </Link>
        </div>
        
        {/* Bagian Kanan: Tombol Aksi & Info Pengguna */}
        <div className="hidden md:flex items-center gap-4 text-black font-medium">
          {currentUser ? (
            // Jika ada pengguna yang login, tampilkan tombol Jual Mobil dan Dropdown Profil
            <>
              <Button type="primary" shape="round" onClick={() => {
                if (currentUser.role === 'admin') {
                  navigate('/admin/mobil/tambah');
                } else {
                  navigate('/user/mobil/tambah');
                }
              }}>
                Jual Mobil
              </Button>
              <Dropdown overlay={userMenu} trigger={['click']}>
                <div className="flex items-center gap-2 cursor-pointer p-2 rounded-3xl hover:bg-gray-100">
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
