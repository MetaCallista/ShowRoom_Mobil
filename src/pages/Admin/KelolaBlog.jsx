import React, { useState } from 'react';
import { Table, Button, Tag, Popconfirm, message, Input, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext.jsx'; // <-- Impor context

const KelolaBlog = () => {
  const { posts, deletePost } = useBlog(); // <-- Gunakan data & fungsi dari context
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleHapus = (record) => {
    deletePost(record.id); // Panggil fungsi delete dari context
    message.success(`Artikel "${record.judul}" berhasil dihapus`);
  };

  const columns = [
    { title: 'Judul Artikel', dataIndex: 'judul', key: 'judul' },
    { title: 'Penulis', dataIndex: 'penulis', key: 'penulis' },
    { title: 'Tanggal Terbit', dataIndex: 'tanggal_terbit', key: 'tanggal_terbit' },
    { title: 'Aksi', key: 'aksi', render: (_, record) => (<Space size="middle"><Button icon={<EditOutlined />} onClick={() => navigate(`/admin/blog/edit/${record.id}`)}>Edit</Button><Popconfirm title="Yakin ingin menghapus artikel ini?" onConfirm={() => handleHapus(record)} okText="Ya, Hapus" cancelText="Batal"><Button icon={<DeleteOutlined />} danger /></Popconfirm></Space>), },
  ];

  const filteredData = posts.filter(item => 
    item.judul.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Kelola Blog</h1>
            <p className="text-gray-500">Tambah, edit, atau hapus artikel dan berita di website.</p>
        </div>
        <Button type="primary" icon={<PlusOutlined />} size="large" onClick={() => navigate('/admin/blog/tambah')}>
          Tambah Artikel
        </Button>
      </div>
      <Input prefix={<SearchOutlined />} placeholder="Cari berdasarkan judul artikel..." size="large" onChange={(e) => setSearchText(e.target.value)} className="mb-6" />
      <Table columns={columns} dataSource={filteredData} rowKey="key" scroll={{ x: 'max-content' }} />
    </div>
  );
};

export default KelolaBlog;