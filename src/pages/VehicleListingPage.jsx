// src/pages/VehicleListingPage.jsx
import React from 'react';
import { Select, Pagination } from 'antd';
// Hapus import Header dan Footer dari sini
import CarCard from '../components/CarCard'; 
import ListingHero from '../components/ListingHero';

const carData = [
  // ... data mobil Anda di sini (biarkan sama)
  { id: 1, name: 'Toyota Camry New', spec: '3.5 D5...', mileage: '20 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 40000, imageUrl: '/assets/images/camry.png', badge: 'Great Price' },
  { id: 2, name: 'C-Class - 2023', spec: '4.0 D5...', mileage: '15 Miles', fuel: 'Petrol', transmission: 'CVT', price: 150000, imageUrl: '/assets/images/c-class.png' },
  { id: 3, name: 'Ford Transit - 2021', spec: '4.0 D5...', mileage: '2500 Miles', fuel: 'Diesel', transmission: 'Manual', price: 22000, imageUrl: '/assets/images/ford-transit.png', badge: 'Great Price' },
  { id: 4, name: 'New GLC - 2023', spec: '4.0 D5...', mileage: '60 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 95000, imageUrl: '/assets/images/new-glc.png', badge: 'Low Mileage' },
  { id: 5, name: 'Audi A6 3.5 - New', spec: '3.5 D5...', mileage: '100 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 58000, imageUrl: '/assets/images/audi-a6.png' },
  { id: 6, name: 'Audi A4, 4.0 New', spec: '4.0 TFSI...', mileage: '5 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 152000, imageUrl: '/assets/images/audi-a4.png' },
  { id: 7, name: 'Ranger Black - 2021', spec: '3.0 Turbo...', mileage: '52000 Miles', fuel: 'Diesel', transmission: 'Manual', price: 49500, imageUrl: '/assets/images/ranger-black.png', badge: 'Sale' },
  { id: 8, name: 'Mercedes-Benz, C-Class', spec: '3.5 D5...', mileage: '25 Miles', fuel: 'Petrol', transmission: 'CVT', price: 62000, imageUrl: '/assets/images/mercedes-benz.png', badge: 'Great Price' },
  { id: 9, name: 'Ranger White - 2022', spec: '3.0 PowerPulse...', mileage: '30000 Miles', fuel: 'Diesel', transmission: 'Automatic', price: 28000, imageUrl: '/assets/images/ranger-white.png', badge: 'Great Price' },
  { id: 10, name: 'T-Cross - 2023', spec: '3.5 D5...', mileage: '15 Miles', fuel: 'Petrol', transmission: 'CVT', price: 15000, imageUrl: '/assets/images/t-cross.png' },
  { id: 11, name: 'Corolla Altis - 2023', spec: '3.5 D5...', mileage: '15000 Miles', fuel: 'Petrol', transmission: 'CVT', price: 45000, imageUrl: '/assets/images/corolla-altis.png' },
  { id: 12, name: 'Ford Explorer 2023', spec: '3.5 D5...', mileage: '10 Miles', fuel: 'Diesel', transmission: 'CVT', price: 35000, imageUrl: '/assets/images/ford-explorer.png' },
];

const VehicleListingPage = () => {
  return (
    // Gunakan React.Fragment <>...</> karena tidak ada div pembungkus utama lagi
    <>
      {/* Hapus <Header /> dari sini */}
      <ListingHero />
      
      {/* Main Content */}
      <div className="bg-white rounded-t-3xl -mt-16 relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-8">Listing v1</h1>

            {/* Sort & Results Info */}
            <div className="flex justify-between items-center mb-8">
                <p className="text-gray-600">Showing 1 - 12 of 35 Results</p>
                <Select defaultValue="default" style={{ width: 150 }}>
                    <Select.Option value="default">Sort by: Default</Select.Option>
                    <Select.Option value="price_asc">Price: Low to High</Select.Option>
                    <Select.Option value="price_desc">Price: High to Low</Select.Option>
                </Select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {carData.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
                <Pagination defaultCurrent={1} total={35} pageSize={12} />
            </div>
        </div>
      </div>
      {/* Hapus <Footer /> dari sini */}
    </>
  );
};

export default VehicleListingPage;