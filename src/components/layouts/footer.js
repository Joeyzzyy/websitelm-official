"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaDiscord, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { footerText } from '@/locales/footerText';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const pathname = usePathname();

  // 监听路径变化并更新当前语言
  useEffect(() => {
    const pathParts = pathname.split('/');
    const lang = pathParts[1] === 'zh' ? 'zh' : 'en';
    setCurrentLang(lang);
  }, [pathname]);

  const text = footerText[currentLang];

  return (
    <footer className="bg-[#262B3A]">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href="/" className="flex items-center">
              <Image
                src=""
                alt="WebsiteLM Logo"
                width={110}
                height={53}
                className="h-9 w-auto"
                quality={100}
                priority
              />
            </Link>
            <p className="text-gray-300 text-base text-center sm:text-left">
              {text.slogan}
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="" 
              className="text-gray-400 hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">YouTube</span>
              <FaYoutube className="h-5 w-5" />
            </a>
            <a 
              href="" 
              className="text-gray-400 hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">X (Twitter)</span>
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a 
              href="" 
              className="text-gray-400 hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-5 w-5" />
            </a>
            <a 
              href="" 
              className="text-gray-400 hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Discord</span>
              <FaDiscord className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-400">
          <a href="" className="hover:text-gray-200">
            {text.links.email}
          </a>
          <span className="hidden sm:inline">|</span>
          <a 
            href="" 
            className="hover:text-gray-200"
          >
            {text.links.helpCenter}
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="" className="hover:text-gray-200">
            {text.links.serviceTerms}
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="" className="hover:text-gray-200">
            {text.links.privacyPolicy}
          </a>
          <span className="hidden sm:inline">|</span>
          <p>{text.copyright}</p>
          <span className="hidden sm:inline">|</span>
          <p>{text.icp}</p>
          <span className="hidden sm:inline">|</span>
          <a href="" className="hover:text-gray-200">
            {text.cac}
          </a>
        </div>
      </div>
    </footer>
  );
};
