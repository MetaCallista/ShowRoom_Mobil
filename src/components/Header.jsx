import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-[#1A2B47] text-white">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-4">
                <Link to="/" className="text-2xl font-bold">SHOWCAR BULELENG</Link>
                <div className="hidden md:flex gap-6 items-center font-medium">
                    <Link to="/" className="hover:text-gray-300">Beranda</Link>
                    <Link to="/listing" className="hover:text-gray-300">Daftar Mobil</Link>
                    <Link to="/blog" className="hover:text-gray-300">Blog</Link>
                    <a href="#" className="hover:text-gray-300">Halaman</a>
                    <a href="#" className="hover:text-gray-300">Bantuan</a>
                    <a href="#" className="hover:text-gray-300">Kontak</a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="hidden sm:block hover:text-gray-300">Masuk</a>
                    <Button type="primary" shape="round" ghost>
                        Jual Mobil
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;