'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-lg text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-tight">ADmyBRAND</div>

        <div className="flex items-center">
          <ul className="flex space-x-8 text-lg font-medium">
            <li><a href="#hero" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#features" className="hover:text-gray-300 transition">Features</a></li>
            <li><a href="#pricing" className="hover:text-gray-300 transition">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-gray-300 transition">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-gray-300 transition">FAQ</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}




