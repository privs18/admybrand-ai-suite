'use client';

import FaqItem from '@components/FaqItem';

const faqs = [
  {
    question: 'What is ADmyBRAND AI Suite?',
    answer: 'It’s an AI-powered marketing platform that helps automate campaign creation, analysis, and optimization.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full access to Pro features.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. You can cancel or change your plan at any time with no penalty.',
  },
  {
    question: 'Do I need to know marketing to use this?',
    answer: 'Not at all. The platform is built for beginners and professionals alike.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use industry-standard encryption and follow best practices for security and privacy.',
  },
];

export default function FAQ() {
  return (
    <section id = "faq" className="py-20 px-6 bg-[#1e293b] text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Here are some of the most common questions we get from users.
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} {...faq} />
        ))}
      </div>
    </section>
  );
}

