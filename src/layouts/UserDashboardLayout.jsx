import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown, message } from 'antd';
import { 
    UserOutlined, 
    CarOutlined, 
    CalendarOutlined, 
    LogoutOutlined 
} from '@ant-design/icons';
import { useAuth } from '../context/AuthContext.jsx';

const { Sider, Header, Content } = Layout;

const UserDashboardLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();

    // Logika untuk melindungi halaman: jika tidak ada user, tendang ke halaman login
    React.useEffect(() => {
        if (!currentUser) {
            message.error("Anda harus masuk terlebih dahulu untuk mengakses halaman ini.");
            navigate('/login');
        }
    }, [currentUser, navigate]);

    const handleLogout = () => {
        logout();
        message.success("Anda berhasil keluar.");
        navigate('/');
    };

    const userMenu = (
        <Menu>
            <Menu.Item key="beranda" icon={<UserOutlined />}>
                <Link to="/">Kembali ke Beranda</Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                Keluar
            </Menu.Item>
        </Menu>
    );

    // Jika belum ada user, jangan render apa-apa selagi redirect
    if (!currentUser) {
        return null;
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0" theme="light" className="border-r">
                <div className="h-16 flex items-center justify-center">
                    <Link to="/" className="text-gray-800 text-xl font-bold">SHOWCAR</Link>
                </div>
                <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
                    <Menu.Item key="/profil" icon={<UserOutlined />}>
                        <Link to="/profil">Profil Saya</Link>
                    </Menu.Item>
                    <Menu.Item key="/profil/mobil-saya" icon={<CarOutlined />}>
                        <Link to="/profil/mobil-saya">Kelola Mobil</Link>
                    </Menu.Item>
                    <Menu.Item key="/profil/reservasi" icon={<CalendarOutlined />}>
                        <Link to="/profil/reservasi">Kelola Reservasi</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="bg-white p-0 px-6 flex justify-end items-center">
                    <Dropdown overlay={userMenu} trigger={['click']}>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <Avatar src={currentUser.avatar || '/assets/images/seller-avatar.png'} />
                            <span className="font-semibold">{currentUser.nama}</span>
                        </div>
                    </Dropdown>
                </Header>
                <Content className="bg-gray-50 p-6 rounded-lg">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default UserDashboardLayout;