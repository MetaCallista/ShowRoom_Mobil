import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import VehicleListingPage from './pages/VehicleListingPage.jsx';
import CarDetailPage from './pages/CarDetailPage.jsx';
import BlogIndexPage from './components/BlogIndexPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import HelpPage from './pages/HelpPage.jsx'; // <-- Impor
import ContactPage from './pages/ContactPage.jsx'; // <-- Impor
import AdminDashboard from './pages/AdminDashboard.jsx';

function App() {
  return (
    <Routes>
      {/* Halaman dengan Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listing" element={<VehicleListingPage />} />
        <Route path="/cars/:carId" element={<CarDetailPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/bantuan" element={<HelpPage />} /> {/* <-- Tambahkan rute */}
        <Route path="/kontak" element={<ContactPage />} /> {/* <-- Tambahkan rute */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      {/* Halaman tanpa Navbar & Footer */}
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
