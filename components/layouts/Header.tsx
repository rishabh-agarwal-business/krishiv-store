"use client"

import {
    ShoppingCart,
    Menu,
    Sun,
    Moon,
    User,
    LogOut,
    Sparkles,
    Heart,
    Package,
    Search,
    X,
} from "lucide-react";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "../ui/sheet";
import { Badge } from "../ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

export function Header() {
    const { theme, setTheme } = useTheme();
    // const { user, isAuthenticated, logout } = useAuth();
    // const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const adminLink = { name: "Admin", path: "/admin" };

    const user = {
        name: 'Rishabh',
        email: 'rishabh@gmail.com'
    }

    const isAuthenticated = true;
    const logout = () => { };

    const isActive = (path: string) => {
        // return location.pathname === path;
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
            setSearchQuery("");
        }
    };

    const clearSearch = () => {
        setSearchQuery("");
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-orange-200/50 dark:border-orange-900/50 bg-linear-to-r from-orange-50/95 via-pink-50/95 to-yellow-50/95 dark:from-orange-950/95 dark:via-pink-950/95 dark:to-yellow-950/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-lg">
            {/* Decorative gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-orange-500 via-pink-500 to-red-500"></div>

            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between gap-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3 group shrink-0"
                    >
                        <div className="relative h-10 w-10 shrink-0">
                            {/* Outer glow ring */}
                            <div className="absolute inset-0 rounded-full bg-linear-to-br from-orange-400 via-pink-400 to-red-400 opacity-30 blur-md group-hover:opacity-50 transition-opacity animate-pulse"></div>
                            {/* Main circle */}
                            <div className="relative h-10 w-10 rounded-full bg-linear-to-br from-orange-500 via-pink-500 to-red-500 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all group-hover:scale-110">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="animate-spin"
                                    style={{ animationDuration: '20s' }}
                                >🕉️</motion.div>
                                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/30 to-transparent"></div>
                            </div>
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <div className="flex items-center gap-1.5">
                                <span className="tracking-tight bg-linear-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-red-500 transition-all">
                                    KriShiv Store
                                </span>
                                <Sparkles className="h-3 w-3 text-orange-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-[10px] text-muted-foreground italic">
                                Crafted with devotion
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Search Bar */}
                    <form
                        onSubmit={handleSearch}
                        className="hidden md:flex flex-1 max-w-xl mx-4"
                    >
                        <div
                            className={`relative w-full transition-all ${isSearchFocused ? "scale-[1.02]" : ""
                                }`}
                        >
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-600 dark:text-orange-400 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search for products, deities, vastra..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className="w-full h-10 pl-10 pr-10 rounded-full border-2 border-orange-300/30 dark:border-orange-800/30 bg-white dark:bg-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:shadow-lg transition-all placeholder:text-muted-foreground/60 placeholder:text-sm"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    </form>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="shrink-0"
                        >
                            {theme === "light" ? (
                                <Moon className="h-5 w-5" />
                            ) : (
                                <Sun className="h-5 w-5" />
                            )}
                        </Button>

                        {/* User Menu */}
                        {isAuthenticated && user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        aria-label="User menu"
                                        className="shrink-0"
                                    >
                                        <User className="h-5 w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <div className="px-2 py-1.5 text-sm">
                                        <p className="truncate max-w-50">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground truncate max-w-50">
                                            {user.email}
                                        </p>
                                    </div>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/account?tab=profile"
                                            className="cursor-pointer"
                                        >
                                            <User className="mr-2 h-4 w-4" />
                                            My Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/account?tab=orders"
                                            className="cursor-pointer"
                                        >
                                            <Package className="mr-2 h-4 w-4" />
                                            My Orders
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/account?tab=favourites"
                                            className="cursor-pointer"
                                        >
                                            <Heart className="mr-2 h-4 w-4" />
                                            Favourites
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/admin"
                                            className="cursor-pointer"
                                        >
                                            Admin Panel
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={logout}
                                        className="cursor-pointer"
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link href="/login">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Login"
                                    className="shrink-0"
                                >
                                    <User className="h-5 w-5" />
                                </Button>
                            </Link>
                        )}

                        <Link href="/cart">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative shrink-0"
                                aria-label="Cart"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                {/* {totalItems > 0 && ( */}
                                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                                    {/* {totalItems} */}0
                                </Badge>
                                {/* )} */}
                            </Button>
                        </Link>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="shrink-0"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-70 sm:w-87.5"
                            >
                                <SheetHeader>
                                    <SheetTitle className="flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-full bg-linear-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                                            <span className="text-white text-sm">
                                                🕉️
                                            </span>
                                        </div>
                                        <span className="text-base">
                                            KriShiv Store
                                        </span>
                                    </SheetTitle>
                                </SheetHeader>

                                {/* <form onSubmit={handleSearch} className="mt-6">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                        <input
                                            type="text"
                                            placeholder="Search products..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full h-10 pl-10 pr-10 rounded-full border border-orange-200/50 dark:border-orange-900/50 bg-white/50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-sm"
                                        />
                                        {searchQuery && (
                                            <button
                                                type="button"
                                                onClick={clearSearch}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                </form> */}

                                <nav className="flex flex-col space-y-2 mt-6">
                                    {isAuthenticated && (
                                        <>
                                            <Link
                                                href={adminLink.path}
                                                onClick={handleLinkClick}
                                                className={`px-4 py-3 rounded-lg transition-colors text-base ${isActive(adminLink.path)
                                                    ? "bg-linear-to-r from-orange-500 to-pink-500 text-white"
                                                    : "hover:bg-orange-50 dark:hover:bg-orange-950/20"
                                                    }`}
                                            >
                                                {adminLink.name}
                                            </Link>
                                            <div className="pt-4 pb-2">
                                                <div className="text-xs text-muted-foreground px-4 mb-2">
                                                    MY ACCOUNT
                                                </div>
                                                <Link
                                                    href="/account?tab=profile"
                                                    onClick={handleLinkClick}
                                                    className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-950/20 text-base"
                                                >
                                                    <User className="h-4 w-4" />
                                                    My Profile
                                                </Link>
                                                <Link
                                                    href="/account?tab=orders"
                                                    onClick={handleLinkClick}
                                                    className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-950/20 text-base"
                                                >
                                                    <Package className="h-4 w-4" />
                                                    My Orders
                                                </Link>
                                                <Link
                                                    href="/account?tab=favourites"
                                                    onClick={handleLinkClick}
                                                    className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-950/20 text-base"
                                                >
                                                    <Heart className="h-4 w-4" />
                                                    Favourites
                                                </Link>
                                            </div>
                                        </>
                                    )}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* Mobile Search Bar - Below header on small screens */}
                <div className="md:hidden pb-3">
                    <form onSubmit={handleSearch}>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search for products, deities, vastra..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-10 pl-10 pr-10 rounded-full border border-orange-200/50 dark:border-orange-900/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-sm"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}