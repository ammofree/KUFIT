import { WeatherType, MoodType, ScheduleType, GoodsItem } from "../types";

export interface OptionItem<T> {
  value: T;
  label: string;
  icon: string;
  description?: string;
  color?: string;
}

export const WEATHER_OPTIONS: OptionItem<WeatherType>[] = [
  { value: "sunny", label: "맑음", icon: "Sun", description: "중광 잔디밭 일광욕 가능" },
  { value: "cloudy", label: "흐림", icon: "Cloud", description: "서늘하고 무드 있는 날" },
  { value: "rainy", label: "비", icon: "CloudRain", description: "다람쥐길 빗소리 운치" },
  { value: "snowy", label: "눈", icon: "Snowflake", description: "인촌기념관 설경 명당" },
];

export const MOOD_OPTIONS: OptionItem<MoodType>[] = [
  { value: "happy", label: "행복함", icon: "Smile", description: "발걸음이 호랑이 기운" },
  { value: "tired", label: "피곤함", icon: "Coffee", description: "메가커피 수혈 긴급" },
  { value: "nervous", label: "긴장됨", icon: "Zap", description: "발표나 시험 직전 심박수 업" },
  { value: "excited", label: "설렘", icon: "Sparkles", description: "참살이의 뜨거운 밤 기대" },
  { value: "lethargic", label: "무기력", icon: "Compass", description: "우주가 날 공강으로 이끄는 중" },
];

export const SCHEDULE_OPTIONS: OptionItem<ScheduleType>[] = [
  { value: "class", label: "수업", icon: "BookOpen", description: "성실한 학구열 전공 정복" },
  { value: "presentation", label: "발표", icon: "Award", description: "정경관 포디움 학살 예정" },
  { value: "exam", label: "시험", icon: "FileText", description: "백학도 불타는 시험 주간" },
  { value: "club", label: "동아리", icon: "Users", description: "청춘들의 유대와 수다" },
  { value: "date", label: "데이트", icon: "Heart", description: "참살이길 하트시그널 촬영" },
  { value: "friend", label: "친구 약속", icon: "GlassWater", description: "정후에서 치맥 타임" },
  { value: "empty", label: "공강", icon: "CalendarOff", description: "학교 안 가도 고대생" },
];

export const GOODS_OPTIONS: { value: GoodsItem; label: string; icon: string; description: string }[] = [
  { value: "과잠", label: "과잠 (바시티 자켓)", icon: "Shirt", description: "쿠션감 넘치는 버건디&화이트" },
  { value: "후드티", label: "고려대 로고 후드티", icon: "Heart", description: "안감 기모로 아늑한 시그니처" },
  { value: "맨투맨", label: "고려대 로고 맨투맨", icon: "Sparkle", description: "어디에나 어울리는 크림색 데일리" },
  { value: "에코백", label: "호랑이 자수 에코백", icon: "ShoppingBag", description: "태블릿과 책이 쏙 들어가는 크기" },
  { value: "텀블러", label: "KU 리유저블 텀블러", icon: "GlassWater", description: "친환경 에코 간지 장착 필수템" },
  { value: "모자", label: "KU 시그니처 캡모자", icon: "Crown", description: "꾸안꾸 등교룩의 최종 완성" },
];

export const PRESET_PROMPTS = [
  {
    title: "백기 밤샘 생존 희망자",
    weather: "cloudy",
    temp: 8,
    mood: "tired",
    schedule: "exam",
    goods: ["후드티", "에코백", "텀블러"],
  },
  {
    title: "참살이 로맨틱 폭격기",
    weather: "sunny",
    temp: 21,
    mood: "excited",
    schedule: "date",
    goods: ["맨투맨", "모자"],
  },
  {
    title: "오피셜 발표 파괴왕",
    weather: "sunny",
    temp: 18,
    mood: "nervous",
    schedule: "presentation",
    goods: ["에코백", "텀블러"],
  },
  {
    title: "민광 버건디 등교 고수",
    weather: "sunny",
    temp: 16,
    mood: "happy",
    schedule: "class",
    goods: ["과잠", "후드티", "에코백", "모자"],
  }
];
