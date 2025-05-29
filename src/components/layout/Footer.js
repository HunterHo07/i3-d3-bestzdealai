'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg width="32" height="32" viewBox="0 0 40 40" className="animate-pulse-glow">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="2" />
                <path d="M12 20 L18 26 L28 14" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="20" r="3" fill="url(#footerLogoGradient)" />
              </svg>
              <span className="text-xl font-display font-bold gradient-text">BestzDealAi</span>
            </div>
            <p className="text-muted-text text-sm max-w-xs">
              The AI-powered reverse marketplace where sellers compete to give you the best deal.
            </p>
            <p className="text-xs text-muted-text">
              © 2024 BestzDealAi. Built with ❤️ for smart commerce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-light-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/demo', label: 'Demo' },
                { href: '/pitch', label: 'Pitch Deck' },
                { href: '/why-us', label: 'Why Us' },
                { href: '/roadmap', label: 'Roadmap' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-text hover:text-primary-blue transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-light-text mb-4">Features</h3>
            <ul className="space-y-2">
              {[
                'AI Deal Ranking',
                'Real-time Offers',
                'Seller Competition',
                'Smart Matching',
                'Secure Transactions'
              ].map((feature) => (
                <li key={feature} className="text-muted-text text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-light-text mb-4">Connect</h3>
            <div className="space-y-3">
              <p className="text-muted-text text-sm">
                Ready to revolutionize your shopping experience?
              </p>
              <Link
                href="/signup"
                className="inline-block bg-gradient-to-r from-primary-blue to-primary-purple text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-text">
            Made with Next.js, Tailwind CSS, and GSAP
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-muted-text">Privacy</span>
            <span className="text-xs text-muted-text">Terms</span>
            <span className="text-xs text-muted-text">Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
