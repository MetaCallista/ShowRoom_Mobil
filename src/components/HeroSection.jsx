// src/components/HeroSection.jsx
import React from 'react';
import { Select, Button, Space, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const HeroSection = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="assets/images/hero.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay hitam */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-2">
        <Text className="text-xs -mb-8 sm:text-xm text-white">
          Find cars for sale and for rent near you
        </Text>
        <Title className="!text-white text-lg sm:text-5xl font-bold">
          Find Your Dream Car
        </Title>

        {/* Filter Dropdown */}
        <div className="mt-8 flex justify-center">
          <Space
            size="middle"
            className="bg-white rounded-full px-4 py-2 shadow-lg flex-wrap"
          >
            <Select defaultValue="Used Cars" style={{ width: 140 }}>
              <Option value="used">Used Cars</Option>
              <Option value="new">New Cars</Option>
            </Select>

            <Select defaultValue="Any Makes" style={{ width: 140 }}>
              <Option value="toyota">Toyota</Option>
              <Option value="honda">Honda</Option>
              <Option value="bmw">BMW</Option>
            </Select>

            <Select defaultValue="Any Models" style={{ width: 140 }}>
              <Option value="civic">Civic</Option>
              <Option value="camry">Camry</Option>
              <Option value="fortuner">Fortuner</Option>
            </Select>

            <Select defaultValue="All Prices" style={{ width: 140 }}>
              <Option value="under100">Under $100k</Option>
              <Option value="100-300">$100k - $300k</Option>
              <Option value="300up">Above $300k</Option>
            </Select>

            <Button
              type="primary"
              shape="circle"
              icon={<SearchOutlined />}
              size="large"
            />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
