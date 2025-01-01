import { useState } from 'react';
import { tarotCards } from '../data/tarotCards';

export const useTarotDraw = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const drawCard = () => {
    setIsRevealed(false);
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setSelectedCard(randomIndex);
    setTimeout(() => setIsRevealed(true), 500);
  };

  return {
    selectedCard,
    isRevealed,
    drawCard,
    currentCard: selectedCard !== null ? tarotCards[selectedCard] : null
  };
};