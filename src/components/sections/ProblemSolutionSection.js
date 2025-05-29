'use client';

import { useEffect, useRef } from 'react';

export default function ProblemSolutionSection() {
  const sectionRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    const initializeAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      // Parallax effect for background elements
      gsap.to('.problem-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Problem section animation
      gsap.fromTo(problemRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: problemRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Solution section animation
      gsap.fromTo(solutionRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: solutionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Counter animations
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        gsap.fromTo(counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    };

    initializeAnimations();
  }, []);

  const problemStats = [
    { number: 70, suffix: '%', label: 'of shoppers compare 3+ platforms' },
    { number: 45, suffix: 'min', label: 'average time spent price hunting' },
    { number: 85, suffix: '%', label: 'abandon purchases due to complexity' }
  ];

  const solutionFeatures = [
    { icon: '🎯', title: 'Post Once', desc: 'Describe what you want in one simple post' },
    { icon: '🏪', title: 'Sellers Compete', desc: 'Multiple sellers bid for your business' },
    { icon: '🤖', title: 'AI Ranks', desc: 'Smart algorithm finds the best value deals' },
    { icon: '✅', title: 'You Choose', desc: 'Pick the perfect offer with confidence' }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-dark-surface overflow-hidden" id="problem-solution">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="problem-bg absolute top-20 left-10 w-64 h-64 bg-accent-neon/20 rounded-full blur-3xl"></div>
        <div className="problem-bg absolute bottom-20 right-10 w-80 h-80 bg-primary-purple/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            The Shopping Problem
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto">
            Traditional marketplaces make you hunt for deals. We bring deals to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Problem Side */}
          <div ref={problemRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-light-text mb-6">
                😤 Current Shopping Reality
              </h3>

              {/* Problem Points */}
              <div className="space-y-4">
                {[
                  'Search multiple websites manually',
                  'Compare prices across platforms',
                  'Miss better deals from local sellers',
                  'Waste time on repetitive searches',
                  'No guarantee you found the best price'
                ].map((problem, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg hover-lift">
                    <span className="text-red-400 text-xl">❌</span>
                    <span className="text-light-text">{problem}</span>
                  </div>
                ))}
              </div>

              {/* Problem Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {problemStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-dark-bg/50 rounded-lg border border-dark-border hover-glow">
                    <div className="text-2xl font-bold text-accent-neon">
                      <span className="counter" data-target={stat.number}>0</span>
                      <span>{stat.suffix}</span>
                    </div>
                    <p className="text-sm text-muted-text mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div ref={solutionRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold gradient-text-accent mb-6">
                🚀 BestzDealAi Solution
              </h3>

              {/* Solution Features */}
              <div className="space-y-4">
                {solutionFeatures.map((feature, index) => (
                  <div key={index} className="group p-6 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-xl hover-lift hover-glow transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light-text mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-text">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Solution Benefits */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-primary-cyan/10 border border-green-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-light-text mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎉</span>
                  The Result
                </h4>
                <ul className="space-y-2">
                  {[
                    'Save 30-50% on average purchases',
                    'Reduce shopping time by 80%',
                    'Discover local sellers you never knew existed',
                    'Get personalized deals based on your needs'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✅</span>
                      <span className="text-light-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 border border-primary-blue/30 rounded-2xl">
            <span className="text-4xl animate-bounce">💡</span>
            <div className="text-left">
              <h4 className="text-xl font-semibold text-light-text">Ready to experience the difference?</h4>
              <p className="text-muted-text">See how BestzDealAi transforms shopping</p>
            </div>
            <button className="btn-primary hover-lift hover-glow">
              Try Demo Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
