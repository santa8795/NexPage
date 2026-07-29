import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom'; 

// Local Asset Import (Aap features/services ke hisaab se background image laga sakte hain)
import servicesHeroBg from '../assets/hero-bg.jpg';

// NexPage WaaS Features Data (With Premium Icons)
const servicesData = [
  {
    id: 'design',
    categoryTitle: 'Design & Customization',
    categoryDesc: 'Stunning, professional designs tailored for your business without writing a single line of code.',
    services: [
      {
        id: 'templates',
        title: 'Premium Industry Templates',
        subtitle: 'Start with a Beautiful Foundation',
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        ),
        description: "Choose from a wide variety of high-converting templates designed specifically for your industry, whether you run a clinic, agency, or retail shop.",
        list: [
          'Access to 50+ premium, conversion-optimized templates',
          'One-click template installation',
          'Industry-specific layouts (Real Estate, Healthcare, Portfolio, etc.)',
          'Modern UI/UX principles built-in',
          'Easily switch templates without losing data',
        ],
      },
      {
        id: 'responsive',
        title: '100% Mobile Responsive',
        subtitle: "Looks Perfect on Every Device",
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        ),
        description: 'More than 70% of web traffic comes from mobile. Your NexPage website automatically adapts to look flawless on any screen size.',
        list: [
          'Auto-scaling text and images for smartphones and tablets',
          'Touch-friendly navigation menus',
          'Optimized loading speeds for mobile networks',
          'No separate mobile site management required',
        ],
      },
      {
        id: 'branding',
        title: 'Custom Branding',
        subtitle: 'Make It Truly Yours',
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        description: "Easily customize your website to match your unique brand identity with intuitive design controls.",
        list: [
          'Upload your own logo and favicon',
          'Customize brand colors and themes',
          'Select from hundreds of professional Google Fonts',
          'Add custom banners and hero images',
        ],
      },
    ],
  },
  {
    id: 'hosting',
    categoryTitle: 'Infrastructure & Security',
    categoryDesc: 'Enterprise-grade hosting and security managed entirely by us. You focus on business, we handle the tech.',
    services: [
      {
        id: 'cloud-hosting',
        title: 'Fully Managed Cloud Hosting',
        subtitle: 'Lightning Fast & Reliable',
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        ),
        description: 'Say goodbye to server crashes and slow loading times. Your website is hosted on world-class cloud infrastructure.',
        list: [
          'Unlimited bandwidth for standard business traffic',
          'Global CDN (Content Delivery Network) for fast loading anywhere',
          '99.9% guaranteed uptime SLA',
          'Zero server maintenance or configuration required by you',
        ],
      },
      {
        id: 'ssl',
        title: 'Free SSL Certificate',
        subtitle: 'Secure Your Customer Data',
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ),
        description: 'Build trust with your visitors. Every NexPage website comes with a free, auto-renewing SSL certificate.',
        list: [
          'HTTPS encryption enabled by default',
          'Secure data transmission for contact forms',
          'Boosts Google SEO rankings',
          'Automatic renewals (no manual installation)',
        ],
      },
      {
        id: 'domain',
        title: 'Custom Domain Integration',
        subtitle: 'Establish Your Professional Identity',
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
        description: 'Connect your own custom domain (e.g., www.yourbusiness.com) to make your brand look professional and established.',
        list: [
          'Easy DNS configuration guide',
          'Seamless connection with any domain registrar (GoDaddy, Namecheap, etc.)',
          'Free NexPage subdomain included (e.g., yourname.nexpage.in) if you don’t have a domain',
        ],
      },
    ],
  },
  {
    id: 'growth',
    categoryTitle: 'Growth & Marketing Tools',
    categoryDesc: 'Built-in features designed to help you capture leads, rank on Google, and grow your customer base.',
    services: [
      {
        id: 'seo',
        title: 'Built-in SEO Optimization',
        subtitle: 'Get Found on Google',
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        ),
        description: 'We structure your website using best practices so search engines can easily crawl, index, and rank your business.',
        list: [
          'Auto-generated XML sitemaps',
          'Optimized HTML tags and semantic structure',
          'Custom Meta Titles and Descriptions for every page',
          'Fast page speed scores (crucial for SEO)',
          'Mobile-first indexing compliance',
        ],
      },
      {
        id: 'lead-gen',
        title: 'Lead Generation Forms',
        subtitle: 'Turn Visitors into Customers',
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        ),
        description: 'Capture inquiries directly from your website with easy-to-use contact forms that send leads straight to your inbox.',
        list: [
          'Customizable contact forms',
          'Instant email notifications for new leads',
          'Spam protection built-in',
          'Clean, user-friendly form designs',
        ],
      },
      {
        id: 'whatsapp',
        title: 'WhatsApp Chat Integration',
        subtitle: 'Connect Instantly with Clients',
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        ),
        description: 'Add a floating WhatsApp button to your website, allowing customers to message you directly with a single click.',
        list: [
          'Direct link to your business WhatsApp number',
          'Increases customer engagement and conversion rates',
          'Pre-filled custom greeting messages',
          'Works seamlessly on both desktop and mobile',
        ],
      },
      {
        id: 'analytics',
        title: 'Analytics & Tracking',
        subtitle: 'Understand Your Audience',
        icon: (
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
        description: 'Make data-driven decisions by easily integrating popular tracking tools to monitor your website traffic.',
        list: [
          'Simple Google Analytics integration',
          'Facebook Pixel support for ad tracking',
          'Track visitor counts and page views',
          'Understand user behavior to optimize your offerings',
        ],
      },
    ],
  },
];

// Framer Motion Variants for Staggered List Animation
const listContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Har ek list item 0.1s ke delay par aayega
    }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};

const Services = () => {
  const [openCards, setOpenCards] = useState({});
  const [highlightedId, setHighlightedId] = useState(null); 
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setOpenCards((prev) => ({ ...prev, [id]: true }));
          setHighlightedId(id);

          const timer = setTimeout(() => {
            setHighlightedId(null);
          }, 3500);

          return () => clearTimeout(timer);
        }, 150);
      }
    }
  }, [location]);

  const toggleCard = (cardId) => {
    setOpenCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <main className="bg-[#F8FAFC] font-sans text-slate-800 selection:bg-[#2a73ff] selection:text-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-[#0B0F19] text-white py-24 md:py-32 px-6 text-center border-b border-slate-800 bg-cover bg-center bg-no-repeat shadow-inner"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.8), rgba(11, 15, 25, 0.8)), url(${servicesHeroBg})`,
        }}
      >
        <div className="relative max-w-[1000px] mx-auto z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/40 border border-blue-400/30 px-3.5 py-1.5 rounded-full mb-4 shadow-sm"
          >
            Everything Included
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
          >
            Features Packed in <span className="text-[#2a73ff]">₹199/mo</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-[750px] mx-auto font-normal leading-relaxed opacity-90"
          >
            We provide everything you need to launch, secure, and grow your digital presence—without the technical headache or hidden costs.
          </motion.p>
        </div>
      </section>

      {/* 2. DETAILED FEATURES GROUPS */}
      <div className="py-16 md:py-24 px-6 max-w-[1300px] mx-auto space-y-24 md:space-y-32">
        {servicesData.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-28">
            
            {/* Category Header */}
            <header className="mb-12 md:mb-14 border-b border-slate-200/80 pb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2.5">
                {group.categoryTitle}
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed font-medium">
                {group.categoryDesc}
              </p>
            </header>

            {/* Features Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 items-start">
              {group.services.map((service) => {
                const isOpen = !!openCards[service.id];
                const isHighlighted = highlightedId === service.id; 

                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className={`bg-white rounded-2xl p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between scroll-mt-32 h-fit group relative overflow-hidden ${
                      isHighlighted
                        ? 'shadow-[0_0_35px_rgba(42,115,255,0.4)] border border-[#2a73ff] ring-4 ring-[#2a73ff]/30 scale-[1.02] bg-blue-50/10' 
                        : isOpen
                        ? 'shadow-[0_20px_40px_-15px_rgba(42,115,255,0.12)] border border-[#2a73ff]/40 ring-1 ring-[#2a73ff]/20 -translate-y-2'
                        : 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(42,115,255,0.15)] border border-slate-200/80 hover:border-[#2a73ff]/50 hover:-translate-y-2'
                    }`}
                  >
                    {/* Animated Bottom Border Glow on Hover */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#2a73ff] to-[#60a5fa] transition-all duration-500 ease-out group-hover:w-full"></div>

                    {isHighlighted && (
                      <div className="absolute -top-3 right-6 bg-[#2a73ff] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md animate-pulse">
                        ⭐ Highlighted Feature
                      </div>
                    )}

                    <div>
                      {/* Icon Box with Hover Animation */}
                      <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#2a73ff] flex items-center justify-center mb-6 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg shadow-blue-500/20">
                        {service.icon}
                      </div>

                      {/* Feature Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#2a73ff] transition-colors duration-300 mb-2 leading-snug">
                        {service.title}
                      </h3>
                      
                      {/* Feature Subtitle */}
                      <p className="text-xs sm:text-sm font-bold text-[#2a73ff] uppercase tracking-wider mb-4">
                        {service.subtitle}
                      </p>
                      
                      {/* Feature Description */}
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </div>

                    {/* Interactive Expand / Collapse Area */}
                    <div className="pt-5 border-t border-slate-100 mt-auto relative z-10">
                      <button
                        type="button"
                        onClick={() => toggleCard(service.id)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between py-2 text-sm sm:text-base font-bold text-[#0F172A] hover:text-[#2a73ff] transition-colors focus:outline-none cursor-pointer group/btn"
                      >
                        <span className="flex items-center gap-2">
                          <span>Included Perks</span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover/btn:bg-blue-50 group-hover/btn:text-[#2a73ff] transition-colors">
                            {service.list.length}
                          </span>
                        </span>
                        
                        {/* Chevron Icon */}
                        <span className={`transform transition-transform duration-300 p-1.5 rounded-full ${isOpen ? 'rotate-180 bg-[#2a73ff] text-white shadow-md' : 'text-slate-400 group-hover/btn:text-[#2a73ff] group-hover/btn:bg-blue-50'}`}>
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </button>

                      {/* Accordion Expansion with Framer Motion */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-dashed border-slate-200">
                              <motion.ul 
                                variants={listContainerVariants}
                                initial="hidden"
                                animate="show"
                                className="space-y-3 pl-5 list-disc marker:text-[#2a73ff] text-sm sm:text-base text-slate-600 pb-2"
                              >
                                {service.list.map((item, idx) => (
                                  <motion.li key={idx} variants={listItemVariants} className="leading-relaxed pl-1">
                                    {item}
                                  </motion.li>
                                ))}
                              </motion.ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </article>
                );
              })}
            </div>

          </section>
        ))}
      </div>

      {/* 3. FLOATING WHATSAPP BUTTON (Nilesh Kushwaha's Number) */}
      <a
        href="https://wa.me/919532793102"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20b858] text-white p-3.5 sm:p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-green-300 group"
      >
        <svg className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </main>
  );
};

export default Services;