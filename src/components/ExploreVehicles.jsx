import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import CarCard from './CarCard.jsx';

const ExploreVehicles = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Di aplikasi nyata, Anda akan mengambil data dari database di sini
    // Untuk sekarang, kita gunakan data contoh yang sudah diterjemahkan
    const placeholderCars = [
      { id: 1, name: 'Toyota Camry New', desc: '3.5 D5...', mileage: '20 Miles', fuel: 'Bensin', transmission: 'Otomatis', price: 40000, imageUrl: '/assets/images/camry.png', badge: 'Harga Terbaik' },
      { id: 2, name: 'T-Cross - 2023', spec: '4.0 D5...', mileage: '15 Miles', fuel: 'Bensin', transmission: 'CVT', price: 15000, imageUrl: '/assets/images/t-cross.png' },
      { id: 3, name: 'C-Class - 2023', spec: '4.0 D5...', mileage: '50 Miles', fuel: 'Bensin', transmission: 'Otomatis', price: 150000, imageUrl: '/assets/images/c-class.png', badge: 'Lulus Inspeksi' },
      { id: 4, name: 'Ford Transit - 2021', spec: '4.0 D5...', mileage: '2500 Miles', fuel: 'Diesel', transmission: 'Manual', price: 22000, imageUrl: '/assets/images/ford-transit.png', badge: 'Harga Terbaik' },
      { id: 5, name: 'Toyota Camry New', spec: '3.5 D5...', mileage: '20 Miles', fuel: 'Bensin', transmission: 'Otomatis', price: 40000, imageUrl: '/assets/images/camry.png', badge: 'Harga Terbaik' },
      { id: 6, name: 'T-Cross - 2023', spec: '4.0 D5...', mileage: '15 Miles', fuel: 'Bensin', transmission: 'CVT', price: 15000, imageUrl: '/assets/images/t-cross.png' },
      { id: 7, name: 'C-Class - 2023', spec: '4.0 D5...', mileage: '50 Miles', fuel: 'Bensin', transmission: 'Otomatis', price: 150000, imageUrl: '/assets/images/c-class.png', badge: 'Lulus Inspeksi' },
      { id: 8, name: 'Ford Transit - 2021', spec: '4.0 D5...', mileage: '2500 Miles', fuel: 'Diesel', transmission: 'Manual', price: 22000, imageUrl: '/assets/images/ford-transit.png', badge: 'Harga Terbaik' },
    ];
    setCars(placeholderCars);
  }, []);

  // Komponen kecil untuk menampilkan grid mobil
  const CarGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );

  // Daftar item untuk Tabs
  const tabItems = [
    { key: '1', label: 'Mobil Terbaru', children: <CarGrid /> },
    { key: '2', label: 'Merek Pilihan', children: <CarGrid /> },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          <h2 className="text-3xl font-bold text-gray-900">Jelajahi Pilihan Mobil Kami</h2>
          <Link to="/listing" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
            Lihat Semua
          </Link>
        </div>
        <Tabs defaultActiveKey="1" items={tabItems} />
      </div>
    </div>
  );
};

export default ExploreVehicles;