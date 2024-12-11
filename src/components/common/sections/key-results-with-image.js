'use client';
import React from 'react';
import fontStyles from '../../../styles/fontStyles';

const KeyResultsWithImage = ({ data }) => {
  const dataSet = data.leftContent;
  const image = data.rightContent;
  const title = data.title;

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {title && (
          <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h1.fontWeight} ${fontStyles.h2.color} text-center mb-16`}>
            {title}
          </h2>
        )}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          {/* 左侧数据 */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-8 md:gap-10">
              {dataSet.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#3374FF] mb-4">
                    {item.percentage}
                  </div>
                  <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} max-w-[280px]`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* 右侧图片 */}
          <div className="w-full md:w-1/2">
            <img 
              src={image.imageUrl}
              alt={image.imageAlt}
              className="w-full h-auto object-contain max-w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyResultsWithImage;