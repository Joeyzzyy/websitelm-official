'use client';
import React from 'react';
import fontStyles from '../../../styles/textStyles';

const TitleSectionWithImage = ({ data, author }) => {
  const containsChinese = (text) => {
    return /[\u4e00-\u9fa5]/.test(text);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const isChineseTitle = containsChinese(data?.title || '');
  const authorLabel = isChineseTitle ? '作者' : 'WRITTEN BY';
  const dateLabel = isChineseTitle ? '发布日期' : 'PUBLISHED ON';

  return (
    <div className="relative z-10 py-16 md:py-20 flex items-center bg-white">
      <header className="w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* 左侧内容区域 */}
            <div className="w-full md:w-1/2">
              {data?.title && (
                <h1 className={`${fontStyles.h1.fontSize} ${fontStyles.h1.fontWeight} ${fontStyles.h1.color} mb-4`}>
                  {data.title}
                </h1>
              )}
              {data?.subTitle && (
                <p className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.fontWeight} ${fontStyles.subtitle.color} mb-6`}>
                  {data.subTitle}
                </p>
              )}
              
              <div className="flex gap-8">
                <div>
                  <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} block mb-1 font-medium`}>
                    {authorLabel}
                  </span>
                  <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                    {author}
                  </span>
                </div>
                
                <div>
                  <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} block mb-1 font-medium`}>
                    {dateLabel}
                  </span>
                  <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                    {formatDate(data.leftContent.publishDate)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* 右侧图片区域 */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full pt-[75%]">
                <img 
                  src={data?.rightContent?.imageUrl}
                  alt={data?.rightContent?.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-sm"
                />
              </div>  
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TitleSectionWithImage;