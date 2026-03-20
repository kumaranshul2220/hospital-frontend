import React, { useState } from 'react';
import { Search, Filter, Plus, Receipt, Download, CreditCard, Clock } from 'lucide-react';
import Table from '../components/common/Table';
import { cn } from '../utils/cn';

const Billing = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const columns = [
        { title: 'Invoice ID', key: 'invoiceNo', render: (val) => <span className="text-xs font-bold text-gray-500">{val}</span> },
        { title: 'Patient', key: 'patientName', render: (val) => <span className="text-sm font-bold text-gray-800">{val}</span> },
        { title: 'Amount', key: 'amount', render: (val) => <span className="font-bold text-primary">${val}</span> },
        {
            title: 'Status',
            key: 'status',
            render: (val) => (
                <span className={cn(
                    "status-badge",
                    val === 'Paid' ? 'status-success' : 'status-warning'
                )}>
                    {val}
                </span>
            )
        },
        { title: 'Date', key: 'date' },
        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-primary-light text-primary rounded-lg transition-colors" title="Download Invoice">
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            )
        }
    ];

    const invoices = [
        { invoiceNo: 'INV-17145', patientName: 'Anshul Sharma', amount: '1,200', status: 'Paid', date: '12 Feb 2026' },
        { invoiceNo: 'INV-17146', patientName: 'Kiran Devi', amount: '4,500', status: 'Pending', date: '13 Feb 2026' },
        { invoiceNo: 'INV-17147', patientName: 'Rahul Roy', amount: '850', status: 'Paid', date: '14 Feb 2026' },
        { invoiceNo: 'INV-17148', patientName: 'Priya Gaur', amount: '2,100', status: 'Pending', date: '14 Feb 2026' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Revenue & Billing</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage hospital finances, invoices and payments</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn-primary flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        New Invoice
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="card flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Daily Collections</p>
                        <h3 className="text-2xl font-bold">$12,450</h3>
                    </div>
                </div>
                <div className="card flex items-center gap-4">
                    <div className="w-12 h-12 bg-status-warning-bg text-status-warning-text rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pending Dues</p>
                        <h3 className="text-2xl font-bold">$6,100</h3>
                    </div>
                </div>
                <div className="card flex items-center gap-4 bg-primary text-white border-none">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                        <Receipt className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider opacity-80">Monthly Revenue</p>
                        <h3 className="text-2xl font-bold">$154,200</h3>
                    </div>
                </div>
            </div>

            <div className="card p-0 overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by invoice or patient..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Filter className="w-4 h-4" />
                        Recent
                    </button>
                </div>

                <Table columns={columns} data={invoices} />
            </div>
        </div>
    );
};

export default Billing;
