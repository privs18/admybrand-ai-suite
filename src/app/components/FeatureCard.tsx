'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-md backdrop-blur-md text-white hover:shadow-xl transition-all duration-300"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
}

