import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
    return (
        <div className="card group">
            <div className="flex items-start justify-between">
                <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
                    color === 'teal' ? 'bg-primary-light text-primary' :
                        color === 'green' ? 'bg-status-success-bg text-status-success-text' :
                            color === 'orange' ? 'bg-status-warning-bg text-status-warning-text' :
                                'bg-gray-100 text-gray-500'
                )}>
                    <Icon className="w-6 h-6" />
                </div>

                {trend && (
                    <div className={cn(
                        "flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold",
                        trend === 'up' ? 'bg-status-success-bg text-status-success-text' : 'bg-status-error-bg text-status-error-text'
                    )}>
                        {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {trendValue}%
                    </div>
                )}
            </div>

            <div className="mt-4">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
            </div>
        </div>
    );
};

export default StatCard;
