export default function CompetitorComparisonSection() {
  const advantages = [
    {
      icon: '🎯',
      title: 'Buyer-First Approach',
      description: 'Sellers compete for your business',
      highlight: 'vs traditional seller-centric marketplaces'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Ranking',
      description: 'Smart deal analysis & recommendations',
      highlight: 'vs manual price comparison'
    },
    {
      icon: '🌐',
      title: 'Local + Online Sellers',
      description: 'Best of both worlds in one platform',
      highlight: 'vs limited marketplace reach'
    },
    {
      icon: '⚡',
      title: 'Real-Time Competition',
      description: 'Live bidding for better prices',
      highlight: 'vs static pricing models'
    }
  ];

  return (
    <section className="py-20 bg-dark-bg" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            Why Choose BestzDealAi?
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto">
            See how we compare to traditional marketplaces and competitors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-dark-surface/50 border border-dark-border rounded-xl hover-lift hover-glow"
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {advantage.icon}
              </div>
              <h3 className="text-lg font-bold text-light-text mb-2">
                {advantage.title}
              </h3>
              <p className="text-muted-text text-sm mb-3">
                {advantage.description}
              </p>
              <p className="text-xs text-primary-cyan">
                {advantage.highlight}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-light-text mb-6">
              🏆 BestzDealAi Advantages
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
              <div className="text-left">
                <h4 className="font-semibold text-primary-cyan mb-2">
                  ✅ Buyer-First Approach
                </h4>
                <p className="text-sm text-muted-text">
                  Sellers compete for your business
                </p>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold text-primary-cyan mb-2">
                  ✅ AI-Powered Ranking
                </h4>
                <p className="text-sm text-muted-text">
                  Smart deal analysis & recommendations
                </p>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold text-primary-cyan mb-2">
                  ✅ Local + Online Sellers
                </h4>
                <p className="text-sm text-muted-text">
                  Best of both worlds in one platform
                </p>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold text-primary-cyan mb-2">
                  ✅ Real-Time Competition
                </h4>
                <p className="text-sm text-muted-text">
                  Live bidding for better prices
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="btn-primary hover-lift hover-glow">
                Experience the Difference →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
