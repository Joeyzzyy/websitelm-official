'use client';

import React from 'react';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/textStyles';
import buttonLinks from '../../ui/button/links';

const ProductBenefitsWithATable = ({ data, author }) => {
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* 左侧表格 */}
          <div className="w-full md:w-3/5 overflow-x-auto">
            <table className="w-full border-collapse min-w-[500px]">
              <tbody>
                {data.leftContent.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors duration-200"
                  >
                    <td className="py-3 px-4 md:px-6 w-2/5">
                      <div className="flex items-center gap-3">
                        <span className="text-[#3374FF] text-base">
                          {item.icon}
                        </span>
                        <span className={`${fontStyles.h4.fontSize} ${fontStyles.h4.fontWeight} ${fontStyles.h4.color}`}>
                          {item.title}
                        </span>
                      </div>
                    </td>
                    <td className={`py-3 px-4 md:px-6 ${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                      {item.content}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 右侧内容 */}
          <div className="w-full md:w-2/5">
            <div className="text-3xl text-[#3374FF] mb-4">
              {data.rightContent.icon}
            </div>
            <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-4`}>
              {data.rightContent.title}
            </h2>
            <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} mb-6`}>
              {data.rightContent.subtitle}
            </p>
            <CustomButton 
              variant={author} 
              href={getButtonLink()}
              className="inline-flex items-center px-6 h-10 border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white text-sm font-medium rounded-md transition-colors duration-200"
            >
              {data.rightContent.buttonText}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefitsWithATable;