'use client'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const handleType = (count: number) => {
  // access word count number
  console.log(count)
}

const handleDone = () => {
  console.log(`Done after 5 loops!`)
}

const MyComponent = () => {
  /**
   * @returns
   * text: [string] typed text
   * NEW helper: {} helper flags
   */
  const [text, helper] = useTypewriter({
    words: [
      '당신의 이야기를 실현시켜줄 \n 탁월한 영상 파트너가 필요하다면,',
    ],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 3000,
    onLoopDone: handleDone,
    onType: handleType,
  })

  /* Hook helper */
  const { isType, isDelete, isDelay, isDone } = helper

  const isDelaying = isDelay || isDone

  return (
    <div className={`
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
        font-bold
        leading-none min-h-[2.5em]
        `}>
      <div
          // ${isDelaying ? 'border-b-5 border-gray-200' : 'border-b-0 border-transparent'}
        className={`
          inline-block w-max
          transition-all duration-400
        `}
      >
        <span className="leading-[1.2]" style={{ whiteSpace: 'pre-line' }}>{text}</span>
        {/* Cursor */}
        {isDelaying ? "" : (
          <Cursor cursorColor='black' cursorStyle='_'/>
        )}
      </div>
      <div className="invisible h-0 overflow-hidden whitespace-nowrap">탁월한 영상 파트너가 필요하다면, _</div>
    </div>
  )
}

export default MyComponent;
