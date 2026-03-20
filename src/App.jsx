import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Billing from './pages/Billing';
import Inventory from './pages/Inventory';

const Placeholder = ({ name }) => (
  <div className="card h-[calc(100vh-120px)] flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-500 max-w-md mx-auto">This module is coming soon.</p>
    </div>
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={<Placeholder name="Medical Staff" />} />
            <Route path="/staff" element={<Placeholder name="Staff & Nurses" />} />
            <Route path="/wards" element={<Placeholder name="Ward & Bed Management" />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/settings" element={<Placeholder name="System Settings" />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
