import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

const data = [
    { name: 'General', occupied: 45, available: 15, color: '#00868F' },
    { name: 'ICU', occupied: 8, available: 2, color: '#A50E0E' },
    { name: 'Emergency', occupied: 6, available: 4, color: '#664B00' },
    { name: 'Private', occupied: 12, available: 8, color: '#006D75' },
];

const BedAvailabilityChart = () => {
    return (
        <div className="card h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Bed Availability</h3>
                    <p className="text-xs font-medium text-gray-400">Real-time occupancy across wards</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Occupied</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Available</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F1F5F9" />
                        <XAxis type="number" hide />
                        <YAxis
                            dataKey="name"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fontWeight: 600, fill: '#64748B' }}
                        />
                        <Tooltip
                            cursor={{ fill: '#F8FAFC' }}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="occupied" radius={[0, 4, 4, 0]} barSize={20}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                        <Bar dataKey="available" fill="#E2E8F0" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BedAvailabilityChart;
