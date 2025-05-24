'use client';
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      playing={true}
      muted={false}
      controls={true}
      width="100%"
      height="100%"
      volume={0.1}
    />
  );
};

export default YouTubePlayer;
