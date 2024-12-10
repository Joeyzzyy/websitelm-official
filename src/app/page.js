// 这是服务器组件，不需要 'use client'
export const dynamic = 'force-static';

export const metadata = {
  title: 'KreadoAI - AI Creation Generates Multilingual Videos',
  description: 'AI Creation Generates Multilingual Videos',
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