'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
};

export default function PricingCard({
  title,
  price,
  features,
  highlighted = false,
  cta = 'Start Now',
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`p-8 rounded-3xl border shadow-xl backdrop-blur-md text-white transition-all duration-300 ${
        highlighted
          ? 'bg-gradient-to-br from-indigo-600 to-purple-700 border-none'
          : 'bg-white/5 border-white/10'
      }`}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-4xl font-bold mb-4">{price}</p>
      <ul className="text-sm mb-6 space-y-2">
        {features.map((feat, idx) => (
          <li key={idx} className="text-gray-300">
            • {feat}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 rounded-full font-semibold ${
          highlighted
            ? 'bg-white text-black hover:bg-gray-100'
            : 'bg-white/10 text-white hover:bg-white/20'
        } transition duration-300`}
      >
        {cta}
      </button>
    </motion.div>
  );
}

