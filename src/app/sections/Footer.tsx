'use client';

import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2">ADmyBRAND</h3>
          <p className="text-gray-400 text-sm">
            AI-powered marketing made simple. Build, launch, and grow — smarter.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: <a href="mailto:contact@admybrand.com" className="hover:text-white">contact@admybrand.com</a></li>
            <li>Support: <a href="#" className="hover:text-white">Help Center</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-400 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-300 transition"><FaTwitter /></a>
            <a href="mailto:contact@admybrand.com" className="hover:text-pink-400 transition"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} ADmyBRAND. All rights reserved.
      </div>
    </footer>
  );
}

