import React from 'react';
import { Link } from 'react-router-dom'; // Added Link for internal React routing
import AnimatedGraphic from './AnimatedGraphic'; 

function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white font-sans overflow-hidden">
      {/* max-w ko 1600px kiya hai taaki screen ka poora width ache se cover ho aur left-right space kam bache */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Grid Gap ko bade screen ke hisaab se adjust kiya hai */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* 1. Left Side: Animated Graphic (7 Columns) */}
          <div className="lg:col-span-7 w-full">
            <AnimatedGraphic />
          </div>

          {/* 2. Right Side: Text Content (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Subtitle - Size bada aur bold kiya */}
            <span className="text-sm sm:text-[15px] font-extrabold text-[#3b82f6] uppercase tracking-widest block mb-3">
              The NexPage Vision
            </span>

            {/* Main Heading - Size ko 38px se badha kar 46px aur bold kiya */}
            <h2 className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold text-[#1e293b] tracking-tight leading-[1.2] mb-6">
              Democratizing Digital Presence
            </h2>

            {/* Paragraphs - Text size 15px se badha kar 18px kiya aur line-gap badhaya */}
            <div className="space-y-5 text-[#475569] text-base sm:text-lg lg:text-[18px] leading-[1.8] font-normal">
              <p>
                NexPage is built on a simple belief: every small business, freelancer, and local shop deserves a premium online presence without the heavy price tag or technical headaches.
              </p>
              <p>
                We handle the complex infrastructure—hosting, design, security, and maintenance—so you can focus entirely on growing your business. No coding required, just immediate results.
              </p>
              <p>
                Powered by our highly scalable Website-as-a-Service (WaaS) model, we deliver blazing-fast, fully responsive websites starting at just ₹199/month. We make growth accessible to everyone.
              </p>
            </div>

            {/* Call To Action (CTA) Button - Button ko bada aur prominent kiya */}
            <div className="mt-10">
              <Link 
                to="/about" 
                className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-base lg:text-[16px] active:scale-95 text-center"
              >
                Learn How It Works
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;