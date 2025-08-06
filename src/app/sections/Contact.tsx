'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We'll be in touch.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-400">Have questions? We’d love to hear from you.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 h-32 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 px-6 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
