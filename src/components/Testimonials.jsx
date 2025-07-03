import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard.jsx';

// Impor CSS wajib untuk react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
    { name: 'Ali Tufan', quote: 'Proses penjualannya sederhana dan mudah dipahami. Timnya ramah dan saya tidak merasa tertekan sama sekali.' },
    { name: 'Putu Suartawan', quote: 'Kerja bagus untuk koordinasinya. Prosesnya mudah dan salesnya sangat membantu saya memilih mobil yang tepat.' },
    { name: 'Brooklyn Simmons', quote: 'Prosesnya mudah. Salesnya ramah dan membuat pencarian serta pembelian mobil saya menjadi pengalaman yang menyenangkan.' },
    { name: 'Gede Wijaya', quote: 'Pelayanannya sangat memuaskan. Mobil yang saya terima kondisinya lebih baik dari yang saya harapkan. Terima kasih!' },
    { name: 'Jane Smith', quote: 'Pengalaman yang luar biasa dari awal sampai akhir. Sangat direkomendasikan untuk siapa pun yang mencari mobil bekas berkualitas di Buleleng.' },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className="bg-gray-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Peringkat 4.7 / 5 berdasarkan 28,370 ulasan. Menampilkan ulasan bintang 4 & 5 kami.
          </p>
        </div>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
