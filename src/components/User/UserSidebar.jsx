import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    UserOutlined,
    CarOutlined,
    CalendarOutlined,
    CloseOutlined,
    DashboardOutlined // Import CloseOutlined for the close button
} from '@ant-design/icons';

// Reusable component for sidebar links, mirroring Sidebar.jsx
const SidebarLink = ({ to, icon, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            onClick={onClick}
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

const UserSidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <div
            className={`fixed inset-y-0 left-0 z-50 w-64 border-r bg-white transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-16 items-center border-b px-6 justify-between">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <span>SHOWCAR</span>
                    </Link>
                    <button
                        className="md:hidden p-2"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <CloseOutlined />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto py-4">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <span className="px-3 py-2 text-xs font-semibold uppercase text-gray-400">Beranda</span>
                        <SidebarLink to="/user" icon={<DashboardOutlined />} onClick={() => setSidebarOpen(false)}>
                            Dashboard
                        </SidebarLink>
                        <span className="px-3 py-2 mt-4 text-xs font-semibold uppercase text-gray-400">Manajemen</span>
                        <SidebarLink to="/user/profile" icon={<UserOutlined />} onClick={() => setSidebarOpen(false)}>
                            Profile Saya
                        </SidebarLink>
                        <SidebarLink to="/user/mobil" icon={<CarOutlined />} onClick={() => setSidebarOpen(false)}>
                            Kelola Mobil
                        </SidebarLink>
                        <SidebarLink to="/user/reservasi" icon={<CalendarOutlined />} onClick={() => setSidebarOpen(false)}>
                            Kelola Reservasi
                        </SidebarLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default UserSidebar;