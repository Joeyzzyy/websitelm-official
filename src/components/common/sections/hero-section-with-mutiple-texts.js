'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import buttonLinks from '../../ui/button/links';
import fontStyles from '../../../styles/fontStyles';

const HeroSectionWithMultipleTexts = ({ data }) => {
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className="bg-white pt-20 pb-0 md:pt-36">
      <div className="w-full bg-white">
        <div className="relative z-10 pt-8 md:pt-12 mb-8 md:mb-12 px-4">
          <div className="flex flex-col items-center gap-4 mb-6">
            <h1 className={`text-center text-4xl md:text-5xl font-bold`}>
              Embed AI knowledge that <span className="inline-block bg-gradient-to-r from-[rgb(51,116,255)]/[0.85] via-[rgb(51,116,255)]/[0.75] to-white/[0.9] -rotate-1 px-3 py-1 rounded-md text-gray-900 hover:scale-105 transition-all duration-300">
                works
              </span>
            </h1>
            <h1 className={`text-center text-4xl md:text-5xl font-bold`}>
              Create content that <span className="inline-block bg-gradient-to-r from-white/[0.9] via-[rgb(51,116,255)]/[0.75] to-[rgb(51,116,255)]/[0.85] rotate-1 px-3 py-1 rounded-md text-gray-900 hover:scale-105 transition-all duration-300">
                ranks
              </span>
            </h1>
            <h1 className={`text-center text-4xl md:text-5xl font-bold`}>
              Drive traffic that <span className="inline-block bg-gradient-to-r from-[rgb(51,116,255)]/[0.85] via-[rgb(51,116,255)]/[0.75] to-white/[0.9] -rotate-2 px-3 py-1 rounded-md text-gray-900 hover:scale-105 transition-all duration-300">
                converts
              </span>
            </h1>
          </div>
          
          <p className={`text-center ${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} mt-3 max-w-3xl mx-auto`}>
            Transform your content strategy with our AI-powered SEO page generator - create optimized content that dominates search results
          </p>
          
          <div className="mt-8">
            <CustomButton 
              variant="KREADO" 
              href={getButtonLink()}
              className="block mx-auto border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white font-medium px-6 md:px-8 rounded-md text-sm h-10 flex items-center gap-2 transition-colors duration-200"
            >
              Book a Demo
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithMultipleTexts;