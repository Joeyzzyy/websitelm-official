'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/fontStyles';
import buttonLinks from '../../ui/button/links';

const CallToAction = ({ data }) => {
  const getButtonLink = (buttonType) => {
    return buttonLinks[buttonType] || '#';
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-6 leading-tight`}>
          {data.title}
        </h2>
        <p className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} mb-8 leading-relaxed max-w-2xl mx-auto`}>
          {data.subTitle}
        </p>
        
        <div className="mb-12">
          <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} mb-8`}>
            {data.bottomContent.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {data.bottomContent.content.map((item, index) => (
              <div key={index} className="text-left p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-lg mb-4">{data.bottomContent.callToActionEngagementTop}</p>
          <p className="text-lg mb-8">{data.bottomContent.callToActionEngagementBottom}</p>
        </div>

        <div className="flex justify-center items-center space-x-6">
          <CustomButton 
            href={getButtonLink()}
            className="inline-flex items-center px-8 h-12 border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white text-base font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
          >
            {data.buttonText}
          </CustomButton>
          <CustomButton 
            href={getButtonLink()}
            className="inline-flex items-center px-8 h-12 bg-[#3374FF] border-2 border-[#3374FF] text-white hover:bg-[#2861E6] hover:border-[#2861E6] text-base font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
          >
            {data.ctaButtonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;