import React, { useState } from 'react';
import { Table, Button, Tag, Popconfirm, message, Input, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useCar } from '../../context/CarContext.jsx'; // <-- Impor context

const KelolaMobilUser = () => {
  const { cars, deleteCar } = useCar(); // <-- Gunakan data dan fungsi dari context
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleDelete = (record) => {
    deleteCar(record.id); // Panggil fungsi delete dari context
    message.success(`Mobil "${record.nama_mobil}" berhasil dihapus`);
  };

  // ... (definisi 'columns' Anda tetap sama) ...
  const columns = [
    { title: 'Nama Mobil', dataIndex: 'nama_mobil', key: 'nama_mobil', sorter: (a, b) => a.nama_mobil.localeCompare(b.nama_mobil) },
    { title: 'Merk', dataIndex: 'brand', key: 'brand', filters: [{ text: 'Toyota', value: 'Toyota' }, { text: 'Honda', value: 'Honda' }, { text: 'Daihatsu', value: 'Daihatsu' }], onFilter: (value, record) => record.brand.indexOf(value) === 0 },
    { title: 'Tahun', dataIndex: 'year', key: 'year', sorter: (a, b) => a.year - b.year },
    { title: 'Jarak Tempuh', dataIndex: 'mileage', key: 'mileage', render: (km) => `${km.toLocaleString()} KM`, sorter: (a, b) => a.mileage - b.mileage },
    { title: 'Harga', dataIndex: 'price', key: 'price', render: (price) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price), sorter: (a, b) => a.price - b.price },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status) => (<Tag color={status === 'Tersedia' ? 'green' : 'volcano'}>{status}</Tag>), filters: [{ text: 'Tersedia', value: 'Tersedia' }, { text: 'Terjual', value: 'Terjual' }], onFilter: (value, record) => record.status.indexOf(value) === 0 },
    { title: 'Aksi', key: 'aksi', render: (_, record) => (<Space size="middle"><Button icon={<EditOutlined />} onClick={() => navigate(`/user/mobil/edit/${record.id}`)}>Edit</Button><Popconfirm title="Yakin ingin menghapus mobil ini?" onConfirm={() => handleDelete(record)} okText="Ya, Hapus" cancelText="Batal"><Button icon={<DeleteOutlined />} danger /></Popconfirm></Space>), },
  ];

  const filteredData = cars.filter(item => 
    item.nama_mobil?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Kelola Mobil Bekas</h1>
            <p className="text-gray-500">Daftar semua mobil bekas yang ada di showroom Anda.</p>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large" onClick={() => navigate('/user/mobil/tambah')}>
          Tambah Mobil
        </Button>
      </div>
      <Input prefix={<SearchOutlined />} placeholder="Cari berdasarkan nama mobil..." size="large" onChange={(e) => setSearchText(e.target.value)} className="mb-6" />
      <Table columns={columns} dataSource={filteredData} rowKey="key" scroll={{ x: 'max-content' }} />
    </div>
  );
};

export default KelolaMobilUser;