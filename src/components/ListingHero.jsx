import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ListingHero = () => {
    const [search, setSearch] = useState('');

    return (
        <div className="relative w-full h-[250px] bg-white">
            {/* Lapisan overlay gelap agar filter lebih mudah dibaca */}
            <div className="absolute inset-0 flex items-center justify-center pb-8 px-4">
                <div className="w-full max-w-3xl bg-white rounded-full shadow-lg flex items-center px-6 py-3">
                    <Input
                        placeholder="Cari mobil..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="flex-1 border-none shadow-none focus:ring-0 focus:border-transparent bg-transparent text-lg"
                        size="large"
                        style={{ background: 'transparent' }}
                        onPressEnter={() => {/* lakukan pencarian */}}
                    />
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        size="large"
                        className="ml-4 px-8 rounded-full"
                        onClick={() => {/* lakukan pencarian */}}
                    >
                        Cari
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ListingHero;
