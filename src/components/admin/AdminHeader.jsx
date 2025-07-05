import React from 'react';
import { BellOutlined, MenuOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext.jsx';
import { Avatar, Dropdown, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const AdminHeader = ({ setSidebarOpen }) => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        message.success("Anda berhasil keluar.");
        navigate('/');
    };

    const menu = (
        <div className="bg-white rounded-md shadow-lg border w-48">
            <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold">{currentUser?.nama || 'Admin'}</p>
                <p className="text-xs text-gray-500">{currentUser?.email || ''}</p>
            </div>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pengaturan</a>
            <div className="border-t">
                <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    Keluar
                </button>
            </div>
        </div>
    );

    return (
        <header className="flex h-16 items-center justify-between gap-4 border-b bg-white px-6 md:justify-end">
             <button
                className="md:hidden"
                onClick={() => setSidebarOpen(true)}
            >
                <MenuOutlined />
            </button>
            <div className="flex items-center gap-4">
                <Button shape="circle" icon={<BellOutlined />} />
                <Dropdown overlay={menu} trigger={['click']}>
                    <Avatar src="/assets/images/seller-avatar.png" className="cursor-pointer" />
                </Dropdown>
            </div>
        </header>
    );
};

export default AdminHeader;