export default function EarlyAdopterSection() {
  const tiers = [
    {
      level: "🥉 Bronze",
      title: "Early Access",
      desc: "Free account + priority support",
      users: "1,000+ users"
    },
    {
      level: "🥈 Silver",
      title: "Beta Tester",
      desc: "Advanced features + feedback rewards",
      users: "500+ testers"
    },
    {
      level: "🥇 Gold",
      title: "VIP Member",
      desc: "Lifetime discounts + exclusive features",
      users: "100+ VIPs"
    }
  ];

  return (
    <section className="py-20 bg-dark-bg" id="early-adopters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            Join Early Adopters
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto">
            Be among the first to experience the future of shopping
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tiers.map((tier, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-dark-surface/50 border border-dark-border rounded-xl hover-lift hover-glow"
              >
                <div className="text-3xl mb-4">{tier.level}</div>
                <h3 className="text-xl font-bold text-light-text mb-2">{tier.title}</h3>
                <p className="text-muted-text mb-4">{tier.desc}</p>
                <div className="text-sm text-primary-cyan">{tier.users}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 border border-primary-blue/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-light-text mb-4">
                🚀 Ready to Start?
              </h3>
              <p className="text-muted-text mb-6">
                Join thousands of smart shoppers saving time and money
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4 hover-lift hover-glow">
                  Get Early Access →
                </button>
                <button className="px-8 py-4 border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300 rounded-lg font-medium hover-lift">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
