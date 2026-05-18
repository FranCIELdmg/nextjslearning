import "./globals.css";

import { Header } from '../components/header'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Aprendendo NextJS do zero!',
  description: 'Porque sou leigo e perdi as aulas!',
  openGraph: {
    title: 'Aprendendo NextJS com Sujeito no YouTube!',
    description: 'Tá dando certo!',
    images: ['https://cdn.motor1.com/images/mgl/W8Y8Wq/s1/toyota-corolla-gr-sport-2.0-2024.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Header />

        {children}
      </body>
    </html>
  );
}
