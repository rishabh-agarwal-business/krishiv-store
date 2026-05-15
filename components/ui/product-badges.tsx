import { Badge } from './badge';
import { ColorVariant } from './color-selector';

interface ProductBadgesProps {
    product: Product;
    showStock?: boolean;
    className?: string;
}

export interface Review {
    id: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: Date;
}

export interface Product {
    id: string;
    name: string;
    category: 'vastra' | 'statue' | 'accessories';
    price: number;
    description: string;
    image: string;
    images: string[];
    reviews: Review[];
    inStock: boolean;
    material: string;
    color: string;
    colors?: ColorVariant[];
    size?: string;
    sizes?: string[];
    featured: boolean;
    createdAt: Date;
    deity?: string;
    deities?: string[];
    stockQuantity: number;
    soldQuantity: number;
}

export function ProductBadges({ product, showStock = false, className = '' }: ProductBadgesProps) {
    const remaining = (product.stockQuantity || 0) - (product.soldQuantity || 0);

    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            <Badge variant="outline" className="capitalize">
                {product.category}
            </Badge>

            {product.featured && (
                <Badge className="bg-orange-500">Featured</Badge>
            )}

            {!product.inStock && (
                <Badge variant="destructive">Out of Stock</Badge>
            )}

            {product.inStock && remaining <= 10 && remaining > 0 && (
                <Badge variant="outline" className="border-orange-500 text-orange-600">
                    Low Stock
                </Badge>
            )}

            {showStock && product.inStock && remaining > 10 && (
                <Badge variant="outline" className="border-green-500 text-green-600">
                    In Stock
                </Badge>
            )}
        </div>
    );
}