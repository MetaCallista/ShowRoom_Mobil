// src/components/Navbar.jsx
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent absolute top-0 left-0 w-full z-20">
      {/* Ganti "BOXCARS" menjadi "SHOWCAR" jika ingin sama persis */}
      <Link to="/" className="text-white text-2xl font-bold">SHOWCAR</Link>
      <div className="hidden md:flex gap-6 items-center text-white font-medium">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/listing" className="hover:text-gray-300">Listings</Link>
        <a href="#" className="hover:text-gray-300">Blog</a>
        <a href="#" className="hover:text-gray-300">Pages</a>
        <a href="#" className="hover:text-gray-300">Support</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
        <a href="#" className="hover:text-gray-300">Sign In</a>
        <Button type="primary" shape="round">
          Submit Listing
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;