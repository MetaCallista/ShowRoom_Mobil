import React from 'react';
import { Button } from 'antd';

const SellerCard = () => {
  return (
    // Kita hanya mengembalikan isinya, tanpa div pembungkus luar
    <>
      <div className="flex flex-col items-center text-center">
        <img src="/assets/images/seller-avatar.png" alt="Penjual" className="w-20 h-20 rounded-full" />
        <h3 className="font-bold text-lg mt-4">Ali Tufan</h3>
        <a href="#" className="text-sm text-blue-600 hover:underline">Lihat Profil</a>
      </div>
      <Button type="primary" block size="large" className="mt-6">
        Ajukan Penawaran
      </Button>
    </>
  );
};

export default SellerCard;
