'use client';

import { useEffect, useRef } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import ThreeStepSection from '@/components/sections/ThreeStepSection';
import FeaturePreviewSection from '@/components/sections/FeaturePreviewSection';
import CompetitorComparisonSection from '@/components/sections/CompetitorComparisonSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import FeatureHighlightsSection from '@/components/sections/FeatureHighlightsSection';
import PricingSection from '@/components/sections/PricingSection';
import TrustElementsSection from '@/components/sections/TrustElementsSection';
import EarlyAdopterSection from '@/components/sections/EarlyAdopterSection';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations when component mounts
    const initializeAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      // Page entrance animation
      gsap.fromTo(pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    };

    initializeAnimations();
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - Most Critical */}
        <HeroSection />

        {/* Problem/Solution Section */}
        <ProblemSolutionSection />

        {/* 3-Step Summary */}
        <ThreeStepSection />

        {/* MVP Feature Preview */}
        <FeaturePreviewSection />

        {/* Competitor Comparison */}
        <CompetitorComparisonSection />

        {/* Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Value Proposition */}
        <ValuePropositionSection />

        {/* Feature Highlights */}
        <FeatureHighlightsSection />

        {/* Pricing Plans */}
        <PricingSection />

        {/* Trust-Building Elements */}
        <TrustElementsSection />

        {/* Early Adopter Loop */}
        <EarlyAdopterSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
