'use client';
import ReactPlayer from 'react-player'

const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      playing={true}
      muted={true}
      controls={true}
    />
  );
};

export default YouTubePlayer;