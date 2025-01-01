import React from 'react';

interface CardProps {
  name: string;
  image: string;
  meaning: string;
  isRevealed: boolean;
}

export const Card: React.FC<CardProps> = ({ name, image, meaning, isRevealed }) => {
  const getYesNo = (cardName: string): string => {
    const aceCards = ['权杖A', '圣杯A', '宝剑A', '星币A'];
    const positiveCards = ['愚人', '魔术师', '女皇', '皇帝', '战车', '正义', '星星', '太阳', '世界'];
    const neutralCards = ['女祭司', '命运之轮', '恋人', '教皇', '月亮', '审判'];
    const negativeCards = ['力量', '塔', '节制', '隐士', '吊人', '死神', '恶魔'];

    if (cardName.includes('圣杯九')) {
      return '是';
    } else if (aceCards.some(card => cardName.includes(card))) {
      return '随机应变，伺机待发';
    } else if (positiveCards.some(card => cardName.includes(card))) {
      return '是';
    } else if (neutralCards.some(card => cardName.includes(card))) {
      return '你的内心已有答案';
    } else if (negativeCards.some(card => cardName.includes(card))) {
      return '否';
    } else {
      return '未知牌名';
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card */}
      <div className="relative w-[226px] h-[370px]">
        <div 
          className={`
            absolute w-full h-full 
            transition-all duration-500 ease-in-out
            ${isRevealed ? 'rotate-y-180' : ''}
            transform-style-preserve-3d
          `}
        >
          {/* Card Back */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="w-full h-full bg-purple-900 rounded-lg border-4 border-gold flex items-center justify-center">
              <div className="text-gold text-4xl">✧</div>
            </div>
          </div>
          
          {/* Card Front */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="w-full h-full bg-white rounded-lg border-4 border-gold overflow-hidden">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Card Information */}
      {isRevealed && (
        <div className="text-center animate-fade-in">
          <h3 className="text-xl font-semibold text-gold mb-2">{name}</h3>
          <p className="text-purple-200 max-w-md text-sm mb-2">{meaning}</p>
          <p className="text-sm font-medium text-gold">
            答案：
            <span
              className={
                getYesNo(name) === '是'
                  ? 'text-green-400'
                  : getYesNo(name) === '否'
                  ? 'text-red-400'
                  : getYesNo(name) === '随机应变，伺机待发'
                  ? 'text-purple-400'
                  : getYesNo(name) === '你的内心已有答案'
                  ? 'text-sky-400'
                  : ''
              }
            >
              {getYesNo(name)}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};