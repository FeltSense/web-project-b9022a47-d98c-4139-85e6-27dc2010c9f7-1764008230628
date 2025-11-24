'use client';

import { Cloud, Shield, Cpu, Database, Smartphone, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services that ensure your business operates efficiently with maximum uptime and security.',
      color: 'bg-blue-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data and systems from evolving threats with 24/7 monitoring and rapid response.',
      color: 'bg-purple-500',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence and machine learning to automate processes, gain insights, and make data-driven decisions.',
      color: 'bg-cyan-500',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics tools and custom dashboards tailored to your business needs.',
      color: 'bg-indigo-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.',
      color: 'bg-pink-500',
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Empower your team with real-time business intelligence solutions that drive strategic decision-making and competitive advantage.',
      color: 'bg-green-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive technology solutions designed to accelerate your digital transformation and drive measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}