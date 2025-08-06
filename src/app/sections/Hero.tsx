'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        min-h-screen flex flex-col justify-center items-center px-6
        relative overflow-hidden transition-colors duration-500
        bg-gradient-to-br from-[#f7faff] to-[#e4ecf5] text-black
        dark:from-[#0f172a] dark:to-[#1e293b] dark:text-white
      "
    >
      {/* Animated Text Block */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl z-10"
      >
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Power Your Marketing with AI.
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          ADmyBRAND AI Suite helps you automate campaigns, gain insights & grow smarter.
        </p>
        <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition duration-300">
          Get Started for Free
        </button>
      </motion.div>

      {/* Glassy Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-400 opacity-30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-[200px] h-[200px] bg-purple-500 opacity-20 rounded-full blur-2xl z-0"></div>
    </section>
  );
}



