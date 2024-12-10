'use client';

import HeroSectionWithVideo from './common/sections/hero-section-with-video';
import WhyChooseUsWithTwoHugeBlocks from './common/sections/why-choose-us-with-two-huge-blocks';
import ProductBenefitsWithFourBlocks from './common/sections/product-benefits-with-four-blocks';
import KeyResultsWithThreeCards from './common/sections/key-results-with-three-cards';
import ProductComparisonTable from './common/sections/product-comparison-table';
import FAQs from './common/sections/faqs';
import UserReviews from './common/sections/user-reviews';
import CallToAction from './common/sections/call-to-action';

const defaultData = {
  hero: {
    topContent: {
        buttonText: 'Get Started',
        title: 'AI Video Creation Tool',
        description: 'Quickly Generate Multilingual Marketing Videos',
        videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    }
  },
  
  whyChooseUs: {
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
  
  productBenefits: {
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
  
  keyResults: {
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
  
  productComparison: {
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
  
  faqs: {
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
  
  userReviews: {
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
  
  callToAction: {
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
      <HeroSectionWithVideo data={mockData.hero} />
      <WhyChooseUsWithTwoHugeBlocks data={mockData.whyChooseUs} author="KREADO" />
      <ProductBenefitsWithFourBlocks data={mockData.productBenefits} author="KREADO" />
      <KeyResultsWithThreeCards data={mockData.keyResults} />
      <ProductComparisonTable data={mockData.productComparison} author="KREADO" />
      <FAQs data={mockData.faqs} />
      <UserReviews data={mockData.userReviews} />
      <CallToAction data={mockData.callToAction} />
    </main>
  );
}