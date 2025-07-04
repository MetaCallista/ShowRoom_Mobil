import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Select, Button, message } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';

const { Option } = Select;

const EditMobil = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [tipeMobil, setTipeMobil] = useState('Baru');

  useEffect(() => {
    // Contoh data dummy untuk diedit
    const dataDummy = {
      vehicle_id: id,
      type: 'Bekas',
      transmission: 'Manual',
      seats: 5,
      color: 'Hitam',
      year: 2020,
      location: 'Denpasar',
      fuel_type: 'Bensin',
      mileage: 55000,
    };

    form.setFieldsValue(dataDummy);
    setTipeMobil(dataDummy.type);
  }, [id, form]);

  const onFinish = (values) => {
    console.log('Perubahan:', values);
    message.success('Data mobil berhasil diperbarui!');
    navigate('/admin/mobil');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-24 px-6 pb-10">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Mobil #{id}</h1>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="type" label="Tipe Mobil" rules={[{ required: true }]}>
            <Select onChange={(value) => setTipeMobil(value)} disabled>
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
            <InputNumber className="w-full" />
          </Form.Item>

          <Form.Item name="color" label="Warna" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="year" label="Tahun" rules={[{ required: true }]}>
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
            <Form.Item name="stock" label="Stok Unit">
              <InputNumber className="w-full" />
            </Form.Item>
          ) : (
            <Form.Item name="mileage" label="Jarak Tempuh (KM)">
              <InputNumber className="w-full" />
            </Form.Item>
          )}

          <Form.Item className="text-right">
            <Button type="primary" htmlType="submit">Perbarui</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditMobil;
