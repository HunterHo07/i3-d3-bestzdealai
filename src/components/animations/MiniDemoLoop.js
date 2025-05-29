'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MiniDemoLoop() {
  const [currentStep, setCurrentStep] = useState(0);
  const [offers, setOffers] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const demoSteps = [
    {
      title: "Buyer Posts Request",
      description: "Looking for iPhone 15 Pro, Budget: $800-900",
      icon: "📱",
      color: "from-primary-blue to-primary-cyan"
    },
    {
      title: "Sellers Compete",
      description: "Multiple sellers submit offers",
      icon: "🏪",
      color: "from-primary-purple to-accent-neon"
    },
    {
      title: "AI Ranks Deals",
      description: "Best value deals ranked by AI",
      icon: "🤖",
      color: "from-accent-gold to-accent-electric"
    },
    {
      title: "Deal Selected",
      description: "Buyer chooses the best offer",
      icon: "✅",
      color: "from-primary-cyan to-primary-blue"
    }
  ];

  const mockOffers = [
    {
      seller: "TechStore Pro",
      price: "$849",
      condition: "Brand New",
      rating: 4.9,
      delivery: "2 days",
      score: 95
    },
    {
      seller: "Mobile Hub",
      price: "$875",
      condition: "Like New",
      rating: 4.7,
      delivery: "1 day",
      score: 88
    },
    {
      seller: "Gadget World",
      price: "$899",
      condition: "Brand New",
      rating: 4.8,
      delivery: "3 days",
      score: 82
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
        
        // Add offers when in "Sellers Compete" step
        if (currentStep === 1) {
          setOffers(mockOffers);
        } else if (currentStep === 3) {
          setOffers([]);
        }
        
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div ref={containerRef} className="relative w-full max-w-lg mx-auto">
      {/* Main Demo Container */}
      <div className="relative bg-dark-surface/80 backdrop-blur-lg border border-dark-border rounded-2xl p-6 glass-effect">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-light-text">Live Demo</h3>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Current Step Display */}
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
          <div className={`bg-gradient-to-r ${demoSteps[currentStep].color} p-4 rounded-xl mb-4`}>
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{demoSteps[currentStep].icon}</span>
              <div>
                <h4 className="font-semibold text-white">{demoSteps[currentStep].title}</h4>
                <p className="text-white/80 text-sm">{demoSteps[currentStep].description}</p>
              </div>
            </div>
          </div>

          {/* Step Content */}
          {currentStep === 0 && (
            <div className="space-y-3">
              <div className="bg-dark-bg/50 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-primary-blue">📱</span>
                  <span className="font-medium text-light-text">iPhone 15 Pro</span>
                </div>
                <div className="text-sm text-muted-text">
                  <p>Budget: $800-900</p>
                  <p>Location: New York</p>
                  <p>Condition: New or Like New</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-text mb-3">Sellers are submitting offers...</p>
              {offers.map((offer, index) => (
                <div 
                  key={index}
                  className="bg-dark-bg/50 rounded-lg p-3 animate-slide-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-light-text">{offer.seller}</p>
                      <p className="text-sm text-muted-text">{offer.condition}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary-cyan">{offer.price}</p>
                      <p className="text-xs text-muted-text">{offer.delivery}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-text mb-3">AI analyzing offers...</p>
              {offers.map((offer, index) => (
                <div 
                  key={index}
                  className="bg-dark-bg/50 rounded-lg p-3 border-l-4 border-primary-blue"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-light-text">{offer.seller}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-text">Rating: {offer.rating}</span>
                        <span className="text-xs text-accent-gold">★★★★★</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary-cyan">{offer.price}</p>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-muted-text">AI Score:</span>
                        <span className="text-xs font-bold text-accent-gold">{offer.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-green-500/20 to-primary-cyan/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <p className="font-semibold text-light-text">Deal Selected!</p>
                    <p className="text-sm text-muted-text">TechStore Pro - $849</p>
                  </div>
                </div>
                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-muted-text">Savings:</span>
                  <span className="text-green-400 font-semibold">$51 vs retail</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {demoSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-primary-blue w-8' 
                  : 'bg-dark-border'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <Link
            href="/demo"
            className="block w-full bg-gradient-to-r from-primary-blue to-primary-purple text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Try Full Demo →
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-neon/30 rounded-full animate-ping"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-cyan/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
