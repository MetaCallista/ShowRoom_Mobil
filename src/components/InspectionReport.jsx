import React from 'react';
import { Button } from 'antd';
// Hapus DownloadOutlined dari sini
import { CheckCircleFilled } from '@ant-design/icons';

const InspectionReport = () => {
    const inspectionItems = [
        'Mesin & Ruang Mesin', 'Transmisi', 'Sistem Pengereman',
        'Kaki-kaki & Suspensi', 'Eksterior & Bodi', 'Interior & Fitur',
        'Sistem Kelistrikan', 'Surat-surat & Dokumen'
    ];

    return (
        <div className="pt-4">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Laporan Hasil Inspeksi</h2>
            <div className="p-6 bg-gray-50 rounded-lg">
                {/* Teks diubah sedikit */}
                <p className="text-gray-600 mb-6">
                    Setiap mobil kami telah melalui inspeksi 150+ titik oleh mekanik profesional. Berikut adalah ringkasan area utama yang telah kami periksa dan pastikan dalam kondisi baik.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                    {inspectionItems.map(item => (
                        <li key={item} className="flex items-center gap-2">
                            <CheckCircleFilled className="text-green-500" />
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
                {/* Tombol Download dihapus dari sini */}
            </div>
        </div>
    );
}

export default InspectionReport;