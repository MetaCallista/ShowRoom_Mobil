import React, { useState } from 'react';
import { Table, Button, Tag, Popconfirm, message, Input, Space, Avatar } from 'antd';
import { UserOutlined, EditOutlined, DeleteOutlined, SearchOutlined, CrownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

// Data Awal (Dummy)
const initialUserData = [
  {
    key: '1',
    id: 'admin456',
    nama: 'Admin Showroom',
    email: 'admin@gmail.com',
    role: 'admin',
    tanggal_bergabung: '2025-07-01',
    avatar: '/assets/images/admin-avatar.png',
  },
  {
    key: '2',
    id: 'user123',
    nama: 'Bli Penjual',
    email: 'penjual@gmail.com',
    role: 'penjual',
    tanggal_bergabung: '2025-07-02',
    avatar: '/assets/images/seller-avatar.png',
  },
  {
    key: '3',
    id: 'user789',
    nama: 'Gek Pembeli',
    email: 'pembeli@gmail.com',
    role: 'pengguna',
    tanggal_bergabung: '2025-07-03',
    avatar: '/assets/images/user-avatar.png',
  },
];

const KelolaPengguna = () => {
  const [dataSource, setDataSource] = useState(initialUserData);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleHapus = (record) => {
    if (record.role === 'admin') {
      message.error('Akun Admin tidak dapat dihapus.');
      return;
    }
    setDataSource(prev => prev.filter(item => item.id !== record.id));
    message.success(`Pengguna "${record.nama}" berhasil dihapus`);
  };

  const handleJadikanAdmin = (record) => {
    setDataSource(prev => prev.map(user => 
        user.id === record.id ? { ...user, role: 'admin' } : user
    ));
    message.success(`"${record.nama}" sekarang adalah seorang Admin.`);
  };

  const columns = [
    {
      title: 'Nama Pengguna',
      dataIndex: 'nama',
      key: 'nama',
      render: (text, record) => (
        <Space>
          <Avatar src={record.avatar} icon={<UserOutlined />} />
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Peran',
      dataIndex: 'role',
      key: 'role',
      render: (role) => (
        <Tag color={role === 'admin' ? 'gold' : 'blue'}>{role.toUpperCase()}</Tag>
      ),
      filters: [
        { text: 'Admin', value: 'admin' },
        { text: 'Penjual', value: 'penjual' },
        { text: 'Pengguna', value: 'pengguna' },
      ],
      onFilter: (value, record) => record.role.indexOf(value) === 0,
    },
    {
      title: 'Tanggal Bergabung',
      dataIndex: 'tanggal_bergabung',
      key: 'tanggal_bergabung',
      sorter: (a, b) => new Date(a.tanggal_bergabung) - new Date(b.tanggal_bergabung),
    },
    {
      title: 'Aksi',
      key: 'aksi',
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title={`Jadikan "${record.nama}" sebagai Admin?`}
            onConfirm={() => handleJadikanAdmin(record)}
            okText="Ya"
            cancelText="Batal"
            disabled={record.role === 'admin'}
          >
            <Button icon={<CrownOutlined />} disabled={record.role === 'admin'}>Jadikan Admin</Button>
          </Popconfirm>
          <Popconfirm
            title="Yakin ingin menghapus pengguna ini?"
            onConfirm={() => handleHapus(record)}
            okText="Ya, Hapus"
            cancelText="Batal"
            disabled={record.role === 'admin'}
          >
            <Button icon={<DeleteOutlined />} danger disabled={record.role === 'admin'} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const filteredData = dataSource.filter(item => 
    item.nama.toLowerCase().includes(searchText.toLowerCase()) ||
    item.email.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Kelola Pengguna</h1>
            <p className="text-gray-500">Daftar semua pengguna yang terdaftar di sistem.</p>
        </div>
      </div>
      
      <Input
        prefix={<SearchOutlined />}
        placeholder="Cari berdasarkan nama atau email..."
        size="large"
        onChange={(e) => setSearchText(e.target.value)}
        className="mb-6"
      />

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="key"
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default KelolaPengguna;