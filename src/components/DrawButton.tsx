import React from 'react';

interface DrawButtonProps {
  onClick: () => void;
}

export const DrawButton: React.FC<DrawButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold transition-colors duration-300"
  >
    Draw a Card
  </button>
);