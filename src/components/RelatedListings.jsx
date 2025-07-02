import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarCard from './CarCard.jsx';

const RelatedListings = () => {
  // Siapkan 'state' untuk menampung data mobil terkait
  const [relatedCars, setRelatedCars] = useState([]);

  useEffect(() => {
    // --- DI SINI ANDA AKAN MENGAMBIL DATA DARI DATABASE ---
    // Contoh: Mengambil 4 mobil lain yang sejenis dari database Anda.
    
    // Untuk sekarang, kita buat data contoh langsung di sini
    // agar komponen ini bisa berjalan tanpa file mockData.js
    const placeholderCars = [
      { id: 5, name: 'Audi A6 3.5 - New', spec: '3.5 D5...', mileage: '100 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 58000, imageUrl: '/assets/images/audi-a6.png' },
      { id: 6, name: 'Audi A4, 4.0 New', spec: '4.0 TFSI...', mileage: '5 Miles', fuel: 'Petrol', transmission: 'Automatic', price: 152000, imageUrl: '/assets/images/audi-a4.png' },
      { id: 7, name: 'Ranger Black - 2021', spec: '3.0 Turbo...', mileage: '52000 Miles', fuel: 'Diesel', transmission: 'Manual', price: 49500, imageUrl: '/assets/images/ranger-black.png' },
      { id: 8, name: 'Mercedes-Benz, C-Class', spec: '3.5 D5...', mileage: '25 Miles', fuel: 'Petrol', transmission: 'CVT', price: 62000, imageUrl: '/assets/images/mercedes-benz.png' },
    ];
    
    // Simpan data contoh ke dalam state
    setRelatedCars(placeholderCars);

  }, []); // Array kosong berarti efek ini hanya berjalan sekali

  // Jika tidak ada data (misalnya saat loading), jangan tampilkan apa-apa
  if (relatedCars.length === 0) {
    return null;
  }

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Related Listings</h2>
        <Link to="/listing" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Sekarang map akan menggunakan data dari 'state' */}
        {relatedCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default RelatedListings;