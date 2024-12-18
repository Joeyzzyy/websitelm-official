'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => import('./header').then(mod => mod.WebsiteLMHeader),
  { ssr: false }
);

const Footer = dynamic(
  () => import('./footer').then(mod => mod.WebsiteLMFooter),
  { ssr: false }
);

export function ClientWrapper({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header theme="light" />
      {children}
      <Footer />
    </div>
  );
}
