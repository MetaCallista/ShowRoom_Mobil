import React from 'react';
import { Link } from 'react-router-dom';
import {  DashboardOutlined, FireOutlined, GatewayOutlined } from '@ant-design/icons';

const CarCard = ({ car }) => {

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 group bg-white hover:-translate-y-1">
      <div className="relative">
        <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-gray-800 truncate">{car.name}</h3>
        <p className="text-sm text-gray-500 truncate">{car.desc}</p>
        
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