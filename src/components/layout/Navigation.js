'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/demo', label: 'Demo' },
    { href: '/pitch', label: 'Pitch Deck' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/roadmap', label: 'Roadmap' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-surface/90 backdrop-blur-lg border-b border-dark-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-lift">
            <div className="relative">
              {/* Custom SVG Logo */}
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                className="animate-pulse-glow"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
                <path 
                  d="M12 20 L18 26 L28 14" 
                  fill="none" 
                  stroke="url(#logoGradient)" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold gradient-text">
                BestzDealAi
              </span>
              <span className="text-xs text-muted-text font-mono">
                AI-Powered Marketplace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-light-text hover:text-primary-blue transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/demo"
              className="btn-primary hover-lift hover-glow"
            >
              Try Demo
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-dark-bg transition-all duration-300 rounded-lg font-medium hover-lift"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-surface transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute block w-full h-0.5 bg-light-text transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute block w-full h-0.5 bg-light-text transition-all duration-300 top-3 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block w-full h-0.5 bg-light-text transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-dark-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-light-text hover:text-primary-blue transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Link
                href="/demo"
                className="block w-full text-center btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Try Demo
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center px-4 py-2 border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-dark-bg transition-all duration-300 rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
