import React, { useState } from 'react';
import { Table, Tag, Space, Button, message, Popconfirm, Tabs } from 'antd'; // Import Tabs
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const initialReservasiData = [
  { key: '1', id: 1, peminat: 'Gede', mobil: 'Toyota Avanza G 2019', tanggal: '2025-07-10 14:00', lokasi: 'Denpasar', status: 'Menunggu Konfirmasi', tipe: 'diajukan' },
  { key: '2', id: 2, peminat: 'Ayu', mobil: 'Daihatsu Xenia R 2020', tanggal: '2025-07-11 10:00', lokasi: 'Gianyar', status: 'Dikonfirmasi', tipe: 'masuk' },
  { key: '3', id: 3, peminat: 'Ketut', mobil: 'Honda Brio RS 2021', tanggal: '2025-07-08 16:00', lokasi: 'Tabanan', status: 'Ditolak', tipe: 'masuk' },
  { key: '4', id: 4, peminat: 'Wayan', mobil: 'Mitsubishi Pajero', tanggal: '2025-07-12 09:00', lokasi: 'Badung', status: 'Menunggu Konfirmasi', tipe: 'masuk' },
];

const KelolaReservasiPage = () => {
  const [data, setData] = useState(initialReservasiData);
  const location = useLocation();
  const defaultTab = location.state?.tab || '1';

  const handleConfirm = (key) => {
    setData(prev => prev.map(item => item.key === key ? { ...item, status: 'Dikonfirmasi' } : item));
    message.success("Reservasi berhasil dikonfirmasi.");
  };

  const handleDecline = (key) => {
    setData(prev => prev.map(item => item.key === key ? { ...item, status: 'Ditolak' } : item));
    message.warning("Reservasi telah ditolak.");
  };

  const handleDelete = (key, peminat, mobil) => {
    setData(prev => prev.filter(item => item.key !== key));
    message.success(`Reservasi dari ${peminat} untuk ${mobil} berhasil dihapus.`);
  };

  const handleEdit = (key) => {
    message.info(`Edit reservasi dengan key: ${key}`);
  };

  // Kolom untuk Reservasi Diajukan (Hapus & Edit)
  const columnsDiajukan = [
    { title: 'Nama Peminat', dataIndex: 'peminat', key: 'peminat' },
    { title: 'Mobil yang Diminati', dataIndex: 'mobil', key: 'mobil' },
    { title: 'Jadwal Pertemuan', dataIndex: 'tanggal', key: 'tanggal' },
    { title: 'Lokasi', dataIndex: 'lokasi', key: 'lokasi' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        let color = 'default';
        if (status === 'Dikonfirmasi') color = 'green';
        if (status === 'Menunggu Konfirmasi') color = 'orange';
        if (status === 'Ditolak') color = 'red';
        return <Tag color={color}>{status}</Tag>;
      }
    },
    {
      title: 'Aksi',
      key: 'aksi',
      render: (_, record) => (
        <Space size="small">
          {/* Tombol Edit */}
          <Button icon={<EditOutlined />} size="small" onClick={() => handleEdit(record.key)}>
            Edit
          </Button>
          {/* Popconfirm untuk Hapus */}
          <Popconfirm
            title={`Yakin ingin menghapus reservasi dari "${record.peminat}" untuk mobil "${record.mobil}"? Ini akan menghapus permanen.`}
            onConfirm={() => handleDelete(record.key, record.peminat, record.mobil)}
            okText="Ya, Hapus"
            cancelText="Batal"
          >
            <Button icon={<DeleteOutlined />} danger size="small" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Kolom untuk Reservasi Masuk (Konfirmasi, Tolak, Hapus, Mata di dalam Aksi)
  const columnsMasuk = [
    { title: 'Nama Peminat', dataIndex: 'peminat', key: 'peminat' },
    { title: 'Mobil yang Diminati', dataIndex: 'mobil', key: 'mobil' },
    { title: 'Jadwal Pertemuan', dataIndex: 'tanggal', key: 'tanggal' },
    { title: 'Lokasi', dataIndex: 'lokasi', key: 'lokasi' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        let color = 'default';
        if (status === 'Dikonfirmasi') color = 'green';
        if (status === 'Menunggu Konfirmasi') color = 'orange';
        if (status === 'Ditolak') color = 'red';
        return <Tag color={color}>{status}</Tag>;
      }
    },
    {
      title: 'Aksi',
      key: 'aksi',
      render: (_, record) => (
        <Space size="small">
          {/* Tombol Preview */}
          <Link to={`/user/reservasi/detail`}>
            <Button icon={<EyeOutlined />} size="small" />
          </Link>
          {/* Popconfirm untuk Konfirmasi */}
          {record.status === 'Menunggu Konfirmasi' && (
            <Popconfirm
              title={`Yakin ingin MENGONFIRMASI reservasi ini dari "${record.peminat}"?`}
              onConfirm={() => handleConfirm(record.key)}
              okText="Ya, Konfirmasi"
              cancelText="Batal"
            >
              <Button type="primary" size="small">Konfirmasi</Button>
            </Popconfirm>
          )}
          {/* Popconfirm untuk Tolak */}
          {record.status === 'Menunggu Konfirmasi' && (
            <Popconfirm
              title={`Yakin ingin MENOLAK reservasi ini dari "${record.peminat}"?`}
              onConfirm={() => handleDecline(record.key)}
              okText="Ya, Tolak"
              cancelText="Batal"
            >
              <Button size="small" danger>Tolak</Button>
            </Popconfirm>
          )}
          {/* Popconfirm untuk Hapus */}
          <Popconfirm
            title={`Yakin ingin menghapus reservasi dari "${record.peminat}" untuk mobil "${record.mobil}"? Ini akan menghapus permanen.`}
            onConfirm={() => handleDelete(record.key, record.peminat, record.mobil)}
            okText="Ya, Hapus"
            cancelText="Batal"
          >
            <Button icon={<DeleteOutlined />} danger size="small" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Filter data untuk masing-masing tab
  const reservasiDiajukan = data.filter(item => item.tipe === 'diajukan');
  const reservasiMasuk = data.filter(item => item.tipe === 'masuk');

  // Definisikan item untuk Tabs
  const tabItems = [
    {
      key: '1',
      label: `Reservasi Diajukan (${reservasiDiajukan.length})`,
      children: <Table columns={columnsDiajukan} dataSource={reservasiDiajukan} rowKey="key" pagination={false} />,
    },
    {
      key: '2',
      label: 'Reservasi Masuk',
      children: <Table columns={columnsMasuk} dataSource={reservasiMasuk} rowKey="key" pagination={false} />,
    },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6">Kelola Reservasi Pertemuan</h1>
      {/* Gunakan komponen Tabs di sini */}
      <Tabs defaultActiveKey={defaultTab} items={tabItems} />
      {/* Hapus tabel yang redundan di bawah ini */}
      {/* <Table columns={columns} dataSource={data} rowKey="key" /> */}
    </div>
  );
};

export default KelolaReservasiPage;