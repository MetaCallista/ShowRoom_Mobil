import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const ReservationPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    message.success('Reservasi berhasil diajukan!');
    form.resetFields();
    // navigate('/'); // Redirect jika perlu
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Formulir Reservasi Test Drive</h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="tanggal"
            label="Tanggal"
            rules={[{ required: true, message: 'Pilih tanggal reservasi!' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
          <Form.Item
            name="waktu"
            label="Waktu"
            rules={[{ required: true, message: 'Pilih waktu reservasi!' }]}
          >
            <TimePicker className="w-full" format="HH:mm" />
          </Form.Item>
          <Form.Item
            name="tempat"
            label="Tempat"
            rules={[{ required: true, message: 'Masukkan lokasi/area reservasi!' }]}
          >
            <Input placeholder="Contoh: Showroom Buleleng atau alamat Anda" />
          </Form.Item>
          <Form.Item
            name="pesan"
            label="Pesan (opsional)"
            rules={[]}
          >
            <Input.TextArea rows={3} placeholder="Pesan tambahan (opsional)" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Ajukan Reservasi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ReservationPage; 