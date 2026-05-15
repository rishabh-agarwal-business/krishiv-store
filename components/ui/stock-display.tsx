"use client"

import { Package, TrendingUp, AlertTriangle } from 'lucide-react';
import { Badge } from './badge';

interface StockDisplayProps {
    total: number;
    sold?: number;
    variant?: 'compact' | 'detailed' | 'badge';
    showIcon?: boolean;
}

export function StockDisplay({ total, sold = 0, variant = 'detailed', showIcon = false }: StockDisplayProps) {
    const remaining = total - sold;
    const stockPercentage = total > 0 ? (remaining / total) * 100 : 0;

    const getStockStatus = () => {
        if (remaining === 0) return 'out';
        if (stockPercentage <= 20) return 'low';
        return 'good';
    };

    const status = getStockStatus();

    if (variant === 'badge') {
        if (remaining === 0) {
            return <Badge variant="destructive">Out of Stock</Badge>;
        }
        if (status === 'low') {
            return <Badge variant="outline" className="border-orange-500 text-orange-600">Low Stock ({remaining})</Badge>;
        }
        return <Badge variant="outline" className="border-green-500 text-green-600">In Stock ({remaining})</Badge>;
    }

    if (variant === 'compact') {
        return (
            <div className="flex items-center gap-2 text-xs">
                {showIcon && <Package className="h-3 w-3" />}
                <span className={
                    remaining === 0 ? 'text-destructive' :
                        status === 'low' ? 'text-orange-600 dark:text-orange-400' :
                            'text-green-600 dark:text-green-400'
                }>
                    {remaining} available
                </span>
            </div>
        );
    }

    // detailed variant
    return (
        <div className="flex items-center gap-3 text-xs">
            <span className="text-green-600 dark:text-green-400">
                Sold: {sold}
            </span>
            <span className={
                remaining === 0 ? 'text-destructive' :
                    status === 'low' ? 'text-orange-600 dark:text-orange-400' :
                        'text-blue-600 dark:text-blue-400'
            }>
                Remaining: {remaining}
            </span>
            <span className="text-muted-foreground">
                Total: {total}
            </span>
        </div>
    );
}

interface StockIndicatorProps {
    total: number;
    sold?: number;
}

export function StockIndicator({ total, sold = 0 }: StockIndicatorProps) {
    const remaining = total - sold;
    const stockPercentage = total > 0 ? (remaining / total) * 100 : 0;

    if (remaining === 0) {
        return (
            <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertTriangle className="h-4 w-4" />
                <span>Out of Stock</span>
            </div>
        );
    }

    if (stockPercentage <= 20) {
        return (
            <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 text-sm">
                <AlertTriangle className="h-4 w-4" />
                <span>Only {remaining} left!</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>In Stock</span>
        </div>
    );
}