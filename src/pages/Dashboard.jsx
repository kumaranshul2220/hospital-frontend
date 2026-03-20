import React from 'react';
import {
    Users,
    Stethoscope,
    Receipt,
    Activity,
    ArrowRight,
    UserPlus
} from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import BedAvailabilityChart from '../components/dashboard/BedAvailabilityChart';

const Dashboard = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Super Admin Dashboard</h1>
                    <p className="text-gray-500 text-sm mt-1">Hospital metrics and system overview for Shri Ram Hospital</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                        Generate Report
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                        <UserPlus className="w-4 h-4" />
                        New Admission
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Patients"
                    value="1,284"
                    icon={Users}
                    trend="up"
                    trendValue="5.2"
                    color="teal"
                />
                <StatCard
                    title="Doctors On Duty"
                    value="42"
                    icon={Stethoscope}
                    color="green"
                />
                <StatCard
                    title="Bed Occupancy"
                    value="82%"
                    icon={Activity}
                    trend="down"
                    trendValue="1.5"
                    color="orange"
                />
                <StatCard
                    title="Total Earnings"
                    value="$54,200"
                    icon={Receipt}
                    trend="up"
                    trendValue="12.4"
                    color="teal"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <BedAvailabilityChart />
                </div>
                <div className="card h-[400px]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Recent Patients</h3>
                        <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1 group">
                            View All
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="space-y-6">
                        {[
                            { name: 'Anshul Sharma', id: 'SHR-001', time: '2 mins ago', type: 'OPD' },
                            { name: 'Rahul Verma', id: 'SHR-024', time: '15 mins ago', type: 'IPD' },
                            { name: 'Priya Gaur', id: 'SHR-112', time: '1 hour ago', type: 'Emergency' },
                            { name: 'Sneha Patel', id: 'SHR-089', time: '3 hours ago', type: 'OPD' },
                        ].map((patient, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary font-bold text-sm">
                                    {patient.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-gray-800">{patient.name}</p>
                                    <p className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">{patient.id} • {patient.type}</p>
                                </div>
                                <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{patient.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
