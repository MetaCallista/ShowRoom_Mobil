import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar.jsx';
import AdminHeader from '../components/admin/AdminHeader.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { message } from 'antd';

const AdminLayout = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!currentUser || currentUser.role !== 'admin') {
            message.error('Akses ditolak. Halaman ini khusus untuk Admin.');
            navigate('/');
        }
    }, [currentUser, navigate]);

    if (currentUser && currentUser.role === 'admin') {
        return (
            <div className="flex h-screen bg-gray-100 font-sans">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <AdminHeader />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        );
    }

    return null;
};

export default AdminLayout;