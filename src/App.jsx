import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import VehicleListingPage from './pages/VehicleListingPage.jsx';
import CarDetailPage from './pages/CarDetailPage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listing" element={<VehicleListingPage />} />
        <Route path="/cars/:carId" element={<CarDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;