import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const privacySections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'data-collection', title: '2. Information We Collect' },
  { id: 'data-usage', title: '3. How We Use Your Data' },
  { id: 'data-sharing', title: '4. Data Sharing & Security' },
  { id: 'cookies', title: '5. Cookies & Tracking' },
  { id: 'user-rights', title: '6. Your Rights & Choices' },
  { id: 'contact', title: '7. Contact Us' },
];

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Simple scroll spy to highlight active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const offsets = privacySections.map((section) => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          offsetTop: element ? element.offsetTop - 150 : 0,
        };
      });

      const scrollPosition = window.scrollY;
      let currentSection = offsets[0].id;

      for (let i = 0; i < offsets.length; i++) {
        if (scrollPosition >= offsets[i].offsetTop) {
          currentSection = offsets[i].id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="bg-[#F8FAFC] font-sans text-slate-800 selection:bg-[#2a73ff] selection:text-white min-h-screen pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B0F19] text-white py-20 px-6 text-center border-b border-slate-800">
        <div className="relative max-w-[800px] mx-auto z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Privacy <span className="text-[#2a73ff]">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base font-medium"
          >
            Last Updated: July 2026 • NexPage Website Services
          </motion.p>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-[1300px] mx-auto px-6 mt-12 md:mt-16 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        
        {/* Sidebar Navigation (Sticky) */}
        <aside className="w-full md:w-[300px] flex-shrink-0 sticky top-28 bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 hidden md:block">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Contents</h3>
          <ul className="space-y-3">
            {privacySections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-semibold w-full text-left transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-[#2a73ff] translate-x-2'
                      : 'text-slate-500 hover:text-slate-800 hover:translate-x-1'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Document Content */}
        <div className="flex-1 bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
          
          {/* Section 1 */}
          <section id="introduction" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At <strong>NexPage</strong>, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our ₹199/month Website-as-a-Service (WaaS) platform, or interact with us.
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-collection" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              2. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect via the Site includes:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-slate-600 leading-relaxed">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and billing information provided during registration or checkout.</li>
              <li><strong>Website Data:</strong> Content, images, and texts you upload to build your website on our servers.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and access times automatically recorded when you use our services.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="data-usage" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              3. How We Use Your Data
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-slate-600 leading-relaxed">
              <li>Create, manage, and host your website on our cloud infrastructure.</li>
              <li>Process your ₹199/month subscription payments securely.</li>
              <li>Send administrative information, such as updates to terms, billing receipts, and service outages.</li>
              <li>Provide customer support via WhatsApp or email.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="data-sharing" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              4. Data Sharing & Security
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We <strong>do not sell, trade, or rent</strong> your personal information to third parties. We may share your data only in the following situations:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-slate-600 leading-relaxed">
              <li><strong>Service Providers:</strong> We may share data with trusted third-party vendors (like payment processors and cloud hosting providers) to perform services for us.</li>
              <li><strong>Legal Obligations:</strong> We may disclose information if required by law or to respond to legal processes.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              We use administrative, technical, and physical security measures to help protect your personal information, including free SSL encryption for all hosted websites.
            </p>
          </section>

          {/* Section 5 */}
          <section id="cookies" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              5. Cookies & Tracking
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. You can remove or reject cookies through your browser settings, but be aware that such action could affect the availability and functionality of the Site.
            </p>
          </section>

          {/* Section 6 */}
          <section id="user-rights" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              6. Your Rights & Choices
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Depending on your location, you may have the right to request access to the personal data we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please contact us using the details below.
            </p>
          </section>

          {/* Section 7 */}
          <section id="contact" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              7. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If you have questions or comments about this Privacy Policy, please contact our Data Protection Officer:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <p className="font-bold text-[#0F172A] text-lg mb-1">Nilesh Kushwaha</p>
              <p className="text-slate-600 mb-4">Founder, NexPage</p>
              
              <div className="flex flex-col gap-3">
                <a href="tel:+919532793102" className="flex items-center gap-3 text-[#2a73ff] hover:text-[#1d4ed8] transition-colors font-medium">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9532793102
                </a>
                <a href="mailto:hello@nexpage.in" className="flex items-center gap-3 text-[#2a73ff] hover:text-[#1d4ed8] transition-colors font-medium">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@nexpage.in
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

export default Privacy;