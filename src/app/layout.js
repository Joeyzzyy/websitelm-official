import './globals.css';

export const metadata = {
  metadataBase: new URL('https://websitelm.com'),
  alternates: {
    canonical: {
      url: '/'
    },
  }
};

export default function RootLayout({ children, keywords }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://websitelm.com/" />
      </head>
      <body suppressHydrationWarning={true} style={{ overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
