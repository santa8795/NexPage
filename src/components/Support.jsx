import React from 'react';

// ── Local Assets Import ──
// Kripya apne assets folder mein in names ke according images add kar lein
import setupImg from '../assets/instant-setup.jpeg';
import designImg from '../assets/premium-design.jpeg';
import seoImg from '../assets/seo-performance.jpeg';
import toolsImg from '../assets/business-tools.jpeg';
import scaleImg from '../assets/scale-hosting.jpeg';

// Data Array with Local Image References & Professional Icons
const supportData = [
  {
    id: 1,
    title: 'Instant Setup',
    image: setupImg,
    icon: (
      <svg className="w-6 h-6 text-[#2a73ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
    challenge: 'Setting up hosting, SSL, and DNS configurations can be overwhelming and highly technical.',
    support: 'We provide fully automated, one-click deployments with zero manual configuration required.',
  },
  {
    id: 2,
    title: 'Premium Design',
    image: designImg,
    icon: (
      <svg className="w-6 h-6 text-[#2a73ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    challenge: 'Hiring designers or learning complex page builders takes time away from your core business.',
    support: 'Access a library of conversion-optimized, mobile-responsive templates tailored to your industry.',
  },
  {
    id: 3,
    title: 'Speed & SEO',
    image: seoImg,
    icon: (
      <svg className="w-6 h-6 text-[#2a73ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    challenge: 'Slow loading times and poor search rankings drive potential customers away to competitors.',
    support: 'Our built-in SEO tools and global CDN ensure your site ranks higher and loads instantly.',
  },
  {
    id: 4,
    title: 'Integrated Tools',
    image: toolsImg,
    icon: (
      <svg className="w-6 h-6 text-[#2a73ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    challenge: 'Managing separate plugins for payments, analytics, and contact forms creates a fragmented workflow.',
    support: 'Everything from payment gateways to analytics dashboards is pre-integrated out of the box.',
  },
  {
    id: 5,
    title: 'Scalable Hosting',
    image: scaleImg,
    icon: (
      <svg className="w-6 h-6 text-[#2a73ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
    ),
    challenge: 'As traffic grows, cheap shared hosting often crashes or throttles your business operations.',
    support: 'Our multi-tenant, cloud-native architecture scales automatically to handle any amount of traffic.',
  },
];

function Support() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] font-sans">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
            How NexPage Empowers Businesses
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-bold text-[#2a73ff] tracking-wide uppercase mb-3">
            Digital infrastructure for every stage of growth
          </p>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed font-normal">
            Going online presents distinct technical challenges. Our WaaS platform handles the complexity so you can focus entirely on your business.
          </p>
        </div>

        {/* ── ALIGN CENTER CONCEPT (Flexbox Wrap with Justify Center) ── */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {supportData.map((item) => (
            <div 
              key={item.id} 
              /* Width formula calculation jisse 1, 2 ya 3 column apne aap barabar set aur center align honge */
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.67rem)] bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(42,115,255,0.12)] border border-gray-100 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              {/* Card Content Container */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Card Header with Icon */}
                  <div className="flex items-center gap-3.5 mb-5 border-b border-gray-100 pb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100/60">
                      {item.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Body - The Challenge */}
                  <div className="mb-4">
                    <p className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-1">
                      The Challenge
                    </p>
                    <p className="text-[#475569] text-[15px] sm:text-base leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                </div>

                {/* Card Body - How We Support */}
                <div className="pt-3 border-t border-gray-50 mt-2">
                  <p className="text-sm font-bold text-[#2a73ff] uppercase tracking-wider mb-1">
                    How We Support
                  </p>
                  <p className="text-[#334155] text-[15px] sm:text-base leading-relaxed font-medium">
                    {item.support}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Support;