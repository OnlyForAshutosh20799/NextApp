'use client'
import Hero from '../components/Sections/Hero';
import FormSection from '../components/Sections/FormSection';
import TrustSection from '../components/Sections/TrustSection';
import FeaturesSection from '../components/Sections/FeaturesSection';
import ProcessSection from '../components/Sections/ProcessSection';
import Testimonials from '../components/Sections/Testimonials';
import FAQ from '../components/Sections/FAQ';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <FormSection />
        <TrustSection />
        <FeaturesSection />
        <ProcessSection />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
}