import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import { useAuth } from '../context/AuthContext';

const MainLayout = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                    <p className="text-sm font-medium text-gray-500 animate-pulse tracking-wide uppercase">Initializing Session...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex bg-background min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
