'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const UserReviewsWithMovingCards = ({ data }) => {
  const title = data.title;
  const reviews = data.bottomContent;
  const [activeIndex, setActiveIndex] = useState(1);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {title}
        </h2>

        <div className="relative flex justify-center items-center min-h-[300px] overflow-hidden">
          {reviews.map((review, index) => {
            // 计算每张卡片相对于activeIndex的位置
            let position = index - activeIndex;
            if (position < -2) position += reviews.length;
            if (position > 2) position -= reviews.length;
            
            // 只渲染可见的卡片（前一张、当前张、后一张）
            if (position >= -1 && position <= 1) {
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`absolute bg-white p-6 rounded-lg shadow-md transition-all duration-700 ease-in-out cursor-pointer
                    w-[500px] min-h-[220px] 
                    ${position === 0 
                      ? 'z-20 scale-100 opacity-100 translate-x-0' 
                      : position === -1
                      ? 'z-10 scale-90 opacity-60 -translate-x-[520px]'
                      : 'z-10 scale-90 opacity-60 translate-x-[520px]'
                    }`}
                >
                  {/* 五角星评分 */}
                  <div className="flex justify-end mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="#3374FF"
                        viewBox="0 0 24 24"
                      >
                        <defs>
                          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#818cf8" />
                            <stop offset="100%" stopColor="#6366f1" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex items-center mb-4">
                    <Image 
                      src={review.avatarUrl}
                      alt={review.avatarAlt}
                      width={48}
                      height={48}
                      className="rounded-full object-contain p-1"
                    />
                    <div className="ml-4">
                      <h3 className="text-gray-800 font-medium">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.position}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {review.title}
                  </h4>
                  <p className="text-gray-700">
                    {review.content}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserReviewsWithMovingCards;