import React from 'react';
import { Link } from 'react-router-dom';

// WaaS Platform Quick Links Data
const quickLinks = [
  { name: 'Website Templates', url: '/templates' },
  { name: 'Pricing & Plans', url: '/pricing' },
  { name: 'Platform Features', url: '/features' },
  { name: 'Customer Showcase', url: '/showcase' },
  { name: 'Help Center', url: '/support' },
  { name: 'API Documentation', url: '/docs' },
  { name: 'Community Forum', url: '/community' },
  { name: 'Partner Program', url: '/partners' },
];

function Footer() {
  return (
    <footer className="bg-[#0b1329] text-gray-300 font-sans border-t border-gray-800/80">
      
      {/* ── FOOTER TOP SECTION ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-between">
          
          {/* 1. Brand & Social Column */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="inline-block no-underline">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                NEX<span className="text-[#2a73ff]">PAGE</span>
              </span>
            </Link>

            {/* Tagline Pills/Words */}
            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              <span>No-Code</span>
              <span className="text-[#2a73ff]">•</span>
              <span>Fast</span>
              <span className="text-[#2a73ff]">•</span>
              <span>Scalable</span>
            </div>

            {/* Social Links (LinkedIn/Twitter) */}
            <div className="pt-2">
              <a 
                href="https://linkedin.com/" 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/80 flex items-center justify-center text-gray-300 hover:bg-[#2a73ff] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Platform Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-[#2a73ff]">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm font-medium">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-400 hover:text-[#2a73ff] transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="text-xs text-[#2a73ff]">▸</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info Column */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-[#2a73ff]">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-normal text-gray-400">
              
              {/* Location */}
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-gray-800/60 flex items-center justify-center text-[#2a73ff] shrink-0 mt-0.5">
                  <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="leading-relaxed">India</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-gray-800/60 flex items-center justify-center text-[#2a73ff] shrink-0">
                  <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a href="mailto:hello@nexpage.in" className="hover:text-white transition-colors duration-200">
                  hello@nexpage.in
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-gray-800/60 flex items-center justify-center text-[#2a73ff] shrink-0">
                  <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a href="tel:+919532793102" className="hover:text-white transition-colors duration-200">
                  +91 9532793102
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* ── FOOTER BOTTOM SECTION ── */}
      <div className="bg-[#070c1a] border-t border-gray-800/60 py-6">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-normal text-gray-500">
          
          {/* Left: Copyright */}
          <div>
            <p>© 2026 NexPage. All rights reserved.</p>
          </div>

          {/* Center: Developer Credit */}
          <div>
            <p className="text-gray-400">Developed By Nilesh Kushwaha</p>
          </div>

          {/* Right: Legal Links */}
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;