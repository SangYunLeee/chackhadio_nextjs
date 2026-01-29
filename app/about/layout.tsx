import '@/app/globals.css';
import NavBar from '../../components/NavBar';

export const metadata = {
  title: '오늘도차카니 필름',
  description: '영상 제작 전문 스튜디오',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full">
      <body className="bg-white text-gray-900 flex flex-col h-full">
        <NavBar />
        <div className="flex-grow flex flex-col items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
