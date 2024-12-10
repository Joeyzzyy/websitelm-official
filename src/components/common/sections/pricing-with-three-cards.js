'use client';
import React from 'react';
import buttonLinks from '../../ui/button/links';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/textStyles';

const PricingWithThreeCards = ({ data, author }) => {
  const { title, bottomContent } = data;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  const renderPricingCard = (plan, isHighlighted = false) => (
    <div className={`
      bg-white rounded-lg p-6 flex flex-col 
      ${isHighlighted 
        ? 'border-2 border-[#3374FF] shadow-sm' 
        : 'border border-gray-100'
      }
      transition-all duration-200
    `}>
      <div className="text-center flex-1 flex flex-col">
        <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} mb-4`}>
          {plan.name}
        </h3>
        <div className="mb-6">
          <span className="text-3xl font-bold text-[#3374FF]">{plan.price}</span>
          {plan.price !== 'Custom' && <span className={fontStyles.paragraph.color}>/month</span>}
        </div>
        
        <div className="border-t border-gray-100 pt-6 flex-1">
          <ul className="space-y-3 text-left mb-6">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg 
                  className="w-4 h-4 mr-2 flex-shrink-0 text-[#3374FF]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <CustomButton 
          variant={author} 
          href={getButtonLink()}
          className={`
            inline-flex items-center px-6 h-10 
            ${isHighlighted 
              ? 'bg-[#3374FF] text-white hover:bg-[#3374FF]/90' 
              : 'border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white'
            }
            text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap
          `}
        >
          <span className={isHighlighted ? 'text-white' : ''}>
            {plan.buttonText}
          </span>
        </CustomButton>
      </div>
    </div>
  );

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} text-center mb-12`}>
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderPricingCard(bottomContent.planOne)}
          {renderPricingCard(bottomContent.planTwo, true)}
          {renderPricingCard(bottomContent.planThree)}
        </div>
      </div>
    </div>
  );
};

export default PricingWithThreeCards;