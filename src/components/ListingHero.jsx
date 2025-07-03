import React from 'react';
import { Select, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ListingHero = () => {
    return (
        <div className="relative w-full h-[350px]">
            <img
                src="/assets/images/hero.jpg" // Ganti dengan gambar yang relevan dengan Buleleng/Bali
                alt="Pemandangan pegunungan di Bali"
                className="w-full h-full object-cover"
            />
            {/* Lapisan overlay gelap agar filter lebih mudah dibaca */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center pb-8 px-4">
                <Space size="middle" className="bg-white rounded-lg px-4 py-3 shadow-lg flex-wrap justify-center">
                    <Select
                        defaultValue="lulus-inspeksi"
                        style={{ width: 150 }}
                        options={[
                            { value: 'lulus-inspeksi', label: 'Lulus Inspeksi' },
                            { value: 'semua', label: 'Semua Kondisi' },
                        ]}
                    />
                    <Select
                        defaultValue="semua"
                        style={{ width: 150 }}
                        options={[
                            { value: 'semua', label: 'Semua Merek' },
                            { value: 'toyota', label: 'Toyota' },
                            { value: 'daihatsu', label: 'Daihatsu' },
                        ]}
                    />
                    <Select
                        defaultValue="semua"
                        style={{ width: 150 }}
                        options={[
                            { value: 'semua', label: 'Semua Model' },
                        ]}
                    />
                    <Select
                        defaultValue="semua"
                        style={{ width: 150 }}
                        options={[
                            { value: 'semua', label: 'Semua Harga' },
                            { value: '0-100', label: 'Di bawah 100 Jt' },
                            { value: '100-200', label: '100 - 200 Jt' },
                        ]}
                    />
                    <Button>Filter Lainnya</Button>
                    <Button type="primary" icon={<SearchOutlined />} size="large">Cari</Button>
                </Space>
            </div>
        </div>
    );
};

export default ListingHero;
