import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const reservasi = {
  peminat: 'Ayu',
  lokasi: 'Gianyar',
  tanggal: '2025-07-11 10:00',
  status: 'Menunggu Konfirmasi',
  deskripsi: 'Mantap Pak Saya Mau Tiga, Perkenalkan Nama Saya Subahasajadsadladlakdlakdks',
};

const mobil = {
  imageUrl: '/assets/images/bmw-x6.png',
  nama: 'Toyota Camry Baru',
  mileage: '32 KM',
  fuel: 'Bensin',
  transmission: 'Otomatis',
  harga: 625000000,
};

const DetailReservasiAdminPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-7xl mx-auto">
      <button onClick={() => navigate('/admin/reservasi', { state: { tab: '2' } })} className="mb-4 flex items-center gap-2 text-blue-600 hover:underline">
        <ArrowLeftOutlined /> Kembali
      </button>
      <div className="flex flex-col md:flex-row items-start">
        {/* Kiri: Info Reservasi */}
        <div className="flex-[2] min-w-0">
          <h2 className="text-2xl font-bold mb-5 pt-5 px-10">Reservasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-5 mb-6 px-10">
            <div>
              <div className="font-semibold">Nama Peminat</div>
              <div>{reservasi.peminat}</div>
            </div>
            <div>
              <div className="font-semibold">Lokasi</div>
              <div>{reservasi.lokasi}</div>
            </div>
            <div>
              <div className="font-semibold">Jadwal Pertemuan</div>
              <div>{reservasi.tanggal}</div>
            </div>
            <div>
              <div className="font-semibold">Status</div>
              <div>{reservasi.status}</div>
            </div>
          </div>
          <div className="font-semibold mb-1 px-10">Deskripsi</div>
          <div className="whitespace-pre-line px-10">{reservasi.deskripsi}</div>
        </div>
        {/* Kanan: Info Mobil */}
        <div className="flex-[1.5] flex flex-col items-center w-full pr-8">
          <img
            src={mobil.imageUrl}
            alt={mobil.nama}
            className="rounded-lg w-full aspect-video object-cover mb-4"
          />
          <div className="text-center">
            <div className="font-bold text-lg mb-1">{mobil.nama}</div>
            <div className="text-gray-500 text-sm mb-2">
              {mobil.mileage} &nbsp;•&nbsp; {mobil.fuel} &nbsp;•&nbsp; {mobil.transmission}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              Rp {mobil.harga.toLocaleString('id-ID')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReservasiAdminPage; 