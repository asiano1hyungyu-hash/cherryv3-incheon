import React from 'react';
import { RegionData } from '@/src/types/index';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfo } from './components/QuickInfo';
import { CoursesSection } from './components/CoursesSection';
import { AboutSection } from './components/AboutSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { LocationsSection } from './components/LocationsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { JsonLdSchema } from './components/JsonLdSchema';

interface TemplateV3Props {
  data: RegionData;
}

export const TemplateV3: React.FC<TemplateV3Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-zinc-100 font-sans antialiased selection:bg-rose-600 selection:text-white relative">
      {/* Schema Structured Data */}
      <JsonLdSchema data={data} />

      {/* Header */}
      <Header data={data} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section (Contains Main H1) */}
        <Hero data={data} />

        {/* 2. Quick Information Row */}
        <QuickInfo data={data} />

        {/* 3. Program & Courses (Transparent Upfront Pricing) */}
        <CoursesSection data={data} />

        {/* 4. About Cherry Home Thai V3 */}
        <AboutSection data={data} />

        {/* 5. Why Cherry Home Thai */}
        <WhyUsSection data={data} />

        {/* 6. Simple 6-Step Process */}
        <ProcessTimeline data={data} />

        {/* 7. Service Coverage Areas */}
        <LocationsSection data={data} />

        {/* 8. Verified Customer Reviews */}
        <ReviewsSection data={data} />

        {/* 9. FAQ Section */}
        <FaqSection data={data} />

        {/* 10. Final Call to Action */}
        <FinalCtaSection data={data} />
      </main>

      {/* Footer */}
      <Footer data={data} />

      {/* Mobile Floating Action Bar */}
      <MobileBottomBar data={data} />
    </div>
  );
};
