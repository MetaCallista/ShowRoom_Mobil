import React from 'react';
import { Form, Input, Button, Checkbox, Tabs, message, Divider } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, GoogleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // <-- 1. Impor useAuth

// Komponen untuk Form Login
const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // <-- 2. Ambil fungsi login dari context

  const onFinish = (values) => {
    try {
      // 3. Panggil fungsi login dari context
      const success = login(values.email, values.password);

      if (success) {
        message.success('Selamat! Anda berhasil masuk.');
        navigate('/'); // Arahkan ke halaman utama setelah berhasil
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
      >
        <Input prefix={<MailOutlined />} placeholder="penjual@gmail.com atau admin@gmail.com" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Kata Sandi"
        rules={[{ required: true, message: 'Mohon masukkan kata sandi Anda!' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="password123 atau admin123" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Ingat saya</Checkbox>
        </Form.Item>
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

// --- PERBAIKAN DI SINI ---
// Komponen untuk Form Register yang fungsional dan ringkas
const RegisterForm = () => {
  const onFinish = (values) => {
    // Di aplikasi nyata, di sini Anda akan memanggil API backend untuk mendaftarkan pengguna
    console.log('Register Info: ', values);
    message.success('Pendaftaran berhasil! Silakan masuk dengan akun baru Anda.');
  };

  return (
    <Form name="register" onFinish={onFinish} layout="vertical" requiredMark="optional" size="large">
      <Form.Item
        name="fullname"
        label="Nama Lengkap"
        rules={[{ required: true, message: 'Mohon masukkan nama lengkap Anda!', whitespace: true }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Nama Lengkap Anda" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email', message: 'Mohon masukkan email yang valid!' }]}
      >
        <Input prefix={<MailOutlined />} placeholder="Alamat Email Anda" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Buat Kata Sandi"
        rules={[{ required: true, message: 'Mohon buat kata sandi Anda!' }, {min: 6, message: 'Kata sandi minimal 6 karakter!'}]}
      >
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

// Komponen Utama AuthPage
const AuthPage = () => {
  const items = [
    { key: '1', label: `Masuk`, children: <LoginForm /> },
    { key: '2', label: `Daftar`, children: <RegisterForm /> },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Kolom Kiri: Gambar & Branding */}
        <div 
          className="hidden md:flex flex-col justify-between p-10 text-white bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/images/auth-bg.jpg")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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

        {/* Kolom Kanan: Formulir */}
        <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
          <div className="text-left mb-4">
            <h2 className="text-3xl font-bold text-gray-800">Selamat Datang</h2>
            <p className="text-gray-500 mt-1">Silakan masuk atau buat akun baru untuk melanjutkan.</p>
          </div>
          
          <Tabs defaultActiveKey="1" items={items} centered />

          <Divider>atau</Divider>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="large" icon={<GoogleOutlined />} block>Lanjutkan dengan Google</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
