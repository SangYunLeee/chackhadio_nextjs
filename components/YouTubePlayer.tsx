'use client';
import dynamic from 'next/dynamic'
import { useState } from 'react'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      )}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        playing={true}
        muted={false}
        controls={true}
        width="100%"
        height="100%"
        volume={0.1}
        onReady={() => setIsLoading(false)}
      />
    </div>
  );
};

export default YouTubePlayer;
