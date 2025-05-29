export default function ValuePropositionSection() {
  return (
    <section className="py-20 bg-dark-bg" id="value-proposition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            Our Value Proposition
          </h2>
          <p className="text-xl text-muted-text max-w-3xl mx-auto">
            Revolutionary approach to online shopping and deal discovery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-dark-surface/50 border border-dark-border rounded-xl hover-lift">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-light-text mb-4">Save Money</h3>
            <p className="text-muted-text">Get competitive offers and save 20-50% on purchases</p>
          </div>
          
          <div className="text-center p-6 bg-dark-surface/50 border border-dark-border rounded-xl hover-lift">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-light-text mb-4">Save Time</h3>
            <p className="text-muted-text">Post once, get multiple offers instead of searching</p>
          </div>
          
          <div className="text-center p-6 bg-dark-surface/50 border border-dark-border rounded-xl hover-lift">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-light-text mb-4">AI Intelligence</h3>
            <p className="text-muted-text">Smart ranking finds the best value deals for you</p>
          </div>
        </div>
      </div>
    </section>
  );
}
