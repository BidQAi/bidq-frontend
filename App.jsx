import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { UploadPage } from './pages/UploadPage';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { user, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center text-xl font-medium text-gray-600">Loading...</div>;

  return (
    <Router>
      <main className="bg-black text-white min-h-screen font-sans">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/" element={user ? <UploadPage /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </main>
      <Toaster />
    </Router>
  );
}
