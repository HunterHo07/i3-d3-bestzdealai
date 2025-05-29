'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    product: '',
    budget: '',
    location: '',
    condition: '',
    description: ''
  });
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const mockOffers = [
    {
      id: 1,
      seller: 'TechStore Pro',
      rating: 4.9,
      price: 849,
      originalPrice: 899,
      condition: 'Brand New',
      delivery: '2 days',
      location: 'New York, NY',
      verified: true,
      aiScore: 95,
      description: 'Latest iPhone 15 Pro with full warranty and accessories',
      image: '📱',
      savings: 50
    },
    {
      id: 2,
      seller: 'Mobile Hub',
      rating: 4.7,
      price: 875,
      originalPrice: 920,
      condition: 'Like New',
      delivery: '1 day',
      location: 'Brooklyn, NY',
      verified: true,
      aiScore: 88,
      description: 'Excellent condition, minor box wear, full functionality',
      image: '📱',
      savings: 45
    },
    {
      id: 3,
      seller: 'Gadget World',
      rating: 4.8,
      price: 899,
      originalPrice: 950,
      condition: 'Brand New',
      delivery: '3 days',
      location: 'Manhattan, NY',
      verified: true,
      aiScore: 82,
      description: 'Factory sealed with manufacturer warranty',
      image: '📱',
      savings: 51
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
    
    // Simulate offers coming in
    setTimeout(() => {
      setOffers([mockOffers[0]]);
    }, 1000);
    
    setTimeout(() => {
      setOffers([mockOffers[0], mockOffers[1]]);
    }, 2500);
    
    setTimeout(() => {
      setOffers(mockOffers);
      setCurrentStep(3);
    }, 4000);
  };

  const handleOfferSelect = (offer) => {
    setSelectedOffer(offer);
    setCurrentStep(4);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/90 backdrop-blur-lg border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-display font-bold gradient-text">BestzDealAi</span>
              <span className="text-sm text-muted-text">Demo</span>
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
              Live Demo Experience
            </h1>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              See how BestzDealAi works in real-time. Post a request and watch sellers compete for your business.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[
                { step: 1, title: 'Post Request', icon: '📝' },
                { step: 2, title: 'Receive Offers', icon: '📨' },
                { step: 3, title: 'AI Analysis', icon: '🤖' },
                { step: 4, title: 'Select Deal', icon: '✅' }
              ].map((item) => (
                <div key={item.step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    currentStep >= item.step 
                      ? 'bg-primary-blue text-white' 
                      : 'bg-dark-surface text-muted-text border border-dark-border'
                  }`}>
                    {currentStep > item.step ? '✓' : item.icon}
                  </div>
                  <div className="ml-2 mr-6">
                    <div className={`text-sm font-medium ${
                      currentStep >= item.step ? 'text-light-text' : 'text-muted-text'
                    }`}>
                      {item.title}
                    </div>
                  </div>
                  {item.step < 4 && (
                    <div className={`w-8 h-0.5 ${
                      currentStep > item.step ? 'bg-primary-blue' : 'bg-dark-border'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            
            {/* Step 1: Post Request Form */}
            {currentStep === 1 && (
              <div className="bg-dark-surface border border-dark-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-light-text mb-6 text-center">
                  What are you looking for?
                </h2>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-light-text mb-2">
                        Product *
                      </label>
                      <input
                        type="text"
                        value={formData.product}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                        placeholder="e.g., iPhone 15 Pro"
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-light-text placeholder-muted-text focus:border-primary-blue focus:outline-none"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-light-text mb-2">
                        Budget Range *
                      </label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        placeholder="e.g., $800-900"
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-light-text placeholder-muted-text focus:border-primary-blue focus:outline-none"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-light-text mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="e.g., New York, NY"
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-light-text placeholder-muted-text focus:border-primary-blue focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-light-text mb-2">
                        Condition
                      </label>
                      <select
                        value={formData.condition}
                        onChange={(e) => setFormData({...formData, condition: e.target.value})}
                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-light-text focus:border-primary-blue focus:outline-none"
                      >
                        <option value="">Any condition</option>
                        <option value="new">Brand New</option>
                        <option value="like-new">Like New</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-light-text mb-2">
                      Additional Details
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Any specific requirements, preferred colors, storage size, etc."
                      rows={3}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-light-text placeholder-muted-text focus:border-primary-blue focus:outline-none"
                    />
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-primary text-lg px-12 py-4 hover-lift hover-glow"
                    >
                      🚀 Post My Request
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 2: Receiving Offers */}
            {currentStep === 2 && (
              <div className="bg-dark-surface border border-dark-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-light-text mb-6 text-center">
                  Sellers are competing for your business!
                </h2>
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Live offers incoming...</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {offers.map((offer, index) => (
                    <div 
                      key={offer.id}
                      className="p-6 bg-dark-bg border border-primary-blue/30 rounded-xl animate-slide-in"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{offer.image}</div>
                          <div>
                            <h3 className="font-bold text-light-text">{offer.seller}</h3>
                            <div className="flex items-center space-x-2">
                              <span className="text-accent-gold">★★★★★</span>
                              <span className="text-sm text-muted-text">({offer.rating})</span>
                              {offer.verified && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Verified</span>}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-cyan">${offer.price}</div>
                          <div className="text-sm text-muted-text">Delivery: {offer.delivery}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {offers.length < 3 && (
                  <div className="text-center mt-8">
                    <div className="inline-flex items-center space-x-2 text-muted-text">
                      <div className="loading-dots">Waiting for more offers</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: AI Analysis */}
            {currentStep === 3 && (
              <div className="bg-dark-surface border border-dark-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-light-text mb-6 text-center">
                  🤖 AI is analyzing your offers...
                </h2>
                
                <div className="space-y-4">
                  {offers.map((offer, index) => (
                    <div 
                      key={offer.id}
                      className="p-6 bg-dark-bg border border-dark-border rounded-xl hover-lift cursor-pointer"
                      onClick={() => handleOfferSelect(offer)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{offer.image}</div>
                          <div>
                            <h3 className="font-bold text-light-text">{offer.seller}</h3>
                            <p className="text-sm text-muted-text">{offer.condition} • {offer.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-cyan">${offer.price}</div>
                          <div className="text-sm text-accent-gold font-bold">AI Score: {offer.aiScore}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-text">Rating:</span>
                          <span className="text-light-text ml-2">{offer.rating}/5</span>
                        </div>
                        <div>
                          <span className="text-muted-text">Delivery:</span>
                          <span className="text-light-text ml-2">{offer.delivery}</span>
                        </div>
                        <div>
                          <span className="text-muted-text">Savings:</span>
                          <span className="text-green-400 ml-2">${offer.savings}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="w-full bg-dark-surface rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary-blue to-primary-cyan h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${offer.aiScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-muted-text mb-4">Click on any offer to select it</p>
                  <button 
                    onClick={() => handleOfferSelect(offers[0])}
                    className="btn-primary hover-lift hover-glow"
                  >
                    Select Best Offer →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Deal Selected */}
            {currentStep === 4 && selectedOffer && (
              <div className="bg-gradient-to-br from-green-500/10 to-primary-cyan/10 border border-green-500/20 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="text-3xl font-bold text-light-text mb-2">
                    Congratulations!
                  </h2>
                  <p className="text-xl text-muted-text">
                    You've found the perfect deal
                  </p>
                </div>
                
                <div className="bg-dark-surface border border-dark-border rounded-xl p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{selectedOffer.image}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-light-text">{selectedOffer.seller}</h3>
                        <p className="text-muted-text">{selectedOffer.description}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-accent-gold">★★★★★</span>
                          <span className="text-sm text-muted-text">({selectedOffer.rating}) • Verified Seller</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary-cyan">${selectedOffer.price}</div>
                      <div className="text-sm text-muted-text line-through">${selectedOffer.originalPrice}</div>
                      <div className="text-lg text-green-400 font-bold">Save ${selectedOffer.savings}!</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-dark-bg rounded-lg">
                      <div className="text-lg font-bold text-primary-cyan">{selectedOffer.aiScore}</div>
                      <div className="text-xs text-muted-text">AI Score</div>
                    </div>
                    <div className="p-3 bg-dark-bg rounded-lg">
                      <div className="text-lg font-bold text-primary-cyan">{selectedOffer.delivery}</div>
                      <div className="text-xs text-muted-text">Delivery</div>
                    </div>
                    <div className="p-3 bg-dark-bg rounded-lg">
                      <div className="text-lg font-bold text-primary-cyan">{selectedOffer.condition}</div>
                      <div className="text-xs text-muted-text">Condition</div>
                    </div>
                    <div className="p-3 bg-dark-bg rounded-lg">
                      <div className="text-lg font-bold text-green-400">✓</div>
                      <div className="text-xs text-muted-text">Verified</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary text-lg px-8 py-4 hover-lift hover-glow">
                    💬 Contact Seller
                  </button>
                  <button className="px-8 py-4 border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300 rounded-lg font-medium hover-lift">
                    🔄 Try Another Search
                  </button>
                </div>
                
                <div className="text-center mt-8">
                  <Link href="/" className="text-primary-blue hover:text-primary-cyan transition-colors">
                    ← Back to Homepage
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
