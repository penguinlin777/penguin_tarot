interface TarotCard {
  name: string;
  image: string;
  meaning: string;
}

export const tarotCards: TarotCard[] = [
  // 大阿尔卡那 (The Major Arcana)
   {
    name: "愚人 (The Fool)",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    meaning: "新的开始（New beginnings）、天真（Innocence）、自发性（Spontaneity）"
  },
  {
    name: "魔术师 (The Magician)",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    meaning: "展现（Manifestation）、足智多谋（Resourcefulness）、力量（Power）"
  },
  {
    name: "女祭司 (The High Priestess)",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    meaning: "直觉（Intuition）、神秘（Mystery）、内在知识（Inner knowledge）"
  },
  {
    name: "女皇 (The Empress)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/RWS_Tarot_03_Empress.jpg/640px-RWS_Tarot_03_Empress.jpg",
    meaning: "丰饶（Fertility）、养育（Nurturing）、富足（Abundance）"
  },
  {
    name: "皇帝 (The Emperor)",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
    meaning: "权威（Authority）、结构（Structure）、领导力（Leadership）"
  },
  {
    name: "教皇 (The Hierophant)",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
    meaning: "精神智慧（Spiritual wisdom）、宗教信仰（Religious beliefs）、遵从（Conformity）"
  },
  {
    name: "恋人 (The Lovers)",
    image: "https://tarotbyhilary.com/wp-content/uploads/2015/07/Screen-Shot-2015-07-21-at-11.23.23-AM.png",
    meaning: "爱情（Love）、和谐（Harmony）、伙伴关系（Partnerships）"
  },
  {
    name: "战车 (The Chariot)",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    meaning: "控制（Control）、意志力（Willpower）、决心（Determination）"
  },
  {
    name: "力量 (Strength)",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
    meaning: "勇气（Courage）、决心（Determination）、内在力量（Inner strength）"
  },
  {
    name: "隐士 (The Hermit)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/640px-RWS_Tarot_09_Hermit.jpg",
    meaning: "自我探索（Soul-searching）、内省（Introspection）、独处（Being alone）"
  },
  {
    name: "命运之轮 (Wheel of Fortune)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/640px-RWS_Tarot_10_Wheel_of_Fortune.jpg",
    meaning: "好运（Good luck）、因果（Karma）、生命循环（Life cycles）"
  },
  {
    name: "正义 (Justice)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
    meaning: "公平（Fairness）、真相（Truth）、法律（Law）"
  },
  {
    name: "吊人 (The Hanged Man)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/800px-RWS_Tarot_12_Hanged_Man.jpg",
    meaning: "暂停（Pause）、放手（Letting go）、接受（Acceptance）"
  },
  {
    name: "死神 (Death)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/800px-RWS_Tarot_13_Death.jpg",
    meaning: "结束（Endings）、转变（Transformation）、过渡（Transition）"
  },
  {
    name: "节制 (Temperance)",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
    meaning: "平衡（Balance）、节制（Moderation）、耐心（Patience）"
  },
  {
    name: "恶魔 (The Devil)",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
    meaning: "成瘾（Addiction）、物质主义（Materialism）、玩世不恭（Playfulness）"
  },
  {
    name: "高塔 (The Tower)",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    meaning: "突变（Sudden change）、动荡（Upheaval）、混乱（Chaos）"
  },
  {
    name: "星星 (The Star)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_17_Star.jpg/440px-RWS_Tarot_17_Star.jpg",
    meaning: "希望（Hope）、信念（Faith）、恢复（Rejuvenation）"
  },
  {
    name: "月亮 (The Moon)",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
    meaning: "幻觉（Illusion）、恐惧（Fear）、焦虑（Anxiety）"
  },
  {
    name: "太阳 (The Sun)",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
    meaning: "喜悦（Joy）、成功（Success）、积极（Positivity）"
  },
  {
    name: "审判 (Judgement)",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
    meaning: "反思（Reflection）、清算（Reckoning）、觉醒（Awakening）"
  },
  {
    name: "世界 (The World)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/800px-RWS_Tarot_21_World.jpg",
    meaning: "完成（Completion）、成就（Accomplishment）、旅行（Travel）"
  },
  // 小阿尔卡那 (The Minor Arcana)
  {
    name: "圣杯九 (Nine of Cups)",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg",
    meaning: "满足（Contentment）、满意（Satisfaction）、感激（Gratitude）"
  },
  {
    name: "权杖A (Ace of Wands)",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
    meaning: "灵感（Inspiration）、新机会（new opportunities）、成长（growth）"
  },
  {
    name: "圣杯A (Ace of Cups)",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
    meaning: "爱情（Love）、新关系（new relationships）、同情（compassion）"
  },
  {
    name: "宝剑A (Ace of Swords)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Swords01.jpg/150px-Swords01.jpg",
    meaning: "清晰（Clarity）、突破（breakthrough）、真相（truth）"
  },
  {
    name: "星币A (Ace of Pentacles)",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg",
    meaning: "繁荣（Prosperity）、新机会（new opportunities）、稳定（stability）"
  }
];
