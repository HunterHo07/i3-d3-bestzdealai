'use client';

import Link from 'next/link';

export default function WhyUsPage() {
  const advantages = [
    {
      title: "First-Mover Advantage",
      description: "We're pioneering the reverse marketplace model with AI-powered deal ranking. No direct competitors exist.",
      icon: "🚀",
      benefits: ["Market leadership", "Brand recognition", "Network effects", "Investor interest"]
    },
    {
      title: "AI-Powered Intelligence",
      description: "Our proprietary AI analyzes 12+ factors to rank deals by true value, not just price.",
      icon: "🤖",
      benefits: ["Smart ranking", "Personalized results", "Risk assessment", "Continuous learning"]
    },
    {
      title: "Buyer-First Philosophy",
      description: "Unlike seller-centric marketplaces, we put buyers first. Sellers compete for your business.",
      icon: "🎯",
      benefits: ["Better deals", "Time savings", "Reduced effort", "Guaranteed competition"]
    },
    {
      title: "Local + Global Reach",
      description: "Connect with both local sellers and online retailers in one unified platform.",
      icon: "🌐",
      benefits: ["Best of both worlds", "Wider selection", "Local support", "Global access"]
    }
  ];

  const teamMembers = [
    {
      name: "Tech Visionary",
      role: "CEO & Founder",
      background: "10+ years in AI/ML, Former Google engineer",
      avatar: "👨‍💻"
    },
    {
      name: "Business Strategist", 
      role: "COO & Co-Founder",
      background: "MBA, Former McKinsey consultant, E-commerce expert",
      avatar: "👩‍💼"
    },
    {
      name: "AI Architect",
      role: "CTO",
      background: "PhD in AI, Former Amazon ML scientist",
      avatar: "🧠"
    },
    {
      name: "Growth Expert",
      role: "VP Marketing",
      background: "Scaled 3 startups to $10M+ revenue",
      avatar: "📈"
    }
  ];

  const metrics = [
    { label: "User Satisfaction", value: "4.9/5", description: "Highest in industry" },
    { label: "Time Saved", value: "80%", description: "vs traditional shopping" },
    { label: "Average Savings", value: "25%", description: "on every purchase" },
    { label: "Seller Response", value: "<2hrs", description: "average offer time" }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/90 backdrop-blur-lg border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-display font-bold gradient-text">BestzDealAi</span>
              <span className="text-sm text-muted-text">Why Us</span>
            </Link>
            <Link href="/" className="text-primary-blue hover:text-primary-cyan transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Why Choose BestzDealAi?
            </h1>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              We're not just another marketplace. We're revolutionizing how people shop and sell online.
            </p>
          </div>

          {/* Key Advantages */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-dark-surface border border-dark-border rounded-2xl p-8 hover-lift hover-glow"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{advantage.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-light-text mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-text">
                      {advantage.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex}
                      className="flex items-center space-x-2 p-2 bg-dark-bg/50 rounded-lg"
                    >
                      <span className="text-primary-cyan">✓</span>
                      <span className="text-sm text-light-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-light-text mb-8 text-center">
              Proven Results
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-dark-surface/50 rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-light-text mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-muted-text">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-light-text mb-8 text-center">
              World-Class Team
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-dark-surface border border-dark-border rounded-xl hover-lift"
                >
                  <div className="text-5xl mb-4">{member.avatar}</div>
                  <h3 className="text-lg font-bold text-light-text mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary-cyan font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-muted-text">
                    {member.background}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Comparison */}
          <div className="bg-dark-surface border border-dark-border rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-light-text mb-8 text-center">
              How We Compare
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-border">
                    <th className="text-left py-4 px-4 text-light-text">Feature</th>
                    <th className="text-center py-4 px-4 text-primary-cyan font-bold">BestzDealAi</th>
                    <th className="text-center py-4 px-4 text-muted-text">Traditional Marketplaces</th>
                    <th className="text-center py-4 px-4 text-muted-text">Price Comparison Sites</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Buyer-First Approach", "✅", "❌", "❌"],
                    ["AI-Powered Ranking", "✅", "❌", "❌"],
                    ["Real-Time Competition", "✅", "❌", "❌"],
                    ["Local + Online Sellers", "✅", "Partial", "❌"],
                    ["Personalized Deals", "✅", "❌", "❌"],
                    ["Zero Search Time", "✅", "❌", "❌"]
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-dark-border/50">
                      <td className="py-3 px-4 text-light-text">{row[0]}</td>
                      <td className="py-3 px-4 text-center text-green-400">{row[1]}</td>
                      <td className="py-3 px-4 text-center text-muted-text">{row[2]}</td>
                      <td className="py-3 px-4 text-center text-muted-text">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-accent-gold/10 to-accent-electric/10 border border-accent-gold/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-light-text mb-4">
                Experience the Difference
              </h3>
              <p className="text-muted-text mb-6 max-w-md">
                Join thousands of smart shoppers who've discovered a better way to find deals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn-primary text-lg px-8 py-4 hover-lift hover-glow">
                  Try Live Demo →
                </Link>
                <Link href="/signup" className="px-8 py-4 border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300 rounded-lg font-medium hover-lift">
                  Get Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
