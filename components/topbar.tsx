"use client";
import React, { useState } from "react";
import {
    Code,
    Menu,
    X,
    Facebook,
    Instagram,
    Linkedin,
    MessageSquareMore
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Topbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Navigation */}
            <nav className="bg-black/20 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg flex items-center justify-center">
                                <Image
                                    src="/logo5.png" // update this to the correct image path
                                    alt="Genmoid Solutions Logo"
                                    className="w-10 h-10"
                                    width={10}
                                    height={10}
                                />              </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Genmoid Solutions
                            </span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
                            <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">Why Genmoid?</Link>
                            <Link href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link>
                            <Link href="/career" className="text-gray-300 hover:text-purple-400 transition-colors">Career</Link>
                            <Link href="/projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</Link>
                            <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <a href="https://wa.me/917030020973" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <MessageSquareMore className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-300 hover:text-white"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4">
                            <div className="flex flex-col space-y-2">
                                <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors py-2">Home</a>
                                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors py-2">Why Genmoid?</a>
                                <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors py-2">Services</a>
                                <a href="#internships" className="text-gray-300 hover:text-purple-400 transition-colors py-2">Internships</a>
                                <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors py-2">Projects</a>
                                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors py-2">Contact</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Topbar;