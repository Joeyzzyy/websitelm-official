'use client';

import React from 'react';
import fontStyles from '../../../styles/textStyles';

const WhyChooseUsWithSixSmallBlocks = ({ data }) => {
  const { topContent, bottomContent } = data;
  const { emoji, title, subtitle } = topContent;

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* 顶部内容 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-5xl md:text-6xl mb-6">{emoji}</div>
          <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-4`}>
            {title}
          </h2>
          <p className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>

        {/* 底部卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bottomContent.map((module, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 rounded-lg border border-gray-100 hover:border-[#3374FF]/20 hover:shadow-sm transition-all duration-200"
            >
              <div className="text-[#3374FF] text-2xl">
                {module.icon}
              </div>
              <div>
                <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} mb-2`}>
                  {module.title}
                </h3>
                <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                  {module.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsWithSixSmallBlocks;