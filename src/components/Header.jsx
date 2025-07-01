// src/components/Header.jsx
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-[#1A2B47] text-white">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-4">
                <Link to="/" className="text-2xl font-bold">BOXCARS</Link>
                <div className="hidden md:flex gap-6 items-center font-medium">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <a href="#" className="hover:text-gray-300">Listings</a>
                    <a href="#" className="hover:text-gray-300">Blog</a>
                    <a href="#" className="hover:text-gray-300">Pages</a>
                    <a href="#" className="hover:text-gray-300">Support</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="hidden sm:block">Sign In</a>
                    <Button type="primary" shape="round" ghost>
                        Submit Listing
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;