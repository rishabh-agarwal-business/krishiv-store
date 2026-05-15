"use client"
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { SiFacebook, SiInstagram, SiGmail } from "react-icons/si";
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t bg-linear-to-br from-orange-50 via-pink-50 to-yellow-50 dark:from-orange-950/10 dark:via-pink-950/10 dark:to-yellow-950/10">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-orange-300 to-pink-300 dark:from-orange-600 dark:to-pink-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-pink-300 to-yellow-300 dark:from-pink-600 dark:to-yellow-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4 group">
                            <div className="relative h-10 w-10 shrink-0">
                                <div className="absolute inset-0 rounded-full bg-linear-to-br from-orange-400 via-pink-400 to-red-400 opacity-20 blur-sm group-hover:opacity-40 transition-opacity"></div>
                                <div className="relative h-10 w-10 rounded-full bg-linear-to-br from-orange-500 via-pink-500 to-red-500 flex items-center justify-center shadow-lg">
                                    <span className="text-white text-lg">🕉️</span>
                                    <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/30 to-transparent"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <span className="tracking-tight bg-linear-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                                        KriShiv Store
                                    </span>
                                    <Sparkles className="h-3 w-3 text-orange-500 opacity-60" />
                                </div>
                                <span className="text-[10px] text-muted-foreground italic">Crafted with devotion</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Premium handcrafted vastra, sacred murtis, and decorative accessories for your beloved deities.
                            Made with devotion, delivered with love.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/vastra" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Sacred Vastra
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/statue" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Divine Murtis
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/accessories" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="mb-4">Customer Care</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/#contact" className="hover:text-orange-600 transition-colors">About Us</Link></li>
                            <li><Link href="/policies" className="hover:text-orange-600 transition-colors">Shipping & Delivery</Link></li>
                            <li><Link href="/policies" className="hover:text-orange-600 transition-colors">Return Policy</Link></li>
                            <li><Link href="/policies" className="hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/policies" className="hover:text-orange-600 transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 shrink-0" />
                                <span>info@divinevastra.com</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>123 Temple Street<br />Varanasi, UP 221001<br />India</span>
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-orange-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <SiFacebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-orange-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <SiInstagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-orange-600 transition-colors"
                                aria-label="Email"
                            >
                                <SiGmail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} KriShiv Store. All rights reserved. Made with devotion 🙏</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <span>We Accept:</span>
                            <span>💳 Cards</span>
                            <span>📱 UPI</span>
                            <span>💵 COD</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}