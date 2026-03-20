import React from 'react';
import { cn } from '../../utils/cn';

const Table = ({ columns, data, onRowClick, className }) => {
    return (
        <div className={cn("overflow-x-auto", className)}>
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest"
                            >
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {data.map((row, i) => (
                        <tr
                            key={i}
                            onClick={() => onRowClick?.(row)}
                            className={cn(
                                "group hover:bg-gray-50/50 transition-colors cursor-pointer",
                                onRowClick ? "cursor-pointer" : "cursor-default"
                            )}
                        >
                            {columns.map((col) => (
                                <td key={col.key} className="px-6 py-4">
                                    {col.render ? col.render(row[col.key], row) : (
                                        <span className="text-sm font-medium text-gray-700">{row[col.key]}</span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {data.length === 0 && (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-300">
                    <p className="text-sm text-gray-400 font-medium tracking-wide">No records found matching your criteria</p>
                </div>
            )}
        </div>
    );
};

export default Table;
