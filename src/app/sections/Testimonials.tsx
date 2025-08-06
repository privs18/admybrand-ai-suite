'use client';

import TestimonialCard from '@components/TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Lee',
    role: 'Marketing Director, Growthly',
    quote: 'ADmyBRAND AI Suite has revolutionized how we run campaigns. Instant results!',
    image: '/public/girl1.jpg',
  },
  {
    name: 'James Carter',
    role: 'CMO, NovaTech',
    quote: 'The AI copywriter alone saves our team hours every week. Highly recommend!',
    image: '/images/customer2.jpg',
  },
  {
    name: 'Nina Alvarez',
    role: 'CEO, StorySpark',
    quote: 'Our conversions doubled since we switched to ADmyBRAND’s platform.',
    image: '/images/customer3.jpg',
  },
  {
    name: 'David Kim',
    role: 'Founder, EcoGoods',
    quote: 'The insights and analytics are game-changing. We can finally see what works.',
    image: '/images/customer4.jpg',
  },
  
  
];

export default function Testimonials() {
  return (
    <section id = "testimonials" className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Teams around the world use ADmyBRAND to accelerate their growth. Hear from a few of them:
        </p>
      </div>
      <div className="flex overflow-x-auto no-scrollbar px-4 pb-4 snap-x scroll-smooth">
        {testimonials.map((t, idx) => (
          <div key={idx} className="snap-start">
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </section>
  );
}
