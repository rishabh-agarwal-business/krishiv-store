"use client";

import { Badge } from './badge';
import { Check } from 'lucide-react';

interface ColorSelectorProps {
    colors: ColorVariant[];
    selectedColor: string;
    onColorChange: (color: ColorVariant) => void;
    className?: string;
}

export type ColorVariant = {
    color: string;
    images: string[];
    stockQuantity: number;
}

export function ColorSelector({
    colors,
    selectedColor,
    onColorChange,
    className = '',
}: ColorSelectorProps) {
    if (!colors || colors.length === 0) return null;

    return (
        <div className={className}>
            <label className="text-sm mb-2 block">
                Color: <span className="text-orange-600 dark:text-orange-400">{selectedColor}</span>
            </label>
            <div className="flex flex-wrap gap-2">
                {colors.map((colorVariant, index) => (
                    <button
                        key={index}
                        onClick={() => onColorChange(colorVariant)}
                        className={`relative px-4 py-2 rounded-md border-2 transition-all text-sm ${colorVariant.color === selectedColor
                            ? 'border-orange-500 bg-orange-50 dark:bg-orange-950'
                            : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            {colorVariant.color === selectedColor && (
                                <Check className="h-4 w-4 text-orange-600" />
                            )}
                            <span>{colorVariant.color}</span>
                        </div>
                        {colorVariant.stockQuantity <= 5 && colorVariant.stockQuantity > 0 && (
                            <Badge
                                variant="outline"
                                className="absolute -top-2 -right-2 text-xs px-1 py-0 border-orange-500 text-orange-600 bg-white dark:bg-black"
                            >
                                {colorVariant.stockQuantity} left
                            </Badge>
                        )}
                        {colorVariant.stockQuantity === 0 && (
                            <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-md flex items-center justify-center">
                                <span className="text-xs text-destructive">Out of Stock</span>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}