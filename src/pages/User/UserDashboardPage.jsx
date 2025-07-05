import React from 'react';
import { Card, Statistic, Row, Col } from 'antd';
import { CarOutlined, CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext.jsx';

const UserDashboardPage = () => {
    const { currentUser } = useAuth();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">Selamat Datang, {currentUser?.nama}!</h1>
            <p className="text-gray-600 mb-6">Ini adalah ringkasan aktivitas penjualan mobil Anda.</p>
            <Row gutter={[16, 16]}>
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
        </div>
    );
};

export default UserDashboardPage;