import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Ganti Link jadi useNavigate


const cards = [
  {
    title: 'Apakah kamu ingin\nMelihat Mobil?',
    desc: 'We are committed to providing our customers with exceptional service.',
    img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
    link: '/listing', // Ganti dengan path tujuan
  },
  {
    title: 'Apakah kamu ingin\nMenjual Mobil?',
    desc: 'We are committed to providing our customers with exceptional service.',
    img: 'https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=800&q=80',
    link: '/sell', // Ganti dengan path tujuan
    requireLogin: true,
  },
];

const DualCtaCard = () => {
  const navigate = useNavigate();

  const handleClick = (card) => {
    if (card.requireLogin) {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        navigate('/login');
        return;
      }
    }
    navigate(card.link);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[300px] flex items-end overflow-hidden shadow-md transition-all duration-300 group"
            >
              <div 
                className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="relative z-10 p-8 w-full flex flex-col justify-end h-full">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 whitespace-pre-line">{card.title}</h2>
                <p className="text-white text-base mb-6">{card.desc}</p>
                <Button
                  type="default"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  className="bg-white text-gray-900 font-semibold rounded-lg px-6 py-2 w-fit overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  onClick={() => handleClick(card)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DualCtaCard;