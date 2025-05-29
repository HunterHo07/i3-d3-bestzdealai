'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ParticleBackground from '@/components/animations/ParticleBackground';
import MiniDemoLoop from '@/components/animations/MiniDemoLoop';
import TypingText from '@/components/animations/TypingText';

export default function HeroSection() {
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initializeHero = async () => {
      const { gsap } = await import('gsap');
      
      // Hero entrance animation
      const tl = gsap.timeline();
      
      tl.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
      .fromTo('.hero-content > *',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.8"
      );

      setIsLoaded(true);
    };

    initializeHero();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="hero-content space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="gradient-text">You post it.</span>
                <br />
                <span className="text-light-text">They</span>{' '}
                <TypingText 
                  words={['deal it.', 'compete.', 'offer it.', 'bid it.']}
                  className="gradient-text-accent"
                />
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-text font-light max-w-2xl">
                The first AI-powered reverse marketplace where{' '}
                <span className="text-primary-cyan font-medium">sellers compete</span>{' '}
                to give you the best deal. Post once, get multiple offers.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: '🎯', text: 'Post Once, Get Multiple Offers' },
                { icon: '🤖', text: 'AI-Ranked Best Deals' },
                { icon: '⚡', text: 'Real-Time Negotiations' }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-dark-surface/50 backdrop-blur-sm border border-dark-border rounded-full px-4 py-2 hover-lift hover-glow"
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <span className="text-sm font-medium text-light-text">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="btn-primary text-lg px-8 py-4 hover-lift hover-glow animate-pulse-glow"
              >
                🚀 Try Live Demo
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-dark-bg transition-all duration-300 rounded-lg font-semibold text-lg hover-lift"
              >
                See How It Works
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {['👨‍💻', '👩‍💼', '👨‍🎨', '👩‍🔬'].map((avatar, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-dark-bg animate-float flex items-center justify-center text-sm"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {avatar}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-text">
                  <span className="text-primary-cyan font-semibold">1,000+</span> early adopters
                </span>
              </div>
              
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    className="w-5 h-5 text-accent-gold animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-muted-text ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mini Demo Loop */}
          <div className="relative">
            <div className="relative z-10">
              <MiniDemoLoop />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-blue/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-text font-medium">Scroll to explore</span>
            <svg 
              className="w-6 h-6 text-primary-blue" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
