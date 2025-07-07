import React, { useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker, TimePicker, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircleFilled, ArrowLeftOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const ReservationPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (carId) {
      // Data dummy mobil - dalam aplikasi nyata ini akan diambil dari API
      const carsData = [
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
        { id: 13, name: 'BMW X5 Gold - 2022', spec: '3.0 TwinPower...', mileage: '45.200 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 1850000000, imageUrl: '/assets/images/bmw-x5-gold.png', badge: 'Premium' },
        { id: 14, name: 'BMW X6 M50i - 2023', spec: '4.4 V8 TwinPower...', mileage: '12.500 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 3200000000, imageUrl: '/assets/images/bmw-x6.png', badge: 'M Performance' },
        { id: 15, name: 'BMW Alpina B7 - 2021', spec: '4.4 V8 TwinTurbo...', mileage: '28.750 KM', fuel: 'Bensin', transmission: 'Otomatis', price: 4500000000, imageUrl: '/assets/images/bmw-alpina.png', badge: 'Alpina' },
        { id: 16, name: 'Toyota Corolla Cross - 2023', spec: '1.8 Hybrid...', mileage: '8.900 KM', fuel: 'Hybrid', transmission: 'CVT', price: 850000000, imageUrl: '/assets/images/corolla-altis.png', badge: 'Hemat BBM' },
      ];
      
      const foundCar = carsData.find(c => c.id === parseInt(carId));
      setCar(foundCar || null);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [carId]);

  const onFinish = (values) => {
    message.success('Reservasi berhasil diajukan!');
    form.resetFields();
    // navigate('/'); // Redirect jika perlu
  };  

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      className="bg-white"
    >
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-10 "> 
    
      <div className="bg-white p-8 rounded-xl shadow-lg border mt-10">
        {/* Tombol Kembali */}
       <button onClick={() => navigate(-1)} className="mb-4 flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeftOutlined /> Kembali
          </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {car ? `Reservasi Test Drive - ${car.name}` : 'Formulir Reservasi Test Drive'}
            </h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="tanggal"
            label="Tanggal"
            rules={[{ required: true, message: 'Pilih tanggal reservasi!' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            name="waktu"
            label="Waktu"
            rules={[{ required: true, message: 'Pilih waktu reservasi!' }]}
          >
            <TimePicker className="w-full" format="HH:mm" />
          </Form.Item>
          <Form.Item
            name="tempat"
            label="Tempat"
            rules={[{ required: true, message: 'Masukkan lokasi/area reservasi!' }]}
          >
            <Input placeholder="Contoh: Showroom Buleleng atau alamat Anda" />
          </Form.Item>
          <Form.Item
            name="pesan"
            label="Pesan (opsional)"
            rules={[]}
          >
            <Input.TextArea rows={3} placeholder="Pesan tambahan (opsional)" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Ajukan Reservasi
            </Button>
          </Form.Item>
        </Form>
          </div>

          {/* Car Image Section */}
          {car && (
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={car.imageUrl} 
                  alt={car.name}
                  className="w-full h-auto rounded-lg transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-2">{car.desc}</p>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <span>{car.mileage}</span>
                  <span>•</span>
                  <span>{car.fuel}</span>
                  <span>•</span>
                  <span>{car.transmission}</span>
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-3">
                  Rp {car.price.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default ReservationPage; 