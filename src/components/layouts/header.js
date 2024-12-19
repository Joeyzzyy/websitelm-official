"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleRedirect = (e) => {
    e.preventDefault();
    window.location.href = 'https://app.websitelm.com';
  };

  const handleScroll = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 67; // 4.2rem 约等于 67px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const mainMenuItems = [
    { key: 'features', label: 'Features' },
    { key: 'solutions', label: 'Solutions' },
    { key: 'resources', label: 'Resources' },
    { key: 'pricing', label: 'Pricing' },
  ];

  const actionItems = [
    { key: 'login', label: 'Login' },
    { key: 'book-demo', label: 'Book a Demo' },
    { key: 'get-started', label: 'Get Started' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="max-w-[1450px] mx-auto px-6">
        <div className="flex justify-between h-[4.2rem]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/enterprise-logo.png"
                alt="Logo"
                width={110}
                height={53}
                className="h-9 w-auto"
                quality={100}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 pl-8">
            {/* Main Menu Items */}
            <div className="flex space-x-8">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.key}
                  href={`#${item.key}`}
                  className="text-[15px] font-medium hover:text-[#3374FF] transition-all duration-300 flex items-center"
                  onClick={(e) => handleScroll(item.key, e)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-6">
              <a
                href="https://app.websitelm.com"
                className="text-[15px] font-medium hover:text-[#3374FF] transition-all duration-300"
              >
                Login
              </a>
              <a
                href="https://calendly.com/joey-techacc/30min"
                className="text-[15px] font-medium hover:text-[#3374FF] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
              <a
                href="https://app.websitelm.com"
                className="text-[15px] font-medium text-white bg-[#3374FF] hover:bg-[#3374FF]/90 px-4 py-2 rounded-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
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

        {/* 添加移动端菜单 */}
        {isOpen && (
          <div className="md:hidden absolute top-[4.2rem] left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-[1450px] mx-auto">
              <div className="py-4 px-6">
                {/* 主菜单项 */}
                <div className="space-y-3">
                  {mainMenuItems.map((item) => (
                    <Link
                      key={item.key}
                      href={`#${item.key}`}
                      className="flex items-center text-gray-600 hover:text-[#3374FF] transition-all duration-300"
                      onClick={(e) => {
                        handleScroll(item.key, e);
                        setIsOpen(false);
                      }}
                    >
                      <span className="text-[15px] font-medium">{item.label}</span>
                    </Link>
                  ))}
                </div>
                
                {/* 分割线 */}
                <div className="my-4 border-t border-gray-100"></div>
                
                {/* 操作按钮区域 */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://app.websitelm.com"
                      className="text-[15px] font-medium text-gray-600 hover:text-[#3374FF] transition-all duration-300"
                    >
                      Login
                    </a>
                    <a
                      href="https://calendly.com/joey-techacc/30min"
                      className="text-[15px] font-medium text-gray-600 hover:text-[#3374FF] transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Demo
                    </a>
                  </div>
                  <a
                    href="https://app.websitelm.com"
                    className="inline-flex items-center justify-center text-[15px] font-medium text-white bg-[#3374FF] hover:bg-[#3374FF]/90 px-5 py-2.5 rounded-lg transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;