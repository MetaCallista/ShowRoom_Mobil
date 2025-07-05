import React from 'react';
import { EnvironmentOutlined, PhoneOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

// Destructure the props directly in the function signature
const SellerCard = ({ sellerImage, sellerName, sellerAddress, sellerPhone }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl border p-6 shadow flex flex-col items-center gap-4">
      {/* Profile Photo */}
      <img
        // Use sellerImage prop here
        src={sellerImage}
        alt={sellerName || "Seller"} // Use sellerName for alt text or a default
        className="w-16 h-16 rounded-full border-2 border-white shadow "
      />
      {/* Name and Address */}
      <div className="text-center">
        {/* Use sellerName prop here */}
        <div className="font-bold text-lg">{sellerName}</div>
        {/* Use sellerAddress prop here */}
        <div className="text-gray-500 text-sm">{sellerAddress}</div>
      </div>
      {/* Contact */}
      <div className="flex justify-center gap-4 w-full my-2">
        <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
          <EnvironmentOutlined /> Get Direction
        </div>
        <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
          <PhoneOutlined /> {sellerPhone} {/* Use sellerPhone prop here */}
        </div>
      </div>
      {/* Action Buttons */}
      <button 
      className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl mt-2 flex items-center justify-center gap-2 hover:bg-blue-700 transition"
      onClick={() => navigate('/reservation')}
      >
        Ajukan Reservasi <ArrowRightOutlined />
      </button>
      <button className="w-full border border-green-400 text-green-600 font-semibold py-3 rounded-xl mt-2 flex items-center justify-center gap-2 hover:bg-green-50 transition">
        Chat Via Whatsapp <ArrowRightOutlined />
      </button>
      {/* Link to all stock */}
      <a href="#" className="block text-center text-gray-600 mt-4 hover:underline text-sm flex items-center justify-center gap-1">
        View All stock at this dealer <ArrowRightOutlined />
      </a>
    </div>
  );
};

export default SellerCard;