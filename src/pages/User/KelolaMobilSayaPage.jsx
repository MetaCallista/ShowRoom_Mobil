import React, { useState, useEffect } from 'react';
import { Table, Button, Tag, Popconfirm, notification, Input, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCar } from '../../context/CarContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const KelolaMobilSayaPage = () => {
  const { cars, deleteCar } = useCar();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Efek untuk menampilkan notifikasi setelah redirect dari halaman tambah/edit
  useEffect(() => {
    if (location.state?.message) {
      notification.success({
        message: 'Berhasil',
        description: location.state.message,
        placement: 'topRight',
      });
      // Hapus state setelah notifikasi ditampilkan
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  // Filter mobil agar hanya menampilkan mobil milik user yang sedang login
  const myCars = cars.filter(car => car.sellerId === currentUser?.uid);

  const handleDelete = (record) => {
    deleteCar(record.id);
    notification.success({
        message: 'Berhasil Dihapus',
        description: `Mobil "${record.nama_mobil}" telah dihapus dari daftar.`,
        placement: 'topRight',
    });
  };

  const columns = [
    { title: 'Nama Mobil', dataIndex: 'nama_mobil', key: 'nama_mobil' },
    { title: 'Harga', dataIndex: 'price', key: 'price', render: (price) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price) },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status) => (<Tag color={status === 'Tersedia' ? 'green' : 'volcano'}>{status}</Tag>) },
    { title: 'Aksi', key: 'aksi', render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => navigate(`/profil/mobil/edit/${record.id}`)}>Edit</Button>
          <Popconfirm title="Yakin ingin menghapus mobil ini?" onConfirm={() => handleDelete(record)} okText="Ya" cancelText="Batal">
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </Space>
    )},
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Kelola Mobil Saya</h1>
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          size="large" 
          onClick={() => navigate('/profil/jual-mobil')}
        >
          Jual Mobil Baru
        </Button>
      </div>
      <p className="text-gray-600 mb-6">Berikut adalah daftar semua mobil yang sedang Anda jual di platform Showcar Buleleng.</p>
      <Table 
        columns={columns} 
        dataSource={myCars} 
        rowKey="key" 
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default KelolaMobilSayaPage;