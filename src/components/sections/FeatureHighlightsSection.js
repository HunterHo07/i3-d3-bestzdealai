export default function FeatureHighlightsSection() {
  const features = [
    {
      icon: "🎯",
      title: "Smart Posting",
      desc: "AI-powered request forms"
    },
    {
      icon: "⚡",
      title: "Real-Time Offers",
      desc: "Live bidding and notifications"
    },
    {
      icon: "🤖",
      title: "AI Ranking",
      desc: "Intelligent deal analysis"
    },
    {
      icon: "🔒",
      title: "Secure Deals",
      desc: "Verified sellers & escrow"
    }
  ];

  return (
    <section className="py-20 bg-dark-surface" id="feature-highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            Key Features
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto">
            Everything you need for smarter shopping
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-dark-bg/50 border border-dark-border rounded-xl hover-lift hover-glow"
            >
              <div 
                className="text-5xl mb-4 animate-float" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-light-text mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-text text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
