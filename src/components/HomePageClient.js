'use client';

import HeroSectionWithVideo from './common/sections/hero-section-with-video';
import WhyChooseUsWithTwoHugeBlocks from './common/sections/why-choose-us-with-two-huge-blocks';
import WhyChooseUsWithSixSmallBlocks from './common/sections/why-choose-us-with-six-small-blocks';
import ProductBenefitsWithFourBlocks from './common/sections/product-benefits-with-four-blocks';
import ProductBenefitsWithATable from './common/sections/product-benefits-with-a-table';
import KeyResultsWithThreeCards from './common/sections/key-results-with-three-cards';
import KeyResultsWithImage from './common/sections/key-results-with-image';
import KeyResultsWithTextBlock from './common/sections/key-results-with-text-block';
import ProductComparisonTable from './common/sections/product-comparison-table';
import FAQs from './common/sections/faqs';
import FAQTwoColumnsWithBigTitle from './common/sections/faq-two-columns-with-big-title';
import FAQTwoColumnsWithSmallTitle from './common/sections/faq-two-columns-with-small-title';
import UserReviews from './common/sections/user-reviews';
import UserReviewsWithMovingCards from './common/sections/user-reviews-with-moving-cards';
import UserReviewsWithSquareCards from './common/sections/user-reviews-with-square-cards';
import CallToAction from './common/sections/call-to-action';
import PricingWithThreeCards from './common/sections/pricing-with-three-cards';
import HeroSectionWithMutipleTexts from './common/sections/hero-section-with-mutiple-texts';


const defaultData = {
  HeroSectionWithVideo: {
    topContent: {
        buttonText: 'Get Started',
        title: 'AI Video Creation Tool',
        description: 'Quickly Generate Multilingual Marketing Videos',
        videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    }
  },
  
  WhyChooseUsWithTwoHugeBlocks: {
    topContent: {
        title: 'Transform Your Video Marketing',
        subTitle: 'Create engaging videos in minutes with AI'
      },
      bottomContent: [
        {
          title: 'AI-Powered Creation',
          content: 'Our advanced AI technology transforms your text into professional marketing videos automatically, saving you time and resources.',
          buttonText: 'Try Now',
          imageUrl: '/images/abstract.png',
          imageAlt: 'Abstract image',
        },
        {
          title: 'Global Marketing Ready',
          content: 'Instantly localize your videos into multiple languages, reaching global audiences with culturally adapted content.',
          buttonText: 'Learn More',
          imageUrl: '/images/abstract.png',
          imageAlt: 'Abstract image',
        }
      ]
  },

  WhyChooseUsWithSixSmallBlocks: {
    topContent: {
      emoji: '🚀',
      title: 'Why Choose websitelm AI',
      subTitle: 'Professional AI Video Creation Platform'
    },
    bottomContent: [
      {
        icon: '🎯',
        title: 'Precise Targeting',
        content: 'Customize content for different market segments'
      },
      {
        icon: '🌍',
        title: 'Global Reach',
        content: 'Support for 40+ languages and cultural adaptations'
      },
      {
        icon: '⚡',
        title: 'Lightning Fast',
        content: 'Generate videos in minutes, not days'
      },
      {
        icon: '💡',
        title: 'Smart AI',
        content: 'Advanced AI algorithms for optimal results'
      },
      {
        icon: '📊',
        title: 'Data Driven',
        content: 'Analytics and insights for better performance'
      },
      {
        icon: '🔒',
        title: 'Secure & Reliable',
        content: 'Enterprise-grade security and stability'
      }
    ]
  },
  
  ProductBenefitsWithFourBlocks: {
    leftContent: {
        title: 'Smart Video Creation Platform',
        description: 'Make video creation easier and marketing more efficient',
        buttonText: 'Free Trial'
      },
      rightContent: [
        {
          icon: '🎥',
          title: 'AI Video Generation',
          content: 'Just input text to automatically generate professional videos'
        },
        {
          icon: '🎯',
          title: 'Precise Marketing',
          content: 'Customize multilingual video content for different markets'
        },
        {
          icon: '⚡',
          title: 'Efficiency Boost',
          content: 'Reduce video production time by 90%'
        },
        {
          icon: '💰',
          title: 'Cost Saving',
          content: 'Significantly reduce video production and localization costs'
        }
      ]
  },

  ProductBenefitsWithATable: {
    leftContent: [
      {
        icon: '🎥',
        title: 'AI Video Creation',
        content: 'Generate professional videos automatically'
      },
      {
        icon: '🌍',
        title: 'Global Reach',
        content: 'Support for 40+ languages'
      },
      {
        icon: '⚡',
        title: 'Fast Processing',
        content: 'Complete videos in minutes'
      },
      {
        icon: '💰',
        title: 'Cost Effective',
        content: 'Save up to 90% on video production'
      }
    ],
    rightContent: {
      icon: '🚀',
      title: 'Ready to Transform Your Video Marketing?',
      subTitle: 'Join thousands of businesses using websitelm AI',
      buttonText: 'Start Free Trial'
    }
  },
  
  KeyResultsWithThreeCards: {
    title: 'Dive into case studies',
    bottomContent: [
        {
          competitorLogo: '/images/enterprise-logo.png',
          competitorLogoAlt: 'Traditional Video Production',
          competitorName: 'Traditional Video Production',
          percentage: 85,
          metric: 'Cost Reduction',
          description: 'Businesses using websitelm AI report significant cost savings compared to traditional video production methods, with faster turnaround times.'
        },
        {
          competitorLogo: '/images/enterprise-logo.png',
          competitorLogoAlt: 'Manual Localization',
          competitorName: 'Manual Localization',
          percentage: 90,
          metric: 'Time Saved',
          description: 'Our AI-powered localization process is dramatically faster than manual translation and voiceover recording methods.'
        },
        {
          competitorLogo: '/images/enterprise-logo.png',
          competitorLogoAlt: 'Basic Video Tools',
          competitorName: 'Basic Video Tools',
          percentage: 73,
          metric: 'Higher Engagement',
          description: 'Videos created with websitelm AI show significantly higher viewer engagement rates compared to basic video creation tools.'
        }
    ]
  },

  KeyResultsWithImage: {
    title: 'Dig into Key Results',
    leftContent: [
      {
        percentage: 95,
        description: 'Customer Satisfaction Score, based on over 10,000 user feedbacks'
      },
      {
        percentage: 80,
        description: 'Average marketing efficiency improvement compared to traditional video production methods'
      },
      {
        percentage: 70,
        description: 'Investment return ratio in the first month'
      }
    ],
    rightContent: {
      imageUrl: '/images/abstract.png',
      imageAlt: 'Abstract image',
    }
  },

  KeyResultsWithTextBlock: {
    leftContent: [
      {
        percentage: 90,
        description: 'Reduction in video production time compared to traditional methods',
        display: true
      },
      {
        percentage: 40,
        description: 'Languages supported for automatic localization and voiceover generation',
        display: true
      },
      {
        percentage: 70,
        description: 'Average cost savings for businesses switching to AI-powered video creation',
        display: true
      }
    ],
    rightContent: [
      {
          contentTitle: 'The Power of AI in Video Production',
          contentText: 'AI technology has revolutionized the way we create and distribute video content. With advanced algorithms and machine learning capabilities, what once took days or weeks can now be accomplished in minutes. Our cutting-edge AI system analyzes your content requirements, automatically selects appropriate visuals, generates professional transitions, and ensures perfect timing for each scene. This breakthrough technology not only saves time but also maintains consistent quality across all your video productions.'
      },
      {
          contentTitle: 'Multilingual Support',
          contentText: 'Our platform supports over 40 languages, making it easy to reach global audiences. The AI automatically generates appropriate translations and voiceovers while maintaining the original message and tone. Each translation is carefully optimized for cultural nuances and local preferences, ensuring your message resonates with viewers worldwide. The system also automatically adjusts visual elements and timing to accommodate different language lengths and reading speeds, delivering a truly localized experience.'
      },
      {
          contentTitle: 'Cost-Effective Solution for Modern Marketing',
          contentText: 'Traditional video production often requires extensive resources, including professional videographers, editors, and voice talent. Our AI-powered platform eliminates these requirements, providing a comprehensive solution that delivers professional results at a fraction of the cost. By automating the entire video creation process, businesses can produce more content more frequently, enabling them to maintain an active presence across all marketing channels.'
      },
      {
          contentTitle: 'Advanced Customization Options',
          contentText: 'Our platform offers extensive customization capabilities to ensure your videos perfectly align with your brand identity. From color schemes and typography to transition styles and audio preferences, every aspect can be tailored to your specific needs. The AI learns from your preferences over time, making future video creation even more efficient while maintaining brand consistency across all your content.'
      },
      {
          contentTitle: 'Data-Driven Performance Optimization',
          contentText: 'Leverage the power of analytics to optimize your video content. Our AI system tracks viewer engagement, retention rates, and conversion metrics to provide actionable insights. These data-driven recommendations help you understand what works best for your audience, allowing you to continuously improve your video marketing strategy and maximize ROI across different platforms and markets.'
      },
      {
          contentTitle: 'Enterprise-Grade Security and Scalability',
          contentText: 'Built with enterprise needs in mind, our platform offers robust security features and unlimited scalability. All content is processed and stored with bank-level encryption, ensuring your sensitive data remains protected. The cloud-based infrastructure automatically scales to handle any volume of video generation, making it suitable for businesses of all sizes, from startups to global enterprises.'
      }
    ]
  },
  
  ProductComparisonTable: {
    topContent: {
        title: 'Why Choose websitelm AI',
        subTitle: 'Compare our features with traditional solutions',
        companies: {
          competitor: 'Traditional',
          us: 'WebsiteLM'
        }
      },
      bottomContent: {
        features: [
          {
            name: 'AI Video Generation',
            competitor: false,
            us: true
          },
          {
            name: 'Multilingual Support',
            competitor: false,
            us: true
          },
          {
            name: 'Auto Voice Generation',
            competitor: false,
            us: true
          },
          {
            name: 'Quick Turnaround',
            competitor: false,
            us: true
          },
          {
            name: 'Cost Effective',
            competitor: false,
            us: true
          }
        ]
      }
  },
  
  Faqs: {
    title: 'Frequently Asked Questions',
    bottomContent: [
        {
          question: 'How does AI video creation work?',
          answer: 'Our AI analyzes your input text and automatically generates matching visuals, animations, and voiceovers to create professional videos.'
        },
        {
          question: 'What languages are supported?',
          answer: 'We support over 40 languages for both text and voice generation, making it perfect for global marketing.'
        },
        {
          question: 'How long does it take to create a video?',
          answer: 'Most videos can be generated within minutes, depending on length and complexity.'
        },
        {
          question: 'Can I customize the output?',
          answer: 'Yes, you can customize various aspects including style, tone, pace, and branding elements.'
        }
    ]
  },

  FAQTwoColumnsWithBigTitle: {
    bottomContent: [
      {
        question: 'What is websitelm AI Video Generator?',
        answer: 'websitelm AI is an advanced platform that automatically transforms your text content into professional marketing videos using artificial intelligence technology.'
      },
      {
        question: 'How many languages are supported?',
        answer: 'We support over 40 languages with automatic subTitle generation and AI voiceover capabilities, making it perfect for global marketing campaigns.'
      },
      {
        question: 'What makes websitelm different from traditional video tools?',
        answer: 'Our AI-powered approach allows for rapid video creation in minutes instead of days, with automatic language localization and significant cost savings.'
      },
      {
        question: 'Do I need video editing experience?',
        answer: 'No experience needed. Our AI handles all the technical aspects of video creation, making it accessible to everyone regardless of their video editing skills.'
      }
    ]
  },

  FAQTwoColumnsWithSmallTitle: {
    bottomContent: [
      {
        question: 'How does the AI video creation process work?',
        answer: 'Our AI technology analyzes your input content and automatically generates professional videos by selecting appropriate visuals, animations, and transitions. The process is fully automated and typically takes just minutes.'
      },
      {
        question: 'What languages do you support?',
        answer: 'We currently support over 40 languages including English, Spanish, Chinese, Japanese, French, German, and many more. Each language comes with natural-sounding AI voiceover capabilities.'
      },
      {
        question: 'How long does it take to create a video?',
        answer: 'Most videos can be generated within 5-10 minutes, depending on the length and complexity of your content. This is significantly faster than traditional video production methods.'
      },
      {
        question: 'Can I customize the video style and branding?',
        answer: 'Yes, you can customize various aspects including visual style, color schemes, fonts, logos, and other branding elements to match your company identity.'
      }
    ]
  },
  
  UserReviews: {
    title: 'See What Our Customers Say',
    bottomContent: [
        {
          name: "Sarah Chen",
          position: "Marketing Director - TechCorp",
          avatarUrl: "/images/profile.png",
          avatarAlt: "Sarah Chen's avatar",
          title: "Dramatically Improved Our Marketing Efficiency",
          content: "After implementing websitelm AI, our video production time decreased by 90%. The AI-generated content quality is impressive, and the multilingual capabilities have made international expansion effortless."
        },
        {
          name: "Michael Zhang",
          position: "Content Lead - GlobalMedia",
          avatarUrl: "/images/profile.png",
          title: "Revolutionary Video Production Tool",
          content: "As a content team leader, I'm impressed by websitelm AI's efficiency. It not only saves significant time and resources but also maintains consistent high-quality video output."
        },
        {
          name: "Emily Wang",
          position: "E-commerce Manager - ShopNow",
          avatarUrl: "/images/profile.png",
          title: "Perfect Solution for E-commerce Videos",
          content: "We needed numerous product showcase videos, and websitelm AI solved this perfectly. The automated multilingual video generation helps us enter new markets quickly."
        },
        {
          name: "David Liu",
          position: "Founder - StartupX",
          avatarUrl: "/images/profile.png",
          title: "Ideal for Startups",
          content: "As a startup founder, websitelm AI has been a game-changer. It allows us to produce professional marketing videos at a fraction of the traditional cost and time."
        }
      ]
  },

  UserReviewsWithMovingCards: {
    title: 'See What Our Customers Say',
    bottomContent: [
      {
        name: "David Miller",
        position: "Innovation Director - FutureCorp",
        avatarUrl: "/images/profile.png",
        avatarAlt: "David Miller's avatar",
        title: "Revolutionary Content Creation",
        content: "websitelm AI has completely transformed our approach to video marketing. The AI-driven content generation is not just fast - it's incredibly intelligent and adaptable."
      },
      {
        name: "Alexandra Peters",
        position: "Global Marketing Head - TechVision",
        avatarUrl: "/images/profile.png",
        avatarAlt: "Sarah Chen's avatar",
        title: "Exceptional Marketing Results",
        content: "The versatility and speed of websitelm AI's video generation have given us a competitive edge. Our marketing campaigns are now more dynamic and engaging than ever."
      },
      {
        name: "Thomas Wright",
        position: "Digital Strategy Lead - MediaPro",
        avatarUrl: "/images/profile.png",
        avatarAlt: "Sarah Chen's avatar",
        title: "Game-Changing Efficiency",
        content: "What used to take our team weeks now happens in minutes. The quality and consistency of the AI-generated videos have exceeded all our expectations."
      },
      {
        name: "Caroline Foster",
        position: "Brand Director - GlobalBrands",
        avatarUrl: "/images/profile.png",
        avatarAlt: "Sarah Chen's avatar",
        title: "Perfect for Brand Building",
        content: "websitelm AI maintains our brand consistency across all markets while allowing for local customization. It's the perfect balance of efficiency and brand control."
      },
      {
        name: "Richard Martinez",
        position: "Operations Manager - ScaleUp Inc",
        avatarUrl: "/images/profile.png",
        avatarAlt: "Sarah Chen's avatar",
        title: "Streamlined Production Process",
        content: "The automated workflow and intelligent content generation have revolutionized our video production. We're creating more content with better results and lower costs."
      }
    ]
  },

  UserReviewsWithSquareCards: {
    title: 'See What Our Customers Say',
    bottomContent: [
      {
        name: "David Miller",
        position: "Innovation Director - FutureCorp",
        avatarUrl: "/images/profile.png",
        avatarAlt: "David Miller's avatar",
        title: "Revolutionary Content Creation",
        content: "websitelm AI has completely transformed our approach to video marketing. The AI-driven content generation is not just fast - it's incredibly intelligent and adaptable."
      },
      {
        name: "Alexandra Peters",
        position: "Global Marketing Head - TechVision",
        avatarUrl: "/images/profile.png",
        avatarAlt: "Sarah Chen's avatar",
        title: "Exceptional Marketing Results",
        content: "The versatility and speed of websitelm AI's video generation have given us a competitive edge. Our marketing campaigns are now more dynamic and engaging than ever."
      },
      {
        name: "Thomas Wright",
        position: "Digital Strategy Lead - MediaPro",
        avatarUrl: "/images/profile.png",
        avatarAlt: "Sarah Chen's avatar",
        title: "Game-Changing Efficiency",
        content: "What used to take our team weeks now happens in minutes. The quality and consistency of the AI-generated videos have exceeded all our expectations."
      },
      {
        name: "Caroline Foster",
        position: "Brand Director - GlobalBrands",
        avatarUrl: "/images/profile.png",
        avatarAlt: "Sarah Chen's avatar",
        title: "Perfect for Brand Building",
        content: "websitelm AI maintains our brand consistency across all markets while allowing for local customization. It's the perfect balance of efficiency and brand control."
      },
      {
        name: "Richard Martinez",
        position: "Operations Manager - ScaleUp Inc",
        avatarUrl: "/images/profile.png",
        avatarAlt: "Sarah Chen's avatar",
        title: "Streamlined Production Process",
        content: "The automated workflow and intelligent content generation have revolutionized our video production. We're creating more content with better results and lower costs."
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
  
  CallToAction: {
    author: 'websitelm',
    title: 'Ready to Transform Your Video Marketing?',
    subTitle: 'Join thousands of businesses already using websitelm AI',
    buttonText: 'Get Started Free'
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
      <HeroSectionWithMutipleTexts data={mockData.HeroSectionWithMutipleTexts} />
      <HeroSectionWithVideo data={mockData.HeroSectionWithVideo} />
      <WhyChooseUsWithTwoHugeBlocks data={mockData.WhyChooseUsWithTwoHugeBlocks} />
      <WhyChooseUsWithSixSmallBlocks data={mockData.WhyChooseUsWithSixSmallBlocks} />
      <ProductBenefitsWithFourBlocks data={mockData.ProductBenefitsWithFourBlocks}/>
      <ProductBenefitsWithATable data={mockData.ProductBenefitsWithATable}/>
      <KeyResultsWithThreeCards data={mockData.KeyResultsWithThreeCards} />
      <KeyResultsWithImage data={mockData.KeyResultsWithImage} />
      <KeyResultsWithTextBlock data={mockData.KeyResultsWithTextBlock} />
      <ProductComparisonTable data={mockData.ProductComparisonTable}/>
      <FAQs data={mockData.Faqs} />
      <FAQTwoColumnsWithBigTitle data={mockData.FAQTwoColumnsWithBigTitle} />
      <FAQTwoColumnsWithSmallTitle data={mockData.FAQTwoColumnsWithSmallTitle} />
      <UserReviews data={mockData.UserReviews} />
      <UserReviewsWithMovingCards data={mockData.UserReviewsWithMovingCards} />
      <UserReviewsWithSquareCards data={mockData.UserReviewsWithSquareCards} />
      <PricingWithThreeCards data={mockData.PricingWithThreeCards} />
      <CallToAction data={mockData.CallToAction} /> 
    </main>
  );
}