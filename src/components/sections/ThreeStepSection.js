'use client';

import { useEffect, useRef, useState } from 'react';

export default function ThreeStepSection() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Post Your Request',
      description: 'Tell us what you want to buy, your budget, and preferences. Takes less than 2 minutes.',
      icon: '📝',
      color: 'from-primary-blue to-primary-cyan',
      features: ['Product description', 'Budget range', 'Location preference', 'Condition requirements'],
      demo: {
        title: 'iPhone 15 Pro',
        budget: '$800-900',
        location: 'New York',
        condition: 'New/Like New'
      }
    },
    {
      number: '02',
      title: 'Sellers Compete',
      description: 'Local and online sellers see your request and submit their best offers to win your business.',
      icon: '🏪',
      color: 'from-primary-purple to-accent-neon',
      features: ['Multiple offers', 'Real-time bidding', 'Seller verification', 'Competitive pricing'],
      demo: {
        offers: 3,
        avgTime: '< 2 hours',
        savings: 'Up to 25%',
        verified: '100%'
      }
    },
    {
      number: '03',
      title: 'AI Finds Best Deal',
      description: 'Our AI analyzes all offers considering price, seller rating, delivery, and value to rank the best deals.',
      icon: '🤖',
      color: 'from-accent-gold to-accent-electric',
      features: ['Smart ranking', 'Value analysis', 'Risk assessment', 'Personalized matching'],
      demo: {
        algorithm: 'AI Score',
        factors: '12+ criteria',
        accuracy: '94%',
        time: '< 5 seconds'
      }
    }
  ];

  useEffect(() => {
    const initializeAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      // Section entrance animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          setIsInView(true);
          // Auto-cycle through steps
          const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % steps.length);
          }, 4000);

          return () => clearInterval(interval);
        }
      });

      // Animate step cards
      gsap.fromTo('.step-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate connection lines
      gsap.fromTo('.connection-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    };

    initializeAnimations();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-dark-bg overflow-hidden" id="how-it-works">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00D4FF 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8B5CF6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto">
            Three simple steps to get the best deals without the hassle
          </p>
        </div>

        {/* Steps Container */}
        <div className="steps-container relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="relative flex-1">
                  {/* Step Card */}
                  <div className={`step-card relative p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                    activeStep === index
                      ? 'border-primary-blue bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 scale-105'
                      : 'border-dark-border bg-dark-surface/50 hover:border-primary-blue/50'
                  }`}
                  onClick={() => setActiveStep(index)}>

                    {/* Step Number */}
                    <div className={`absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Step Icon */}
                    <div className="text-6xl mb-4 text-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {step.icon}
                    </div>

                    {/* Step Content */}
                    <h3 className="text-2xl font-bold text-light-text mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-muted-text text-center mb-6">
                      {step.description}
                    </p>

                    {/* Step Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <span className="text-primary-cyan">✓</span>
                          <span className="text-light-text">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Active Step Demo */}
                    {activeStep === index && (
                      <div className="mt-6 p-4 bg-dark-bg/50 rounded-lg border border-primary-blue/30 animate-fade-in-up">
                        <h4 className="text-sm font-semibold text-primary-blue mb-2">Live Example:</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {Object.entries(step.demo).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-muted-text capitalize">{key}:</span>
                              <span className="text-light-text font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-primary-blue to-primary-purple connection-line transform -translate-y-1/2 origin-left"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="step-card relative p-6 rounded-2xl border border-dark-border bg-dark-surface/50">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl mb-2">{step.icon}</div>
                    <h3 className="text-xl font-bold text-light-text mb-2">{step.title}</h3>
                    <p className="text-muted-text mb-4">{step.description}</p>
                    <ul className="space-y-1">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <span className="text-primary-cyan">✓</span>
                          <span className="text-light-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Indicators */}
        <div className="hidden lg:flex justify-center space-x-2 mt-12">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? 'bg-primary-blue w-8'
                  : 'bg-dark-border hover:bg-primary-blue/50'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-light-text mb-4">
              Ready to try the future of shopping?
            </h3>
            <p className="text-muted-text mb-6 max-w-md">
              Join thousands of smart shoppers who save time and money with BestzDealAi
            </p>
            <button className="btn-primary text-lg px-8 py-4 hover-lift hover-glow">
              Start Your First Request →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
