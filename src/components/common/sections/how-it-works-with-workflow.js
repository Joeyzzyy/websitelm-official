'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/fontStyles';
import buttonLinks from '../../ui/button/links';

const HowItWorksWithWorkflow = ({ data, author }) => {
  const { bottomContent, topContent } = data;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };
  
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <div className="text-6xl mb-6">{topContent.icon}</div>
          <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-4`}>
            {topContent.title}
          </h2>
          <h3 className="text-xl text-gray-600 max-w-3xl mx-auto">{topContent.subTitle}</h3>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-6">
          {bottomContent.map((block, index) => (
            <React.Fragment key={block.number}>
              <div className="flex flex-col items-center text-center w-full md:w-[30%] p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-5xl md:text-6xl font-bold mb-6 text-[#3374FF]">
                  {block.number}
                </div>
                <h4 className="text-xl font-semibold mb-3">{block.title}</h4>
                <h5 className="text-base text-gray-600 mb-4">{block.subTitle}</h5>
                <p className="text-base text-gray-700 leading-relaxed">
                  {block.content}
                </p>
              </div>
              {index < bottomContent.length - 1 && (
                <div className="hidden md:block text-[#3374FF] text-4xl">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksWithWorkflow;