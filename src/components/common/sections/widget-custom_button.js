'use client'
import React from 'react';

const CustomButton = ({ 
  children,
  className = '',
  href,
  ...props 
}) => {
  const getButtonStyles = () => {
    return 'border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white';
  };

  const handleClick = () => {
    if (href) {
      window.location.href = href; // 或者使用 router.push(href)
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-8 py-3 
        rounded-3xl 
        text-lg 
        font-semibold 
        transition-all duration-200
        ${getButtonStyles()}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
