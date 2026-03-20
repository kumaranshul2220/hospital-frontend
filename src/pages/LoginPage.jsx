import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Lock, User, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api/apiClient';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await api.post('/auth/login', {
                username,
                password
            });
            login(response.data.token, response.data.user);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Check your credentials and try again.');
        }
    };

    return (
        <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-4">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-50 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10 border border-gray-100">
                <div className="bg-primary p-8 text-white flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md">
                        <ShieldCheck className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Shri Ram Hospital</h1>
                    <p className="text-primary-light text-sm mt-1 opacity-90">Secure Management System</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Username</label>
                            <div className="relative group">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-11 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-xs font-medium text-center animate-shake">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 group"
                        >
                            Sign In
                            <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-400 text-xs font-medium">
                        Authorized access only. Technical support? <a href="#" className="text-primary hover:underline">Contact HR</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
