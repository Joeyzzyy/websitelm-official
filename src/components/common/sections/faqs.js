'use client';
import React from 'react';
import fontStyles from '../../../styles/textStyles';

const FAQs = ({ data }) => {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} text-center mb-12`}>
          {data.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.bottomContent.map((faq, index) => (
            <div key={index} className="pb-6">
              <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} mb-3`}>
                {faq.question}
              </h3>
              <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                {faq.answer}
              </p>
              <div className="mt-6 border-t border-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;