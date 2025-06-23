'use client'
import { Typewriter } from "react-simple-typewriter";

const handleType = (count: number) => {
  // access word count number
  console.log(count)
}

const handleDone = () => {
  console.log(`Done after 5 loops!`)
}

const TypewriterComponent = () => {
  return (
    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      style={{ whiteSpace: 'pre-line' }}
    >
      <div>
      <Typewriter
        words={['당신의 이야기를 실현시켜줄 \n 탁월한 영상 파트너가 필요하다면,']}
        loop={20}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={handleDone}
        onType={handleType}
      />
      </div>
    </div>
    
  );
};

export default TypewriterComponent;
