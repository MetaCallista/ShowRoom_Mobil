import React from 'react';
import { CalendarOutlined, CarOutlined, SettingOutlined, DashboardOutlined, BgColorsOutlined, SlidersOutlined, CloudServerOutlined, ThunderboltOutlined } from '@ant-design/icons'; 

const CarOverview = ({ overview }) => {
  const items = [
    { icon: <CalendarOutlined />, label: 'Year', value: overview.year },
    { icon: <CarOutlined />, label: 'Make', value: overview.make },
    { icon: <SettingOutlined />, label: 'Model', value: overview.model },
    { icon: <SlidersOutlined />, label: 'Trim', value: overview.trim },
    { icon: <DashboardOutlined />, label: 'Mileage', value: overview.mileage },
    { icon: <BgColorsOutlined />, label: 'Body Type', value: overview.body_type },
    { icon: <ThunderboltOutlined />, label: 'Fuel Type', value: overview.fuel_type },
    { icon: <CloudServerOutlined />, label: 'Transmission', value: overview.transmission },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Car Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 p-6 border rounded-lg">
        {items.map(item => (
          <div key={item.label} className="flex items-center gap-3 text-sm">
            <span className="text-blue-500 text-lg">{item.icon}</span>
            <div>
              <p className="text-gray-500">{item.label}</p>
              <p className="font-semibold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarOverview;