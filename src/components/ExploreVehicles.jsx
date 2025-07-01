import React from 'react';
import { Tabs } from 'antd';
import CarCard from './CarCard';
import { Link } from 'react-router-dom';

// Data mobil tiruan (dummy data)
const carData = [
  { id: 1, name: 'Toyota Camry New', spec: '3.5 D5...', mileage: '20 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 40000, imageUrl: '/assets/images/camry.png', badge: 'Great Price' },
  { id: 2, name: 'T-Cross - 2023', spec: '4.0 D5...', mileage: '15 Miles', fuel: 'Petrol', transmission: 'CVT', price: 15000, imageUrl: '/assets/images/t-cross.png' },
  { id: 3, name: 'C-Class - 2023', spec: '4.0 D5...', mileage: '50 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 150000, imageUrl: '/assets/images/c-class.png' },
  { id: 4, name: 'Ford Transit - 2021', spec: '4.0 D5...', mileage: '2500 Miles', fuel: 'Diesel', transmission: 'Manual', price: 22000, imageUrl: '/assets/images/ford-transit.png', badge: 'Great Price' },
  // ... dan data mobil lainnya ...
];


// ====================================================================
// DEFINISI CarGrid YANG HILANG, TAMBAHKAN KEMBALI DI SINI
// ====================================================================
const CarGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
    {carData.map(car => (
      <CarCard key={car.id} car={car} />
    ))}
  </div>
);
// ====================================================================


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
          <Link to="/listing" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
            View All
          </Link>
        </div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};

export default ExploreVehicles;