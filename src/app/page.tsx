import { Metadata } from 'next';
import Hero from '@/components/Hero';
import TopCategories from '@/components/TopCategories';
import BlogSection from '@/components/BlogSection';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Crispy Fruits - Your fresh fruit destination',
};

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Top Categories Section */}
      <section id="products">
        <TopCategories />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <BlogSection />
      </section>

      {/* Testimonials Section */}
      <section id="about">
        <Testimonials />
      </section>

      {/* Newsletter Section */}
      <section id="contact">
        <Newsletter />
      </section>
      {/* Trust Badges Section */}
      <section id="faq">
        <TrustBadges />
      </section>



      {/* Recipes Section */}
      <section id="recipes">
        {/* Additional content for recipes can be added here */}
      </section>
    </main>
  );
}