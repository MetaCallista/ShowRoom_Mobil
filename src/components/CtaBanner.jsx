// src/components/CtaBanner.jsx
import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const CtaBanner = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          We Make Finding The <br />
          Right Car Simple
        </h2>
        <Button 
          type="default" 
          ghost 
          size="large" 
          className="mt-8 border-white text-white hover:bg-white hover:text-black"
          icon={<ArrowRightOutlined />}
        >
          Find Out More
        </Button>
      </div>
    </div>
  );
};

export default CtaBanner;