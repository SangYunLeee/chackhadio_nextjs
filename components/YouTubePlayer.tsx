'use client';

import { useEffect, useRef } from 'react';

interface YouTubePlayerProps {
  videoId: string;
}

export function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  console.log(playerRef.current);

  useEffect(() => {
    // YouTube IFrame API 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);

    // @ts-expect-error - YouTube IFrame API는 전역 window 객체에 타입이 정의되어 있지 않음
    window.onYouTubeIframeAPIReady = () => {
      if (containerRef.current) {
        // @ts-expect-error - YT.Player는 YouTube IFrame API의 타입이 정의되어 있지 않음
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: videoId,
          playerVars: {
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            controls: 1,
            autoplay: 1,
            mute: 1,
            iv_load_policy: 3,
            fs: 0,
          },
        });
      }
    };

    return () => {
      // 컴포넌트가 언마운트될 때 정리
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      document.body.removeChild(script);
      // @ts-expect-error - YouTube IFrame API의 전역 함수 제거
      delete window.onYouTubeIframeAPIReady;
    };
  }, [videoId]); // videoId가 변경될 때마다 재초기화

  return (
    <div
      ref={containerRef}
      className="w-full h-full m-0 p-0"
      style={{ aspectRatio: '16/9' }}
    />
  );
} 