'use client';

import { useEffect, useRef, useState } from 'react';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Small Business Owner',
      company: 'Chen\'s Electronics',
      avatar: '👩‍💼',
      rating: 5,
      text: 'BestzDealAi completely transformed how I source inventory. Instead of spending hours calling suppliers, I post once and get 5-10 competitive quotes. Saved me $15K last quarter alone!',
      savings: '$15,000',
      timeframe: 'Last Quarter',
      highlight: 'Inventory Sourcing'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Tech Enthusiast',
      company: 'Freelance Developer',
      avatar: '👨‍💻',
      rating: 5,
      text: 'As someone who buys a lot of tech gear, this platform is a game-changer. The AI ranking is spot-on - it found me a MacBook Pro for $400 less than retail from a verified local seller.',
      savings: '$400',
      timeframe: 'Last Purchase',
      highlight: 'Tech Equipment'
    },
    {
      id: 3,
      name: 'Jennifer Park',
      role: 'Event Planner',
      company: 'Park Events Co.',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Planning events requires sourcing from dozens of vendors. BestzDealAi lets me post all my needs at once and compare offers side-by-side. My clients love the cost savings!',
      savings: '$8,500',
      timeframe: 'Per Event',
      highlight: 'Event Planning'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Restaurant Owner',
      company: 'Thompson\'s Bistro',
      avatar: '👨‍🍳',
      rating: 5,
      text: 'Food costs were killing my margins. Now I post my weekly needs and local suppliers compete for my business. Quality stayed high, costs dropped 20%. Brilliant concept!',
      savings: '20%',
      timeframe: 'Monthly',
      highlight: 'Food Service'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Interior Designer',
      company: 'Wang Design Studio',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Finding unique furniture pieces used to take weeks. BestzDealAi connects me with local artisans and vintage dealers I never knew existed. My clients are amazed by the finds!',
      savings: '$3,200',
      timeframe: 'Per Project',
      highlight: 'Interior Design'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Users', icon: '😊' },
    { number: '95%', label: 'Satisfaction Rate', icon: '⭐' },
    { number: '$2.3M', label: 'Total Savings', icon: '💰' },
    { number: '4.9/5', label: 'Average Rating', icon: '🏆' }
  ];

  useEffect(() => {
    const initializeAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      // Auto-rotate testimonials
      const interval = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
      }, 5000);

      // Animate testimonial cards
      gsap.fromTo('.testimonial-card',
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate stats
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      return () => clearInterval(interval);
    };

    initializeAnimations();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-dark-surface overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto">
            Join thousands of satisfied customers who are saving time and money with BestzDealAi
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center p-6 bg-dark-bg/50 rounded-xl border border-dark-border hover-lift">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
              <div className="text-sm text-muted-text">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="testimonial-card max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-dark-bg/80 to-dark-surface/80 border border-dark-border rounded-2xl p-8 md:p-12 backdrop-blur-sm">

            {/* Quote */}
            <div className="text-center mb-8">
              <div className="text-6xl text-primary-blue mb-4">"</div>
              <blockquote className="text-xl md:text-2xl text-light-text leading-relaxed mb-6">
                {testimonials[activeTestimonial].text}
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="text-5xl">{testimonials[activeTestimonial].avatar}</div>
                <div>
                  <h4 className="text-lg font-semibold text-light-text">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-muted-text">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-sm text-primary-cyan">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="text-center md:text-right">
                <div className="text-2xl font-bold text-accent-gold">
                  {testimonials[activeTestimonial].savings}
                </div>
                <div className="text-sm text-muted-text">
                  Saved {testimonials[activeTestimonial].timeframe}
                </div>
                <div className="text-xs text-primary-cyan mt-1">
                  {testimonials[activeTestimonial].highlight}
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center mt-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <span key={i} className="text-accent-gold text-2xl">★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-primary-blue w-8'
                  : 'bg-dark-border hover:bg-primary-blue/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer hover-lift ${
                activeTestimonial === index
                  ? 'border-primary-blue bg-gradient-to-br from-primary-blue/10 to-primary-purple/10'
                  : 'border-dark-border bg-dark-bg/50 hover:border-primary-blue/50'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <h5 className="font-semibold text-light-text">{testimonial.name}</h5>
                  <p className="text-sm text-muted-text">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-sm text-light-text mb-4 line-clamp-3">
                {testimonial.text}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent-gold">★</span>
                  ))}
                </div>
                <div className="text-sm font-bold text-accent-gold">
                  {testimonial.savings}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-light-text mb-4">
              Ready to join our success stories?
            </h3>
            <p className="text-muted-text mb-6 max-w-md">
              Start saving time and money today with BestzDealAi's intelligent marketplace
            </p>
            <button className="btn-primary text-lg px-8 py-4 hover-lift hover-glow">
              Start Your Success Story →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
