import { useState, useEffect } from 'react';

export const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return { isMuted, toggleMute };
};