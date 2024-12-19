'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/fontStyles';
import buttonLinks from '../../ui/button/links';
import Image from 'next/image';  // 添加这行导入
import { useRouter } from 'next/navigation';  // 添加这行

const WhyChooseUsWithTwoHugeBlocks = ({ data, author }) => {
  const router = useRouter();  // 添加这行
  
  const handleRedirect = (e) => {  // 添加这个处理函数
    e.preventDefault();
    router.push('https://app.websitelm.com');
  };

  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  const { topContent, bottomContent } = data;
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* 顶部标题区域 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-4`}>
            {topContent.title}
          </h2>
          <p className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} max-w-3xl mx-auto`}>
            {topContent.subtitle}
          </p>
        </div>

        {/* 底部内容区域 */}
        {bottomContent.map((content, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 mb-12 md:mb-16 last:mb-0`}
          >
            {/* 文本内容 */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} mb-4`}>
                {content.title}
              </h3>
              <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} mb-6`}>
                {content.content}
              </p>
              <div>
                <CustomButton 
                  variant={author} 
                  onClick={handleRedirect}  // 修改这里：改用 onClick 而不是 href
                  className="inline-flex items-center px-6 h-10 border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
                >
                  {content.buttonText}
                </CustomButton>
              </div>
            </div>

            {/* 图片 */}
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image 
                src={content.imageUrl}
                alt={content.imageAlt}
                fill
                className="object-cover rounded-lg border border-gray-100"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsWithTwoHugeBlocks;