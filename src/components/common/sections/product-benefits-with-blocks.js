'use client';

import React from 'react';
import CustomButton from './widget-custom_button';
import buttonLinks from '../../ui/button/links';
import fontStyles from '../../../styles/fontStyles';

const ProductBenefitsWithFourBlocks = ({ data, author }) => {
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  const getModuleStyle = (index) => {
    const styles = [
      'bg-white border-[#3374FF]',
      'bg-white border-[#3374FF]',
      'bg-white border-[#3374FF]',
      'bg-white border-[#3374FF]'
    ];
    return styles[index % styles.length];
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {Array.from({ length: Math.ceil(data.rightContent.length / 4) }).map((_, groupIndex, array) => (
          <div 
            key={groupIndex} 
            className={`flex flex-col md:flex-row gap-8 md:gap-12 ${
              data.rightContent.length === 8 && groupIndex === 1 ? 'mt-24' : 
              (groupIndex > 0 && groupIndex < array.length - 1) ? 'my-24' : ''
            }`}
          >
            {/* 左侧内容 - 在移动端始终显示在上方 */}
            <div className={`w-full md:w-2/5 ${groupIndex % 2 === 1 ? 'md:order-last' : ''}`}>
              <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-4`}>
                {data.leftContent.title}
              </h2>
              <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} mb-6`}>
                {data.leftContent.description}
              </p>
              <CustomButton 
                variant={author} 
                href={getButtonLink()}
                className="inline-flex items-center px-6 py-2.5 border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white rounded-md transition-colors duration-200"
              >
                {data.leftContent.buttonText}
              </CustomButton>
            </div>
            {/* 右侧卡片网格 */}
            <div className={`w-full md:w-3/5 ${groupIndex % 2 === 1 ? 'md:order-first' : ''}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.rightContent.slice(groupIndex * 4, groupIndex * 4 + 4).map((module, index) => (
                  <div 
                    key={index} 
                    className={`
                      p-6 
                      rounded-lg 
                      border
                      transition-all
                      duration-200
                      hover:shadow-md
                      ${getModuleStyle(index)}
                    `}
                  >
                    <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} mb-2`}>
                      {module.title}
                    </h3>
                    <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                      {module.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBenefitsWithFourBlocks;