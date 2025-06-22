"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquareMore,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Topbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-15 h-15 bg-white rounded-2xl flex items-center justify-center">
                <Image
                  alt="Genmoid Solutions Logo"
                  className="w-16 h-16"
                  height={20}
                  src="/logo6.png"
                  width={20}
                />
              </div>
              <span className="text-2xl font-bold text-[#0256ed]">
                Genmoid Solutions
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link
                className="text-gray-500 hover:text-purple-600 transition-colors"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-500 hover:text-purple-600 transition-colors"
                href="/about"
              >
                Why Genmoid?
              </Link>
              <Link
                className="text-gray-500 hover:text-purple-600 transition-colors"
                href="/services"
              >
                Services
              </Link>
              <Link
                className="text-gray-500 hover:text-purple-600 transition-colors"
                href="/career"
              >
                Career
              </Link>
              <Link
                className="text-gray-500 hover:text-purple-600 transition-colors"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-gray-500 hover:text-purple-600 transition-colors"
                href="/contact"
              >
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                className="text-gray-400 hover:text-green-400 transition-colors"
                href="https://wa.me/917030020973"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageSquareMore className="w-5 h-5" />
              </a>
              <a
                className="text-gray-400 hover:text-blue-400 transition-colors"
                href="https://facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                className="text-gray-400 hover:text-pink-400 transition-colors"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                className="text-gray-400 hover:text-blue-400 transition-colors"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <button
              className="md:hidden text-gray-500 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a
                  className="text-gray-500 hover:text-purple-600 transition-colors py-2"
                  href="#home"
                >
                  Home
                </a>
                <a
                  className="text-gray-500 hover:text-purple-600 transition-colors py-2"
                  href="#about"
                >
                  Why Genmoid?
                </a>
                <a
                  className="text-gray-500 hover:text-purple-600 transition-colors py-2"
                  href="#services"
                >
                  Services
                </a>
                <a
                  className="text-gray-500 hover:text-purple-600 transition-colors py-2"
                  href="#internships"
                >
                  Internships
                </a>
                <a
                  className="text-gray-500 hover:text-purple-600 transition-colors py-2"
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  className="text-gray-500 hover:text-purple-600 transition-colors py-2"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Topbar;
