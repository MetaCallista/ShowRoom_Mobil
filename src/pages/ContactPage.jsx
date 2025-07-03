import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import DetailHero from '../components/DetailHero.jsx';

const { TextArea } = Input;

const ContactPage = () => {
    const onFinish = (values) => {
        console.log('Contact Form Info:', values);
        message.success('Pesan Anda berhasil terkirim. Terima kasih!');
    };

    return (
        <div className="bg-gray-100">
            <DetailHero />
            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pb-16 -mt-20">
                <div className="bg-white p-8 rounded-xl shadow-lg border">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Hubungi Kami</h1>
                        <p className="mt-2 text-lg text-gray-600">Kami senang mendengar dari Anda. Silakan hubungi kami melalui informasi di bawah atau kirimkan pesan.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mt-12">
                        {/* Kolom Kiri: Info Kontak & Peta */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
                                <div className="space-y-4 text-gray-700">
                                    <p className="flex items-center gap-3"><EnvironmentOutlined className="text-blue-600" /> Jl. Raya Singaraja-Seririt, Buleleng, Bali 81152</p>
                                    <p className="flex items-center gap-3"><PhoneOutlined className="text-blue-600" /> (0362) 123-456</p>
                                    <p className="flex items-center gap-3"><MailOutlined className="text-blue-600" /> kontak@showcarbuleleng.com</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Lokasi Kami</h3>
                                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    {/* Ganti dengan iframe Google Maps Anda */}
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.387978299129!2d115.08861431529813!3d-8.102747194169213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd19b3975a84591%3A0xbc18a38289bfd5d!2sSingaraja!5e0!3m2!1sen!2sid!4v1625458931234!5m2!1sen!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan: Formulir Kontak */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Kirim Pesan</h3>
                            <Form onFinish={onFinish} layout="vertical" size="large">
                                <Form.Item name="name" label="Nama Lengkap" rules={[{ required: true, message: 'Mohon masukkan nama Anda!' }]}>
                                    <Input placeholder="Nama Anda" />
                                </Form.Item>
                                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Mohon masukkan email yang valid!' }]}>
                                    <Input placeholder="Alamat email Anda" />
                                </Form.Item>
                                <Form.Item name="subject" label="Subjek" rules={[{ required: true, message: 'Mohon masukkan subjek pesan!' }]}>
                                    <Input placeholder="Subjek pesan Anda" />
                                </Form.Item>
                                <Form.Item name="message" label="Pesan" rules={[{ required: true, message: 'Mohon masukkan pesan Anda!' }]}>
                                    <TextArea rows={5} placeholder="Tulis pesan Anda di sini..." />
                                </Form.Item>
                                <Button type="primary" htmlType="submit" block>Kirim Pesan</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
