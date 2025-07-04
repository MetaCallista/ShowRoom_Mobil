import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Select, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const TambahMobil = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [tipeMobil, setTipeMobil] = useState('Baru');

  const onFinish = (values) => {
    console.log('Data dikirim:', values);
    message.success('Mobil berhasil ditambahkan!');
    navigate('/admin/mobil');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-24 px-6 pb-10">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Tambah Mobil</h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ type: 'Baru', transmission: 'Otomatis', fuel_type: 'Bensin' }}
        >
          <Form.Item name="type" label="Tipe Mobil" rules={[{ required: true }]}>
            <Select onChange={(value) => setTipeMobil(value)}>
              <Option value="Baru">Baru</Option>
              <Option value="Bekas">Bekas</Option>
            </Select>
          </Form.Item>

          <Form.Item name="transmission" label="Transmisi" rules={[{ required: true }]}>
            <Select>
              <Option value="Otomatis">Otomatis</Option>
              <Option value="Manual">Manual</Option>
            </Select>
          </Form.Item>

          <Form.Item name="seats" label="Jumlah Kursi" rules={[{ required: true }]}>
            <InputNumber min={2} max={10} className="w-full" />
          </Form.Item>

          <Form.Item name="color" label="Warna" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="year" label="Tahun Produksi" rules={[{ required: true }]}>
            <InputNumber min={1990} max={2025} className="w-full" />
          </Form.Item>

          <Form.Item name="location" label="Lokasi" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="fuel_type" label="Bahan Bakar" rules={[{ required: true }]}>
            <Select>
              <Option value="Bensin">Bensin</Option>
              <Option value="Diesel">Diesel</Option>
              <Option value="Hybrid">Hybrid</Option>
            </Select>
          </Form.Item>

          {tipeMobil === 'Baru' ? (
            <Form.Item name="stock" label="Stok Unit" rules={[{ required: true }]}>
              <InputNumber min={1} className="w-full" />
            </Form.Item>
          ) : (
            <Form.Item name="mileage" label="Jarak Tempuh (KM)" rules={[{ required: true }]}>
              <InputNumber min={0} step={1000} className="w-full" />
            </Form.Item>
          )}

          <Form.Item className="text-right">
            <Button type="primary" htmlType="submit">Simpan</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default TambahMobil;
