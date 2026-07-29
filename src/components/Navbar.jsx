import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lo.png'; // Make sure you have a NexPage logo here

// ⚠️ Yeh data ab Services.jsx ke `servicesData` se exactly match karta hai
// (same category ids: design, hosting, growth) aur same service ids
// (templates, responsive, branding, cloud-hosting, ssl, domain, seo, lead-gen, whatsapp, analytics)
// Isliye jab user kisi bhi item pe click karega, wahi card /services page par
// scroll ho kar highlight (glow + "Highlighted Feature" badge) ho jayega.
const megaMenuColumns = [
  {
    title: 'DESIGN & CUSTOMIZATION',
    link: '/services#design',
    items: [
      { name: 'Premium Industry Templates', href: '/services#templates' },
      { name: '100% Mobile Responsive', href: '/services#responsive' },
      { name: 'Custom Branding', href: '/services#branding' },
    ],
  },
  {
    title: 'INFRASTRUCTURE & SECURITY',
    link: '/services#hosting',
    items: [
      { name: 'Fully Managed Cloud Hosting', href: '/services#cloud-hosting' },
      { name: 'Free SSL Certificate', href: '/services#ssl' },
      { name: 'Custom Domain Integration', href: '/services#domain' },
    ],
  },
  {
    title: 'GROWTH & MARKETING TOOLS',
    link: '/services#growth',
    items: [
      { name: 'Built-in SEO Optimization', href: '/services#seo' },
      { name: 'Lead Generation Forms', href: '/services#lead-gen' },
      { name: 'WhatsApp Chat Integration', href: '/services#whatsapp' },
      { name: 'Analytics & Tracking', href: '/services#analytics' },
    ],
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Services.jsx apne aap hash (#id) ko read karke:
  // 1) us section/card tak smooth scroll karta hai
  // 2) us card ko "openCards" me true set karke expand kar deta hai
  // 3) 3.5s ke liye "highlightedId" set karke glow + badge dikhata hai
  // Isliye Navbar ko sirf mobile menu close karna hai — baaki kaam
  // Services.jsx ke apne useEffect(location.hash) se ho jayega,
  // chahe aap kisi bhi page se click karo ya /services page par pehle se ho.
  const handleHashClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sticky top-0 z-50 font-sans transition-all duration-300 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" src={logo} alt="NexPage Logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[15px] font-semibold text-[#1f2937] tracking-wider">
            <Link to="/" className="relative py-2 group hover:text-[#2a73ff] transition-colors duration-200">
              <span>HOME</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#2a73ff] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </Link>

            <Link to="/pricing" className="relative py-2 group hover:text-[#2a73ff] transition-colors duration-200">
              <span>PRICING</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#2a73ff] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="group py-2 cursor-pointer static">
              <div className="relative flex items-center gap-1 hover:text-[#2a73ff] transition-colors duration-200">
                <Link to="/services">SERVICES</Link>
                <svg className="w-4 h-4 stroke-current transition-transform duration-300 ease-out group-hover:rotate-180 opacity-70" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#2a73ff] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </div>

              {/* Mega Menu Card */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[1150px] max-w-[96vw] bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-6 sm:p-8 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="grid grid-cols-3 gap-6">
                  {megaMenuColumns.map((col, idx) => (
                    <div key={idx} className="bg-slate-50/80 hover:bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100/80 transition-colors duration-300 flex flex-col justify-between">
                      <div>
                        <Link
                          to={col.link}
                          onClick={handleHashClick}
                          className="text-xs font-extrabold text-[#0f172a] tracking-wider uppercase mb-4 block hover:text-[#2a73ff] transition-colors border-b border-slate-200/60 pb-2.5"
                        >
                          {col.title}
                        </Link>

                        <ul className="space-y-2.5">
                          {col.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.href}
                                onClick={handleHashClick}
                                className="text-slate-600 hover:text-[#2a73ff] hover:translate-x-1.5 block py-1 text-[13.5px] font-medium transition-all duration-200 leading-snug"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium px-2">
                  <span>Need a custom solution for your enterprise?</span>
                  <Link to="/contact" className="text-[#2a73ff] font-bold hover:underline flex items-center gap-1">
                    <span>Contact Sales</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/showcase" className="relative py-2 group hover:text-[#2a73ff] transition-colors duration-200">
              <span>SHOWCASE</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#2a73ff] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </Link>

            <Link to="/contact" className="relative py-2 group hover:text-[#2a73ff] transition-colors duration-200">
              <span>CONTACT</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#2a73ff] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </Link>

          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* <Link to="/login" className="text-[#1f2937] hover:text-[#2a73ff] font-semibold text-[14px] transition-colors">
              Login
            </Link> */}
            <Link to="/contact" className="bg-[#3378ff] hover:bg-[#1f62e6] text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-[14px] active:scale-95 transform hover:-translate-y-0.5">
              Start Free Trial
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#2a73ff] focus:outline-none p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors" aria-label="Toggle Menu">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pt-4 pb-6 space-y-3 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-800 font-semibold hover:text-[#2a73ff] py-2.5 text-base border-b border-slate-50">HOME</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className="block text-gray-800 font-semibold hover:text-[#2a73ff] py-2.5 text-base border-b border-slate-50">PRICING</Link>

          <div className="border-b border-slate-50 pb-2">
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex items-center justify-between text-gray-800 font-semibold hover:text-[#2a73ff] py-2.5 text-base text-left focus:outline-none">
              <span>SERVICES</span>
              <svg className={`w-4 h-4 transform transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#2a73ff]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 mt-2 space-y-4 border-l-2 border-[#2a73ff]/30 py-2">
                {megaMenuColumns.map((col, idx) => (
                  <div key={idx} className="space-y-2">
                    <Link to={col.link} onClick={handleHashClick} className="text-xs font-bold text-[#2a73ff] tracking-wider uppercase block">{col.title}</Link>
                    <div className="pl-2 space-y-1.5">
                      {col.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          to={item.href}
                          onClick={handleHashClick}
                          className="block text-sm text-slate-600 hover:text-[#2a73ff] py-1"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/showcase" onClick={() => setIsOpen(false)} className="block text-gray-800 font-semibold hover:text-[#2a73ff] py-2.5 text-base border-b border-slate-50">SHOWCASE</Link>

          <div className="pt-4 flex flex-col gap-3">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-center bg-[#3378ff] hover:bg-[#1f62e6] text-white font-semibold px-6 py-3.5 rounded-lg shadow-md text-base transition-all">
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;