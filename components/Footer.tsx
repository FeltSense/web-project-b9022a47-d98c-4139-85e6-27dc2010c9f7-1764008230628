'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Cybersecurity', href: '#services' },
      { name: 'AI & Machine Learning', href: '#services' },
      { name: 'Data Analytics', href: '#services' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'White Papers', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-bold text-white mb-6 block">
              TechBusiness
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <a href="mailto:hello@techbusiness.com" className="hover:text-white transition-colors">
                hello@techbusiness.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <a href="tel:+15551234567" className="hover:text-white transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>San Francisco, CA 94105</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} TechBusiness. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Built with excellence and innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}