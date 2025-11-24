'use client';

import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'Working with TechBusiness transformed our entire digital infrastructure. Their cloud solutions reduced our costs by 40% while improving performance dramatically. The team is incredibly professional and responsive.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Systems',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'The cybersecurity solutions provided by TechBusiness gave us peace of mind. Their proactive approach to threat detection and 24/7 monitoring has been invaluable. Highly recommended for any business serious about security.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      company: 'Global Ventures',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'The AI and machine learning solutions revolutionized our business operations. We saw a 60% increase in efficiency within the first quarter. TechBusiness truly understands how to leverage technology for business growth.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Director of IT',
      company: 'Innovation Labs',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'Outstanding mobile development services! Our app has over 100,000 downloads with a 4.8-star rating. The team at TechBusiness delivered beyond our expectations and on time.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'Creative Solutions',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      quote: 'The data analytics platform built by TechBusiness gave us insights we never knew existed. Our marketing ROI improved by 85% in just six months. Absolutely game-changing for our business.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Founder',
      company: 'StartupHub',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      quote: 'From consultation to implementation, TechBusiness has been an incredible partner. Their business intelligence solutions helped us scale from 10 to 100 employees while maintaining operational excellence.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the businesses we've helped transform through innovative technology solutions.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${activeIndex}-${index}`}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fadeIn"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 ring-4 ring-blue-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}