import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  textSize?: string;
}

export function Breadcrumb({ items, textSize }: BreadcrumbProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-2 text-muted-foreground ${textSize}`}
      aria-label="Breadcrumb"
    >
      <Link
        href={"/"}
        className="flex items-center gap-1 hover:text-orange-600 transition-colors"
      >
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-orange-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </motion.nav>
  );
}