import React, { useState, useEffect } from 'react';
import { Select, Pagination, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CarCard from '../components/CarCard.jsx';
import PageHero from '../components/PageHero.jsx';

const VehicleListingPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const placeholderCars = [
      { id: 1, name: 'Toyota Camry Baru', spec: '3.5 D5...', mileage: '32 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 625000000, imageUrl: '/assets/images/camry.png', badge: 'Harga Terbaik' },
      { id: 2, name: 'C-Class - 2023', spec: '4.0 D5...', mileage: '24 KM', fuel: 'Bensin', transmission: 'CVT', price: 2325000000, imageUrl: '/assets/images/c-class.png' },
      { id: 3, name: 'Ford Transit - 2021', spec: '4.0 D5...', mileage: '4.023 KM', fuel: 'Diesel', transmission: 'Manual', price: 343750000, imageUrl: '/assets/images/ford-transit.png', badge: 'Harga Terbaik' },
      { id: 4, name: 'New GLC - 2023', spec: '4.0 D5...', mileage: '96 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 1484375000, imageUrl: '/assets/images/new-glc.png', badge: 'Jarak Tempuh Rendah' },
      { id: 5, name: 'Audi A6 3.5 - Baru', spec: '3.5 D5...', mileage: '160 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 906250000, imageUrl: '/assets/images/audi-a6.png' },
      { id: 6, name: 'Audi A4, 4.0 Baru', spec: '4.0 TFSI...', mileage: '8 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 2375000000, imageUrl: '/assets/images/audi-a4.png' },
      { id: 7, name: 'Ranger Hitam - 2021', spec: '3.0 Turbo...', mileage: '83.685 KM', fuel: 'Diesel', transmission: 'Manual', price: 773437500, imageUrl: '/assets/images/ranger-black.png', badge: 'Diskon' },
      { id: 8, name: 'Mercedes-Benz, C-Class', spec: '3.5 D5...', mileage: '40 KM', fuel: 'Bensin', transmission: 'CVT', price: 968750000, imageUrl: '/assets/images/mercedes-benz.png', badge: 'Harga Terbaik' },
      { id: 9, name: 'Ranger Putih - 2022', spec: '3.0 PowerPulse...', mileage: '48.280 KM', fuel: 'Diesel', transmission: 'Otomatis', price: 437500000, imageUrl: '/assets/images/ranger-white.png', badge: 'Lulus Inspeksi' },
      { id: 10, name: 'T-Cross - 2023', spec: '3.5 D5...', mileage: '24 KM', fuel: 'Bensin', transmission: 'CVT', price: 234375000, imageUrl: '/assets/images/t-cross.png' },
      { id: 11, name: 'Corolla Altis - 2023', spec: '3.5 D5...', mileage: '24.140 KM', fuel: 'Bensin', transmission: 'CVT', price: 703125000, imageUrl: '/assets/images/corolla-altis.png' },
      { id: 12, name: 'Ford Explorer 2023', spec: '3.5 D5...', mileage: '16 KM', fuel: 'Diesel', transmission: 'CVT', price: 546875000, imageUrl: '/assets/images/ford-explorer.png' },
    ];
    setCars(placeholderCars);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center py-40">Memuat daftar mobil...</div>;
  }

  return (
    <>
      <PageHero
        title="Daftar Mobil"
        desc="Jelajahi koleksi mobil terbaik pilihan Showcar Buleleng. Temukan mobil impianmu di sini!"
      />
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="w-full md:max-w-xl">
            <Input.Search
              placeholder="Cari mobil..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              enterButton="Cari"
              size="large"
              onSearch={() => {/* lakukan pencarian */}}
            />
          </div>
          <div>
            <Select defaultValue="default" style={{ width: 180 }}>
              <Select.Option value="default">Urutkan</Select.Option>
              <Select.Option value="price_asc">Harga: Rendah ke Tinggi</Select.Option>
              <Select.Option value="price_desc">Harga: Tinggi ke Rendah</Select.Option>
            </Select>
          </div>
        </div>
        <p className="text-gray-600 mb-4">Menampilkan {cars.length} Hasil</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Pagination defaultCurrent={1} total={cars.length} pageSize={12} />
        </div>
      </div>
    </>
  );
};

export default VehicleListingPage;
