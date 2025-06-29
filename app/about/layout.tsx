import '@/app/globals.css';
import NavBar from '../../components/NavBar';

export const metadata = {
  title: 'ZAKDANG FILM',
  description: '영상 제작 전문 스튜디오',
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
