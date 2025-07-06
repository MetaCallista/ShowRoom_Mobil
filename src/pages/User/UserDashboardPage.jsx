import React from 'react';
import { Card, Statistic, Row, Col, Progress, Table, Tag} from 'antd';
import { CarOutlined, CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext.jsx';

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



const UserDashboardPage = () => {
    const { currentUser } = useAuth();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">Selamat Datang, {currentUser?.nama}!</h1>
            <p className="text-gray-600 mb-6">Ini adalah ringkasan aktivitas penjualan mobil Anda.</p>
            <Row gutter={[16, 16]} className="mb-6">
                <Col xs={24} md={8}>
                    <Card>
                        <Statistic
                            title="Mobil Aktif Dijual"
                            value={5} // Data dummy
                            prefix={<CarOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card>
                        <Statistic
                            title="Permintaan Pertemuan Baru"
                            value={2} // Data dummy
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<CalendarOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card>
                        <Statistic
                            title="Mobil Terjual"
                            value={12} // Data dummy
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<CheckCircleOutlined />}
                        />
                    </Card>
                </Col>
            </Row>

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

export default UserDashboardPage;