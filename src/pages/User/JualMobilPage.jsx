import React from 'react';
import { Form, Input, Button, Select, InputNumber, Upload, notification, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { InboxOutlined } from '@ant-design/icons';
import { useCar } from '../../context/CarContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const { Option } = Select;
const { Dragger } = Upload;

const JualMobilPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { addCar } = useCar();
  const { currentUser } = useAuth();

  const normFile = (e) => {
    if (Array.isArray(e)) { return e; }
    return e && e.fileList;
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      notification.error({
        message: 'Tipe File Salah',
        description: 'Anda hanya bisa mengunggah file JPG/PNG!',
        placement: 'topRight',
      });
    }
    return isJpgOrPng ? false : Upload.LIST_IGNORE;
  };

  const onFinish = (values) => {
    try {
        // Panggil fungsi addCar dengan data form dan ID pengguna yang sedang login
        addCar(values, currentUser.uid);
        
        // Mengirim pesan melalui state navigasi untuk ditampilkan di halaman Kelola Mobil
        navigate('/profil/mobil-saya', { 
            state: { message: 'Mobil Anda berhasil diajukan dan akan segera kami review.' } 
        });
    } catch (error) {
        notification.error({
            message: 'Gagal',
            description: 'Terjadi kesalahan saat mengajukan penjualan mobil.',
            placement: 'topRight',
        });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Jual Mobil Bekas Anda</h1>
        <p className="text-gray-600 mb-6">Lengkapi formulir di bawah ini dengan detail mobil yang ingin Anda jual. Tim kami akan mereviewnya sebelum ditampilkan di website.</p>
        <Form 
            form={form} 
            layout="vertical" 
            onFinish={onFinish} 
            initialValues={{ 
                transmission: 'Otomatis', 
                fuel_type: 'Bensin', 
                location: 'Buleleng, Bali' 
            }}
        >
          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item name="nama_mobil" label="Nama Mobil Lengkap" rules={[{ required: true, message: 'Nama mobil wajib diisi!' }]}><Input placeholder="Contoh: Toyota Avanza G 2019" /></Form.Item>
              <Form.Item name="brand" label="Merk Mobil" rules={[{ required: true, message: 'Merk mobil wajib dipilih!' }]}><Select placeholder="Pilih Merk"><Option value="Toyota">Toyota</Option><Option value="Daihatsu">Daihatsu</Option><Option value="Honda">Honda</Option><Option value="Suzuki">Suzuki</Option><Option value="Mitsubishi">Mitsubishi</Option><Option value="Lainnya">Lainnya</Option></Select></Form.Item>
              <Form.Item name="price" label="Harga" rules={[{ required: true, message: 'Harga wajib diisi!' }]}><InputNumber className="w-full" formatter={(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={(value) => value.replace(/Rp\s?|(,*)/g, '')} placeholder="Masukkan harga jual" /></Form.Item>
              <Form.Item name="mileage" label="Jarak Tempuh (KM)" rules={[{ required: true, message: 'Jarak tempuh wajib diisi!' }]}><InputNumber min={0} step={1000} className="w-full" placeholder="Contoh: 50000" /></Form.Item>
              <Form.Item name="year" label="Tahun Produksi" rules={[{ required: true, message: 'Tahun produksi wajib diisi!' }]}><InputNumber min={1990} max={new Date().getFullYear()} className="w-full" placeholder="Contoh: 2019" /></Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="transmission" label="Transmisi" rules={[{ required: true }]}><Select><Option value="Otomatis">Otomatis</Option><Option value="Manual">Manual</Option></Select></Form.Item>
              <Form.Item name="fuel_type" label="Bahan Bakar" rules={[{ required: true }]}><Select><Option value="Bensin">Bensin</Option><Option value="Diesel">Diesel</Option><Option value="Hybrid">Hybrid</Option><Option value="Listrik">Listrik</Option></Select></Form.Item>
              <Form.Item name="color" label="Warna" rules={[{ required: true, message: 'Warna wajib diisi!' }]}><Input placeholder="Contoh: Hitam Metalik" /></Form.Item>
              <Form.Item name="location" label="Lokasi Mobil" rules={[{ required: true }]}><Input placeholder="Contoh: Singaraja, Buleleng" /></Form.Item>
            </Col>
          </Row>
          <Form.Item 
            name="images" 
            label="Foto Mobil" 
            valuePropName="fileList" 
            getValueFromEvent={normFile}
            rules={[
                { required: true, message: 'Mohon unggah foto!' },
                { validator: (_, value) => 
                    value && value.length === 5 
                    ? Promise.resolve() 
                    : Promise.reject(new Error('Anda wajib mengunggah tepat 5 foto.'))
                }
            ]}
          >
            <Dragger name="files" listType="picture-card" beforeUpload={beforeUpload} maxCount={5}>
                <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                <p className="ant-upload-text">Klik atau seret file ke area ini</p>
                <p className="ant-upload-hint">Wajib mengunggah 5 foto untuk kualitas listing terbaik.</p>
            </Dragger>
          </Form.Item>
          <Form.Item name="description" label="Deskripsi Tambahan"><Input.TextArea rows={4} placeholder="Jelaskan kondisi mobil, riwayat servis, dll." /></Form.Item>
          <Form.Item className="text-right mt-6"><Button type="primary" htmlType="submit" size="large">Ajukan Penjualan Mobil</Button></Form.Item>
        </Form>
    </div>
  );
};

export default JualMobilPage;