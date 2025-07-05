import React from 'react';
import { Input, Button } from 'antd';
import { FacebookFilled, TwitterOutlined, InstagramOutlined, LinkedinFilled, ArrowUpOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Impor Link untuk navigasi

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Join BoxCar</h3>
            <p className="text-sm text-gray-600 mt-1">Receive pricing updates, shopping tips & more!</p>
          </div>
          <div className="w-full md:w-auto flex items-center gap-2">
            <Input 
              size="large" 
              placeholder="Alamat email Anda" 
              className="w-64"
            />
            <Button 
              size="large"
              className="bg-gray-900 hover:bg-gray-700 text-white border-none"
            >
              Daftar
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-16 text-sm">
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Perusahaan</h4>
            <Link to="/about" className="block hover:text-blue-600">Tentang Kami</Link>
            <Link to="/blog" className="block hover:text-blue-600">Blog</Link>
            <a href="#" className="block hover:text-blue-600">Layanan</a>
            <a href="#" className="block hover:text-blue-600">Tanya Jawab</a>
            <a href="#" className="block hover:text-blue-600">Kontak Kami</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Tautan Cepat</h4>
            <a href="#" className="block hover:text-blue-600">Hubungi Kami</a>
            <a href="#" className="block hover:text-blue-600">Pusat Bantuan</a>
            <a href="#" className="block hover:text-blue-600">Live Chat</a>
            <a href="#" className="block hover:text-blue-600">Cara Kerja</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Merek Populer</h4>
            <a href="#" className="block hover:text-blue-600">Toyota</a>
            <a href="#" className="block hover:text-blue-600">Daihatsu</a>
            <a href="#" className="block hover:text-blue-600">Honda</a>
            <a href="#" className="block hover:text-blue-600">Suzuki</a>
            <a href="#" className="block hover:text-blue-600">Mitsubishi</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Tipe Kendaraan</h4>
            <a href="#" className="block hover:text-blue-600">MPV</a>
            <a href="#" className="block hover:text-blue-600">SUV</a>
            <a href="#" className="block hover:text-blue-600">Hatchback</a>
            <a href="#" className="block hover:text-blue-600">Sedan</a>
            <a href="#" className="block hover:text-blue-600">Listrik</a>
          </div>
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h4 className="font-bold text-gray-900">Jam Buka</h4>
            <p>Senin – Jumat: 09:00 – 21:00 WITA</p>
            <p>Sabtu: 09:00 – 19:00 WITA</p>
            <p>Minggu: Tutup</p>
            <h4 className="font-bold text-gray-900 pt-4">Terhubung Dengan Kami</h4>
            <div className="flex gap-4 text-xl">
                <a href="#" className="hover:text-blue-600"><FacebookFilled /></a>
                <a href="#" className="hover:text-blue-600"><TwitterOutlined /></a>
                <a href="#" className="hover:text-blue-600"><InstagramOutlined /></a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Showcar Buleleng. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-blue-600">Kebijakan Privasi</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button 
        type="primary" 
        shape="circle" 
        icon={<ArrowUpOutlined />} 
        size="large"
        className="fixed bottom-8 right-8 z-50"
        onClick={handleScrollToTop}
      />
    </footer>
  );
};

export default Footer;