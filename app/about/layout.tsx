import '@/app/globals.css';
import NavBar from '../../components/NavBar';

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
    <html lang="ko" className="h-full overflow-hidden">
      <body className="bg-white text-gray-900 flex flex-col h-full overflow-hidden">
        <NavBar />
        <div className="flex-grow flex flex-col items-center sm:mt-10 sm:mt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
