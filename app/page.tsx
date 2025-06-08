import Image from 'next/image';
import Link from 'next/link';
import contentJson from '@/data/content.json';
import { Content } from '@/type/type';

export default function Home() {
  const content: Content = contentJson;
  return (
    <>
      {/* Hero Section (비디오 or 이미지) */}
      <section className="w-full aspect-[21/9] flex flex-col items-center justify-center p-0 bg-black text-center relative" style={{minHeight:'40vh'}}>
        {/* 비디오가 있으면 비디오, 없으면 이미지 */}
        {content.hero.video ? (
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline poster={content.hero.image}>
            <source src={content.hero.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={content.hero.image}
            alt="Hero"
            className="w-full aspect-[21/9] object-cover"
            width={2100}
            height={900}
          />
        )}
        {/* 비디오/이미지 위의 오버레이 */}
        <div className="absolute inset-0 bg-black/30" />  {/* 배경 오버레이 추가 */}
        
        {/* 워크 타입 목록 */}
        {/* <div className="absolute bottom-0 w-full px-4 -translate-y-5">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto">
            {content.workType.map((type) => (
              <Link
                key={type}
                href={`#${type.toLowerCase()}`}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium text-white 
                  border border-white rounded-full 
                  hover:bg-white/10 transition-all duration-300
                  hover:scale-105
                  whitespace-nowrap
                  text-center"
              >
                {type}
              </Link>
            ))}
          </div>
        </div> */}
      </section>
      
      {/* 프로젝트 리스트 (works) */}
      <section className="w-full">
        {/* <div className="text-2xl font-bold mb-6 px-4 md:px-8">작품 리스트</div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-3 sm:mt-3">
          {content.works.map((work, idx) => {
            // 현재 작품이 해당 타입의 첫 번째 작품인지 확인
            const isFirstOfType = content.works
              .slice(0, idx)
              .every(prevWork => prevWork.type !== work.type);

            return (
              <Link
                key={idx}
                href={`/content/${work.id}`}
                className="w-full p-0 m-0 relative block group rounded-sm overflow-hidden"
                style={{minWidth:'250px', maxWidth:'100vw'}}
                id={isFirstOfType ? work.type.toLowerCase() : undefined}  // 첫 번째 작품에만 id 추가
              >
                <div className="w-full aspect-video relative">
                  <Image
                    src={`${work.image ? work.image : `https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg`}`}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white text-base md:text-lg font-semibold whitespace-pre-line px-3 py-2 rounded
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {work.title}{work.type ? `. ${work.type}` : ''}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      {/* About/Contact 등은 필요시 추가 */}
    </>
  );
}
