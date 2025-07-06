import React from 'react';
import { Avatar, Dropdown, Button, message } from 'antd';
import { BellOutlined, MenuOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const UserHeader = ({ currentUser, setSidebarOpen }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        message.success("Anda berhasil keluar.");
        navigate('/');
    };

    const userMenu = (
        <div className="bg-white rounded-md shadow-lg border w-48">
            <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold">{currentUser?.nama || 'Pengguna'}</p>
                <p className="text-xs text-gray-500">{currentUser?.email || ''}</p>
            </div>
            {/* You can add more user-specific links here if needed */}
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
                <Dropdown overlay={userMenu} trigger={['click']}>
                    <Avatar src={currentUser.avatar || '/assets/images/seller-avatar.png'} className="cursor-pointer" />
                </Dropdown>
            </div>
        </header>
    );
};

export default UserHeader;