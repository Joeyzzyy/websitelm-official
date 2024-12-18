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
        {restOfTitle}{' '}
        <span className="inline-block bg-gradient-to-r from-[#3374FF]/[0.75] via-[#3374FF]/[0.5] to-[#3374FF]/[0.75] -rotate-1 px-1">
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
            <h1 className={`text-center text-4xl md:text-5xl font-bold`}>
              {renderTitleWithHighlight(data.topContent.title)}
            </h1>
          </div>
          
          <p className={`text-center ${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} mt-3 max-w-3xl mx-auto`}>
            {data.topContent.description}
          </p>
          
          <div className="mt-8">
            <CustomButton 
              variant="KREADO" 
              href={getButtonLink()}
              className="block mx-auto border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white font-medium px-6 md:px-8 rounded-md text-sm h-10 flex items-center gap-2 transition-colors duration-200"
            >
              {data.topContent.buttonText}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithMultipleTexts;