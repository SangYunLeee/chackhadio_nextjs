import { Content } from "@/type/type";
import contentJson from "@/data/content.json";
import Image from "next/image";
export default function AboutPage() {
  const content: Content = contentJson;
  return (
    <main className="bg-white flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 sm:my-auto pb-[30vh]">
      {/* <div className="relative w-full h-90 overflow-hidden flex items-center justify-center">
        <Image 
          src="/images/work_1.png" 
          alt="about" 
          fill 
          className="object-cover absolute"
          priority
        />
        <h2 className="absolute text-3xl font-bold mb-2">당신의 이야기를 실현 시켜줄 탁월한 영상 파트너가 필요하다면,</h2>
      </div> */}
        <div className="text-lg text-gray-700 leading-relaxed grid grid-cols-1 gap-x-24 lg:grid-cols-[auto_1fr]">
          <div className="mt-0 sm:mt-20">
            <video
              autoPlay
              muted
              playsInline
              className="w-full md:max-w-[480px] lg:max-w-[640px] xl:max-w-[920px] flex items-center justify-center my-5 mx-auto"
            >
              <source src="/videos/text_1.webm" type="video/webm" />
            </video>
          </div>
          {/* Image */}
          <div className="flex items-center justify-center my-5 mt-20">
            <video
              autoPlay
              muted
              playsInline
              className="max-h-[10rem] md:max-h-[20rem] flex items-center justify-center my-5"
            >
              <source src="/videos/logo_1.webm" type="video/webm" />
            </video>
          </div>
        </div>

    </main>
  );
} 