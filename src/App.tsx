import React from 'react';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { DrawButton } from './components/DrawButton';
import { MusicControl } from './components/MusicControl';
import { useAudio } from './hooks/useAudio';
import { useTarotDraw } from './hooks/useTarotDraw';

export default function App() {
  const { isMuted, toggleMute } = useAudio('https://soundimage.org/wp-content/uploads/2016/06/Mystical-Winds.mp3');
  const { selectedCard, isRevealed, drawCard, currentCard } = useTarotDraw();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-6">
          <DrawButton onClick={drawCard} />
        </div>

        <div className="h-[500px]">
          {currentCard && (
            <Card
              {...currentCard}
              isRevealed={isRevealed}
            />
          )}
        </div>
      </main>

      <MusicControl isMuted={isMuted} onToggle={toggleMute} />
    </div>
  );
}