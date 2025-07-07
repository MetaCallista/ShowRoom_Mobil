import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import UserDashboardLayout from './layouts/UserDashboardLayout.jsx'; 

// Halaman Publik
import LandingPage from './pages/LandingPage.jsx';
import VehicleListingPage from './pages/VehicleListingPage.jsx';
import CarDetailPage from './pages/CarDetailPage.jsx';
import BlogIndexPage from './pages/BlogIndexPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import HelpPage from './pages/HelpPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ReservationPage from './pages/ReservationPage.jsx';
import SellerStockPage from './pages/SellerStockPage.jsx';


// Halaman Admin
import AdminDashboardPage from './pages/Admin/AdminDashboard.jsx';
import KelolaMobilAdmin from './pages/Admin/KelolaMobilAdmin.jsx';
import TambahMobilPage from './pages/Admin/TambahMobil.jsx';
import EditMobilAdmin from './pages/Admin/EditMobilAdmin.jsx';
import KelolaPenggunaPage from './pages/Admin/KelolaPengguna.jsx';
import KelolaBlogPage from './pages/Admin/KelolaBlog.jsx';
import TambahArtikelPage from './pages/Admin/TambahArtikel.jsx';
import EditArtikelPage from './pages/Admin/EditArtikel.jsx';
import KelolaReservasiAdminPage from './pages/Admin/KelolaReservasiAdminPage.jsx';
import AdminProfilePage from './pages/Admin/AdminProfilePage.jsx';
import DetailReservasiAdminPage from './pages/Admin/DetailReservasiAdminPage.jsx';

// Halaman Pengguna (Penjual)
import UserProfilePage from './pages/User/UserProfilePage.jsx';
import KelolaMobilUser from './pages/User/KelolaMobilUser.jsx';
import KelolaReservasiPage from './pages/User/KelolaReservasiPage.jsx';
import JualMobilPage from './pages/User/JualMobilPage.jsx';
import UserDashboardPage from './pages/User/UserDashboardPage.jsx';
import EditMobilUser from './pages/User/EditMobilUser.jsx';
import DetailReservasiUserPage from './pages/User/DetailReservasiUserPage.jsx';

// Context Providers
import { CarProvider } from './context/CarContext.jsx';
import { BlogProvider } from './context/BlogContext.jsx';

function App() {
  return (
    // PERBAIKAN DI SINI:
    // Bungkus semua rute dengan Provider agar data bisa diakses di mana saja.
    <CarProvider>
      <BlogProvider>
        <Routes>
          {/* Rute Publik dengan Layout Utama */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/listing" element={<VehicleListingPage />} />
            <Route path="/cars/:carId" element={<CarDetailPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/bantuan" element={<HelpPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="reservation/:carId?" element={<ReservationPage />} />
            <Route path="/seller-stock" element={<SellerStockPage />} />
          </Route>

          {/* Rute Autentikasi (tanpa layout) */}
          <Route path="/login" element={<AuthPage />} />

          {/* Rute Admin Terproteksi */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="mobil" element={<KelolaMobilAdmin />} />
            <Route path="mobil/tambah" element={<TambahMobilPage />} />
            <Route path="mobil/edit/:carId" element={<EditMobilAdmin />} />
            <Route path="pengguna" element={<KelolaPenggunaPage />} />
            <Route path="blog" element={<KelolaBlogPage />} />
            <Route path="blog/tambah" element={<TambahArtikelPage />} />
            <Route path="blog/edit/:postId" element={<EditArtikelPage />} />
            <Route path="reservasi" element={<KelolaReservasiAdminPage />} />
            <Route path="profile" element={<AdminProfilePage />} />
            <Route path="reservasi/detail" element={<DetailReservasiAdminPage />} />
          </Route>

          {/* Rute Dasbor Pengguna Terproteksi */}
          <Route path="/user" element={<UserDashboardLayout />}>
            <Route index element={<UserDashboardPage />} />
            <Route path="mobil" element={<KelolaMobilUser />} />
            <Route path="reservasi" element={<KelolaReservasiPage />} />
            <Route path="mobil/tambah" element={<JualMobilPage />} />
            <Route path="mobil/edit/:carId" element={<EditMobilUser />} />
            <Route path="profile" element={<UserProfilePage  />} />
            <Route path="reservasi/detail" element={<DetailReservasiUserPage />} />
          </Route>
        </Routes>
      </BlogProvider>
    </CarProvider>
  );
}

export default App;
