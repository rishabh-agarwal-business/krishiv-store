interface ProductThumbnailProps {
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
};

export function ProductThumbnail({ src, alt, size = 'md', className = '' }: ProductThumbnailProps) {
    return (
        <div className={`${sizeClasses[size]} rounded-md overflow-hidden shrink-0 bg-muted ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23f0f0f0" width="100" height="100"/%3E%3C/svg%3E';
                }}
            />
        </div>
    );
}