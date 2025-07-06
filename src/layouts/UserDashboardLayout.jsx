import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import UserSidebar from '../components/User/UserSidebar.jsx';
import UserHeader from '../components/User/UserHeader.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { message } from 'antd';

const UserDashboardLayout = () => {
    const { currentUser } = useAuth(); //
    const navigate = useNavigate(); //
    const [sidebarOpen, setSidebarOpen] = React.useState(false); // State to manage sidebar visibility

    // Logic to protect the page: if no user, redirect to login page
    React.useEffect(() => {
        if (!currentUser) { //
            message.error("Anda harus masuk terlebih dahulu untuk mengakses halaman ini."); //
            navigate('/login'); //
        }
    }, [currentUser, navigate]);

    // If no user yet, don't render anything while redirecting
    if (!currentUser) { //
        return null; //
    }

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar for user dashboard */}
            <UserSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            
            {/* Main content area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header for user dashboard */}
                <UserHeader currentUser={currentUser} setSidebarOpen={setSidebarOpen} />
                
                {/* Main content of the dashboard */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default UserDashboardLayout;