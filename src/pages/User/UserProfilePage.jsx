import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Avatar, Upload, message } from 'antd';
import { 
    UserOutlined, 
    MailOutlined, 
    PhoneOutlined, 
    HomeOutlined, 
    UploadOutlined
} from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext.jsx';

// Fungsi untuk mendapatkan base64 dari file (untuk pratinjau)
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const UserProfilePage = () => {
    const [form] = Form.useForm();
    const { currentUser, updateUserProfile } = useAuth(); // Asumsi ada fungsi updateUserProfile
    
    // State untuk menyimpan URL gambar pratinjau
    const [imageUrl, setImageUrl] = useState(null); 
    // State untuk menyimpan file yang akan diunggah
    const [fileToUpload, setFileToUpload] = useState(null); 

    useEffect(() => {
        if (currentUser) {
            form.setFieldsValue({
                nama: currentUser.nama,
                email: currentUser.email,
                telepon: currentUser.telepon,
                alamat: currentUser.alamat,
            });
            // Atur gambar profil awal dari currentUser
            setImageUrl(currentUser.avatar);
        }
    }, [currentUser, form]);

    // 1. Fungsi ini berjalan SEBELUM file diunggah
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('Anda hanya bisa mengunggah file JPG/PNG!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Ukuran gambar tidak boleh melebihi 2MB!');
        }
        // Hanya kembalikan true jika kedua validasi lolos
        return isJpgOrPng && isLt2M;
    };

    // 2. Fungsi ini berjalan SETELAH file dipilih dan lolos 'beforeUpload'
    const handleChange = (info) => {
        if (info.file.status === 'done' || info.file.status === 'uploading') {
            // Dapatkan URL base64 untuk pratinjau
            getBase64(info.file.originFileObj, (url) => {
                setImageUrl(url);
            });
            // Simpan file asli untuk diunggah nanti
            setFileToUpload(info.file.originFileObj);
        }
    };

    const onFinish = (values) => {
        // Gabungkan data form dengan file gambar yang baru
        const profileData = {
            ...values,
            avatarFile: fileToUpload, // Sertakan file di sini
        };
        
        // Panggil fungsi untuk update profil (misalnya ke context atau API)
        // updateUserProfile(profileData); 
        console.log('Profil diperbarui:', profileData);
        message.success('Profil berhasil diperbarui!');
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="text-center">
                    {/* 3. Avatar sekarang menampilkan pratinjau gambar baru */}
                    <Avatar size={128} src={imageUrl || '/assets/images/seller-avatar.png'} icon={<UserOutlined />} />
                    
                    {/* 4. Komponen Upload dihubungkan ke fungsi-fungsi di atas */}
                    <Upload 
                        name="avatar"
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                        customRequest={({ onSuccess }) => onSuccess('ok')} // Mencegah aksi upload default antd
                    >
                        <Button icon={<UploadOutlined />} className="mt-4">
                            Ganti Foto
                        </Button>
                    </Upload>
                </div>
                <div className="flex-grow">
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        {/* ... Isi Form Anda tetap sama ... */}
                        <Form.Item name="nama" label="Nama Lengkap"><Input prefix={<UserOutlined />} /></Form.Item>
                        <Form.Item name="email" label="Email"><Input prefix={<MailOutlined />} disabled /></Form.Item>
                        <Form.Item name="telepon" label="Nomor Telepon/WhatsApp"><Input prefix={<PhoneOutlined />} /></Form.Item>
                        <Form.Item name="alamat" label="Alamat"><Input.TextArea rows={3} /></Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Simpan Perubahan
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;