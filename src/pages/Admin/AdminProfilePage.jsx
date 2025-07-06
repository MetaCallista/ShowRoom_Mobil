import React, { useEffect } from 'react';
import { Form, Input, Button, Avatar, Upload, message } from 'antd';
import { 
    UserOutlined, 
    MailOutlined, 
    PhoneOutlined, 
    HomeOutlined, 
    UploadOutlined
} from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext.jsx';

const AdminProfilePage = () => {
    const [form] = Form.useForm();
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
            form.setFieldsValue({
                nama: currentUser.nama,
                email: currentUser.email,
            });
        }
    }, [currentUser, form]);

    const onFinish = (values) => {
        console.log('Profil diperbarui:', values);
        message.success('Profil berhasil diperbarui!');
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="text-center">
                    <Avatar size={128} src={currentUser?.avatar || '/assets/images/seller-avatar.png'} icon={<UserOutlined />} />
                    <Upload showUploadList={false}>
                        <Button icon={<UploadOutlined />} className="mt-4">
                            Ganti Foto
                        </Button>
                    </Upload>
                </div>
                <div className="flex-grow">
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item name="nama" label="Nama Lengkap">
                            <Input prefix={<UserOutlined />} disabled />
                        </Form.Item>
                        <Form.Item name="email" label="Email">
                            <Input prefix={<MailOutlined />} disabled />
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AdminProfilePage;