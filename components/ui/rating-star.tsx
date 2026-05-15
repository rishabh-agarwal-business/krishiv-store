import { Star } from 'lucide-react';

interface RatingStarsProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    showNumber?: boolean;
    className?: string;
}

export function RatingStars({
    rating,
    maxRating = 5,
    size = 'md',
    showNumber = false,
    className = '',
}: RatingStarsProps) {
    const sizeClasses = {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
    };

    const starSize = sizeClasses[size];

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {Array.from({ length: maxRating }, (_, i) => i + 1).map((star) => (
                <Star
                    key={star}
                    className={`${starSize} ${star <= Math.round(rating)
                        ? 'fill-orange-500 text-orange-500'
                        : 'text-gray-300 dark:text-gray-600'
                        }`}
                />
            ))}
            {showNumber && (
                <span className="text-sm text-muted-foreground ml-1">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
}