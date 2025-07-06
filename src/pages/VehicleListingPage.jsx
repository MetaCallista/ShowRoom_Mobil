import React, { useState, useEffect } from 'react';
import { Select, Pagination, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CarCard from '../components/CarCard.jsx';
import PageHero from '../components/PageHero.jsx';

const VehicleListingPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const pageSize = 12; // Jumlah mobil per halaman

  useEffect(() => {
    const placeholderCars = [
      { id: 1, name: 'Toyota Camry Baru', desc: '3.5 D5...', mileage: '32 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 625000000, imageUrl: '/assets/images/camry.png', badge: 'Harga Terbaik' },
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
      { id: 13, name: 'BMW X5 Gold - 2022', spec: '3.0 TwinPower...', mileage: '45.200 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 1850000000, imageUrl: '/assets/images/bmw-x5-gold.png', badge: 'Premium' },
      { id: 14, name: 'BMW X6 M50i - 2023', spec: '4.4 V8 TwinPower...', mileage: '12.500 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 3200000000, imageUrl: '/assets/images/bmw-x6.png', badge: 'M Performance' },
      { id: 15, name: 'BMW Alpina B7 - 2021', spec: '4.4 V8 TwinTurbo...', mileage: '28.750 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 4500000000, imageUrl: '/assets/images/bmw-alpina.png', badge: 'Alpina' },
      { id: 16, name: 'Toyota Corolla Cross - 2023', spec: '1.8 Hybrid...', mileage: '8.900 KM', fuel: 'Hybrid', transmission: 'CVT', price: 850000000, imageUrl: '/assets/images/corolla-altis.png', badge: 'Hemat BBM' },
    ];
    setTimeout(() => {
      setCars(placeholderCars);
      setLoading(false);
     }, 500); // Penundaan 500ms
  }, []);

  // Filter cars berdasarkan search term
  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(search.toLowerCase()) ||
    car.fuel.toLowerCase().includes(search.toLowerCase()) ||
    car.transmission.toLowerCase().includes(search.toLowerCase())
  );

  // Sort cars berdasarkan pilihan
  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Hitung total halaman
  const totalPages = Math.ceil(sortedCars.length / pageSize);

  // Ambil cars untuk halaman saat ini
  const getCurrentPageCars = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortedCars.slice(startIndex, endIndex);
  };

  // Handle perubahan halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle search
  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1); // Reset ke halaman pertama saat search
  };

  // Handle sort change
  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1); // Reset ke halaman pertama saat sort
  };

  const SkeletonCarCard = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse h-[350px]"> {/* Sesuaikan tinggi */}
      <div className="h-48 bg-gray-200"></div>
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3 mt-4"></div>
      </div>
    </div>
  );

if (loading) {
    return (
      <div className="bg-white">
        <PageHero
          title="Daftar Mobil"
          desc="Jelajahi koleksi mobil terbaik pilihan Showcar Buleleng. Temukan mobil impianmu di sini!"
        />
        <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            {/* Search bar skeleton */}
            <div className="w-full md:max-w-xl h-12 bg-gray-200 rounded animate-pulse"></div>
            {/* Sort by select skeleton */}
            <div className="h-12 w-[180px] bg-gray-200 rounded animate-pulse"></div>
          </div>
          <p className="text-gray-600 mb-4 h-6 bg-gray-200 rounded w-1/4 animate-pulse"></p> {/* Pesan loading */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => ( // Tampilkan beberapa skeleton card
              <SkeletonCarCard key={index} />
            ))}
          </div>
          {/* Pagination skeleton */}
          <div className="flex justify-center mt-12">
            <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
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
              onSearch={handleSearch}
            />
          </div>
          <div>
            <Select 
              value={sortBy}
              onChange={handleSortChange}
              style={{ width: 180 }}
            >
              <Select.Option value="default">Urutkan</Select.Option>
              <Select.Option value="price_asc">Harga: Rendah ke Tinggi</Select.Option>
              <Select.Option value="price_desc">Harga: Tinggi ke Rendah</Select.Option>
            </Select>
          </div>
        </div>

        {/* Info hasil pencarian dan sorting */}
        <div className="mb-4">
          <p className="text-gray-600">
            {search ? (
              `Menampilkan ${sortedCars.length} mobil untuk "${search}"`
            ) : (
              `Menampilkan ${sortedCars.length} mobil tersedia`
            )}
            {sortBy !== 'default' && ` (${sortBy === 'price_asc' ? 'Harga: Rendah ke Tinggi' : 'Harga: Tinggi ke Rendah'})`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentPageCars().map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <Pagination 
              current={currentPage}
              total={sortedCars.length} 
              pageSize={pageSize}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper
              showTotal={(total, range) => 
                `${range[0]}-${range[1]} dari ${total} mobil`
              }
            />
          </div>
        )}
      </div>
    </>
  );
};

export default VehicleListingPage;
