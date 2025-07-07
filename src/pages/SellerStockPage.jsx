import React, { useState } from 'react'; // Import useState
import CarCard from '../components/CarCard';
import { Select, Pagination, Input } from 'antd'; // Keep Pagination
import { CheckCircleFilled, ArrowLeftOutlined } from '@ant-design/icons';
import { useParams, useNavigate, Link } from 'react-router-dom';

// Dummy data user
const user = {
  name: 'Nama user',
  phone: 'No hp',
  address: 'alamat',
  email: 'Email',
  avatar: '', // bisa pakai placeholder
};

// Use the placeholderCars data directly here for consistency
const cars = [
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
];

const SellerStockPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const pageSize = 12; // Number of cars per page

  // Calculate cars for the current page
  const getCurrentPageCars = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return cars.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  const totalPages = Math.ceil(cars.length / pageSize); // Calculate total pages

  return (
    <div className="bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-10">
        <div className="bg-white p-8 rounded-xl shadow-lg border mt-10">
          {/* Tombol Kembali */}
          <button onClick={() => navigate(-1)} className="mb-12 flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeftOutlined /> Kembali
          </button>
          {/* Profil User */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-4xl">
              {/* Avatar Placeholder */}
              <span role="img" aria-label="avatar">👤</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
              <div className="text-gray-700 space-y-1">
                <div>{user.phone}</div>
                <div>{user.address}</div>
                <div>{user.email}</div>
              </div>
            </div>
          </div>
          {/* Mobil yang dijual */}
          <h3 className="text-xl font-semibold mb-4">Mobil yang dijual</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {getCurrentPageCars().map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <Pagination
                current={currentPage}
                total={cars.length} // Use total cars length
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
      </div>
    </div>
  );
};

export default SellerStockPage;