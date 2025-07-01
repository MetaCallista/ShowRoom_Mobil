// src/components/WhyChooseUs.jsx
import React from 'react';
import { DollarCircleOutlined, SafetyCertificateOutlined, TagOutlined, ToolOutlined } from '@ant-design/icons';

const features = [
  {
    icon: <DollarCircleOutlined className="text-3xl text-blue-600" />,
    title: 'Special Financing Offers',
    description: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: <SafetyCertificateOutlined className="text-3xl text-blue-600" />,
    title: 'Trusted Car Dealership',
    description: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: <TagOutlined className="text-3xl text-blue-600" />,
    title: 'Transparent Pricing',
    description: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: <ToolOutlined className="text-3xl text-blue-600" />,
    title: 'Expert Car Service',
    description: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          {/* Left Column: Features */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us?
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
          {/* Right Column: Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
              alt="White sports car" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;