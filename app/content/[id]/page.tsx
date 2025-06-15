// app/content/[id]/page.tsx
import YouTubePlayer from '@/components/YouTubePlayer';
import Link from 'next/link';
import Image from 'next/image';
import content from '@/data/content.json';
interface Work {
  id: string;
  title: string;
  type: string;
  youtubeId?: string;
  description?: string;
}

// 타입 정의 수정
interface WorkDetailPageProps {
  params: Promise<{ id?: string }>;
}


export default async function WorkDetailPage({ params }: WorkDetailPageProps) {

  const { id } = await params;
  const works : Work[] = content.works;
  const work = works.find(w => w.id === id);
  if (!work) {
    return (
      <main className="bg-white">
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">존재하지 않는 작품입니다</h1>
            <Link href="/" className="text-blue-600 hover:underline">메인으로 돌아가기</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white">
      <div className="container mx-auto py-8 max-w-7xl ">
        <div className="mx-auto">
          <div className="aspect-video w-full overflow-hidden mb-8 p-0 m-0">
            {work.youtubeId && (
              <YouTubePlayer videoId={work.youtubeId} />
            )}
          </div>
          <div className="space-y-4 px-4 md:px-8">
            <h1 className="text-4xl font-bold">{work.title}</h1>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
              {work.type}
            </div>
            {work.description && (
              <div className="text-base whitespace-pre-line pt-4">
                {work.description}
              </div>
            )}
            <div className="pt-4">
              <Link 
                href="/" 
                className="inline-flex items-center hover:text-gray-900"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                메인으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 px-4 md:px-8">다른 작품</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-3">
            {content.works
              .filter(w => w.id !== work.id)
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((other) => (
                <Link
                  key={other.id}
                  href={`/content/${other.id}`}
                  className="w-full p-0 m-0 relative block group"
                  style={{minWidth:'250px', maxWidth:'100vw'}}
                >
                  <div className="w-full aspect-video relative">
                    <Image
                      src={`https://img.youtube.com/vi/${other.youtubeId}/hqdefault.jpg`}
                      alt={other.title}
                      className="w-full h-full object-cover"
                      width={1000}
                      height={1000}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                      <div className="text-white text-base md:text-lg font-semibold whitespace-pre-line px-3 py-2 rounded
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {other.title}{other.type ? `. ${other.type}` : ''}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}