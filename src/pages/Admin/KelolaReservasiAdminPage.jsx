import React, { useState } from 'react';
import { Table, Tag, Space, Button, message } from 'antd';

const initialReservasiData = [
  { key: '1', id: 1, peminat: 'Gede', mobil: 'Toyota Avanza G 2019', tanggal: '2025-07-10 14:00', status: 'Menunggu Konfirmasi' },
  { key: '2', id: 2, peminat: 'Ayu', mobil: 'Daihatsu Xenia R 2020', tanggal: '2025-07-11 10:00', status: 'Dikonfirmasi' },
  { key: '3', id: 3, peminat: 'Ketut', mobil: 'Toyota Avanza G 2019', tanggal: '2025-07-08 16:00', status: 'Selesai' },
  { key: '4', id: 4, peminat: 'Wayan', mobil: 'Toyota Avanza G 2019', tanggal: '2025-07-12 09:00', status: 'Menunggu Konfirmasi' },
];

const KelolaReservasiAdminPage = () => {
    const [data, setData] = useState(initialReservasiData);

    const handleConfirm = (key) => {
        setData(prev => prev.map(item => item.key === key ? { ...item, status: 'Dikonfirmasi' } : item));
        message.success("Reservasi berhasil dikonfirmasi.");
    };

    const handleDecline = (key) => {
        setData(prev => prev.map(item => item.key === key ? { ...item, status: 'Ditolak' } : item));
        message.warning("Reservasi telah ditolak.");
    };

    const columns = [
        { title: 'Nama Peminat', dataIndex: 'peminat', key: 'peminat' },
        { title: 'Mobil yang Diminati', dataIndex: 'mobil', key: 'mobil' },
        { title: 'Jadwal Pertemuan', dataIndex: 'tanggal', key: 'tanggal' },
        { title: 'Status', dataIndex: 'status', key: 'status', render: status => {
            let color = 'default';
            if (status === 'Dikonfirmasi') color = 'success';
            if (status === 'Menunggu Konfirmasi') color = 'warning';
            if (status === 'Ditolak') color = 'error';
            return <Tag color={color}>{status}</Tag>;
        }},
        { title: 'Aksi', key: 'aksi', render: (_, record) => (
            <Space>
                {record.status === 'Menunggu Konfirmasi' && (
                    <>
                        <Button type="primary" size="small" onClick={() => handleConfirm(record.key)}>Konfirmasi</Button>
                        <Button size="small" danger onClick={() => handleDecline(record.key)}>Tolak</Button>
                    </>
                )}
            </Space>
        )},
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-6">Kelola Reservasi Pertemuan</h1>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default KelolaReservasiAdminPage;