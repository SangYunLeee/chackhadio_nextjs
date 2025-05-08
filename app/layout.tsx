import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'ZAKDANG FILM',
  description: '영상 제작 전문 스튜디오',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">
        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
