'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function FeaturePreviewSection() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      id: 'smart-posting',
      title: 'Smart Request Posting',
      description: 'AI-powered form that helps you describe exactly what you want with intelligent suggestions.',
      icon: '🎯',
      color: 'from-primary-blue to-primary-cyan',
      preview: {
        type: 'form',
        fields: ['Product', 'Budget', 'Location', 'Preferences'],
        aiSuggestions: true
      },
      benefits: ['Auto-complete suggestions', 'Smart categorization', 'Budget optimization', 'Location matching']
    },
    {
      id: 'real-time-offers',
      title: 'Real-Time Offer Management',
      description: 'Watch offers come in live with instant notifications and real-time price updates.',
      icon: '⚡',
      color: 'from-primary-purple to-accent-neon',
      preview: {
        type: 'dashboard',
        offers: 5,
        realTime: true,
        notifications: true
      },
      benefits: ['Live offer tracking', 'Push notifications', 'Price alerts', 'Seller messaging']
    },
    {
      id: 'ai-ranking',
      title: 'AI Deal Intelligence',
      description: 'Advanced AI analyzes every offer across 12+ factors to find the best value for you.',
      icon: '🤖',
      color: 'from-accent-gold to-accent-electric',
      preview: {
        type: 'analysis',
        factors: 12,
        accuracy: '94%',
        speed: '< 5s'
      },
      benefits: ['Multi-factor analysis', 'Risk assessment', 'Value scoring', 'Personalized ranking']
    },
    {
      id: 'secure-transactions',
      title: 'Secure Deal Completion',
      description: 'Built-in escrow, verified sellers, and secure payment processing for peace of mind.',
      icon: '🔒',
      color: 'from-green-500 to-primary-cyan',
      preview: {
        type: 'security',
        escrow: true,
        verified: '100%',
        encrypted: true
      },
      benefits: ['Escrow protection', 'Seller verification', 'Secure payments', 'Dispute resolution']
    },
    {
      id: 'mobile-first',
      title: 'Mobile-First Experience',
      description: 'Optimized for mobile with native app features and offline capabilities.',
      icon: '📱',
      color: 'from-primary-blue to-primary-purple',
      preview: {
        type: 'mobile',
        responsive: true,
        offline: true,
        native: true
      },
      benefits: ['Native mobile app', 'Offline mode', 'Push notifications', 'Touch-optimized UI']
    },
    {
      id: 'analytics',
      title: 'Smart Analytics Dashboard',
      description: 'Track your savings, deal history, and get insights on your shopping patterns.',
      icon: '📊',
      color: 'from-accent-neon to-accent-gold',
      preview: {
        type: 'analytics',
        savings: '$1,247',
        deals: 23,
        insights: true
      },
      benefits: ['Savings tracking', 'Deal history', 'Shopping insights', 'Performance metrics']
    }
  ];

  useEffect(() => {
    const initializeAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      // Scroll animations (only run once)
      gsap.fromTo('.feature-preview-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    };

    initializeAnimations();
  }, []); // Only run once on mount

  // Separate effect for auto-play
  useEffect(() => {
    let autoPlayInterval;
    if (isAutoPlaying) {
      autoPlayInterval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % features.length);
      }, 4000);
    }

    return () => {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    };
  }, [isAutoPlaying, features.length]);

  const renderPreview = (feature) => {
    switch (feature.preview.type) {
      case 'form':
        return (
          <div className="space-y-3">
            {feature.preview.fields.map((field, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 bg-dark-bg/50 rounded">
                <span className="text-primary-blue">📝</span>
                <span className="text-sm text-light-text">{field}</span>
                {feature.preview.aiSuggestions && <span className="text-xs text-accent-gold">AI</span>}
              </div>
            ))}
          </div>
        );
      case 'dashboard':
        return (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-text">Live Offers:</span>
              <span className="text-primary-cyan font-bold">{feature.preview.offers}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-text">Real-time:</span>
              <span className="text-green-400">●</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-text">Notifications:</span>
              <span className="text-primary-blue">ON</span>
            </div>
          </div>
        );
      case 'analysis':
        return (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-text">AI Factors:</span>
              <span className="text-accent-gold font-bold">{feature.preview.factors}+</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-text">Accuracy:</span>
              <span className="text-green-400 font-bold">{feature.preview.accuracy}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-text">Speed:</span>
              <span className="text-primary-cyan font-bold">{feature.preview.speed}</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center text-muted-text">
            <span className="text-2xl">{feature.icon}</span>
            <p className="text-sm mt-2">Interactive preview</p>
          </div>
        );
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-dark-surface overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="feature-preview-header text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            MVP Features
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto mb-8">
            Experience the future of shopping with our AI-powered marketplace features
          </p>

          {/* Feature Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => {
                  setActiveFeature(index);
                  setIsAutoPlaying(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-primary-blue text-white'
                    : 'bg-dark-border text-muted-text hover:bg-primary-blue/20 hover:text-light-text'
                }`}
              >
                {feature.icon} {feature.title}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer hover-lift ${
                activeFeature === index
                  ? 'border-primary-blue bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 shadow-2xl scale-105'
                  : 'border-dark-border bg-dark-bg/80 hover:border-primary-blue/50'
              }`}
              onClick={() => {
                setActiveFeature(index);
                setIsAutoPlaying(false);
              }}
            >

              {/* Feature Icon */}
              <div className="text-5xl text-center mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {feature.icon}
              </div>

              {/* Feature Content */}
              <h3 className="text-lg font-bold text-light-text mb-3 text-center">
                {feature.title}
              </h3>

              <p className="text-muted-text text-sm text-center mb-4">
                {feature.description}
              </p>

              {/* Feature Preview */}
              <div className="bg-dark-surface/50 rounded-lg p-3 mb-4">
                {renderPreview(feature)}
              </div>

              {/* Feature Benefits */}
              {activeFeature === index && (
                <div className="animate-fade-in-up">
                  <ul className="space-y-1">
                    {feature.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-xs">
                        <span className="text-primary-cyan">✓</span>
                        <span className="text-light-text">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Active Feature Details */}
        <div className="text-center">
          <div className="inline-block max-w-2xl p-8 bg-gradient-to-r from-dark-surface/80 to-dark-bg/80 border border-dark-border rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-light-text mb-4">
              {features[activeFeature].title}
            </h3>
            <p className="text-muted-text mb-6">
              {features[activeFeature].description}
            </p>

            {/* All Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features[activeFeature].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-primary-cyan">✓</span>
                  <span className="text-sm text-light-text">{benefit}</span>
                </div>
              ))}
            </div>

            <Link href="/demo" className="btn-primary hover-lift hover-glow">
              Try This Feature →
            </Link>
          </div>
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-muted-text hover:text-primary-blue transition-colors duration-300"
          >
            {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
          </button>
        </div>
      </div>
    </section>
  );
}
