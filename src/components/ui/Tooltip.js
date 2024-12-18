'use client';

import { useState } from 'react';

export const Tooltip = ({ children, message }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 px-4 py-2 -translate-x-1/2 left-1/2 top-full mt-2">
          <div className="bg-gray-900 text-white text-sm rounded-lg px-4 py-2 shadow-lg">
            {message}
          </div>
        </div>
      )}
    </div>
  );
}; 