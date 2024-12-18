'use client';

import React from 'react';
import fontStyles from '../../../styles/fontStyles';

const WhyChooseUsWithSixSmallBlocks = ({ data }) => {
  const { topContent, bottomContent } = data;
  const { emoji, title, subtitle } = topContent;

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* 顶部内容 */}
        <div className="text-center mb-16 md:mb-20">
          <div className="text-6xl md:text-7xl mb-8 animate-bounce-slow">{emoji}</div>
          <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-6`}>
            {title}
          </h2>
          <p className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>

        {/* 底部卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bottomContent.map((module, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-8 rounded-xl border-2 border-gray-100 
                hover:border-[#3374FF]/30 hover:shadow-lg transition-all duration-300 
                transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {module.icon}
              </div>
              <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} 
                mb-4 text-xl md:text-2xl`}>
                {module.title}
              </h3>
              {module.content && (
                <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                  {module.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsWithSixSmallBlocks;