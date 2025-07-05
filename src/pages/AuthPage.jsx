import React from 'react';
import { Form, Input, Button, Checkbox, Tabs, message, Divider } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, GoogleOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

// --- PERBAIKAN DI SINI ---
const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = (values) => {
    try {
      // Panggil fungsi login yang sekarang mengembalikan objek user atau null
      const user = login(values.email, values.password);

      if (user) {
        message.success(`Selamat datang kembali, ${user.nama}!`);
        
        // Logika pengalihan halaman berdasarkan peran
        if (user.role === 'admin') {
          navigate('/admin'); // Arahkan ke dashboard admin
        } else {
          navigate('/'); // Arahkan ke beranda untuk peran lain
        }
      } else {
        message.error('Login gagal! Email atau kata sandi salah.');
      }
    } catch (error) {
      message.error('Terjadi kesalahan saat mencoba masuk.');
    }
  };

  return (
    <Form name="login" onFinish={onFinish} layout="vertical" requiredMark="optional" size="large">
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email', message: 'Mohon masukkan email yang valid!' }]}
        className="mb-4"
      >
        <Input prefix={<MailOutlined />} placeholder="penjual@gmail.com atau admin@gmail.com" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Kata Sandi"
        rules={[{ required: true, message: 'Mohon masukkan kata sandi Anda!' }]}
        className="mb-4"
      >
        <Input.Password prefix={<LockOutlined />} placeholder="password123 atau admin123" />
      </Form.Item>
      <Form.Item>
        <a className="float-right text-blue-600 hover:underline" href="">
          Lupa kata sandi?
        </a>
      </Form.Item>
      <Form.Item className="mb-0">
        <Button type="primary" htmlType="submit" block>
          Masuk
        </Button>
      </Form.Item>
    </Form>
  );
};

// Komponen RegisterForm tidak perlu diubah
const RegisterForm = () => {
  const onFinish = (values) => {
    console.log('Register Info: ', values);
    message.success('Pendaftaran berhasil! Silakan masuk dengan akun baru Anda.');
  };

  return (
    <Form name="register" onFinish={onFinish} layout="vertical" requiredMark="optional" size="large">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <div>
          <Form.Item name="fullname" label="Nama Lengkap" rules={[{ required: true, message: 'Mohon masukkan nama lengkap Anda!', whitespace: true }]} className="mb-4">
            <Input prefix={<UserOutlined />} placeholder="Nama Lengkap Anda" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Mohon masukkan email yang valid!' }]} className="mb-4">
            <Input prefix={<MailOutlined />} placeholder="Alamat Email Anda" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="phone" label="No Handphone Aktif" rules={[{ required: true, message: 'Mohon masukkan nomor handphone Anda!' }]} className="mb-4">
            <Input prefix={<PhoneOutlined />} placeholder="Contoh: 08123456789" />
          </Form.Item>
          <Form.Item name="address" label="Alamat" rules={[{ required: true, message: 'Mohon masukkan alamat Anda!' }]} className="mb-4">
            <Input.TextArea rows={1} placeholder="Alamat singkat di Buleleng" />
          </Form.Item>
        </div>
      </div>
      <Form.Item name="password" label="Buat Kata Sandi" rules={[{ required: true, message: 'Mohon buat kata sandi Anda!' }, {min: 6, message: 'Kata sandi minimal 6 karakter!'}]} className="mb-4">
        <Input.Password prefix={<LockOutlined />} placeholder="Minimal 6 karakter" />
      </Form.Item>
      <Form.Item className="mb-0">
        <Button type="primary" htmlType="submit" block>
          Daftar
        </Button>
      </Form.Item>
    </Form>
  );
};

// Komponen Utama AuthPage tidak perlu diubah
const AuthPage = () => {
  const items = [
    { key: '1', label: `Masuk`, children: <LoginForm /> },
    { key: '2', label: `Daftar`, children: <RegisterForm /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="hidden md:flex flex-col justify-between p-10 text-white bg-cover bg-center relative" style={{ backgroundImage: 'url("/assets/images/hero.jpg")' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
          <div className="relative z-10">
            <Link to="/" className="text-3xl font-bold tracking-wider">SHOWCAR BULELENG</Link>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold leading-tight">Jual Beli Mobil Jadi Mudah.</h2>
            <p className="mt-2 text-blue-100 leading-relaxed">
              Temukan mobil bekas berkualitas dengan harga terbaik di Buleleng, Bali. Terpercaya dan bergaransi.
            </p>
          </div>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Selamat Datang</h2>
            <p className="text-gray-500 mt-2">Silakan masuk atau buat akun baru.</p>
          </div>
          <Tabs defaultActiveKey="1" items={items} centered />
          <Divider>atau</Divider>
          <div className="flex justify-center">
            <Button size="large" icon={<GoogleOutlined />}>Lanjutkan dengan Google</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;