'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import buttonLinks from '../../ui/button/links';
import fontStyles from '../../../styles/fontStyles';

const HeroSectionWithMultipleTexts = ({ data }) => {
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  const renderTitleWithHighlight = (title) => {
    const words = title.split(' ');
    const lastTwoWords = words.slice(-2).join(' ');
    const restOfTitle = words.slice(0, -2).join(' ');

    return (
      <>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3374FF] to-[#1E3A8A]">
          {restOfTitle}{' '}
        </span>
        <span className="inline-block bg-gradient-to-r from-[#3374FF]/[0.75] via-[#3374FF]/[0.5] to-[#3374FF]/[0.75] -rotate-1 px-2 py-1">
          {lastTwoWords}
        </span>
      </>
    );
  };

  return (
    <div className="bg-white pt-20 pb-0 md:pt-36">
      <div className="w-full bg-white">
        <div className="relative z-10 pt-8 md:pt-12 mb-8 md:mb-12 px-4">
          <div className="flex flex-col items-center gap-4 mb-6">
            <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-2">
              {renderTitleWithHighlight(data.topContent.title)}
            </h1>
          </div>
          
          <p className={`text-center ${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} mt-3 max-w-3xl mx-auto`}>
            {data.topContent.description}
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <CustomButton 
              variant="WebsiteLM" 
              href={getButtonLink()}
              className="border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white font-semibold 
              px-8 md:px-10 rounded-md text-base md:text-lg h-12 md:h-14 flex items-center gap-2 
              transition-all duration-200 hover:scale-105"
            >
              {data.topContent.buttonText}
            </CustomButton>
            
            <CustomButton 
              variant="WebsiteLM" 
              href={getButtonLink()}
              className="bg-[#3374FF] text-white hover:bg-[#2861E5] border-2 border-[#3374FF] font-semibold 
              px-8 md:px-10 rounded-md text-base md:text-lg h-12 md:h-14 flex items-center gap-2 
              transition-all duration-200 hover:scale-105"
            >
              {data.topContent.ctaButtonText}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithMultipleTexts;