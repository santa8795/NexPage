import React from 'react';
import { Link } from 'react-router-dom';

// Static Blog Data for NexPage WaaS Platform
const staticBlogs = [
  {
    id: 1,
    title: 'Why Every Local Business Needs a Website in 2026',
    category: 'Business Growth',
    date: 'July 15, 2026',
    description: 'Discover how taking your local shop online can double your customer base and build credibility without heavy marketing spends.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    // url: '/blog/local-business-website',
    url: '/'
  },
  {
    id: 2,
    title: 'The Hidden Costs of Traditional Web Agencies',
    category: 'Insights',
    date: 'July 10, 2026',
    description: 'Agencies charge thousands upfront with hidden maintenance fees. Learn why our flat ₹199/month infrastructure is the smarter choice.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    // url: '/blog/traditional-agencies-hidden-costs',
    url: '/'
  },
  {
    id: 3,
    title: 'How to Rank on Google Without Touching Code',
    category: 'SEO & Marketing',
    date: 'July 05, 2026',
    description: 'A beginner-friendly guide to leveraging built-in SEO tools, fast cloud hosting, and optimized content to dominate local search results.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    // url: '/blog/rank-on-google-zero-code',
    url: '/'
  },
];

function Blogs() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] font-sans relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
            Digital Growth Hub
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed font-normal">
            Actionable strategies, platform updates, and insights to help you scale your business online.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-14">
          {staticBlogs.map((blog) => (
            <article 
              key={blog.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(42,115,255,0.12)] border border-gray-100/80 transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between"
            >
              
              <div>
                {/* Image Wrapper with Smooth Hover Zoom */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-100 cursor-pointer">
                  <Link to={blog.url}>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                  </Link>
                </div>

                {/* Card Content Container */}
                <div className="p-6 sm:p-8">
                  
                  {/* Meta Info (Category & Date) */}
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-4">
                    <span className="bg-blue-50 text-[#2a73ff] px-3 py-1 rounded-full border border-blue-100">
                      {blog.category}
                    </span>
                    <span className="text-gray-400 font-semibold">
                      {blog.date}
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-[#2a73ff] transition-colors duration-200 line-clamp-2 leading-snug">
                    <Link to={blog.url} className="no-underline">
                      {blog.title}
                    </Link>
                  </h3>

                  {/* Blog Description */}
                  <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-normal line-clamp-3">
                    {blog.description}
                  </p>

                </div>
              </div>

              {/* Card Footer / Read More Button */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                <Link 
                  to={blog.url} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2a73ff] hover:text-[#1d5bcc] transition-all duration-200 group/link"
                >
                  <span>Read Article</span>
                  <svg 
                    className="w-4 h-4 stroke-current transition-transform duration-200 group-hover/link:translate-x-1.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

            </article>
          ))}
        </div>

        {/* CTA Button Section
        <div className="text-center">
          <Link 
            to="/resources" 
            className="inline-block bg-[#2a73ff] hover:bg-[#1d5bcc] text-white font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-base active:scale-95 cursor-pointer"
          >
            View All Insights
          </Link>
        </div> */}

      </div>
    </section>
  );
}

export default Blogs;