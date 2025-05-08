import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

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
}

export default function Home() {
  const contentPath = path.join(process.cwd(), 'data', 'content.json');
  const content: Content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));

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
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight drop-shadow-lg">{content.hero.title}</h1>
          <p className="text-lg md:text-2xl mb-4 drop-shadow-lg">{content.hero.subtitle}</p>
        </div> */}
      </section>
      {/* 프로젝트 리스트 (works) */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {content.works.map((work, idx) => (
            <Link
              key={idx}
              href={`/content/${work.id}`}
              className="w-full p-0 m-0 relative block group"
              style={{minWidth:'250px', maxWidth:'100vw'}}
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
          ))}
        </div>
      </section>
      {/* About/Contact 등은 필요시 추가 */}
    </>
  );
}
