import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import VehicleListingPage from './pages/VehicleListingPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listing" element={<VehicleListingPage />} />
      </Route>
    </Routes>
  );
}

export default App;