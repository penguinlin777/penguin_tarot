import React, { useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicControlProps {
  isMuted: boolean;
  onToggle: () => void;
}

export const MusicControl: React.FC<MusicControlProps> = ({
  isMuted,
  onToggle,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleToggle = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    onToggle();
  };

  return (
    <div>
      {/* 音频元素 */}
      <audio
        ref={audioRef}
        src="./bgm.mp3" /* 替换为实际音频 URL */
        loop
      />

      {/* 控制按钮 */}
      <button
        onClick={handleToggle}
        className="fixed bottom-8 right-8 p-4 bg-purple-800 
          rounded-full hover:bg-purple-700 transition-colors duration-300"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
};
