// 这是服务器组件，不需要 'use client'
export const dynamic = 'force-static';

export const metadata = {
  title: 'WebsiteLM: AI Website Generator - AI-crafted Content That Delivers Results.',
  description: 'WebsiteLM is your ultimate AI website builder. Effortlessly generate high-quality, SEO-optimized landing pages and blog posts tailored to your target audience. Our cutting-edge AI technology empowers you to build a robust knowledge base and create content that ranks, drives traffic, and converts visitors into customers.',
  keywords: 'AI website generator, AI website builder, AI content generator, AI-powered content creation, SEO-optimized content, landing page generator, landing page builder, blog post generator, blog post builder, AI marketing tools, AI copywriting, AI content marketing, digital marketing tools, online marketing tools, AI technology, machine learning, natural language processing, content strategy, content marketing, SEO, SEM, PPC, social media marketing'
};

// 导入客户端主页组件
import HomePageClient from '../components/HomePageClient';
import { Footer } from '../components/layouts/footer';
import { Header } from '../components/layouts/header';

// Mock data
const mockData = {
  hero: {
    topContent: {
      title: "AI-Powered Multilingual Video Generation",
      description: "Transform your videos into multiple languages with just one click, reaching global audiences instantly",
      buttonText: "Get Started",
      videoUrl: "https://example.com/demo-video.mp4"
    }
  }
};

// 服务器组件
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomePageClient initialData={mockData} />
      </main>
      <Footer />
    </div>
  );
}