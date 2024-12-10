'use client';
import React, { useState } from 'react';
import fontStyles from '../../../styles/textStyles';

const FAQTwoColumnsWithSmallTitle = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);
  const isChineseContent = (content) => /[\u4e00-\u9fa5]/.test(content[0]?.question);

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* 左侧标题区域 */}
          <div className="w-full md:w-1/3">
            <div className="inline-flex items-center px-3 h-6 bg-[#3374FF]/10 text-[#3374FF] text-sm font-medium rounded-md mb-4">
              FAQ
            </div>
            <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color}`}>
              {isChineseContent(data.bottomContent) ? '常见问题解答' : 'Frequently asked questions'}
            </h2>
          </div>

          {/* 右侧FAQ列表 */}
          <div className="w-full md:w-2/3">
            {data.bottomContent.map((faq, index) => (
              <div key={index} className="border-b border-gray-100">
                <button
                  className="w-full py-4 flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color}`}>
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-[#3374FF] transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}>
                  <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQTwoColumnsWithSmallTitle;