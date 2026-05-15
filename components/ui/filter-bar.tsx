import { Search } from 'lucide-react';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export interface FilterOption {
    value: string;
    label: string;
}

interface FilterBarProps {
    searchQuery?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    filters?: {
        value: string;
        onChange: (value: string) => void;
        options: FilterOption[];
        placeholder?: string;
    }[];
    className?: string;
}

export function FilterBar({
    searchQuery,
    onSearchChange,
    searchPlaceholder = 'Search...',
    filters = [],
    className = '',
}: FilterBarProps) {
    const gridCols = filters.length + (onSearchChange ? 1 : 0);

    return (
        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(gridCols, 4)} gap-4 ${className}`}>
            {onSearchChange && (
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder={searchPlaceholder}
                        className="pl-10"
                    />
                </div>
            )}

            {filters.map((filter, index) => (
                <Select key={index} value={filter.value} onValueChange={filter.onChange}>
                    <SelectTrigger>
                        <SelectValue placeholder={filter.placeholder || 'Select...'} />
                    </SelectTrigger>
                    <SelectContent>
                        {filter.options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            ))}
        </div>
    );
}