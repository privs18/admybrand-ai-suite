'use client';

import PricingCard from '@components/PricingCard';

const plans = [
  {
    title: 'Starter',
    price: '$0/mo',
    features: ['1 User', 'Basic Analytics', 'Limited Campaigns', 'Email Support'],
  },
  {
    title: 'Pro',
    price: '$29/mo',
    features: ['5 Users', 'Advanced Analytics', 'Unlimited Campaigns', 'Priority Support'],
    highlighted: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Users', 'Dedicated Manager', 'Custom Features', '24/7 Support'],
  },
];

export default function Pricing() {
  return (
    <section id = "pricing" className="py-20 px-6 bg-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose a plan that fits your business. Upgrade or cancel anytime.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <PricingCard
            key={idx}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            highlighted={plan.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

