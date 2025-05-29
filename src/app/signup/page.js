'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: 'buyer',
    interests: [],
    referral: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Electronics & Tech',
    'Fashion & Clothing',
    'Home & Garden',
    'Sports & Outdoors',
    'Books & Media',
    'Automotive',
    'Health & Beauty',
    'Business Supplies'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-gradient-to-br from-green-500/10 to-primary-cyan/10 border border-green-500/20 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-light-text mb-4">
              Welcome to BestzDealAi!
            </h2>
            <p className="text-muted-text mb-6">
              Thank you for joining our early adopter program. You'll receive exclusive access and updates as we launch new features.
            </p>
            <div className="space-y-4">
              <Link href="/demo" className="block btn-primary text-lg py-4 hover-lift hover-glow">
                Try Demo Now →
              </Link>
              <Link href="/" className="block text-primary-blue hover:text-primary-cyan transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/90 backdrop-blur-lg border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-display font-bold gradient-text">BestzDealAi</span>
              <span className="text-sm text-muted-text">Sign Up</span>
            </Link>
            <Link href="/" className="text-primary-blue hover:text-primary-cyan transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
              Join Early Adopters
            </h1>
            <p className="text-xl text-muted-text">
              Be among the first to experience the future of smart shopping
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🚀', title: 'Early Access', desc: 'First to try new features' },
              { icon: '💰', title: 'Exclusive Deals', desc: 'Special pricing & offers' },
              { icon: '🎯', title: 'Priority Support', desc: 'Direct line to our team' }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-dark-surface border border-dark-border rounded-xl">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-light-text mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-text">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Sign Up Form */}
          <div className="bg-dark-surface border border-dark-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-light-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-light-text placeholder-muted-text focus:border-primary-blue focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-light-text mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-light-text placeholder-muted-text focus:border-primary-blue focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* User Type */}
              <div>
                <label className="block text-sm font-medium text-light-text mb-3">
                  I'm primarily a: *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { value: 'buyer', label: 'Buyer', desc: 'Looking for great deals', icon: '🛒' },
                    { value: 'seller', label: 'Seller', desc: 'Want to sell products/services', icon: '🏪' }
                  ].map((type) => (
                    <label 
                      key={type.value}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.userType === type.value 
                          ? 'border-primary-blue bg-primary-blue/10' 
                          : 'border-dark-border hover:border-primary-blue/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value={type.value}
                        checked={formData.userType === type.value}
                        onChange={(e) => setFormData({...formData, userType: e.target.value})}
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{type.icon}</span>
                        <div>
                          <div className="font-medium text-light-text">{type.label}</div>
                          <div className="text-sm text-muted-text">{type.desc}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-light-text mb-3">
                  Interested Categories (Optional)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 text-sm rounded-lg border transition-all duration-300 ${
                        formData.interests.includes(interest)
                          ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                          : 'border-dark-border text-muted-text hover:border-primary-blue/50 hover:text-light-text'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Referral */}
              <div>
                <label className="block text-sm font-medium text-light-text mb-2">
                  How did you hear about us? (Optional)
                </label>
                <select
                  value={formData.referral}
                  onChange={(e) => setFormData({...formData, referral: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-light-text focus:border-primary-blue focus:outline-none"
                >
                  <option value="">Select an option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend/Colleague</option>
                  <option value="news">News/Blog</option>
                  <option value="ad">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-primary-blue bg-dark-bg border-dark-border rounded focus:ring-primary-blue"
                />
                <label htmlFor="terms" className="text-sm text-muted-text">
                  I agree to the{' '}
                  <span className="text-primary-blue hover:underline cursor-pointer">Terms of Service</span>
                  {' '}and{' '}
                  <span className="text-primary-blue hover:underline cursor-pointer">Privacy Policy</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary text-lg py-4 hover-lift hover-glow"
              >
                🚀 Join Early Adopters
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-dark-border text-center">
              <p className="text-sm text-muted-text mb-4">
                Already have an account?{' '}
                <span className="text-primary-blue hover:underline cursor-pointer">Sign in here</span>
              </p>
              <div className="flex justify-center space-x-6 text-xs text-muted-text">
                <span>🔒 Secure & Private</span>
                <span>📧 No Spam</span>
                <span>🎯 Relevant Updates Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
