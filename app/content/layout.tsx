import '@/app/globals.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export const metadata = {
  title: '오늘도차카니 필름',
  description: '영상 제작 전문 스튜디오',
  icons: {
    icon: '/images/youtubeicon.svg', // Main app icon
    shortcut: '/images/youtubeicon.svg', // Shortcut icon
    apple: '/images/youtubeicon.svg', // Apple touch icon
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
