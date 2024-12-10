'use client';

import dynamic from 'next/dynamic';

const KreadoaiHeader = dynamic(
  () => import('./header').then(mod => mod.KreadoaiHeader),
  { ssr: false }
);

const KreadoaiFooter = dynamic(
  () => import('./footer').then(mod => mod.KreadoaiFooter),
  { ssr: false }
);

export function ClientWrapper({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <KreadoaiHeader theme="light" />
      {children}
      <KreadoaiFooter />
    </div>
  );
}
