'use client';

import Link from 'next/link';

export default function RoadmapPage() {
  const phases = [
    {
      phase: "MVP",
      title: "Foundation & Launch",
      timeline: "Q1 2024 - CURRENT",
      status: "In Progress",
      progress: 85,
      color: "bg-green-500",
      features: [
        "✅ Buyer request posting system",
        "✅ Seller offer management",
        "✅ Basic AI ranking algorithm",
        "✅ Web platform MVP",
        "🔄 User onboarding flow",
        "🔄 Payment integration"
      ]
    },
    {
      phase: "Phase 1",
      title: "Core Features & Growth",
      timeline: "Q2-Q3 2024",
      status: "Planned",
      progress: 0,
      color: "bg-primary-blue",
      features: [
        "📱 Mobile app (iOS & Android)",
        "🔔 Real-time notifications",
        "💬 In-app messaging system",
        "🏪 Seller verification system",
        "📊 Advanced analytics dashboard",
        "🎯 Smart deal recommendations"
      ]
    },
    {
      phase: "Phase 2",
      title: "AI Enhancement & Scale",
      timeline: "Q4 2024 - Q1 2025",
      status: "Future",
      progress: 0,
      color: "bg-primary-purple",
      features: [
        "🤖 Advanced AI deal matching",
        "🔍 Visual product recognition",
        "📈 Predictive pricing models",
        "🌍 Multi-language support",
        "🏢 Business seller accounts",
        "📋 Bulk request management"
      ]
    },
    {
      phase: "Phase 3",
      title: "Market Expansion",
      timeline: "Q2-Q3 2025",
      status: "Future",
      progress: 0,
      color: "bg-accent-gold",
      features: [
        "🌐 International markets",
        "🏪 Marketplace integrations",
        "🚚 Logistics partnerships",
        "💳 Multiple payment methods",
        "🎮 Gamification features",
        "🤝 B2B marketplace"
      ]
    },
    {
      phase: "Phase 4",
      title: "Innovation & Leadership",
      timeline: "Q4 2025+",
      status: "Vision",
      progress: 0,
      color: "bg-accent-electric",
      features: [
        "🥽 AR/VR product previews",
        "🔗 Blockchain verification",
        "🤖 AI-powered negotiations",
        "📱 IoT device integration",
        "🌟 White-label solutions",
        "🚀 IPO preparation"
      ]
    }
  ];

  const milestones = [
    { date: "Jan 2024", event: "MVP Development Started", status: "completed" },
    { date: "Mar 2024", event: "Beta Testing Launch", status: "completed" },
    { date: "Apr 2024", event: "1,000 Early Adopters", status: "current" },
    { date: "Jun 2024", event: "Mobile App Launch", status: "upcoming" },
    { date: "Sep 2024", event: "10,000 Active Users", status: "upcoming" },
    { date: "Dec 2024", event: "Series A Funding", status: "upcoming" },
    { date: "Mar 2025", event: "International Expansion", status: "future" },
    { date: "Dec 2025", event: "1M+ Users", status: "future" }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/90 backdrop-blur-lg border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-display font-bold gradient-text">BestzDealAi</span>
              <span className="text-sm text-muted-text">Roadmap</span>
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
              Product Roadmap
            </h1>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              Our journey to revolutionize e-commerce with AI-powered reverse marketplace technology
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-light-text mb-8 text-center">
              Key Milestones
            </h2>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue to-primary-purple"></div>
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`w-8 h-8 rounded-full border-4 border-dark-bg flex items-center justify-center ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'current' ? 'bg-primary-blue animate-pulse' :
                      milestone.status === 'upcoming' ? 'bg-primary-purple' :
                      'bg-dark-border'
                    }`}>
                      {milestone.status === 'completed' && <span className="text-white text-sm">✓</span>}
                    </div>
                    
                    <div className="ml-6 flex-1 p-4 bg-dark-surface border border-dark-border rounded-lg hover-lift">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-light-text">{milestone.event}</h3>
                          <p className="text-sm text-muted-text">{milestone.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          milestone.status === 'current' ? 'bg-primary-blue/20 text-primary-blue' :
                          milestone.status === 'upcoming' ? 'bg-primary-purple/20 text-primary-purple' :
                          'bg-dark-border/20 text-muted-text'
                        }`}>
                          {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Development Phases */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-light-text mb-8 text-center">
              Development Phases
            </h2>
            
            {phases.map((phase, index) => (
              <div 
                key={index}
                className="bg-dark-surface border border-dark-border rounded-2xl p-8 hover-lift"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold gradient-text">{phase.phase}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        phase.status === 'In Progress' ? 'bg-green-500/20 text-green-400' :
                        phase.status === 'Planned' ? 'bg-primary-blue/20 text-primary-blue' :
                        'bg-dark-border/20 text-muted-text'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-light-text mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-muted-text">{phase.timeline}</p>
                  </div>
                  
                  {phase.progress > 0 && (
                    <div className="lg:w-48">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-text">Progress</span>
                        <span className="text-light-text font-medium">{phase.progress}%</span>
                      </div>
                      <div className="w-full bg-dark-bg rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${phase.color}`}
                          style={{ width: `${phase.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {phase.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-2 p-3 bg-dark-bg/50 rounded-lg"
                    >
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-light-text mb-4">
                Our Vision for 2025+
              </h3>
              <p className="text-muted-text mb-6 max-w-2xl">
                To become the world's leading AI-powered marketplace platform, connecting millions of buyers and sellers through intelligent deal-making technology that saves time, money, and creates value for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn-primary text-lg px-8 py-4 hover-lift hover-glow">
                  Experience the Future →
                </Link>
                <Link href="/signup" className="px-8 py-4 border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300 rounded-lg font-medium hover-lift">
                  Join Our Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
