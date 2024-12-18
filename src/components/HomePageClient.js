'use client';

import HeroSectionWithMultipleTexts from './common/sections/hero-section-with-mutiple-texts';
import WhyChooseUsWithHugeBlocks from './common/sections/why-choose-us-with-huge-blocks';
import WhyChooseUsWithSixSmallBlocks from './common/sections/why-choose-us-with-six-small-blocks';
import HowItWorksWithWorkflow from './common/sections/how-it-works-with-workflow';
import ProductBenefitsWithBlocks from './common/sections/product-benefits-with-blocks';
import FAQTwoColumnsWithSmallTitle from './common/sections/faq-two-columns-with-small-title';
import UserReviewsWithMovingCards from './common/sections/user-reviews-with-moving-cards';
import CallToActionComplex from './common/sections/call-to-action-complex';
import PricingWithThreeCards from './common/sections/pricing-with-three-cards';

const defaultData = {
  HeroSectionWithMultipleTexts: {
    topContent: {
        buttonText: 'Book a Demo',
        ctaButtonText: 'Get Started',
        title: 'AI-crafted Content That Delivers Results.',
        description: 'Dominate search results and drive more traffic with AI-generated landing pages and blog posts that are optimized for your audience and search engines.',
    }
  },
  WhyChooseUsWithSixSmallBlocks: {
    topContent: {
      emoji: '🚀',
      title: 'Trusted by Thousands of Businesses Worldwide',
      subTitle: 'Join a growing community of entrepreneurs, marketers, and businesses who use WebsiteLM to supercharge their online presence.'
    },
    bottomContent: [
      {
        icon: '🎯',
        title: '10,000+ websites built with WebsiteLM.',
        content: '...'
      },
      {
        icon: '🌍',
        title: 'Featured in: Toolify, TheresAnAIForThat, and Product Hunt.',
        content: '...'
      },
      {
        icon: '⚡',
        title: 'Rated 4.8/5 on leading review platforms( like G2 and Trustpilot).',
        content: '...'
      },
    ]
  },
  WhyChooseUsWithHugeBlocks: {
    topContent: {
        title: 'Features',
        subTitle: ''
      },
      bottomContent: [
        {
          title: 'Website Analysis',
          content: 'Analyze the structure, content, and SEO performance of your website and competitors’ websites, including text content, titles, meta descriptions, images, link structures, and user experience metrics. This feature also assesses SEO indicators like domain authority, page weight, backlinks, and more.',
          buttonText: 'Try Now',
          imageUrl: '/images/abstract.png',
          imageAlt: 'Abstract image',
        },
        {
          title: 'Knowledge Base Construction',
          content: 'Build an AI-powered knowledge base using Retrieval-Augmented Generation (RAG) technology. Text content is converted into vector representations for efficient retrieval, while a knowledge graph is generated to extract entities, relationships, and attributes from content.',
          buttonText: 'Learn More',
          imageUrl: '/images/abstract.png',
          imageAlt: 'Abstract image',
        },
        {
          title: 'Help Center Generation',
          content: 'Automatically generate help center content based on the knowledge base, including structural frameworks. Users can calibrate and update content to ensure accuracy, and the knowledge base is updated accordingly for continuous improvement.',
          buttonText: 'Try Now',
          imageUrl: '/images/abstract.png',
          imageAlt: 'Abstract image',
        },
        {
          title: 'Keyword and Page Planning',
          content: 'Analyze keyword gaps between a user’s website and competitors. Based on this analysis, it plans new page creation or optimization strategies, recommending content themes like product introductions, industry news, and customer stories.',
          buttonText: 'Learn More',
          imageUrl: '/images/abstract.png',
          imageAlt: 'Abstract image',
        },
        {
          title: 'Content Generation and Publishing',
          content: 'Automatically create SEO-optimized content based on the planned pages and content calendar. Content can be prioritized, and publication is automated. SEO performance of published pages is tracked and optimized continuously to improve rankings and traffic.',
          buttonText: 'Try Now',
          imageUrl: '/images/abstract.png',
          imageAlt: 'Abstract image',
        },
        {
          title: 'Multilingual Support',
          content: 'Automatically translate website content into multiple languages and optimize each language for SEO, tailoring strategies to regional and linguistic search preferences.',
          buttonText: 'Learn More',
          imageUrl: '/images/abstract.png',
          imageAlt: 'Abstract image',
        }
      ]
  },
  HowItWorksWithWorkflow: {
    topContent: {
      icon: '🚀',
      title: 'How It Works',
      subTitle: 'WebsiteLM is a comprehensive AI-powered platform that streamlines website content creation and optimization.',
      buttonText: 'Get Started'
    },
    bottomContent: [
      {
        number: 'Step 1',
        title: 'Analyze and Plan Your Website',
        subTitle: 'Input Your Website & Competitor Links',
        content: 'Start by inputting your website URL and those of your competitors. Our AI will analyze your website’s content, structure, SEO performance, and user experience. It will identify gaps, opportunities, and potential areas for improvement, helping you understand where your website stands in comparison to your competition.'
      },
      {
        number: 'Step 2',
        title: 'Build & Optimize Content',
        subTitle: 'Generate SEO-Optimized Content',
        content: 'Using advanced AI algorithms and your site\'s unique data, WebsiteLM will generate high-quality, SEO-friendly content for landing pages, blog posts, and knowledge base articles. The AI will personalize content based on your audience and industry, ensuring relevance and engagement. You can fine-tune the content through manual adjustments to match your brand\'s tone and style.'
      },
      {
        number: 'Step 3',
        title: 'Publish & Monitor',
        subTitle: 'Launch & Optimize for Results',
        content: 'Once your content is ready, WebsiteLM will automatically publish it to your website. Our platform provides continuous monitoring of the content\' SEO performance, allowing you to make data-driven optimizations over time. Track key metrics, run A/B tests, and gather user feedback to enhance your website’s effectiveness and drive more conversions.'
      }
    ]
  },
  ProductBenefitsWithBlocks: {
    leftContent: {
        title: 'Why Choose WebsiteLM?',
        description: 'Among the many AI-powered website content creation tools available, WebsiteLM stands out for its comprehensive approach to website optimization. Our platform combines advanced AI algorithms with a deep understanding of your website\'s unique data to deliver results that are both efficient and effective.',
        buttonText: 'Try Now'
      },
      rightContent: [
        {
          icon: '⏱️',
          title: 'Save Time and Effort',
          subTitle: 'Efficient Content Automation',
          content: 'WebsiteLM automates the content creation process, allowing you to focus on growing your business rather than spending hours generating content. With AI-driven technology, you can quickly produce high-quality SEO-optimized pages and blog posts.'
        },
        {
          icon: '🎯',
          title: 'Improve SEO Performance',
          subTitle: 'SEO-Optimized Content',
          content: 'WebsiteLM ensures that all generated content follows the best SEO practices, enhancing your website\'s search engine rankings. From keyword analysis to content structuring, every piece is designed to drive organic traffic.'
        },
        {
          icon: '💡',
          title: 'Boost Conversion Rates',
          subTitle: 'Engaging and Persuasive Copy',
          content: 'With AI-crafted content that speaks directly to your audience\'s needs and pain points, WebsiteLM helps you build trust and drive more actions. Whether it\'s a landing page or a blog post, the content is optimized to convert visitors into loyal customers.'
        },
        {
          icon: '📊',
          title: 'Data-Driven Insights',
          subTitle: 'Real-Time Performance Monitoring',
          content: 'WebsiteLM provides detailed analytics, helping you track the performance of your SEO efforts. From traffic data to keyword rankings, you get actionable insights to continuously optimize your content and improve results.'
        },
        {
          icon: '📈',
          title: 'Scalable and Flexible',
          subTitle: 'Adaptable to Your Needs',
          content: 'WebsiteLM scales as your business grows. Whether you\'re managing a small blog or a large corporate website, our platform adapts to your needs, offering features like A/B testing, multi-language support, and social media integration to reach a broader audience.'
        },
        {
          icon: '💰',
          title: 'Seamless Content Integration',
          subTitle: 'Easy Publishing and Updates',
          content: 'Create, publish, and update content effortlessly. WebsiteLM automates the publishing process, ensuring that your website stays up-to-date with fresh, relevant content that ranks higher and attracts more traffic.'
        },
        {
          icon: '🖥️',
          title: 'Enhanced User Experience',
          subTitle: 'Intuitive Platform with User-Friendly Interface',
          content: 'WebsiteLM is designed with ease of use in mind. The platform’s intuitive interface and streamlined workflows ensure that even users with minimal technical expertise can create professional-quality websites and content with ease.'
        },
        {
          icon: '💰️',
          title: 'Comprehensive Content Strategy',
          subTitle: 'All-in-One Content Management',
          content: 'From keyword analysis to content creation, optimization, and performance tracking, WebsiteLM is a comprehensive tool that helps you manage your entire content strategy in one place. Save time and streamline your content marketing efforts.'
        },
        {
          icon: '💰',
          title: 'Future-Proof AI Technology',
          subTitle: 'Constantly Evolving AI Models',
          content: 'WebsiteLM\'s AI technology is continuously improved to deliver better content quality, enhanced SEO performance, and smarter content strategies. Stay ahead of the curve with our constantly evolving platform that adapts to the latest trends and search engine algorithms.'
        }
      ]
  },
  UserReviewsWithMovingCards: {
    title: 'Testimonials',
    bottomContent: [
      {
        "name": "John D.",
        "position": "SEO Specialist - A",
        "avatarUrl": "/images/profile.png",
        "avatarAlt": "John D.'s avatar",
        "title": "Revolutionized Content Strategy",
        "content": "WebsiteLM has revolutionized our content strategy! We saw a significant boost in SEO rankings and website traffic within just a few weeks. The AI-generated content is spot on and tailored to our target audience."
      },
      {
        "name": "Emily P.",
        "position": "Founder - B",
        "avatarUrl": "/images/profile.png",
        "avatarAlt": "Emily P.'s avatar",
        "title": "Game-Changer for Startups",
        "content": "As a startup, WebsiteLM has been a game-changer. It not only saves us time but also helps us stay ahead of the competition. The ease of use and quality of the AI-generated content is beyond impressive."
      },
      {
        "name": "Mark T.",
        "position": "Marketing Director - C",
        "avatarUrl": "/images/profile.png",
        "avatarAlt": "Mark T.'s avatar",
        "title": "Improved Search Engine Visibility",
        "content": "We’ve been using WebsiteLM for our blog posts and landing pages for several months now, and the results speak for themselves. Our search engine visibility has skyrocketed, and we’ve seen a noticeable increase in conversions."
      },
      {
        "name": "Laura W.",
        "position": "Content Manager - D",
        "avatarUrl": "/images/profile.png",
        "avatarAlt": "Laura W.'s avatar",
        "title": "Ultimate Content Creation Tool",
        "content": "WebsiteLM is the ultimate tool for content creation. With its AI-powered capabilities, we’ve been able to produce high-quality, SEO-optimized pages without the stress of manual writing. Highly recommend!"
      },
      {
        "name": "Chris L.",
        "position": "Growth Manager - E",
        "avatarUrl": "/images/profile.png",
        "avatarAlt": "Chris L.'s avatar",
        "title": "Seamless AI Integration",
        "content": "The integration of AI into our content marketing strategy with WebsiteLM has been seamless. It allows us to focus on scaling our business while the platform handles the heavy lifting of content generation."
      },
      {
        "name": "Sarah K.",
        "position": "Digital Marketing Consultant",
        "avatarUrl": "/images/profile.png",
        "avatarAlt": "Sarah K.'s avatar",
        "title": "Unmatched AI Precision",
        "content": "I’ve tried multiple content generation tools, but WebsiteLM stands out with its ability to create relevant, high-ranking content that resonates with our audience. The AI's precision is unmatched."
      }
    ]
  },
  FAQTwoColumnsWithSmallTitle: {
    bottomContent: [
      {
        "question": "What is WebsiteLM?",
        "answer": "WebsiteLM is an AI-powered content generation and management platform designed to help users efficiently create SEO-friendly landing pages, blog posts, and help center content to improve website visibility and user traffic."
      },
      {
        "question": "Who can benefit from WebsiteLM?",
        "answer": "WebsiteLM is ideal for website administrators, SEO professionals, content creators, marketers, and anyone looking to improve their website’s SEO performance."
      },
      {
        "question": "How does WebsiteLM help improve SEO?",
        "answer": "WebsiteLM uses advanced AI algorithms to analyze your website's content and optimize it according to the latest SEO best practices. It generates SEO-optimized text, improves content structure, and ensures alignment with search engine ranking factors."
      },
      {
        "question": "What features does WebsiteLM offer?",
        "answer": "WebsiteLM offers features like website analysis, knowledge base construction, help center generation, keyword and page planning, content generation, multi-language support, social media integration, data visualization, and support for internal and external link integration."
      },
      {
        "question": "Can I customize the content generated by WebsiteLM?",
        "answer": "Yes! WebsiteLM allows you to review, adjust, and fine-tune AI-generated content to match your specific needs and brand voice."
      },
      {
        "question": "Does WebsiteLM provide support for multiple languages?",
        "answer": "Yes, WebsiteLM has multi-language support. It can translate and optimize content for different languages, ensuring SEO performance across various regions."
      },
      {
        "question": "How does WebsiteLM handle data security?",
        "answer": "WebsiteLM prioritizes data security by encrypting user data during storage and transmission. It also offers access control mechanisms to ensure only authorized users can access sensitive information."
      },
      {
        "question": "Will WebsiteLM automatically update my website content?",
        "answer": "Yes, WebsiteLM can schedule and automatically update your website content based on a content calendar and ongoing SEO performance. Manual review and approval options are also available."
      },
      {
        "question": "Is WebsiteLM suitable for beginners?",
        "answer": "Absolutely! WebsiteLM is designed to be user-friendly with an intuitive interface, making it easy for beginners and experts alike to create, optimize, and manage website content."
      },
      {
        "question": "What kind of performance reports does WebsiteLM provide?",
        "answer": "WebsiteLM offers data visualizations and detailed reports on SEO performance, traffic, user behavior, and other key metrics to help you track progress and make data-driven decisions."
      },
      {
        "question": "How does WebsiteLM handle content maintenance?",
        "answer": "WebsiteLM helps with ongoing content maintenance by scheduling regular content reviews to ensure all content remains accurate, up-to-date, and aligned with SEO goals."
      },
      {
        "question": "Can I track how well my website content is performing after publishing?",
        "answer": "Yes, WebsiteLM provides tools to monitor SEO performance, track traffic, and analyze user behavior, allowing you to make continuous improvements to your content."
      },
      {
        "question": "Will WebsiteLM continue to evolve and add new features?",
        "answer": "Yes, WebsiteLM is continuously improving its AI models, expanding functionality, and evolving into a platform that supports third-party developers to create plugins and applications for additional use cases."
      }
    ]
  },
  PricingWithThreeCards: {
    bottomContent: {
      planOne: {
        name: 'Basic',
        price: '$29',
        discount: 'SAVE 20%',
        buttonText: 'Start Basic',
        features: [
          '5 AI video generations/month',
          'Basic templates',
          '720p video quality',
          '10 languages support',
          'Email support'
        ]
      },
      planTwo: {
        name: 'Professional',
        price: '$79',
        discount: 'MOST POPULAR',
        buttonText: 'Start Pro',
        features: [
          '20 AI video generations/month',
          'Premium templates',
          '1080p video quality',
          '25 languages support',
          'Priority support',
          'Custom branding'
        ]
      },
      planThree: {
        name: 'Enterprise',
        price: 'Custom',
        discount: 'BEST VALUE',
        buttonText: 'Contact Sales',
        features: [
          'Unlimited video generations',
          'Custom templates',
          '4K video quality',
          'All languages support',
          '24/7 dedicated support',
          'API access',
          'Custom integration'
        ]
      }
    }
  },
  CallToActionComplex: {
    title: "Unlock Explosive Traffic with AI-Generated Landing Pages & Blog Posts.",
    subTitle: "Elevate your website’s SEO performance and drive meaningful traffic with AI-powered content creation. WebsiteLM is designed to streamline content generation, making it easier than ever to produce high-quality, SEO-optimized pages that engage your audience and rank higher in search results.",
    topContent: {
      title: 'Unlock Explosive Traffic with AI-Generated Landing Pages & Blog Posts.',
      description: "Elevate your website’s SEO performance and drive meaningful traffic with AI-powered content creation. WebsiteLM is designed to streamline content generation, making it easier than ever to produce high-quality, SEO-optimized pages that engage your audience and rank higher in search results.",
    },
    bottomContent: {
      title: 'Key Benefits',
      content: [
        {
          title: 'Automate Content Creation',
          description: 'Save time and resources with AI-driven content generation for landing pages, blog posts, and more.'
        },
        {
          title: 'Boost SEO Performance',
          description: 'Leverage cutting-edge AI to craft content that not only resonates with your audience but also ranks well on search engines.'
        },
        {
          title: 'Tailored for Your Audience',
          description: 'Personalize your website’s content using advanced AI to better connect with your target market and improve user engagement.'
        },
        {
          title: 'Continuous Optimization',
          description: 'Track, update, and optimize your content for sustained traffic growth and higher conversions.'
        }
      ],
      callToActionEngagementTop: 'Start transforming your website today—effortlessly build, optimize, and maintain content that drives results.',
      callToActionEngagementBottom: 'Join thousands of users already maximizing their website\'s potential with WebsiteLM.', 
    },
    buttonText: "Get Started Now",
    ctaButtonText: "Book a Demo"
  }
};

// 客户端主页组件
export default function HomePageClient({ initialData }) {
  // 合并初始数据和默认数据
  const mockData = {
    ...defaultData,
    ...initialData
  };

  return (
    <main className="flex-grow">
      <HeroSectionWithMultipleTexts data={mockData.HeroSectionWithMultipleTexts} />
      <WhyChooseUsWithSixSmallBlocks data={mockData.WhyChooseUsWithSixSmallBlocks} />
      <WhyChooseUsWithHugeBlocks data={mockData.WhyChooseUsWithHugeBlocks} />
      <HowItWorksWithWorkflow data={mockData.HowItWorksWithWorkflow} />
      <ProductBenefitsWithBlocks data={mockData.ProductBenefitsWithBlocks}/>
      <UserReviewsWithMovingCards data={mockData.UserReviewsWithMovingCards} />
      <FAQTwoColumnsWithSmallTitle data={mockData.FAQTwoColumnsWithSmallTitle} />
      <PricingWithThreeCards data={mockData.PricingWithThreeCards} />
      <CallToActionComplex data={mockData.CallToActionComplex} />
    </main>
  );
}