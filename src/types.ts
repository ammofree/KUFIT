export type WeatherType = "sunny" | "cloudy" | "rainy" | "snowy";

export type MoodType = "happy" | "tired" | "nervous" | "excited" | "lethargic";

export type ScheduleType = 
  | "class" 
  | "presentation" 
  | "exam" 
  | "club" 
  | "date" 
  | "friend" 
  | "empty";

export type GoodsItem = "과잠" | "후드티" | "맨투맨" | "에코백" | "텀블러" | "모자";

export interface GoodsDetail {
  name: string;
  score: number;
  tip: string;
}

export interface StylingResult {
  characterName: string;
  characterDescription: string;
  nickname: string;
  styleScore: number;
  energyLevel: number;
  confidenceLevel: number;
  recommendedOutfit: string;
  recommendedColors: string[];
  goodsCombination: string[];
  utilizationAnalysis: {
    overallRate: number;
    selectedGoodsDetails: GoodsDetail[];
  };
  recommendationReason: string;
  survivalTips: string[];
  styleFortune: string;
  source?: string;
  parseError?: boolean;
}
