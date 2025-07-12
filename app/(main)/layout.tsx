import '@/app/globals.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '오늘도차카니 필름',
  description: '영상 제작 전문 스튜디오',
  keywords: ['영상제작', '필름', '비디오', '콘텐츠제작'],
  authors: [{ name: '오늘도차카니 필름' }],
  metadataBase: new URL('https://www.chakanifilm.com'),
  openGraph: {
    title: '오늘도차카니 필름',
    description: '영상 제작 전문 스튜디오',
    url: 'https://www.chakanifilm.com',
    siteName: '오늘도차카니 필름',
    images: [
      {
        url: 'https://www.chakanifilm.com/images/main_logo.png',
        width: 1200,
        height: 630,
        alt: '오늘도차카니 필름',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '오늘도차카니 필름',
    description: '영상 제작 전문 스튜디오',
    images: ['https://www.chakanifilm.com/images/main_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
