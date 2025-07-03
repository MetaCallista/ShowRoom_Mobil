import React from 'react';
import { StarFilled, CheckCircleFilled } from '@ant-design/icons';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mx-2">
      <div className="flex items-center gap-1 text-green-500">
        {[...Array(5)].map((_, i) => <StarFilled key={i} />)}
      </div>
      <div className="flex items-center gap-2 mt-2 text-xs text-green-600 font-semibold">
        <CheckCircleFilled />
        <span>Terverifikasi</span>
      </div>
      <p className="mt-4 text-gray-700 text-sm">{testimonial.quote}</p>
      <p className="mt-4 font-bold text-gray-900 text-sm">{testimonial.name}</p>
    </div>
  );
};

export default TestimonialCard;