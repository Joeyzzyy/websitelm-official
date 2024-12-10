'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/textStyles';
import buttonLinks from '../../ui/button/links';

const CallToAction = ({ data }) => {
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-4`}>
          {data.title}
        </h2>
        <p className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} mb-6`}>
          {data.subTitle}
        </p>
        <CustomButton 
          href={getButtonLink()}
          className="inline-flex items-center px-6 h-10 border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
        >
          {data.buttonText}
        </CustomButton>
      </div>
    </div>
  );
};

export default CallToAction;