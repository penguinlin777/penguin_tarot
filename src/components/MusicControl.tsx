import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicControlProps {
  isMuted: boolean;
  onToggle: () => void;
}

export const MusicControl: React.FC<MusicControlProps> = ({ isMuted, onToggle }) => (
  <button
    onClick={onToggle}
    className="fixed bottom-8 right-8 p-4 bg-purple-800 rounded-full hover:bg-purple-700 transition-colors duration-300"
  >
    {isMuted ? <Volume2 size={24} /> : <VolumeX size={24} />}
  </button>
);