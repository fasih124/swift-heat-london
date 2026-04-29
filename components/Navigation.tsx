"use client";

import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[64px]">
          
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <Flame className="text-orange-500" size={24} />
            SwiftHeat
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-slate-700 hover:text-black">
              Services
            </a>
            <a href="#grants" className="text-slate-700 hover:text-black">
              Heat Pump Grants
            </a>
            <a href="#reviews" className="text-slate-700 hover:text-black">
              Reviews
            </a>
            <a href="#contact" className="text-slate-700 hover:text-black">
              Contact
            </a>

            <a
              href="tel:02079460123"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors min-h-[44px] flex items-center"
            >
              Emergency Call Out
            </a>
          </div>

          {/* Mobile Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="flex flex-col px-4 py-4 gap-4">
            
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#grants" onClick={() => setIsOpen(false)}>
              Heat Pump Grants
            </a>
            <a href="#reviews" onClick={() => setIsOpen(false)}>
              Reviews
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <a
              href="tel:02079460123"
              className="bg-red-600 text-white text-center py-3 rounded-lg font-semibold min-h-[44px]"
            >
              📞 Call Now: 020 7946 0123
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}