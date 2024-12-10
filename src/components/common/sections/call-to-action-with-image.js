'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import buttonLinks from '../../ui/button/links';
import fontStyles from '../../../styles/textStyles';
import Image from 'next/image';

const CallToActionWithImage = ({ data }) => {
  const getButtonLinks = () => ({
    primary: buttonLinks.workbench || '#',
    demo: buttonLinks.demo || '#'
  });
  const leftContent = data.leftContent;
  const rightContent = data.rightContent;

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-4`}>
              {leftContent?.title || ''}
            </h2>
            <p className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} mb-6`}>
              {leftContent?.subtitle || data?.subTitle || ''}
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton 
                href={getButtonLinks().primary}
                className="inline-flex items-center px-6 h-10 border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                {leftContent?.buttonText || 'Get Started'}
              </CustomButton>
              <CustomButton 
                href={getButtonLinks().demo}
                className="inline-flex items-center px-6 h-10 border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                Book Demo
              </CustomButton>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={rightContent?.imageUrl}
                alt="Feature media"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionWithImage;