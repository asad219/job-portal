"use client";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Links */}
          <div>
            <h4 className="text-lg font-bold mb-3">RESOURCES</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Tutorials
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="text-lg font-bold mb-3">COMPANY</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-3">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <FacebookLogo size={20} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <TwitterLogo size={20} />
              </a>
              <a href="#" className="hover:text-white" aria-label="Instagram">
                <InstagramLogo size={20} />
              </a>
            </div>
          </div>
          {/* Column 3 - Social Icons */}
          <div>
            
            <div className="flex space-x-4 justify-center">
              <Image
                className="invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={20}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
