// src/components/ExploreVehicles.jsx
import React from 'react';
import { Tabs } from 'antd';
import CarCard from './CarCard';

// ❌ HAPUS SEMUA BAGIAN IMPORT GAMBAR INI

// ✅ Langsung gunakan path absolut sebagai string di dalam data
const carData = [
  { id: 1, name: 'Toyota Camry New', spec: '3.5 D5 PowerPulse Momentum 5dr AW...', mileage: '20 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 40000, imageUrl: '/assets/images/camry.png', badge: 'Great Price' },
  { id: 2, name: 'T-Cross - 2023', spec: '4.0 D5 PowerPulse Momentum 5dr AW...', mileage: '15 Miles', fuel: 'Petrol', transmission: 'CVT', price: 15000, imageUrl: '/assets/images/t-cross.png' },
  { id: 3, name: 'C-Class - 2023', spec: '4.0 D5 PowerPulse Momentum 5dr AW...', mileage: '50 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 150000, imageUrl: '/assets/images/c-class.png' },
  { id: 4, name: 'Ford Transit - 2021', spec: '4.0 D5 PowerPulse Momentum 5dr AW...', mileage: '2500 Miles', fuel: 'Diesel', transmission: 'Manual', price: 22000, imageUrl: '/assets/images/ford-transit.png', badge: 'Great Price' },
  { id: 5, name: 'New GLC - 2023', spec: '4.0 D5 PowerPulse Momentum 5dr AW...', mileage: '60 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 95000, imageUrl: '/assets/images/new-glc.png', badge: 'Low Mileage' },
  { id: 6, name: 'Audi A6 3.5 - New', spec: '3.5 D5 PowerPulse Momentum 5dr AW...', mileage: '100 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 58000, imageUrl: '/assets/images/audi-a6.png' },
  { id: 7, name: 'Corolla Altis - 2023', spec: '3.5 D5 PowerPulse Momentum 5dr AW...', mileage: '15000 Miles', fuel: 'Petrol', transmission: 'CVT', price: 45000, imageUrl: '/assets/images/corolla-altis.png' },
  // Perhatikan: nama file di folder Anda ford-explorer.png tidak ada, saya ganti dengan hero.jpg sesuai gambar
  { id: 8, name: 'Ford Explorer 2023', spec: '3.5 D5 PowerPulse Momentum 5dr AW...', mileage: '10 Miles', fuel: 'Diesel', transmission: 'CVT', price: 35000, imageUrl: '/assets/images/hero.jpg', badge: 'Great Price' },
];

const CarGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
    {carData.map(car => (
      <CarCard key={car.id} car={car} />
    ))}
  </div>
);

const ExploreVehicles = () => {
  const items = [
    { key: '1', label: 'Recent Cars', children: <CarGrid /> },
    { key: '2', label: 'Featured Cars', children: <CarGrid /> },
    { key: '3', label: 'Popular Cars', children: <CarGrid /> },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Explore All Vehicles</h2>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
            View All
          </a>
        </div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};

export default ExploreVehicles;