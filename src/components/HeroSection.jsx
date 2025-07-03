import React from 'react';
import { Button, Select, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <img
        src="/assets/images/hero.jpg" // Ganti dengan gambar ikonik Buleleng
        alt="Showroom mobil bekas di Buleleng"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Cari Mobil Bekas Berkualitas di Buleleng?
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Setiap mobil telah lulus inspeksi ketat dan bergaransi. Temukan yang terbaik untuk Anda di Bali Utara.
        </p>
        
        <div className="mt-8 w-full max-w-4xl">
          <Space.Compact size="large" className="w-full">
            <Select
              defaultValue="any"
              className="w-1/4"
              options={[
                { value: 'any', label: 'Semua Merek' },
                { value: 'toyota', label: 'Toyota' },
                { value: 'daihatsu', label: 'Daihatsu' },
                { value: 'honda', label: 'Honda' },
              ]}
            />
            <Select
              defaultValue="any"
              className="w-1/4"
              options={[
                { value: 'any', label: 'Semua Model' },
              ]}
            />
            <Select
              defaultValue="any"
              className="w-1/4"
              options={[
                { value: 'any', label: 'Semua Harga' },
                { value: '0-100', label: 'Di bawah 100 Jt' },
                { value: '100-200', label: '100 - 200 Jt' },
              ]}
            />
            <Button type="primary" icon={<SearchOutlined />} className="w-1/4">
              Cari Mobil
            </Button>
          </Space.Compact>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;