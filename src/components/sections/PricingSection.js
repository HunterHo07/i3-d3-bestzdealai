'use client';

import { useEffect, useRef, useState } from 'react';

export default function PricingSection() {
  const sectionRef = useRef(null);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: 'free',
      name: 'Free Explorer',
      description: 'Perfect for trying out BestzDealAi',
      price: { monthly: 0, yearly: 0 },
      badge: 'Most Popular',
      badgeColor: 'bg-primary-cyan',
      features: [
        '3 requests per month',
        'Basic AI ranking',
        'Email notifications',
        'Standard support',
        'Mobile app access',
        'Deal history (30 days)'
      ],
      limitations: [
        'Limited to 3 offers per request',
        'No priority support',
        'Basic analytics only'
      ],
      cta: 'Start Free',
      ctaStyle: 'btn-primary'
    },
    {
      id: 'pro',
      name: 'Pro Shopper',
      description: 'For serious deal hunters and frequent buyers',
      price: { monthly: 19, yearly: 190 },
      badge: 'Best Value',
      badgeColor: 'bg-accent-gold',
      features: [
        'Unlimited requests',
        'Advanced AI ranking',
        'Real-time notifications',
        'Priority support',
        'Mobile + web access',
        'Full deal history',
        'Advanced analytics',
        'Seller messaging',
        'Price alerts',
        'Custom preferences'
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      ctaStyle: 'btn-primary'
    },
    {
      id: 'business',
      name: 'Business Elite',
      description: 'For businesses and power users',
      price: { monthly: 49, yearly: 490 },
      badge: 'Enterprise',
      badgeColor: 'bg-primary-purple',
      features: [
        'Everything in Pro',
        'Bulk request management',
        'Team collaboration',
        'API access',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced reporting',
        'SLA guarantee',
        'Training & onboarding'
      ],
      limitations: [],
      cta: 'Contact Sales',
      ctaStyle: 'border border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white'
    }
  ];

  useEffect(() => {
    const initializeAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      // Animate pricing cards
      gsap.fromTo('.pricing-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate price counters
      const priceElements = document.querySelectorAll('.price-counter');
      priceElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-price'));
        if (target > 0) {
          gsap.fromTo(element,
            { textContent: 0 },
            {
              textContent: target,
              duration: 1.5,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });
    };

    initializeAnimations();
  }, [billingCycle]);

  const getPrice = (plan) => {
    return billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly;
  };

  const getSavings = (plan) => {
    if (billingCycle === 'yearly' && plan.price.monthly > 0) {
      const yearlyTotal = plan.price.monthly * 12;
      const savings = yearlyTotal - plan.price.yearly;
      return Math.round((savings / yearlyTotal) * 100);
    }
    return 0;
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-dark-bg overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-gold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your shopping needs. Start free, upgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-dark-surface border border-dark-border rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-primary-blue text-white shadow-lg'
                  : 'text-muted-text hover:text-light-text'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-primary-blue text-white shadow-lg'
                  : 'text-muted-text hover:text-light-text'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-accent-gold text-dark-bg text-xs px-2 py-1 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`pricing-card relative h-full transition-all duration-500 ${
                hoveredPlan === plan.id ? 'scale-105 z-10' : ''
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Plan Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-4 py-1 rounded-full text-sm font-bold z-10`}>
                  {plan.badge}
                </div>
              )}

              <div className={`h-full p-8 rounded-2xl border-2 transition-all duration-500 ${
                hoveredPlan === plan.id
                  ? 'border-primary-blue bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 shadow-2xl'
                  : plan.id === 'pro'
                  ? 'border-primary-blue bg-gradient-to-br from-primary-blue/5 to-primary-purple/5'
                  : 'border-dark-border bg-dark-surface/50 hover:border-primary-blue/50'
              }`}>

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-light-text mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-text mb-6">
                    {plan.description}
                  </p>

                  {/* Price Display */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold gradient-text">
                        $<span className="price-counter" data-price={getPrice(plan)}>
                          {getPrice(plan)}
                        </span>
                      </span>
                      <span className="text-muted-text ml-2">
                        /{billingCycle === 'yearly' ? 'year' : 'month'}
                      </span>
                    </div>

                    {getSavings(plan) > 0 && (
                      <div className="text-sm text-accent-gold font-medium mt-2">
                        Save {getSavings(plan)}% with yearly billing
                      </div>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-light-text mb-4">
                    What's included:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <span className="text-primary-cyan mt-1 flex-shrink-0">✓</span>
                        <span className="text-light-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="mt-6">
                      <h5 className="text-sm font-medium text-muted-text mb-2">
                        Limitations:
                      </h5>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start space-x-3">
                            <span className="text-red-400 mt-1 flex-shrink-0">×</span>
                            <span className="text-muted-text text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 hover-lift ${plan.ctaStyle}`}>
                    {plan.cta}
                  </button>

                  {plan.id === 'pro' && (
                    <p className="text-center text-sm text-muted-text mt-3">
                      14-day free trial • No credit card required
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-light-text mb-8">
            Frequently Asked Questions
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                q: "Is there a free trial?",
                a: "Yes! Pro plan comes with a 14-day free trial. No credit card required to start."
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee for all paid plans. No questions asked."
              }
            ].map((faq, index) => (
              <div key={index} className="text-left p-6 bg-dark-surface/50 border border-dark-border rounded-lg hover-lift">
                <h4 className="font-semibold text-light-text mb-2">{faq.q}</h4>
                <p className="text-muted-text text-sm">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-light-text mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-text mb-6">
              Our team is here to help you choose the right plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary hover-lift hover-glow">
                Contact Sales
              </button>
              <button className="px-6 py-3 border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300 rounded-lg font-medium hover-lift">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
