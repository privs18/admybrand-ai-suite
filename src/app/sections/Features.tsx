'use client';

import FeatureCard from '@components/FeatureCard';
import { FaBolt, FaChartLine, FaUsers, FaMagic, FaCloud, FaLock } from 'react-icons/fa';

const features = [
  {
    icon: <FaBolt />,
    title: 'Instant Campaigns',
    description: 'Launch AI-driven campaigns in seconds with smart defaults.',
  },
  {
    icon: <FaChartLine />,
    title: 'Analytics Dashboard',
    description: 'Real-time insights to monitor performance and conversions.',
  },
  {
    icon: <FaUsers />,
    title: 'Audience Targeting',
    description: 'Reach your exact audience with precision targeting tools.',
  },
  {
    icon: <FaMagic />,
    title: 'Smart Copywriting',
    description: 'Auto-generate engaging content and ad headlines instantly.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Sync',
    description: 'Secure and seamless cloud storage for all your campaigns.',
  },
  {
    icon: <FaLock />,
    title: 'End-to-End Security',
    description: 'Data encryption and compliance built into every feature.',
  },
];

export default function Features() {
  return (
    <section id = "features" className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Choose ADmyBRAND?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We built this AI Suite to simplify your marketing workflow — from creation to optimization.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <FeatureCard
            key={idx}
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </section>
  );
}

