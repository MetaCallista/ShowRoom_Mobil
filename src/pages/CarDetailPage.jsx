import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Tag, Button, Divider } from 'antd';
import { CheckCircleFilled, ArrowLeftOutlined } from '@ant-design/icons';

// Impor komponen-komponen tampilan
import DetailHero from '../components/DetailHero.jsx';
import ImageGallery from '../components/ImageGallery.jsx';
import CarOverview from '../components/CarOverview.jsx';
import SellerCard from '../components/SellerCard.jsx';
import ReviewSection from '../components/ReviewSection.jsx';
import RelatedListings from '../components/RelatedListings.jsx';
import InspectionReport from '../components/InspectionReport.jsx';

const CarDetailPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarData = () => {
      // Data contoh ini seharusnya datang dari database Anda
      const mockDatabase = {
        '1': {
          id: 1, name: 'Toyota Camry Baru', price: 625000000, // Harga dalam Rupiah
          tags: ['Pilihan Editor', '4.8 (21 Ulasan)'],
          images: ['/assets/images/camry.png', '/assets/images/c-class.png', '/assets/images/audi-a6.png', '/assets/images/ford-transit.png', '/assets/images/new-glc.png'],
          overview: { year: 2023, make: 'Toyota', model: 'Camry', trim: 'XSE', mileage: '32 KM', body_type: 'Sedan', fuel_type: 'Bensin', transmission: 'Otomatis' },
          description: 'Toyota Camry adalah sedan yang andal dan bergaya, dikenal dengan kenyamanan dan efisiensi bahan bakarnya. Model XSE 2023 ini hadir dengan teknologi dan fitur keselamatan terbaru, menjadikannya pilihan sempurna untuk berkendara di kota maupun perjalanan jauh.',
          features: ['AC', 'Power Steering', 'Rem ABS', 'Sunroof'],
          reviews: [{ id: 1, author: 'Gede Wirawan', date: '2 Juli 2025', rating: 5, text: 'Mobilnya istimewa, pelayanan ramah!' }],
        },
        '2': { 
          id: 2, name: 'C-Class - 2023', price: 2325000000, // Harga dalam Rupiah
          tags: ['Mewah'], 
          images: ['/assets/images/c-class.png'], 
          overview: { year: 2023, make: 'Mercedes', model: 'C-Class' }, 
          description: 'Sedan mewah dengan performa tinggi.',
          features: ['Jok Kulit'], 
          reviews: [] 
        }
      };
      const result = mockDatabase[carId];
      setCar(result);
      setLoading(false);
    };
    fetchCarData();
  }, [carId]);

  if (loading) return <div className="text-center py-40">Memuat...</div>;
  if (!car) return <div className="text-center py-40">404: Mobil Tidak Ditemukan!</div>;

  return (
    <div className="bg-gray-100">
      <DetailHero />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-10">
        <div className="bg-white p-8 rounded-xl shadow-lg border -mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <p className="text-sm text-blue-600 mb-2">
                <Link to="/" className="hover:underline">Beranda</Link> / 
                <Link to="/listing" className="hover:underline"> Daftar Mobil</Link> / 
                <span className="text-gray-500"> {car.name}</span>
              </p>
              <h1 className="text-4xl font-bold">{car.name}</h1>
              <p className="text-gray-500 mt-1">3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              {/* Menampilkan harga dalam format Rupiah */}
              <p className="text-3xl font-bold text-gray-900">
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(car.price)}
              </p>
              <Button type="link" className="p-0 h-auto">Ajukan Penawaran</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-10">
              <ImageGallery images={car.images} />
              <CarOverview overview={car.overview} />
              <InspectionReport />
              <div className="pt-4">
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Deskripsi</h2>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>
              <div className="pt-4">
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Fitur</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
                  {car.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircleFilled className="text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4">
                <ReviewSection reviews={car.reviews} />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
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
