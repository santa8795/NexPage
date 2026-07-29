import React from 'react';
import { 
  Monitor, 
  ShoppingBag, 
  Briefcase, 
  GraduationCap, 
  Building, 
  HeartPulse, 
  Newspaper, 
  Code 
} from 'lucide-react';

const ViewTemplet = () => {
  // Template categories ka data
  const templates = [
    {
      id: 1,
      title: 'E-Commerce Platforms',
      description: 'Fully functional online stores with secure payment gateways and cart management.',
      icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
      color: 'bg-blue-50',
    },
    {
      id: 2,
      title: 'Corporate Websites',
      description: 'Professional and sleek designs to represent your business and corporate identity.',
      icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
      color: 'bg-indigo-50',
    },
    {
      id: 3,
      title: 'Education & ERP Systems',
      description: 'Comprehensive portals for schools, colleges, and online learning management.',
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      color: 'bg-green-50',
    },
    {
      id: 4,
      title: 'Real Estate Portals',
      description: 'Property listing websites with advanced search, maps, and agent directories.',
      icon: <Building className="w-8 h-8 text-orange-600" />,
      color: 'bg-orange-50',
    },
    {
      id: 5,
      title: 'Healthcare & Medical',
      description: 'Trustworthy websites for hospitals, clinics, and doctor appointment bookings.',
      icon: <HeartPulse className="w-8 h-8 text-red-600" />,
      color: 'bg-red-50',
    },
    {
      id: 6,
      title: 'Blogs & News Portals',
      description: 'Content-heavy websites optimized for readability, SEO, and high traffic.',
      icon: <Newspaper className="w-8 h-8 text-teal-600" />,
      color: 'bg-teal-50',
    },
    {
      id: 7,
      title: 'Portfolio & Resumes',
      description: 'Creative and personalized designs to showcase your work and professional journey.',
      icon: <Monitor className="w-8 h-8 text-purple-600" />,
      color: 'bg-purple-50',
    },
    {
      id: 8,
      title: 'Custom Web Applications',
      description: 'Tailor-made complex web apps, dashboards, and SaaS platforms built from scratch.',
      icon: <Code className="w-8 h-8 text-gray-800" />,
      color: 'bg-gray-100',
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          We Build All Types of Websites
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          From simple portfolios to complex enterprise systems, we design and develop custom solutions tailored perfectly to your unique requirements. Explore the categories we specialize in below.
        </p>
      </div>

      {/* Templates Grid Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <div 
              key={template.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group cursor-default"
            >
              {/* Card Header with Icon */}
              <div className={`${template.color} p-6 flex justify-center items-center h-32 group-hover:scale-105 transition-transform duration-300`}>
                <div className="bg-white p-4 rounded-full shadow-sm">
                  {template.icon}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {template.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call to Action (Static Message) */}
      <div className="max-w-4xl mx-auto mt-20 bg-blue-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl font-bold mb-4">Have a Custom Requirement?</h2>
        <p className="text-blue-100 text-lg mb-0">
          The templates above are just a glimpse of what we can do. We build everything from scratch to match your exact vision, integrating any complex logic or APIs you need.
        </p>
      </div>
    </div>
  );
};

export default ViewTemplet;