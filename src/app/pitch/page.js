'use client';

import Link from 'next/link';

export default function PitchDeckPage() {
  const slides = [
    {
      title: "The Problem",
      content: "70% of shoppers waste 45+ minutes comparing prices across multiple platforms, while local sellers struggle with customer acquisition.",
      icon: "😤",
      stats: ["70% waste time", "45+ min searching", "85% abandon purchases"]
    },
    {
      title: "Our Solution",
      content: "BestzDealAi: The first AI-powered reverse marketplace where buyers post once and sellers compete with their best offers.",
      icon: "💡",
      stats: ["1 post", "Multiple offers", "AI ranking"]
    },
    {
      title: "Market Opportunity",
      content: "$6.2T global e-commerce market with no dominant reverse-deal platform. Huge untapped opportunity.",
      icon: "🌍",
      stats: ["$6.2T market", "No competitors", "First mover advantage"]
    },
    {
      title: "Business Model",
      content: "Freemium for sellers: Free basic, $19-99/month premium. Commission on high-value transactions.",
      icon: "💰",
      stats: ["Freemium model", "$19-99/month", "Commission revenue"]
    },
    {
      title: "Traction",
      content: "1,000+ early adopters, 4.9/5 rating, $2.3M in user savings demonstrated through our MVP.",
      icon: "📈",
      stats: ["1,000+ users", "4.9/5 rating", "$2.3M savings"]
    },
    {
      title: "The Ask",
      content: "Seeking $500K seed funding to scale platform, expand team, and capture market leadership.",
      icon: "🚀",
      stats: ["$500K ask", "Scale platform", "Market leadership"]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/90 backdrop-blur-lg border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-display font-bold gradient-text">BestzDealAi</span>
              <span className="text-sm text-muted-text">Pitch Deck</span>
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              BestzDealAi Pitch Deck
            </h1>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              Revolutionizing e-commerce with AI-powered reverse marketplace technology
            </p>
          </div>

          {/* Slides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className="bg-dark-surface border border-dark-border rounded-2xl p-8 hover-lift hover-glow"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{slide.icon}</div>
                  <h2 className="text-2xl font-bold text-light-text mb-4">
                    {slide.title}
                  </h2>
                </div>
                
                <p className="text-muted-text mb-6 text-center">
                  {slide.content}
                </p>
                
                <div className="space-y-2">
                  {slide.stats.map((stat, statIndex) => (
                    <div 
                      key={statIndex}
                      className="flex items-center justify-center p-2 bg-dark-bg/50 rounded-lg"
                    >
                      <span className="text-primary-cyan font-semibold text-sm">
                        {stat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-light-text mb-8 text-center">
              Key Metrics & Projections
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Year 1 Revenue", value: "$50K", growth: "+500%" },
                { label: "Year 2 Revenue", value: "$500K", growth: "+900%" },
                { label: "Year 3 Revenue", value: "$2.5M", growth: "+400%" },
                { label: "Break Even", value: "Month 18", growth: "Profitable" }
              ].map((metric, index) => (
                <div key={index} className="text-center p-4 bg-dark-surface/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary-cyan mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-light-text mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-green-400">
                    {metric.growth}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-accent-gold/10 to-accent-electric/10 border border-accent-gold/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-light-text mb-4">
                Ready to Join the Revolution?
              </h3>
              <p className="text-muted-text mb-6 max-w-md">
                Partner with us to transform the $6.2T e-commerce industry
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn-primary text-lg px-8 py-4 hover-lift hover-glow">
                  View Live Demo →
                </Link>
                <button className="px-8 py-4 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-dark-bg transition-all duration-300 rounded-lg font-medium hover-lift">
                  Contact Investors
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
