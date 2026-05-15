"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

interface SizeSelectorProps {
    sizes: string[];
    selectedSize: string;
    onSizeChange: (size: string) => void;
    className?: string;
}

export function SizeSelector({
    sizes,
    selectedSize,
    onSizeChange,
    className = '',
}: SizeSelectorProps) {
    if (!sizes || sizes.length === 0) return null;

    return (
        <div className={className}>
            <label className="text-sm mb-2 block">
                Size: <span className="text-orange-600 dark:text-orange-400">{selectedSize}</span>
            </label>
            <Select value={selectedSize} onValueChange={onSizeChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                    {sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                            {size}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}