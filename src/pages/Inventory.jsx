import React, { useState } from 'react';
import { Search, Filter, Plus, Package, AlertTriangle, CheckCircle } from 'lucide-react';
import Table from '../components/common/Table';
import { cn } from '../utils/cn';

const Inventory = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const columns = [
        { title: 'Item Component', key: 'medName', render: (val) => <span className="text-sm font-bold text-gray-800">{val}</span> },
        { title: 'Batch', key: 'batch', render: (val) => <span className="text-xs font-medium text-gray-400">{val}</span> },
        {
            title: 'Quantity',
            key: 'quantity',
            render: (val) => (
                <div className="flex items-center gap-2">
                    <span className={cn(
                        "font-bold",
                        val < 100 ? "text-status-error-text" : "text-gray-700"
                    )}>{val}</span>
                    <span className="text-[10px] text-gray-400 font-medium">units</span>
                </div>
            )
        },
        {
            title: 'Status',
            key: 'status',
            render: (val) => (
                <span className={cn(
                    "status-badge",
                    val === 'In Stock' ? 'status-success' : 'status-error'
                )}>
                    {val}
                </span>
            )
        },
        { title: 'Expiry', key: 'expiry', render: (val) => <span className="text-xs font-medium text-gray-600">{val}</span> },
    ];

    const stocks = [
        { medName: 'Paracetamol 500mg', batch: 'BT-882', quantity: 1250, status: 'In Stock', expiry: 'Dec 2027' },
        { medName: 'Amoxicillin 250mg', batch: 'BT-112', quantity: 84, status: 'Low Stock', expiry: 'Jan 2026' },
        { medName: 'Ibuprofen 400mg', batch: 'BT-542', quantity: 500, status: 'In Stock', expiry: 'May 2028' },
        { medName: 'Disposable Syringes', batch: 'EQ-001', quantity: 15, status: 'Critical', expiry: 'N/A' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Pharmacy & Inventory</h1>
                    <p className="text-gray-500 text-sm mt-1">Track medicine stock, hospital equipment and supplies</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn-primary flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add Entry
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="card flex items-center gap-4 bg-status-error-bg border-none">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <AlertTriangle className="w-6 h-6 text-status-error-text" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-status-error-text uppercase tracking-wider">Critical Stock</p>
                        <h3 className="text-2xl font-bold text-gray-800">12 Items</h3>
                    </div>
                </div>
                <div className="card flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center">
                        <Package className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Inventory</p>
                        <h3 className="text-2xl font-bold">1,842</h3>
                    </div>
                </div>
                <div className="card flex items-center gap-4">
                    <div className="w-12 h-12 bg-status-success-bg text-status-success-text rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fresh Batches</p>
                        <h3 className="text-2xl font-bold">42</h3>
                    </div>
                </div>
            </div>

            <div className="card p-0 overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by name, batch or category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                <Table columns={columns} data={stocks} />
            </div>
        </div>
    );
};

export default Inventory;
