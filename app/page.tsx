import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import contentJson from '@/data/content.json';
interface Work {
  title: string;
  type: string;
  image: string;
  link?: string;
  id: string;
}

interface Content {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    video?: string;
  };
  works: Work[];
  about: {
    description: string;
    contact: {
      address: string;
      phone: string;
      email: string;
    };
  };
  workType: string[];
}

export default function Home() {
  const content: Content = contentJson;
  return (
    <>
      {/* Hero Section (비디오 or 이미지) */}
      <section className="w-full flex flex-col items-center justify-center p-0 bg-black text-center relative" style={{minHeight:'40vh'}}>
        {/* 비디오가 있으면 비디오, 없으면 이미지 */}
        {content.hero.video ? (
          <video className="w-full h-[40vh] object-cover" autoPlay loop muted playsInline poster={content.hero.image}>
            <source src={content.hero.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={content.hero.image}
            alt="Hero"
            className="w-full h-[40vh] object-cover"
            width={1000}
            height={1000}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            {/* <h1 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight drop-shadow-lg">
              {content.hero.title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 drop-shadow-lg">
              {content.hero.subtitle}
            </p> */}
            
            {/* 워크 타입 목록 추가 */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {content.workType.map((type) => (
                <Link
                  key={type}
                  href={`#${type.toLowerCase()}`}
                  className="px-4 py-2 text-sm md:text-base font-medium text-white 
                    border border-white/30 rounded-full 
                    hover:bg-white/10 transition-all duration-300
                    hover:scale-105"
                >
                  {type}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 프로젝트 리스트 (works) */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {content.works.map((work, idx) => {
            // 현재 작품이 해당 타입의 첫 번째 작품인지 확인
            const isFirstOfType = content.works
              .slice(0, idx)
              .every(prevWork => prevWork.type !== work.type);

            return (
              <Link
                key={idx}
                href={`/content/${work.id}`}
                className="w-full p-0 m-0 relative block group"
                style={{minWidth:'250px', maxWidth:'100vw'}}
                id={isFirstOfType ? work.type.toLowerCase() : undefined}  // 첫 번째 작품에만 id 추가
              >
                <div className="w-full aspect-video relative">
                  <Image
                    src={work.image}
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
