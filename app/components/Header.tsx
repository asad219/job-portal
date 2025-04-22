"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LockKeyOpen, UserCircle } from "@phosphor-icons/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={20}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="menu hidden md:flex space-x-10">
          <a href="#">
            Home
          </a>
          <a href="#">
            Job Listing
          </a>
          <a href="#">
            Services
          </a>
          <a href="#">
            Contact
          </a>
        </nav>

        {/* Right Section: Register and Login Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
            <UserCircle className="h-5 w-5" />
            Register
          </button>
          <button className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">
            <LockKeyOpen className="h-5 w-5" />
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Job Listing
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Register
            </button>
            <button className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Login
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
