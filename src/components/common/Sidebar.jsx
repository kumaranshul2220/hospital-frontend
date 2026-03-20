import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Stethoscope,
    Bed,
    Receipt,
    Package,
    Settings,
    LogOut,
    UserCircle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../utils/cn';

const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', roles: ['Super Admin', 'Admin', 'Doctor', 'Nurse', 'Receptionist', 'Accountant', 'Pharmacy Staff', 'HR Staff'] },
    { name: 'Patients', icon: UserCircle, path: '/patients', roles: ['Super Admin', 'Admin', 'Doctor', 'Nurse', 'Receptionist'] },
    { name: 'Doctors', icon: Stethoscope, path: '/doctors', roles: ['Super Admin', 'Admin', 'HR Staff'] },
    { name: 'Staff & Nurses', icon: Users, path: '/staff', roles: ['Super Admin', 'Admin', 'HR Staff'] },
    { name: 'Ward Management', icon: Bed, path: '/wards', roles: ['Super Admin', 'Admin', 'Nurse'] },
    { name: 'Revenue & Billing', icon: Receipt, path: '/billing', roles: ['Super Admin', 'Admin', 'Accountant', 'Receptionist'] },
    { name: 'Inventory', icon: Package, path: '/inventory', roles: ['Super Admin', 'Admin', 'Pharmacy Staff', 'Doctor'] },
    { name: 'Settings', icon: Settings, path: '/settings', roles: ['Super Admin'] },
];

const Sidebar = () => {
    const { user, logout } = useAuth();

    const filteredMenu = menuItems.filter(item =>
        !item.roles || (user && item.roles.includes(user.role))
    );

    return (
        <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    H
                </div>
                <span className="font-bold text-lg text-gray-800 tracking-tight">HMS Admin</span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {filteredMenu.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) => cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group",
                            isActive
                                ? "bg-primary-light text-primary"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                        )}
                    >
                        <item.icon className={cn("w-5 h-5", "group-hover:text-primary")} />
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-50">
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold text-xs">
                            {user?.name?.charAt(0) || 'A'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-800 truncate">{user?.name || 'Admin User'}</p>
                            <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">{user?.role || 'Role'}</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
