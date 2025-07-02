import React from 'react';

const DetailHero = () => {
  return (
    <div className="relative w-full h-[300px] -mb-20"> {/* Margin bawah negatif untuk menarik konten ke atas */}
      <img
        src="../assets/images/hero.jpg" // Anda bisa ganti dengan gambar lain
        alt="Hero background"
        className="w-full h-full object-cover"
      />
      {/* Lapisan overlay gelap agar teks navbar lebih terbaca */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
};

export default DetailHero;