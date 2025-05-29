export default function TrustElementsSection() {
  const trustElements = [
    {
      icon: "🔒",
      title: "256-bit SSL",
      desc: "Bank-level encryption"
    },
    {
      icon: "✅",
      title: "Verified Sellers",
      desc: "100% seller verification"
    },
    {
      icon: "🛡️",
      title: "Escrow Protection",
      desc: "Secure payment holding"
    },
    {
      icon: "⭐",
      title: "4.9/5 Rating",
      desc: "Trusted by thousands"
    }
  ];

  return (
    <section className="py-20 bg-dark-surface" id="trust-elements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            Trusted & Secure
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto">
            Your security and satisfaction are our top priorities
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {trustElements.map((trust, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-dark-bg/50 border border-dark-border rounded-xl hover-lift"
            >
              <div className="text-4xl mb-4">{trust.icon}</div>
              <h3 className="text-lg font-bold text-light-text mb-2">{trust.title}</h3>
              <p className="text-muted-text text-sm">{trust.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-green-500/10 to-primary-cyan/10 border border-green-500/20 rounded-xl">
            <h3 className="text-xl font-bold text-light-text mb-2">
              🏆 Money-Back Guarantee
            </h3>
            <p className="text-muted-text">
              30-day satisfaction guarantee on all transactions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
