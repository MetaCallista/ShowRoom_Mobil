import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    DashboardOutlined, 
    CarOutlined, 
    UsergroupAddOutlined, 
    FileTextOutlined, 
    LoginOutlined, 
    UserAddOutlined, 
    SafetyCertificateOutlined 
} from '@ant-design/icons';

const SidebarLink = ({ to, icon, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
            }`}
        >
            {icon}
            {children}
        </Link>
    );
};

const Sidebar = () => {
    return (
        <div className="hidden border-r bg-white md:block w-64 flex-shrink-0">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-16 items-center border-b px-6">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <span>SHOWCAR</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-y-auto py-4">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <span className="px-3 py-2 text-xs font-semibold uppercase text-gray-400">Beranda</span>
                        <SidebarLink to="/admin" icon={<DashboardOutlined />}>Dashboard</SidebarLink>
                        
                        <span className="px-3 py-2 mt-4 text-xs font-semibold uppercase text-gray-400">Manajemen</span>
                        <SidebarLink to="/admin/profile" icon={<CarOutlined />}>Profile</SidebarLink>
                        <SidebarLink to="/admin/mobil" icon={<CarOutlined />}>Kelola Mobil</SidebarLink>
                        <SidebarLink to="/admin/pengguna" icon={<UsergroupAddOutlined />}>Kelola Pengguna</SidebarLink>
                        <SidebarLink to="/admin/blog" icon={<FileTextOutlined />}>Kelola Blog</SidebarLink>
                        <SidebarLink to="/admin/reservasi" icon={<SafetyCertificateOutlined />}>Kelola Reservasi</SidebarLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;