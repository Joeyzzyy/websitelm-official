'use client';
import React from 'react';
import Image from 'next/image';
import fontStyles from '../../../styles/textStyles';

const MoreInsightsWithFourCards = ({ data }) => {
  const insights = data.bottomContent;

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} text-center mb-12`}>
          More Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-lg border border-gray-100 hover:border-[#3374FF]/20 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.imageUrl}
                  alt={insight.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <p className={`${fontStyles.caption.fontSize} text-[#3374FF] font-medium mb-2 uppercase`}>
                  {insight.subTitle}
                </p>
                <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} group-hover:text-[#3374FF] transition-colors duration-200`}>
                  {insight.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInsightsWithFourCards;
