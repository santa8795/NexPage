import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const termsSections = [
  { id: 'general', title: '1. General Terms' },
  { id: 'subscription', title: '2. Subscription & Payments' },
  { id: 'hosting', title: '3. Hosting & Uptime' },
  { id: 'content', title: '4. User Content & Responsibilities' },
  { id: 'cancellation', title: '5. Cancellation & Termination' },
  { id: 'contact', title: '6. Contact Information' },
];

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('general');

  // Simple scroll spy to highlight active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const offsets = termsSections.map((section) => {
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
            Terms & <span className="text-[#2a73ff]">Conditions</span>
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
            {termsSections.map((section) => (
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
          <p className="text-slate-600 leading-relaxed mb-10">
            Welcome to <strong>NexPage</strong>. These Terms and Conditions govern your use of our Website-as-a-Service (WaaS) platform and services. By subscribing to our ₹199/month plan or using our services, you agree to be bound by these terms.
          </p>

          {/* Section 1 */}
          <section id="general" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              1. General Terms
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              NexPage provides fully managed website hosting, templates, and digital infrastructure for a flat subscription fee. We reserve the right to modify, update, or discontinue any feature of the service with prior notice to active subscribers.
            </p>
          </section>

          {/* Section 2 */}
          <section id="subscription" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              2. Subscription & Payments
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600 leading-relaxed">
              <li><strong>Pricing:</strong> Our standard service is billed at <strong>₹199 per month</strong>. There are no hidden setup fees.</li>
              <li><strong>Billing Cycle:</strong> Subscriptions are billed in advance on a monthly or annual basis, depending on your selected plan.</li>
              <li><strong>Refunds:</strong> Payments are non-refundable. If you cancel your subscription, your website will remain active until the end of your current billing cycle.</li>
              <li><strong>Domain Names:</strong> Custom domains purchased through us or connected externally are the property and responsibility of the user.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="hosting" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              3. Hosting & Uptime
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We strive to provide a <strong>99.9% uptime</strong> for all websites hosted on NexPage. However, we are not liable for temporary downtimes caused by scheduled maintenance, third-party server outages, or circumstances beyond our control (force majeure).
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our ₹199/month plan includes fair-use bandwidth suitable for small businesses. Excessive traffic that disrupts our shared infrastructure may require an upgrade to a custom enterprise plan.
            </p>
          </section>

          {/* Section 4 */}
          <section id="content" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              4. User Content & Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600 leading-relaxed">
              <li>You retain full ownership of the text, images, and data you upload to your NexPage website.</li>
              <li>You are strictly prohibited from hosting illegal, pirated, adult, or spam content.</li>
              <li>NexPage reserves the right to suspend or terminate websites that violate legal regulations or our acceptable use policy without prior notice.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="cancellation" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              5. Cancellation & Termination
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may cancel your subscription at any time through your dashboard or by contacting our support team. Upon cancellation, auto-renewal will be disabled. Once the billing cycle ends, your website and its data will be permanently deleted from our servers after a 15-day grace period.
            </p>
          </section>

          {/* Section 6 */}
          <section id="contact" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-slate-100">
              6. Contact Information
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If you have any questions, concerns, or require support regarding these Terms and Conditions, please contact us directly:
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

export default TermsAndConditions;