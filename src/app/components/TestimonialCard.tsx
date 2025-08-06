'use client';

import { motion } from 'framer-motion';

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export default function TestimonialCard({ name, role, quote, image }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 min-w-[280px] max-w-xs mx-3 text-white backdrop-blur-md"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm italic">"{quote}"</p>
    </motion.div>
  );
}

