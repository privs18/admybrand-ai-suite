'use client';

const blogPosts = [
    {
      title: 'How AI is Revolutionizing Digital Marketing',
      summary: 'Explore how artificial intelligence is streamlining campaign planning, execution, and optimization.',
      image: 'https://images.unsplash.com/photo-1581090700227-1c07c686b5a0?auto=format&fit=crop&w=800&q=80',
      link: 'https://blog.hubspot.com/marketing/artificial-intelligence-marketing',
    },
    {
      title: 'Top 5 Marketing Tools for 2025',
      summary: 'We reviewed the best tools for automation, analytics, and audience targeting in 2025.',
      image: 'https://images.unsplash.com/photo-1580910051073-3e7f71adf38c?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.singlegrain.com/tools/best-marketing-tools/',
    },
    {
      title: 'Why Personalization Wins in Modern Marketing',
      summary: 'Learn why personalized content outperforms traditional ads and how to implement it at scale.',
      image: 'https://images.unsplash.com/photo-1611601186191-0f8f939fcd3b?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.salesforce.com/blog/personalized-marketing/',
    },
  ];
  

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stay ahead of the curve with the latest trends and tips from the world of AI marketing.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{post.summary}</p>
              <a
                href={post.link}
                className="text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
