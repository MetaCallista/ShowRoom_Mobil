import React, { useState, useEffect } from 'react';
import { Select, Pagination } from 'antd';
import CarCard from '../components/CarCard.jsx';
import ListingHero from '../components/ListingHero.jsx';

const VehicleListingPage = () => {
  // 1. Siapkan state untuk menampung data mobil dari database
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect untuk mengambil data saat komponen dimuat
  useEffect(() => {
    // --- DI SINI ANDA AKAN MENGAMBIL DATA DARI DATABASE ---
    
    // Untuk sekarang, kita gunakan data contoh langsung di sini
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
    setLoading(false); // Matikan loading setelah data didapat

  }, []); // Array kosong berarti ini hanya berjalan sekali

  if (loading) {
    return <div className="text-center py-40">Memuat daftar mobil...</div>;
  }

  return (
    <>
      <ListingHero />
      <div className="bg-white rounded-t-3xl -mt-16 relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Daftar Mobil</h1>
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">Menampilkan {cars.length} Hasil</p>
            <Select defaultValue="default" style={{ width: 150 }}>
                <Select.Option value="default">Urutkan</Select.Option>
                <Select.Option value="price_asc">Harga: Rendah ke Tinggi</Select.Option>
                <Select.Option value="price_desc">Harga: Tinggi ke Rendah</Select.Option>
            </Select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tampilkan data dari 'state', bukan dari konstanta */}
            {cars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Pagination defaultCurrent={1} total={cars.length} pageSize={12} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleListingPage;
