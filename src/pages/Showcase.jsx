import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder Images (Aap inko apne actual templates/client websites ke screenshots se replace kar sakte hain)
const showcaseData = [
  {
    id: 1,
    title: 'Urban Beans Cafe',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'Aura Boutique',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'Dr. Sharma Clinic',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    link: '#',
  },
  {
    id: 4,
    title: 'Pixel Creatives',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: '#',
  },
  {
    id: 5,
    title: 'NextGen Gadgets',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    link: '#',
  },
  {
    id: 6,
    title: 'Apex Law Associates',
    category: 'Agency',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    link: '#',
  },
];

const categories = ['All', 'E-commerce', 'Restaurant', 'Portfolio', 'Healthcare', 'Agency'];

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter data based on selected category
  const filteredShowcase = activeCategory === 'All' 
    ? showcaseData 
    : showcaseData.filter(item => item.category === activeCategory);

  return (
    <main className="bg-[#F8FAFC] font-sans text-slate-800 selection:bg-[#2a73ff] selection:text-white min-h-screen pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B0F19] text-white py-24 md:py-32 px-6 text-center border-b border-slate-800 overflow-hidden">
        {/* Subtle Background Glow Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2a73ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#60a5fa] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

        <div className="relative max-w-[1000px] mx-auto z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/40 border border-blue-400/30 px-4 py-1.5 rounded-full mb-6 shadow-sm"
          >
            Customer Showcase
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Built with <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-white bg-clip-text text-transparent">NexPage</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-[700px] mx-auto font-normal leading-relaxed opacity-90"
          >
            Explore stunning, high-performing websites built by businesses just like yours. All powered by our ₹199/month infrastructure.
          </motion.p>
        </div>
      </section>

      {/* 2. FILTER CATEGORIES */}
      <div className="max-w-[1400px] mx-auto px-6 mt-12 mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#2a73ff] text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#2a73ff] hover:text-[#2a73ff]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 3. SHOWCASE GRID */}
      <div className="max-w-[1400px] mx-auto px-6 min-h-[400px]">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence>
            {filteredShowcase.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(42,115,255,0.2)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
                    <span className="bg-white text-[#0F172A] font-bold text-sm px-6 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                      Preview Site
                    </span>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/95 backdrop-blur-md text-[#2a73ff] text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-md shadow-sm border border-blue-50">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">Built with NexPage Builder</p>
                  </div>
                  <a href={item.link} className="w-10 h-10 rounded-full bg-slate-50 text-[#2a73ff] flex items-center justify-center transition-all duration-300 group-hover:bg-[#2a73ff] group-hover:text-white group-hover:-rotate-45">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="max-w-[1200px] mx-auto px-6 mt-24">
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to build your dream website?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Join hundreds of businesses growing online with NexPage. No coding required, setup in minutes for just ₹199/mo.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup" className="px-8 py-3.5 bg-[#2a73ff] hover:bg-[#1d4ed8] text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-95 w-full sm:w-auto">
                Start Free Trial
              </Link>
              <Link to="/pricing" className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-md border border-white/20 transition-all w-full sm:w-auto">
                View Pricing
              </Link>
            </div>
          </div>
          {/* Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#2a73ff] rounded-full mix-blend-overlay filter blur-[80px] opacity-50"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-[80px] opacity-50"></div>
        </div>
      </section>

      {/* 5. FLOATING WHATSAPP BUTTON (Nilesh Kushwaha's Number) */}
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

export default Showcase;