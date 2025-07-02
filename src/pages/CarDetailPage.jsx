import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tag, Button, Divider } from 'antd';
import { CheckCircleFilled, ArrowLeftOutlined } from '@ant-design/icons';

// Impor komponen-komponen tampilan
import DetailHero from '../components/DetailHero.jsx'; // <-- 1. Impor hero baru
import ImageGallery from '../components/ImageGallery.jsx';
import CarOverview from '../components/CarOverview.jsx';
import SellerCard from '../components/SellerCard.jsx';
import ReviewSection from '../components/ReviewSection.jsx';
import RelatedListings from '../components/RelatedListings.jsx';

const CarDetailPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ... Logika fetchCarData Anda tetap sama ...
    const fetchCarData = () => {
      const mockDatabase = {
        '1': {
          id: 1, name: 'Toyota Camry New', price: 40000,
          tags: ['Featured', '4.8 (21 reviews)'],
          images: ['/assets/images/camry.png', '/assets/images/c-class.png', '/assets/images/audi-a6.png', '/assets/images/ford-transit.png', '/assets/images/new-glc.png'],
          overview: { year: 2023, make: 'Toyota', model: 'Camry', trim: 'XSE', mileage: '20 Miles', body_type: 'Sedan', fuel_type: 'Petrol', transmission: 'Automatic' },
          description: 'The Toyota Camry is a reliable and stylish sedan, known for its comfort and fuel efficiency. This 2023 XSE model comes fully loaded with the latest technology and safety features.',
          features: ['Air-conditioning', 'Power steering', 'ABS', 'Sunroof'],
          reviews: [{ id: 1, author: 'Ali Tufan', date: 'July 2, 2025', rating: 5, text: 'Excellent car!' }],
        },
        '2': { id: 2, name: 'C-Class - 2023', price: 150000, tags: ['Luxury'], images: [], overview: {}, features: [], reviews: [] }
      };
      const result = mockDatabase[carId];
      setCar(result);
      setLoading(false);
    };
    fetchCarData();
  }, [carId]);

  if (loading) return <div className="text-center py-40">Loading...</div>;
  if (!car) return <div className="text-center py-40">404: Car Not Found!</div>;

  return (
    <div className="bg-gray-100">
      {/* 2. Tampilkan komponen Hero di paling atas */}
      <DetailHero />

      {/* Kontainer utama sekarang berada di bawah Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-10">
        
        {/* Konten utama dibungkus kartu putih agar "mengambang" di atas hero */}
        <div className="bg-white p-8 rounded-xl shadow-lg border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              {/* Breadcrumb sederhana */}
              <p className="text-sm text-blue-600 mb-2">
                <a href="/" className="hover:underline">Home</a> / 
                <a href="/listing" className="hover:underline"> Listings</a> / 
                <span className="text-gray-500"> {car.name}</span>
              </p>
              <h1 className="text-4xl font-bold">{car.name}</h1>
              <p className="text-gray-500 mt-1">3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-3xl font-bold text-gray-900">${car.price.toLocaleString()}</p>
              <Button type="link" className="p-0 h-auto">Make An Offer Price</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-10">
              <ImageGallery images={car.images} />
              <div className="pt-4">
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Description</h2>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>
              {/* ... Bagian Features & Review Section ... */}
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <CarOverview overview={car.overview} />
                <SellerCard />
              </div>
            </div>
          </div>
        </div>

        <RelatedListings />
      </div>
    </div>
  );
};

export default CarDetailPage;