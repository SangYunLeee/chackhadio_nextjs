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
        <div className="text-lg text-gray-700 leading-relaxed grid grid-cols-1 gap-x-2 lg:grid-cols-[auto_1fr]">
          <div className="mt-0 sm:mt-20 hidden sm:block">
            <video
              autoPlay
              muted
              playsInline
              className="w-full md:max-w-[480px] lg:max-w-[640px] xl:max-w-[920px] flex items-center justify-center my-5 mx-auto"
            >
              <source src="/videos/text_1.webm" type="video/webm" />
            </video>
          </div>
          
          <div className="mt-3 sm:mt-20 block sm:hidden flex flex-col items-center">
            {/* Main Title */}
            <div className="text-2xl font-bold mb-5 pb-1 inline-block">
              <div className="whitespace-nowrap">당신의 이야기를 실현 시켜줄</div>
              <div className="whitespace-nowrap inline-block border-b-3 border-gray-200">탁월한 영상 파트너가 필요하다면,</div>
            </div>
            {/* Contact Info */}
            <div className="text-[1.0rem] sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.3rem] items-center flex flex-col">
              <div>
                {content.about.address[0]}
                <br />
                {content.about.address[1]}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-0 inline-block">
                <div className="">
                  <span>TEL</span>
                  <span className="mx-2 text-gray-300">❘</span>
                  <span>{content.about.contact.phone[0].phone}</span>
                  <span className="mx-2 text-gray-600">·</span>
                  <span>{content.about.contact.phone[1].phone}</span>
                </div>
                <div className="flex items-center">
                  <span>E-mail</span>
                  <span className="mx-2 text-gray-300">❘</span>
                  <span>{content.about.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <span>Business license</span>
                  <span className="mx-2 text-gray-300">❘</span>
                  <span>{content.about.contact.license}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center my-5 mt-5 sm:mt-20 hidden sm:block">
            <video
              autoPlay
              muted
              playsInline
              className="max-h-[10rem] md:max-h-[20rem] flex items-center justify-center my-5"
            >
              <source src="/videos/logo_1.webm" type="video/webm" />
            </video>
          </div>

          <div className="flex items-center justify-center my-15 block sm:hidden">
            <Image priority src="/images/body_logo.png" alt="logo" width={300} height={300} className="my-auto opacity-30 w-[150px] sm:w-[300px]"/>          
          </div>
        </div>

    </main>
  );
} 