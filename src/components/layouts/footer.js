"use client";

import { FaFacebook, FaDiscord, FaXTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa6';
import { footerText } from '@/locales/footerText';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const pathname = usePathname();

  useEffect(() => {
    const pathParts = pathname.split('/');
    const lang = pathParts[1] === 'zh' ? 'zh' : 'en';
    setCurrentLang(lang);
  }, [pathname]);

  const text = footerText[currentLang];

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-white font-semibold mb-4">WebsiteLM</h3>
            <p className="text-gray-300 text-sm">
              AI Website Generator - AI-crafted Content That Delivers Results.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">SEO Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Content Generation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">AI Tools</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-6">
              <FaXTwitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200" />
              <FaYoutube className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200" />
              <FaLinkedin className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200" />
              <FaDiscord className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
            
            <div className="flex-1 max-w-md mx-4">
              <h4 className="text-white text-center md:text-left mb-3 font-semibold">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4 text-center md:text-left">
                Subscribe to our newsletter for the latest updates and tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg sm:rounded-r-none bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-200"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg sm:rounded-l-none hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-300 text-sm">
          © 2024 WebsiteLM. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};