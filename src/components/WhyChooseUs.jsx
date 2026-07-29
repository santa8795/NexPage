import React from 'react';

// Card Data Array - Updated for NexPage WaaS Platform
const whyChooseData = [
  {
    id: 1,
    title: 'Zero Technical Hassle',
    icon: (
      <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
    difference: 'Building a website usually means dealing with servers, DNS settings, and complex CMS configurations.',
    value: 'We handle the entire infrastructure automatically. You get a live, fast website instantly without writing a single line of code.',
  },
  {
    id: 2,
    title: 'Predictable, Low Pricing',
    icon: (
      <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    ),
    difference: 'Agencies charge thousands upfront, while traditional DIY builders have hidden costs and expensive add-on plugins.',
    value: 'Everything is included for a flat ₹199/month. Hosting, security, and premium templates with zero hidden fees.',
  },
  {
    id: 3,
    title: 'Blazing Fast Performance',
    icon: (
      <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    difference: 'Cheap shared hosting leads to slow loading times, poor SEO rankings, and lost customers.',
    value: 'Our cloud-native architecture and global CDN ensure your site loads instantly and ranks higher on Google.',
  },
  {
    id: 4,
    title: 'Built to Scale With You',
    icon: (
      <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    difference: 'Many basic website builders crash or break down as your traffic, inventory, or business operations grow.',
    value: 'Our multi-tenant WaaS infrastructure scales seamlessly, supporting you from your first customer to your ten-thousandth.',
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-[#0a1128] font-sans relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 lg:mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight mb-3">
            Why Choose NexPage
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-normal text-gray-400 tracking-wide">
            The smartest way to build, launch, and scale your digital presence.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {whyChooseData.map((item) => (
            <div 
              key={item.id} 
              /* group class add ki hai taaki card par hover hone se andar ke icon par effect aaye */
              className="group bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between cursor-pointer"
            >
              <div>
                
                {/* ── INTERACTIVE ICON BOX ── */}
                {/* By default: Light blue background (#eff6ff) + Blue icon (#2a73ff) */}
                {/* On Hover (group-hover): Solid blue background + White icon + Tilt (-rotate-6) + Zoom (scale-110) + Glow Shadow */}
                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] text-[#2a73ff] flex items-center justify-center mb-8 transition-all duration-300 ease-out group-hover:bg-[#2a73ff] group-hover:text-white group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-2xl sm:text-[26px] font-bold text-[#0f172a] mb-8 tracking-tight group-hover:text-[#2a73ff] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* The Difference Section */}
                <div className="mb-6">
                  <p className="text-[12px] font-extrabold text-[#2a73ff] uppercase tracking-widest mb-2">
                    THE OLD WAY
                  </p>
                  <p className="text-[#475569] text-base sm:text-[16.5px] leading-relaxed font-normal">
                    {item.difference}
                  </p>
                </div>
              </div>

              {/* How We Add Value Section */}
              <div className="pt-2">
                <p className="text-[12px] font-extrabold text-[#2a73ff] uppercase tracking-widest mb-2">
                  THE NEXPAGE ADVANTAGE
                </p>
                <p className="text-[#334155] text-base sm:text-[16.5px] leading-relaxed font-medium">
                  {item.value}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;