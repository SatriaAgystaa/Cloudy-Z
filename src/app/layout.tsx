import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Cuaca Satria',
  description: 'Lihat cuaca berdasarkan kota',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}