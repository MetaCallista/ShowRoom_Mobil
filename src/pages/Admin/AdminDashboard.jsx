import React from 'react';
import { Card, Statistic, Row, Col, Progress, Table, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CarOutlined, UserOutlined, DollarCircleOutlined, FileTextOutlined } from '@ant-design/icons';

// Data dummy untuk tabel
const recentSalesData = [
  { key: '1', name: 'Toyota Avanza G', price: 'Rp 250.000.000', status: 'Terjual', seller: 'Bli Made' },
  { key: '2', name: 'Daihatsu Xenia R', price: 'Rp 230.000.000', status: 'Tersedia', seller: 'Gek Ayu' },
  { key: '3', name: 'Honda Brio Satya', price: 'Rp 180.000.000', status: 'Tersedia', seller: 'Bli Ketut' },
  { key: '4', name: 'Suzuki Ertiga GL', price: 'Rp 245.000.000', status: 'Terjual', seller: 'Bli Wayan' },
];

const columns = [
  { title: 'Nama Mobil', dataIndex: 'name', key: 'name' },
  { title: 'Harga', dataIndex: 'price', key: 'price' },
  { title: 'Penjual', dataIndex: 'seller', key: 'seller' },
  { title: 'Status', key: 'status', dataIndex: 'status', render: status => (
      <Tag color={status === 'Terjual' ? 'volcano' : 'green'}>{status.toUpperCase()}</Tag>
    ),
  },
];

const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            {/* Kartu Statistik Utama */}
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={8}>
                    <Card>
                        <Statistic
                            title="Total Mobil Tersedia"
                            value={42}
                            valueStyle={{ color: '#1890ff' }}
                            prefix={<CarOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card>
                        <Statistic
                            title="Pengguna Baru (Bulan Ini)"
                            value={15}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix={<UserOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card>
                        <Statistic
                            title="Total Artikel Blog"
                            value={25}
                            valueStyle={{ color: '#1890ff' }}
                            prefix={<FileTextOutlined />}
                        />
                    </Card>
                </Col>
            </Row>

            {/* Bagian Chart dan Tabel */}
            <Row gutter={[16, 16]}>
                {/* Kolom Kiri: Tabel Penjualan Terbaru */}
                <Col xs={24} lg={16}>
                    <Card title="Aktivitas Penjualan Terbaru">
                        <Table columns={columns} dataSource={recentSalesData} pagination={false} />
                    </Card>
                </Col>

                {/* Kolom Kanan: Progress Penjualan */}
                <Col xs={24} lg={8}>
                    <Card title="Target Penjualan Tahunan">
                        <div className="text-center">
                            <Progress type="circle" percent={75} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
                            <p className="font-semibold text-lg mt-4">Rp 3.6 M / Rp 4.8 M</p>
                            <p className="text-gray-500">Target tahun 2025</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AdminDashboard;