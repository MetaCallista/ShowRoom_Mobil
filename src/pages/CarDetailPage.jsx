import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Tag, Button, Divider, Modal } from 'antd';
import { CheckCircleFilled, ArrowLeftOutlined } from '@ant-design/icons';

// Impor komponen-komponen tampilan
import ImageGallery from '../components/ImageGallery.jsx';
import CarOverview from '../components/CarOverview.jsx';
import SellerCard from '../components/SellerCard.jsx';
import RelatedListings from '../components/RelatedListings.jsx';


const CarDetailPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handlePreview = (img) => {
    setPreviewImage(img);
    setPreviewOpen(true);
  };

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
    <div className="bg-whites">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-10">
        <div className="bg-white p-8 rounded-xl shadow-lg border mt-10">
          {/* Tombol Back */}
          <button onClick={() => navigate(-1)} className="mb-4 flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeftOutlined /> Kembali
          </button>
          {/* Breadcrumb & Judul */}
          <p className="text-sm text-blue-600 mb-2">
            <Link to="/" className="hover:underline">Beranda</Link> /
            <Link to="/listing" className="hover:underline"> Daftar Mobil</Link> /
            <span className="text-gray-500"> {car.name}</span>
          </p>
          <h1 className="text-4xl font-bold">{car.name}</h1>
          <p className="text-gray-500 mt-1">3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate</p>
          {/* Gambar & Harga */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {/* Kolom Gambar */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-3 relative rounded-xl overflow-hidden">
                  <img
                    src={car.images[0]}
                    className="w-full h-80 object-cover rounded-xl cursor-pointer"
                    alt="Main Car"
                    onClick={() => handlePreview(car.images[0])}
                  />
                </div>
                <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-2">
                  {car.images.slice(1, 5).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-full h-36 object-cover rounded-xl cursor-pointer"
                      alt={`Thumbnail ${i+1}`}
                      onClick={() => handlePreview(img)}
                    />
                  ))}
                </div>
              </div>
              <CarOverview overview={car.overview} />
              <div className="pt-4">
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Deskripsi</h2>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>
            </div>
            {/* Kolom Harga & Aksi */}
            <div className="lg:col-span-1">
              <div className="top-28 space-y-6">
                <div className="bg-white rounded-xl shadow p-6 border">
                 <div className="text-gray-400 text-gray-900 mb-1">Price</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(car.price)}</div>                
                </div>
                <SellerCard />
              </div>
            </div>
          </div>
        </div>
        <RelatedListings />
      </div>
      {/* Modal Preview Gambar */}
      <Modal
        open={previewOpen}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
        centered
        width={800}
      >
        <img alt="Preview" src={previewImage} className="w-full h-auto rounded-xl" />
      </Modal>
    </div>
  );
};

export default CarDetailPage;
