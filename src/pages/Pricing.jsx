import React from 'react';
import { Link } from 'react-router-dom';

// Local Asset Import (Aap apne hisaab se pricing hero image use kar sakte hain)
import pricingHeroBg from '../assets/premium-contact-hero.png'; 

const Pricing = () => {
  return (
    <div className="bg-[#F8FAFC] font-sans text-slate-800 selection:bg-[#2a73ff] selection:text-white min-h-screen flex flex-col">
      
      {/* 1. HERO SECTION - Clean & Cinematic */}
      <section
        className="relative h-[38vh] min-h-[280px] flex items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat overflow-hidden group shadow-inner"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${pricingHeroBg})`,
        }}
      >
        <div className="max-w-[1200px] mx-auto text-white w-full transition-all duration-500 group-hover:-translate-y-1 z-10 relative">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/40 border border-blue-400/30 px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            Simple & Transparent
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
            Pricing that <span className="bg-gradient-to-r from-white via-blue-200 to-slate-300 bg-clip-text text-transparent">Scales with You</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-[650px] mx-auto font-normal leading-relaxed opacity-90">
            No hidden fees. No setup costs. Just reliable, lightning-fast digital infrastructure.
          </p>
        </div>
      </section>

      {/* 2. PRICING CARDS SECTION */}
      <section className="py-20 px-6 flex-grow max-w-[1200px] w-full mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Starter Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(42,115,255,0.15)] hover:-translate-y-2 flex flex-col h-full relative">
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">Starter</h3>
            <p className="text-slate-500 text-sm mb-6 h-10">Perfect for local shops and personal portfolios.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-[#0F172A]">₹199</span>
              <span className="text-slate-500 font-medium">/month</span>
            </div>
            <Link to="/signup" className="w-full block text-center py-3 px-6 rounded-lg font-semibold border-2 border-[#2a73ff] text-[#2a73ff] hover:bg-[#2a73ff] hover:text-white transition-colors duration-300 mb-8">
              Start Free Trial
            </Link>
            <ul className="space-y-4 text-sm font-medium text-slate-600 flex-1">
              <li className="flex items-start gap-3"><CheckIcon /> 1 Fully Managed Website</li>
              <li className="flex items-start gap-3"><CheckIcon /> Free SSL Certificate</li>
              <li className="flex items-start gap-3"><CheckIcon /> Premium Templates</li>
              <li className="flex items-start gap-3"><CheckIcon /> Mobile Responsive Design</li>
              <li className="flex items-start gap-3"><CheckIcon /> Connect Custom Domain</li>
              <li className="flex items-start gap-3 text-slate-400"><CrossIcon /> E-commerce / Payments</li>
              <li className="flex items-start gap-3 text-slate-400"><CrossIcon /> Advanced SEO Tools</li>
            </ul>
          </div>

          {/* Card 2: Growth Plan (Highlighted) */}
          <div className="bg-[#0f172a] rounded-2xl p-8 shadow-[0_20px_40px_-10px_rgba(42,115,255,0.3)] border border-[#2a73ff]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#2a73ff] to-[#60a5fa] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">For growing businesses needing online sales & SEO.</p>
            <div className="mb-6 text-white">
              <span className="text-4xl font-extrabold">₹499</span>
              <span className="text-slate-400 font-medium">/month</span>
            </div>
            <Link to="/signup" className="w-full block text-center py-3 px-6 rounded-lg font-semibold bg-[#2a73ff] hover:bg-[#1d4ed8] text-white shadow-lg shadow-blue-500/25 transition-all duration-300 mb-8 active:scale-95">
              Get Started Now
            </Link>
            <ul className="space-y-4 text-sm font-medium text-slate-300 flex-1">
              <li className="flex items-start gap-3"><CheckIconBlue /> Everything in Starter</li>
              <li className="flex items-start gap-3"><CheckIconBlue /> E-commerce Storefront</li>
              <li className="flex items-start gap-3"><CheckIconBlue /> Payment Gateway Setup</li>
              <li className="flex items-start gap-3"><CheckIconBlue /> Advanced SEO & Analytics</li>
              <li className="flex items-start gap-3"><CheckIconBlue /> Up to 500 Products</li>
              <li className="flex items-start gap-3"><CheckIconBlue /> Priority Email Support</li>
            </ul>
          </div>

          {/* Card 3: Enterprise Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(42,115,255,0.15)] hover:-translate-y-2 flex flex-col h-full relative">
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">Agency</h3>
            <p className="text-slate-500 text-sm mb-6 h-10">Custom setups, multiple tenants, and developer APIs.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-[#0F172A]">Custom</span>
            </div>
            <Link to="/contact" className="w-full block text-center py-3 px-6 rounded-lg font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-300 mb-8">
              Contact Sales
            </Link>
            <ul className="space-y-4 text-sm font-medium text-slate-600 flex-1">
              <li className="flex items-start gap-3"><CheckIcon /> White-label Dashboard</li>
              <li className="flex items-start gap-3"><CheckIcon /> Unlimited Websites/Tenants</li>
              <li className="flex items-start gap-3"><CheckIcon /> Custom Integrations</li>
              <li className="flex items-start gap-3"><CheckIcon /> Dedicated Account Manager</li>
              <li className="flex items-start gap-3"><CheckIcon /> 99.9% Uptime SLA</li>
              <li className="flex items-start gap-3"><CheckIcon /> 24/7 Phone Support</li>
            </ul>
          </div>

        </div>

        {/* FAQ or Trust Banner Bottom */}
        <div className="mt-20 text-center bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
          <h4 className="text-lg font-bold text-[#0F172A] mb-2">Need a custom feature?</h4>
          <p className="text-slate-600 text-sm mb-4">Chat with our engineering team to see how NexPage can fit your unique workflow.</p>
          <a href="https://wa.me/919532793102" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#2a73ff] font-bold hover:underline">
            Message us on WhatsApp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </section>

      {/* 3. FLOATING WHATSAPP BUTTON (Updated Number) */}
      <a
        href="https://wa.me/919532793102"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebd5a] text-white p-3.5 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:shadow-[0_0_25px_rgba(37,211,102,0.9)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.884-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </div>
  );
};

// --- Helper Icon Components ---
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CheckIconBlue = () => (
  <svg className="w-5 h-5 text-[#60a5fa] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-slate-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Pricing;