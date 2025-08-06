import Navbar from './components/NavBar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/Faq';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
import Blog from './sections/Blog';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Blog />
        <Footer />
      </main>
    </>
  );
}

