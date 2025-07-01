// src/components/ListingHero.jsx
import React from 'react';
import { Select, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ListingHero = () => {
    return (
        <div className="relative w-full h-[350px]">
            {/* PERUBAHAN DI SINI:
              Path gambar diubah ke URL dari internet untuk memastikan gambar pasti muncul.
              Ini akan langsung memperbaiki masalah layout.
              
              Jika Anda ingin pakai gambar lokal, pastikan Anda punya file di:
              public/assets/images/mountains.jpg
              Lalu Anda bisa ganti src-nya kembali ke "/assets/images/mountains.jpg"
            */}
            <img
                src="assets/images/hero.jpg"
                alt="Mountains"
                className="w-full h-full object-cover"
            />
             {/* PERUBAHAN DI SINI: items-end diubah menjadi items-center */}
            <div className="absolute inset-0 flex items-center justify-center pb-8 px-4">
                <Space size="middle" className="bg-white rounded-lg px-4 py-3 shadow-lg flex-wrap justify-center">
                    <Select defaultValue="Certified" style={{ width: 140 }} />
                    <Select defaultValue="Any Make" style={{ width: 140 }} />
                    <Select defaultValue="Any Model" style={{ width: 140 }} />
                    <Select defaultValue="All Prices" style={{ width: 140 }} />
                    <Button>More Filters</Button>
                    <Button type="primary" icon={<SearchOutlined />} size="large">Search</Button>
                </Space>
            </div>
        </div>
    );
};
export default ListingHero;