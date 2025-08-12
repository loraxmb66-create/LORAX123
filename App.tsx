
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Marketplace from './pages/Marketplace';
import Deposit from './pages/Deposit';
import MyActivity from './pages/MyActivity';
import Settings from './pages/Settings';
import AdminDashboard from './pages/admin/AdminDashboard';
import { Role } from './types';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </AuthProvider>
  );
};

const AppRoutes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      
      <Route path="/" element={user ? <Layout><Marketplace /></Layout> : <Navigate to="/login" />} />
      <Route path="/deposit" element={user ? <Layout><Deposit /></Layout> : <Navigate to="/login" />} />
      <Route path="/my-activity" element={user ? <Layout><MyActivity /></Layout> : <Navigate to="/login" />} />
      <Route path="/settings" element={user ? <Layout><Settings /></Layout> : <Navigate to="/login" />} />
      
      <Route path="/admin" element={user && user.role === Role.ADMIN ? <Layout><AdminDashboard /></Layout> : <Navigate to="/" />} />
      
      <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
    </Routes>
  );
};

export default App;
