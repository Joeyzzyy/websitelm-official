import './globals.css'

export const metadata = {
  metadataBase: new URL('https://websitelm.com'),
  alternates: {
    canonical: {
      url: '/'
    },
  }
};

export default function RootLayout({ children, keywords, robots }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content={keywords} />
      </head>
      <body suppressHydrationWarning={true} style={{ overflowX: 'hidden' }}>{children}</body>
    </html>
  )
}
