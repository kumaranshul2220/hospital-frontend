import React, { useState } from 'react';
import { Search, Filter, UserPlus, MoreVertical, FileText, Bed } from 'lucide-react';
import Table from '../components/common/Table';
import { cn } from '../utils/cn';

const Patients = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const columns = [
        {
            title: 'Patient ID',
            key: 'patientId',
            render: (val) => <span className="text-xs font-bold text-primary bg-primary-light px-2 py-1 rounded-md">{val}</span>
        },
        {
            title: 'Name',
            key: 'name',
            render: (val, row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs uppercase">
                        {val.charAt(0)}
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-800">{val}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{row.gender} • {row.age} yrs</p>
                    </div>
                </div>
            )
        },
        { title: 'Contact', key: 'contact' },
        {
            title: 'Status',
            key: 'status',
            render: (val) => (
                <span className={cn(
                    "status-badge",
                    val === 'Admitted' ? 'status-warning' : 'status-success'
                )}>
                    {val}
                </span>
            )
        },
        {
            title: 'Doctor',
            key: 'doctor',
            render: (val) => <span className="text-xs font-medium text-gray-600">Dr. {val}</span>
        },
        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
            )
        }
    ];

    const patients = [
        { patientId: 'SHR-001', name: 'Anshul Sharma', age: 28, gender: 'Male', contact: '+91 9876543210', status: 'OPD', doctor: 'Verma' },
        { patientId: 'SHR-002', name: 'Kiran Devi', age: 45, gender: 'Female', contact: '+91 8877665544', status: 'Admitted', doctor: 'Gupta' },
        { patientId: 'SHR-003', name: 'Rahul Roy', age: 12, gender: 'Male', contact: '+91 9988776655', status: 'OPD', doctor: 'Sinha' },
        { patientId: 'SHR-004', name: 'Priya Gaur', age: 34, gender: 'Female', contact: '+91 7766554433', status: 'Admitted', doctor: 'Verma' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Patient Management</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage hospital patients, admissions, and checkups</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn-primary flex items-center gap-2">
                        <UserPlus className="w-4 h-4" />
                        New Registration
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="card flex items-center gap-4 bg-primary text-white border-none">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                        <Bed className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider opacity-80">Active IPD</p>
                        <h3 className="text-2xl font-bold">42</h3>
                    </div>
                </div>
                <div className="card flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total OPD Today</p>
                        <h3 className="text-2xl font-bold">128</h3>
                    </div>
                </div>
                <div className="card flex items-center gap-4">
                    <div className="w-12 h-12 bg-status-success-bg text-status-success-text rounded-xl flex items-center justify-center">
                        <UserPlus className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">New Registrations</p>
                        <h3 className="text-2xl font-bold">15</h3>
                    </div>
                </div>
            </div>

            <div className="card p-0 overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by name, ID or phone..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                </div>

                <Table columns={columns} data={patients} />

                <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs font-medium text-gray-500">Showing 4 of 1,284 patients</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-bold text-gray-400 cursor-not-allowed">Prev</button>
                        <button className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patients;
