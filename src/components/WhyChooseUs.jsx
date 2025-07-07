import React from 'react';
import { SafetyCertificateOutlined, ToolOutlined, DollarCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';

const features = [
  {
    icon: <SafetyCertificateOutlined className="text-3xl text-blue-600" />,
    title: 'Lulus Inspeksi Ketat',
    description: 'Semua mobil kami melewati inspeksi 150+ titik untuk menjamin kondisi prima dan bebas masalah.',
  },
  {
    icon: <ToolOutlined className="text-3xl text-blue-600" />,
    title: 'Garansi Mesin 30 Hari',
    description: 'Kami memberikan garansi untuk mesin dan transmisi agar Anda bisa berkendara dengan tenang.',
  },
  {
    icon: <DollarCircleOutlined className="text-3xl text-blue-600" />,
    title: 'Harga Jujur & Terbaik',
    description: 'Harga kami transparan, kompetitif, dan tanpa ada biaya tersembunyi yang mengejutkan.',
  },
  {
    icon: <EnvironmentOutlined className="text-3xl text-blue-600" />,
    title: 'Showroom Lokal Buleleng',
    description: 'Kami hadir untuk melayani masyarakat Buleleng dan Bali Utara dengan pelayanan yang ramah.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Kenapa Memilih Showcar?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop"
                alt="Mobil berkualitas"
                className=" w-full h-auto transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;