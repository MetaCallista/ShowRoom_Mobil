import React, { useEffect } from 'react';
import { Form, Input, Button, Select, Upload, notification } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { InboxOutlined } from '@ant-design/icons';
import { useBlog } from '../../context/BlogContext.jsx';

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

const EditArtikel = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { postId } = useParams();
    const { getPostById, updatePost } = useBlog();
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        const postData = getPostById(parseInt(postId));
        if (postData) {
            form.setFieldsValue(postData);
        }
    }, [postId, form, getPostById]);

    const onFinish = (values) => {
        try {
            updatePost(parseInt(postId), values);
            api.success({
                message: 'Berhasil',
                description: 'Artikel telah berhasil diperbarui.',
                placement: 'topRight',
            });
            setTimeout(() => {
                navigate('/admin/blog');
            }, 1000);
        } catch (error) {
            api.error({
                message: 'Gagal',
                description: 'Terjadi kesalahan saat memperbarui artikel.',
                placement: 'topRight',
            });
        }
    };

    const normFile = (e) => {
        if (Array.isArray(e)) { return e; }
        return e && e.fileList;
    };
    const beforeUpload = () => false;

    return (
        <>
            {contextHolder}
            <div className="p-6 bg-white rounded-xl shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Artikel</h1>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item name="judul" label="Judul Artikel" rules={[{ required: true, message: 'Judul artikel wajib diisi!' }]}><Input placeholder="Masukkan judul artikel" /></Form.Item>
                    <Form.Item name="gambar" label="Gambar Utama (Opsional: ganti jika perlu)" valuePropName="fileList" getValueFromEvent={normFile}><Dragger name="files" beforeUpload={beforeUpload} listType="picture" accept=".png,.jpg,.jpeg"><p className="ant-upload-drag-icon"><InboxOutlined /></p><p className="ant-upload-text">Klik atau seret file baru untuk mengubah gambar</p></Dragger></Form.Item>
                    <Form.Item name="konten" label="Isi Konten" rules={[{ required: true, message: 'Isi konten wajib diisi!' }]}><TextArea rows={10} placeholder="Tulis isi lengkap artikel di sini..." /></Form.Item>
                    <Form.Item className="text-right mt-6"><Button type="primary" htmlType="submit" size="large">Simpan Perubahan</Button></Form.Item>
                </Form>
            </div>
        </>
    );
};

export default EditArtikel;