import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CtaBanner = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      // Menggunakan gambar yang lebih relevan dengan mobil
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Mencari Mobil Impian Jadi <br /> Lebih Mudah
        </h2>
        <p className="mt-4 max-w-xl text-lg text-gray-200">
          Temukan mobil bekas berkualitas dengan harga terbaik di Buleleng. Siap untuk Anda bawa pulang.
        </p>
        <Link to="/listing">
          <Button 
            type="primary" 
            size="large" 
            className="mt-8"
            icon={<ArrowRightOutlined />}
          >
            Lihat Pilihan Mobil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CtaBanner;