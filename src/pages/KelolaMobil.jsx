import React, { useState, useEffect } from 'react';
import { Table, Button, Tag, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const KelolaMobil = () => {
  const [loading, setLoading] = useState(true);
  const [mobilBaru, setMobilBaru] = useState([]);
  const [mobilBekas, setMobilBekas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Data dummy sesuai struktur database kamu
    const dummyNewVehicles = [
      {
        key: 1,
        vehicle_id: 1,
        type: 'Baru',
        transmission: 'Otomatis',
        seats: 7,
        color: 'Putih',
        year: 2024,
        location: 'Buleleng',
        fuel_type: 'Bensin',
        stock: 10,
      },
      {
        key: 2,
        vehicle_id: 2,
        type: 'Baru',
        transmission: 'Manual',
        seats: 5,
        color: 'Merah',
        year: 2023,
        location: 'Denpasar',
        fuel_type: 'Diesel',
        stock: 5,
      }
    ];

    const dummyUsedVehicles = [
      {
        key: 3,
        vehicle_id: 3,
        type: 'Bekas',
        transmission: 'Manual',
        seats: 5,
        color: 'Hitam',
        year: 2021,
        location: 'Gianyar',
        fuel_type: 'Bensin',
        mileage: 45000,
      }
    ];

    setMobilBaru(dummyNewVehicles);
    setMobilBekas(dummyUsedVehicles);
    setLoading(false);
  }, []);

  const handleDelete = (record) => {
    message.success(`Mobil ${record.vehicle_id} berhasil dihapus`);
    // Di real app: lakukan fetch/axios DELETE
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'vehicle_id',
      width: 60,
    },
    {
      title: 'Tipe',
      dataIndex: 'type',
      render: (text) => (
        <Tag color={text === 'Baru' ? 'green' : 'orange'}>{text}</Tag>
      ),
    },
    { title: 'Transmisi', dataIndex: 'transmission' },
    { title: 'Kursi', dataIndex: 'seats' },
    { title: 'Warna', dataIndex: 'color' },
    { title: 'Tahun', dataIndex: 'year' },
    { title: 'Lokasi', dataIndex: 'location' },
    { title: 'Bahan Bakar', dataIndex: 'fuel_type' },
    {
      title: 'Stok / KM',
      render: (_, record) =>
        record.type === 'Baru'
          ? `${record.stock} unit`
          : `${record.mileage?.toLocaleString()} KM`,
    },
    {
      title: 'Aksi',
      render: (_, record) => (
        <>
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => navigate(`/admin/mobil/edit/${record.vehicle_id}`)}
            style={{ marginRight: 8 }}
          />
          <Popconfirm
            title="Yakin ingin menghapus mobil ini?"
            onConfirm={() => handleDelete(record)}
            okText="Ya"
            cancelText="Batal"
          >
            <Button icon={<DeleteOutlined />} danger size="small" />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Mobil</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate('/admin/mobil/tambah')}>
          Tambah Mobil
        </Button>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Mobil Baru</h2>
      <Table
        columns={columns}
        dataSource={mobilBaru}
        loading={loading}
        pagination={false}
        rowKey="vehicle_id"
      />

      <h2 className="text-lg font-semibold text-gray-700 mt-10 mb-2">Mobil Bekas</h2>
      <Table
        columns={columns}
        dataSource={mobilBekas}
        loading={loading}
        pagination={false}
        rowKey="vehicle_id"
      />
    </div>
  );
};

export default KelolaMobil;
