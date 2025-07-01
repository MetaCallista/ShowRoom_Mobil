import React from 'react';
import { Input, Button } from 'antd';
import { FacebookFilled, TwitterOutlined, InstagramOutlined, LinkedinFilled, ArrowUpOutlined } from '@ant-design/icons';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Newsletter Section - REVISED */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Join BoxCar</h3>
            <p className="text-sm text-gray-600 mt-1">Receive pricing updates, shopping tips & more!</p>
          </div>
          <div className="w-full md:w-auto flex items-center gap-2">
            <Input 
              size="large" 
              placeholder="Your email address" 
              className="w-64" // Memberi lebar yang cukup
            />
            <Button 
              size="large"
              // Mengubah gaya tombol menjadi gelap
              className="bg-gray-900 hover:bg-gray-700 text-white border-none"
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Links Section (Tidak ada perubahan di sini) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-16 text-sm">
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Company</h4>
            <a href="#" className="block hover:text-blue-600">About Us</a>
            <a href="#" className="block hover:text-blue-600">Blog</a>
            <a href="#" className="block hover:text-blue-600">Services</a>
            <a href="#" className="block hover:text-blue-600">FAQs</a>
            <a href="#" className="block hover:text-blue-600">Terms</a>
            <a href="#" className="block hover:text-blue-600">Contact Us</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Quick Links</h4>
            <a href="#" className="block hover:text-blue-600">Get in Touch</a>
            <a href="#" className="block hover:text-blue-600">Help center</a>
            <a href="#" className="block hover:text-blue-600">Live chat</a>
            <a href="#" className="block hover:text-blue-600">How it works</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Our Brands</h4>
            <a href="#" className="block hover:text-blue-600">Toyota</a>
            <a href="#" className="block hover:text-blue-600">Porsche</a>
            <a href="#" className="block hover:text-blue-600">Audi</a>
            <a href="#" className="block hover:text-blue-600">BMW</a>
            <a href="#" className="block hover:text-blue-600">Ford</a>
            <a href="#" className="block hover:text-blue-600">Nissan</a>
            <a href="#" className="block hover:text-blue-600">Peugeot</a>
            <a href="#" className="block hover:text-blue-600">Volkswagen</a>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Vehicles Type</h4>
            <a href="#" className="block hover:text-blue-600">Sedan</a>
            <a href="#" className="block hover:text-blue-600">Hatchback</a>
            <a href="#" className="block hover:text-blue-600">SUV</a>
            <a href="#" className="block hover:text-blue-600">Hybrid</a>
            <a href="#" className="block hover:text-blue-600">Electric</a>
            <a href="#" className="block hover:text-blue-600">Coupe</a>
            <a href="#" className="block hover:text-blue-600">Truck</a>
            <a href="#" className="block hover:text-blue-600">Convertible</a>
          </div>
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h4 className="font-bold text-gray-900">Sale Hours</h4>
            <p>Monday – Friday: 09:00AM – 09:00 PM</p>
            <p>Saturday: 09:00AM – 07:00 PM</p>
            <p>Sunday: Closed</p>
            <h4 className="font-bold text-gray-900 pt-4">Connect With Us</h4>
            <div className="flex gap-4 text-xl">
                <a href="#" className="hover:text-blue-600"><FacebookFilled /></a>
                <a href="#" className="hover:text-blue-600"><TwitterOutlined /></a>
                <a href="#" className="hover:text-blue-600"><InstagramOutlined /></a>
                <a href="#" className="hover:text-blue-600"><LinkedinFilled /></a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar (Tidak ada perubahan di sini) */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 example.com. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-600">Privacy Notice</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button (Tidak ada perubahan di sini) */}
      <Button 
        type="primary" 
        shape="circle" 
        icon={<ArrowUpOutlined />} 
        size="large"
        className="fixed bottom-8 right-8 z-50"
        onClick={handleScrollToTop}
      />
    </footer>
  );
};

export default Footer;