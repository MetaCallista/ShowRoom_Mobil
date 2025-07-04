import React from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, DashboardOutlined, FireOutlined, GatewayOutlined } from '@ant-design/icons';

const CarCard = ({ car }) => {
  const getBadgeColor = (text) => {
    // ... (kode fungsi getBadgeColor biarkan seperti sebelumnya)
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative">
        <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover" />
        {car.badge && (
          <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded ${getBadgeColor(car.badge)}`}>
            {car.badge}
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
          <HeartOutlined className="text-gray-500" />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-gray-800 truncate">{car.name}</h3>
        <p className="text-sm text-gray-500 truncate">{car.spec}</p>
        
        <div className="flex justify-between items-center text-gray-600 border-t border-b py-3">
          <div className="flex items-center gap-2">
            <DashboardOutlined />
            <span className="text-sm">{car.mileage}</span>
          </div>
          <div className="flex items-center gap-2">
            <FireOutlined />
            <span className="text-sm">{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <GatewayOutlined />
            <span className="text-sm">{car.transmission}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-xl font-bold text-gray-900">${car.price.toLocaleString()}</p>
          <Link to={`/cars/${car.id}`} className="text-sm font-semibold text-blue-600 hover:text-blue-800">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;