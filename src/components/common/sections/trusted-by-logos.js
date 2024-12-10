'use client';
import React, { useEffect, useState } from 'react';

const TrustedByLogos = ({ data }) => {
  const logos = data?.bottomContent || [];
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const itemWidth = 128; // logo宽度(96px) + 间距(32px)
    const totalWidth = itemWidth * logos.length;
    
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPosition = prev - 1;
        if (Math.abs(newPosition) >= totalWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 20);
    
    return () => clearInterval(interval);
  }, [logos.length]);

  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative z-10 py-12 md:py-16 overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      
      <div className="relative mx-auto" style={{ width: '512px' }}>
        <div className="flex items-center justify-center overflow-hidden">
          <div 
            className="flex items-center gap-8"
            style={{
              transform: `translateX(${position}px)`,
              transition: 'none',
            }}
          >
            {tripleLogos.map((logo, index) => (
              <div
                key={`${logo.imageUrl}-${index}`}
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <img
                  src={logo.imageUrl}
                  alt={`Logo ${index}`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

export default TrustedByLogos;