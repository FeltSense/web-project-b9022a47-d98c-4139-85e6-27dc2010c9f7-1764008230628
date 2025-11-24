'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Full Technology Consultation',
    'Custom Solution Development',
    'Cloud Infrastructure Setup',
    'Security Implementation',
    '30 Days of Premium Support',
    'Performance Optimization',
    'Training & Documentation',
    'Ongoing Maintenance Plan',
  ];

  const trustBadges = [
    { label: 'Money-Back Guarantee', icon: '🛡️' },
    { label: 'Secure Payment', icon: '🔒' },
    { label: '24/7 Support', icon: '💬' },
    { label: 'Enterprise Grade', icon: '⭐' },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our comprehensive technology package designed to accelerate your business growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="bg-blue-700 px-8 py-6 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white">Professional Package</h3>
                <p className="text-blue-100 mt-2">Everything you need to transform your business</p>
              </div>
              <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-1">
                <Zap className="w-4 h-4" />
                <span>POPULAR</span>
              </div>
            </div>

            <div className="bg-white p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="text-center">
                  <div className="flex items-start justify-center">
                    <span className="text-3xl font-bold text-gray-900 mt-2">$</span>
                    <span className="text-7xl font-bold text-gray-900">29</span>
                  </div>
                  <p className="text-gray-600 mt-2">One-time setup fee</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center px-8 py-5 rounded-xl text-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 mb-8"
              >
                Get Started Now
              </a>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <div className="text-sm text-gray-600">{badge.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We offer tailored enterprise solutions with dedicated support, custom integrations, and scalable infrastructure.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-200"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}