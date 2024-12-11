"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/locales/headerText';

export const Navigation = ({ theme = 'light' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const pathParts = pathname.split('/');
    const lang = pathParts[1] === 'zh' ? 'zh' : 'en';
    setCurrentLang(lang);
  }, [pathname]);

  const currentMenuItems = menuItems[currentLang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="max-w-[1450px] mx-auto px-6">
        <div className="flex justify-between h-[4.2rem]">
          <div className="flex-shrink-0 flex items-center">
            {/* <Link href="/" className="flex items-center">
              <Image
                src=""
                alt="WebsiteLM Logo"
                width={110}
                height={53}s
                className="h-9 w-auto"
                quality={100}
                priority
              />
            </Link> */}
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {currentMenuItems.map((item) => (
                <span
                key={item.key}
                className="text-[15px] font-medium transition-all duration-300 flex items-center cursor-pointer"
              >
                {item.label}
              </span>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md"
            >
              <span className="sr-only">Open menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Header = ({ theme = 'light' }) => {
  return <Navigation theme={theme} />;
};