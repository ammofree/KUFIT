import React, { useState, useEffect } from "react";
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  Snowflake, 
  Smile, 
  Coffee, 
  Zap, 
  Sparkles, 
  Compass, 
  BookOpen, 
  Award, 
  FileText, 
  Users, 
  Heart, 
  GlassWater, 
  CalendarOff, 
  Shirt, 
  ShoppingBag, 
  Crown, 
  Sliders, 
  ChevronRight,
  TrendingUp, 
  Lightbulb, 
  RefreshCw, 
  Sparkle, 
  Loader2, 
  Gauge,
  Thermometer,
  Flame,
  Check,
  HelpCircle,
  HelpCircle as QuestionIcon
} from "lucide-react";
import LucideIcon from "./components/LucideIcon";
import { WEATHER_OPTIONS, MOOD_OPTIONS, SCHEDULE_OPTIONS, GOODS_OPTIONS, PRESET_PROMPTS } from "./data/constants";
import { WeatherType, MoodType, ScheduleType, GoodsItem, StylingResult } from "./types";

export default function App() {
  // Inputs state
  const [weather, setWeather] = useState<WeatherType>("sunny");
  const [temp, setTemp] = useState<number>(18);
  const [mood, setMood] = useState<MoodType>("happy");
  const [schedule, setSchedule] = useState<ScheduleType>("class");
  const [selectedGoods, setSelectedGoods] = useState<GoodsItem[]>(["과잠", "에코백"]);

  // Application states
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>("");
  const [result, setResult] = useState<StylingResult | null>(null);
  const [activeTab, setActiveTab ] = useState<"result" | "utilization">("result");

  // Initial generation
  useEffect(() => {
    handleGenerate(true);
  }, []);

  // Loading quotes for maximum fun & campus immersion
  const loadingQuotes = [
    "정경대 후문 언덕 경사도 계산하는 중...",
    "다람쥐길 다람쥐에게 도토리 기부 물어보는 중...",
    "백주년기념관 명당 좌석 스캔하는 중...",
    "중앙광장 잔디밭 햇살 조도 측정 중...",
    "참살이길 이모네 맛집 삼겹살 냄새 시뮬레이션 중...",
    "하나스퀘어 수다 지수 정밀 분석 중...",
    "고려대 버건디 크림슨 최적 배색 조율 중...",
  ];

  const triggerLoaderPhrases = () => {
    let index = 0;
    setLoadingStep(loadingQuotes[0]);
    const interval = setInterval(() => {
      index = (index + 1) % loadingQuotes.length;
      setLoadingStep(loadingQuotes[index]);
    }, 900);
    return interval;
  };

  const handleGenerate = async (isInitial = false) => {
    setIsLoading(true);
    const intervalId = triggerLoaderPhrases();

    try {
      const response = await fetch("/api/ootd/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          weather,
          temp,
          mood,
          schedule,
          goods: selectedGoods,
        }),
      });

      if (!response.ok) {
        throw new Error("서버 전송 및 분석에 실패했습니다.");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("스타일 생성 오류:", error);
    } finally {
      clearInterval(intervalId);
      // Brief aesthetic pause for visual delight
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
  };

  // Toggle owned goods
  const handleToggleGoods = (item: GoodsItem) => {
    if (selectedGoods.includes(item)) {
      setSelectedGoods(selectedGoods.filter(g => g !== item));
    } else {
      setSelectedGoods([...selectedGoods, item]);
    }
  };

  // Quick Preset loader
  const handleLoadPreset = (preset: typeof PRESET_PROMPTS[0]) => {
    setWeather(preset.weather as WeatherType);
    setTemp(preset.temp);
    setMood(preset.mood as MoodType);
    setSchedule(preset.schedule as ScheduleType);
    setSelectedGoods(preset.goods as GoodsItem[]);
  };

  // Helper temperature description badge
  const getTempDescription = (t: number) => {
    if (t <= 0) return { label: "얼어 죽을 혹한기 🥶 (모든 기모 레이어 동원)", color: "text-blue-600 bg-blue-50" };
    if (t <= 8) return { label: "쌀쌀한 겨울 날씨 🧥 (코트/롱패딩 장전)", color: "text-sky-600 bg-sky-50" };
    if (t <= 16) return { label: "기분 좋은 쌀쌀함 🍂 (과잠 입기 최적기)", color: "text-amber-700 bg-amber-50" };
    if (t <= 24) return { label: "선선하고 쾌적함 🍃 (맨투맨/후드 한장 피크닉)", color: "text-emerald-700 bg-emerald-50" };
    return { label: "초여름 더위 시작 ☀️ (쾌적 시원한 이너 반팔 추천)", color: "text-red-500 bg-red-50" };
  };

  return (
    <div id="ku-fit-app" className="min-h-screen bg-[#FDFCF0] font-sans text-[#1A1A1A] flex flex-col relative overflow-x-hidden">
      
      {/* Decorative Canvas Background Elements */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8B0029] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-4 w-[500px] h-[500px] bg-[#8B0029] opacity-[0.02] rounded-full blur-3xl pointer-events-none"></div>

      {/* HEADER SECTION */}
      <header id="main-header" className="h-20 bg-[#8B0029] text-white flex items-center justify-between px-4 md:px-10 shadow-md shrink-0 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-inner">
            {/* Artistic Burgundy Tiger Shield Motif */}
            <div className="w-6 h-6 bg-[#8B0029] rounded-md transform rotate-45 flex items-center justify-center overflow-hidden">
              <span className="text-white font-extrabold text-[10px] transform -rotate-45 leading-none">KU</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-1.5">
                KU FIT<span className="text-[#FDFCF0] font-sans font-light">+</span>
              </h1>
              <span className="bg-white/15 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide font-extrabold border border-white/20">
                Style Lab
              </span>
            </div>
            <p className="text-[9px] uppercase tracking-wider opacity-90 font-semibold text-[#FDFCF0]/80">
              고려대학교 대학생 OOTD 스타일 연구소
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-medium opacity-80 text-[#FDFCF0]">Today in Anam-dong</p>
            <p className="text-xs font-bold uppercase tracking-wider">
              {weather === "sunny" ? "Sunny ☀️" : weather === "cloudy" ? "Cloudy ☁️" : weather === "rainy" ? "Rainy ☔" : "Snowy ❄️"} | {temp}°C
            </p>
          </div>
          <div className="h-10 px-3 py-1 rounded-full bg-white/10 border border-white/20 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center font-bold text-xs uppercase text-white shadow-sm">
              KU
            </div>
            <span className="text-[11px] font-bold text-[#FDFCF0] uppercase tracking-wide">Campus Guest</span>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* LEFT SECTION: INPUT PANEL & PRESETS (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Quick Preset Buttons Card */}
          <div id="presets-card" className="bg-white rounded-[24px] p-5 shadow-sm border border-[#E5E2D0]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[#8B0029] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                <Sparkle size={14} className="animate-pulse text-[#8B0029]" />
                초고속 추천 캠퍼스 프리셋
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#8B0029]/10 text-[#8B0029] font-bold">1-Click</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {PRESET_PROMPTS.map((p, idx) => (
                <button
                  key={idx}
                  id={`preset-${idx}`}
                  onClick={() => handleLoadPreset(p)}
                  className="p-2.5 bg-[#F8F7F2] hover:bg-[#8B0029] hover:text-[#FDFCF0] text-[#1A1A1A] border border-[#E5E2D0] hover:border-[#8B0029] rounded-xl text-left text-xs transition-all duration-200 flex flex-col justify-between group active:scale-[0.98]"
                >
                  <span className="font-bold truncate text-xs block mb-1">{p.title}</span>
                  <div className="flex items-center justify-between w-full text-[10px] opacity-75 group-hover:text-white/90">
                    <span>{p.temp}°C · {p.schedule === "exam" ? "시험" : p.schedule === "date" ? "데이트" : p.schedule === "presentation" ? "발표" : "수업"}</span>
                    <ChevronRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Form Settings Card */}
          <div id="form-card" className="bg-white rounded-[24px] p-6 shadow-sm border border-[#E5E2D0] flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-gray-100">
                <div className="w-1.5 h-6 bg-[#8B0029] rounded-full"></div>
                <h2 className="text-[#8B0029] font-black text-lg">오늘의 캠퍼스 분석 정보 입력</h2>
              </div>

              <div className="space-y-5">
                
                {/* 1. Weather Selector */}
                <div>
                  <label className="text-[11px] uppercase font-bold tracking-widest text-gray-400 mb-2 block">
                    1. 오늘의 안암동 날씨 
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {WEATHER_OPTIONS.map((opt) => {
                      const isSelected = weather === opt.value;
                      return (
                        <button
                          key={opt.value}
                          id={`weather-${opt.value}`}
                          type="button"
                          onClick={() => setWeather(opt.value)}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                            isSelected 
                              ? "bg-[#8B0029] border-[#8B0029] text-white shadow-sm scale-[1.02]" 
                              : "bg-[#F8F7F2] border-[#E5E2D0] hover:border-gray-300 text-gray-700"
                          }`}
                        >
                          <div className={`mb-1.5 ${isSelected ? "text-white" : "text-[#8B0029]"}`}>
                            <LucideIcon name={opt.icon} size={20} />
                          </div>
                          <span className="text-xs font-bold">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Temperature Input */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[11px] uppercase font-bold tracking-widest text-gray-400 block">
                      2. 현재 캠퍼스 체감 온도
                    </label>
                    <span className="text-sm font-black text-[#8B0029] bg-[#8B0029]/10 px-2.5 py-0.5 rounded-full font-mono">
                      {temp}°C
                    </span>
                  </div>
                  
                  {/* Slider Control */}
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-gray-400 font-mono">-10°C</span>
                    <input
                      id="temp-slider"
                      type="range"
                      min="-12"
                      max="35"
                      value={temp}
                      onChange={(e) => setTemp(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8B0029]"
                    />
                    <span className="text-xs font-bold text-gray-400 font-mono">35°C</span>
                  </div>

                  {/* Dynamic description helper */}
                  <div className={`mt-2 p-2 rounded-xl text-xs font-semibold text-center transition-colors ${getTempDescription(temp).color}`}>
                    {getTempDescription(temp).label}
                  </div>
                </div>

                {/* 3. Mood Selector */}
                <div>
                  <label className="text-[11px] uppercase font-bold tracking-widest text-gray-400 mb-2 block">
                    3. 현재 내적 기분 수치
                  </label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {MOOD_OPTIONS.map((opt) => {
                      const isSelected = mood === opt.value;
                      return (
                        <button
                          key={opt.value}
                          id={`mood-${opt.value}`}
                          type="button"
                          onClick={() => setMood(opt.value)}
                          className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all ${
                            isSelected 
                              ? "bg-[#8B0029] border-[#8B0029] text-white shadow-sm" 
                              : "bg-[#F8F7F2] border-[#E5E2D0] hover:border-gray-300 text-gray-700 hover:bg-white"
                          }`}
                          title={opt.description}
                        >
                          <div className={`mb-1 ${isSelected ? "text-white" : "text-[#8B0029]"}`}>
                            <LucideIcon name={opt.icon} size={18} />
                          </div>
                          <span className="text-[11px] font-bold tracking-tighter truncate max-w-full">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Schedule Selector */}
                <div>
                  <label className="text-[11px] uppercase font-bold tracking-widest text-gray-400 mb-2 block">
                    4. 주요 오늘 캠퍼스 일정
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {SCHEDULE_OPTIONS.map((opt) => {
                      const isSelected = schedule === opt.value;
                      return (
                        <button
                          key={opt.value}
                          id={`schedule-${opt.value}`}
                          type="button"
                          onClick={() => setSchedule(opt.value)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex items-center gap-1 ${
                            isSelected 
                              ? "bg-[#8B0029] text-white border-[#8B0029] shadow-sm transform scale-[1.02]" 
                              : "bg-[#F8F7F2] text-gray-600 border-[#E5E2D0] hover:border-gray-300 hover:bg-white"
                          }`}
                        >
                          <span className={`${isSelected ? "text-white" : "text-[#8B0029]"}`}>
                            <LucideIcon name={opt.icon} size={12} />
                          </span>
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Goods Owned Selector */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[11px] uppercase font-bold tracking-widest text-gray-400 block">
                      5. 내가 보유중인 고려대학교 굿즈
                    </label>
                    <span className="text-[10px] text-gray-400">다중 선택 가능</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {GOODS_OPTIONS.map((opt) => {
                      const isSelected = selectedGoods.includes(opt.value);
                      return (
                        <button
                          key={opt.value}
                          id={`goods-${opt.value}`}
                          type="button"
                          onClick={() => handleToggleGoods(opt.value)}
                          className={`flex items-center gap-2 p-2 rounded-xl text-left border transition-all ${
                            isSelected 
                              ? "bg-[#F8F7F2] border-[#8B0029] text-[#1A1A1A] font-bold shadow-sm" 
                              : "bg-white border-gray-200 text-gray-500"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                            isSelected ? "bg-[#8B0029] border-[#8B0029] text-white" : "bg-gray-100 border-gray-300"
                          }`}>
                            {isSelected ? <Check size={12} strokeWidth={3} /> : null}
                          </div>
                          <div>
                            <p className="text-xs leading-none mb-0.5">{opt.label}</p>
                            <p className="text-[9px] opacity-75 font-normal leading-none max-w-[140px] truncate">{opt.description}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* Run Button Container */}
            <div className="pt-6 mt-6 border-t border-gray-100">
              <button
                id="btn-generate-style"
                onClick={() => handleGenerate()}
                disabled={isLoading}
                className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                  isLoading 
                    ? "bg-[#8B0029]/80 text-[#FDFCF0] cursor-not-allowed" 
                    : "bg-[#8B0029] hover:bg-[#A30D3A] text-white hover:shadow-lg active:scale-[0.99] cursor-pointer"
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>AI 스타일 연구소 분석중...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw size={16} className="transition-transform group-hover:rotate-180" />
                    <span>오늘 가장 어울리는 고대 핏 생성</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-gray-400 mt-2">
                * 버건디 컬러 조합 및 고려대 전용 AI가 안암동 날씨와 매칭합니다.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SECTION: RESULTS DISPLAY (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {isLoading ? (
            /* LOADING STRETCH PREVIEW */
            <div id="loading-box" className="h-full bg-white rounded-[32px] border border-[#E5E2D0] p-10 flex flex-col items-center justify-center min-h-[500px] text-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B0029]/5 via-transparent to-[#FDFCF0]/40 pointer-events-none"></div>
              
              <div className="relative mb-6">
                <blockquote className="text-5xl animate-bounce">🐯</blockquote>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#8B0029] rounded-full animate-ping"></div>
              </div>

              <h3 className="text-xl font-bold mb-2">오늘의 캠퍼스 캐릭터 및 스타일 조립하는 중...</h3>
              <p className="text-[#8B0029] font-mono text-xs font-semibold px-4 py-1.5 rounded-full bg-[#8B0029]/5 border border-[#8B0029]/10 animate-pulse">
                {loadingStep}
              </p>

              <div className="w-64 bg-gray-100 h-2 rounded-full overflow-hidden mt-8 relative">
                <div className="absolute top-0 bottom-0 left-0 bg-[#8B0029] rounded-full w-2/3 animate-[loadingBar_2s_ease-in-out_infinite]"></div>
              </div>
              <p className="text-[10px] text-gray-400 mt-3 uppercase tracking-widest">
                KU FIT+ STYLE & ACCESSIBILITY ALGORITHM V2.4
              </p>
            </div>
          ) : result ? (
            /* CONCRETE OOTD SUITE DISPLAY */
            <div id="result-suite" className="flex flex-col gap-6">

              {/* SECTION: Tab Switcher (Style Result vs Product Analyzer) */}
              <div className="bg-white p-1 rounded-xl shadow-sm border border-[#E5E2D0] flex">
                <button
                  onClick={() => setActiveTab("result")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === "result"
                      ? "bg-[#8B0029] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  🏫 AI 추천 코디 & 캐릭터 결과
                </button>
                <button
                  onClick={() => setActiveTab("utilization")}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === "utilization"
                      ? "bg-[#8B0029] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  📊 굿즈 활용도 분석 차트
                </button>
              </div>

              {activeTab === "result" ? (
                <>
                  {/* CARD 1: HERO SUGGESTION */}
                  <div id="ootd-hero-card" className="bg-white rounded-[32px] p-6 md:p-8 shadow-md border border-[#E5E2D0] flex flex-col md:flex-row gap-6 relative overflow-hidden">
                    
                    {/* Character Avatar Wrapper */}
                    <div className="w-full md:w-44 h-60 bg-[#F8F7F2] rounded-3xl relative flex flex-col items-center justify-center border border-dashed border-[#8B0029]/30 shrink-0">
                      <div className="absolute top-2 text-center">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B0029] bg-[#8B0029]/10 px-2 py-0.5 rounded-full block">
                          KU AVATAR
                        </span>
                      </div>
                      <div className="text-6xl my-4 transform hover:scale-115 transition-transform duration-300 drop-shadow-md cursor-help">
                        {schedule === "exam" ? "📚" : schedule === "presentation" ? "👔" : schedule === "date" ? "💖" : schedule === "club" ? "🎸" : schedule === "empty" ? "🏖️" : schedule === "friend" ? "🍻" : "🎒"}
                      </div>
                      <div className="w-full text-center px-2">
                        <span className="text-xs font-extrabold text-[#8B0029] block truncate">
                          {result.nickname}
                        </span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest block font-mono">
                          {result.source?.replace("_", " ")}
                        </span>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Title Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 bg-[#8B0029] text-white text-[9px] font-extrabold tracking-widest rounded-full uppercase">
                            RECOMMENDED OOTD
                          </span>
                          <span className="text-xs italic font-serif font-bold text-[#8B0029] underline underline-offset-4">
                            @{result.nickname}
                          </span>
                        </div>

                        {/* Character Name */}
                        <h3 className="text-2xl md:text-3xl font-serif font-black text-[#1A1A1A] mb-2 leading-tight">
                          {result.characterName}
                        </h3>

                        {/* Character Description */}
                        <p className="text-xs text-gray-500 leading-relaxed font-medium mb-3">
                          {result.characterDescription}
                        </p>

                        {/* Outfit description highlight */}
                        <div className="bg-[#F8F7F2] border-l-4 border-[#8B0029] p-3 rounded-r-xl my-3">
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">추천할 의상 코디셋</p>
                          <p className="text-xs font-bold text-[#1A1A1A] leading-relaxed">
                            {result.recommendedOutfit}
                          </p>
                        </div>
                      </div>

                      {/* Info grid */}
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="bg-[#FDFCF0] p-2.5 rounded-2xl border border-gray-100 flex flex-col justify-between">
                          <p className="text-[9px] uppercase text-gray-400 font-extrabold tracking-wider block mb-1">Color Palette</p>
                          <div className="flex items-center gap-1.5">
                            {result.recommendedColors.map((color, cIdx) => (
                              <div key={cIdx} className="flex items-center gap-1">
                                <span 
                                  className="w-4.5 h-4.5 rounded-full border border-gray-300 inline-block shrink-0 shadow-sm"
                                  style={{ 
                                    backgroundColor: color.includes("버건디") || color.includes("크림슨") || color.includes("#862633") || color.toLowerCase().includes("burgundy") ? "#862633" : 
                                                    color.includes("크림") || color.includes("아이보리") || color.includes("off-white") ? "#FDFCF0" : 
                                                    color.includes("네이비") ? "#0c1b33" : 
                                                    color.includes("그레이") || color.includes("차콜") ? "#707070" : "#ffffff"
                                  }}
                                ></span>
                                <span className="text-[10px] font-bold text-gray-600 truncate max-w-[50px]">{color}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-[#FDFCF0] p-2.5 rounded-2xl border border-gray-100 flex flex-col justify-between">
                          <p className="text-[9px] uppercase text-gray-400 font-extrabold tracking-wider block mb-1">굿즈 베스트 조화</p>
                          <p className="text-xs font-bold text-[#8B0029]">
                            {result.goodsCombination?.join(" ✕ ") || "기본 캐주얼 코디"}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* AI RECOMMENDATION DETAILED REASON CARD */}
                  <div id="recommendation-reason-card" className="bg-white rounded-[24px] p-6 shadow-sm border border-[#E5E2D0]">
                    <h4 className="text-sm font-bold text-[#8B0029] uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-[#8B0029]" />
                      오늘의 고대 캠퍼스 스타일 분석 리포트
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-600 whitespace-pre-line font-medium">
                      {result.recommendationReason}
                    </p>
                  </div>

                  {/* DOUBLE COLUMN: STATISTICS AND SURVIVAL TIPS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* STATS GAUGES PANEL */}
                    <div id="stats-gauges" className="bg-white rounded-[24px] p-5 shadow-sm border border-[#E5E2D0] flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#8B0029] mb-4 flex items-center gap-1">
                          <Gauge size={13} />
                          캠퍼스 지수 & 운세 분석
                        </h4>
                        
                        {/* 1. Style Score Meter */}
                        <div className="mb-4">
                          <div className="flex justify-between items-center text-xs mb-1">
                            <span className="font-bold text-gray-500 uppercase tracking-wide">Campus Style Score</span>
                            <span className="font-extrabold text-[#8B0029] font-mono text-sm">{result.styleScore} / 100점</span>
                          </div>
                          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-amber-500 to-[#8B0029] rounded-full transition-all duration-1000"
                              style={{ width: `${result.styleScore}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* 2. Confidence Level bar */}
                        <div className="mb-4">
                          <div className="flex justify-between items-center text-xs mb-1">
                            <span className="font-bold text-gray-500 uppercase tracking-wide">스타일 자신감 지수 (Confidence)</span>
                            <span className="font-extrabold text-amber-600 font-mono text-sm">{result.confidenceLevel}%</span>
                          </div>
                          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                              style={{ width: `${result.confidenceLevel}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* 3. Energy level bar */}
                        <div>
                          <div className="flex justify-between items-center text-xs mb-1">
                            <span className="font-bold text-gray-500 uppercase tracking-wide">오늘의 에너지 레벨 (Energy)</span>
                            <span className="font-extrabold text-emerald-600 font-mono text-sm">{result.energyLevel}%</span>
                          </div>
                          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                              style={{ width: `${result.energyLevel}%` }}
                            ></div>
                          </div>
                        </div>

                      </div>

                      {/* FORTUNE PREVIEW */}
                      <div className="mt-4 pt-3.5 border-t border-gray-100 bg-[#F8F7F2] p-3 rounded-2xl flex items-start gap-2.5">
                        <span className="text-xl shrink-0">🔮</span>
                        <div>
                          <p className="text-[10px] font-bold text-[#8B0029] uppercase tracking-wide leading-none mb-1">오늘의 캠퍼스 스타일 운세</p>
                          <p className="text-xs text-gray-600 leading-tight">
                            {result.styleFortune || "기본 굿즈를 걸친 만큼 멋진 일이 발생할 것입니다."}
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* SURVIVAL TIPS COLUMN */}
                    <div id="survival-tips-card" className="bg-[#F8F7F2] rounded-[24px] p-5 border border-[#8B0029]/10 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#8B0029] mb-4 flex items-center gap-1.5">
                          <Lightbulb size={13} className="text-[#8B0029]" />
                          안암 캠퍼스 생존 꿀팁
                        </h4>

                        <ul className="space-y-4">
                          {result.survivalTips.map((tip, tIdx) => (
                            <li key={tIdx} className="flex gap-2.5 items-start">
                              <span className="w-5.5 h-5.5 bg-white rounded-full flex items-center justify-center text-xs shrink-0 shadow-xs border border-[#8B0029]/5">
                                {tIdx === 0 ? "🎒" : tIdx === 1 ? "💡" : "🦁"}
                              </span>
                              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                {tip}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-[#8B0029]/10 mt-6 flex justify-between items-center text-[10px] font-bold text-gray-400">
                        <span>CONFIDENCE MATRIX</span>
                        <span className="text-[#8B0029] bg-[#8B0029]/5 px-2 py-0.5 rounded-full font-mono uppercase">
                          {result.confidenceLevel >= 80 ? "Ultra High" : result.confidenceLevel >= 50 ? "High Balance" : "Needs Coffee"}
                        </span>
                      </div>
                    </div>

                  </div>
                </>
              ) : (
                /* DETAILED GOODS UTILIZATION ANALYSIS SCREEN (ACTIVE TAB BAR) */
                <div id="utilization-dashboard" className="bg-white rounded-[32px] p-6 md:p-8 shadow-md border border-[#E5E2D0] flex flex-col gap-6">
                  
                  {/* Gauge indicator header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                    <div>
                      <h3 className="text-lg font-black text-[#8B0029] flex items-center gap-1.5">
                        <TrendingUp size={18} />
                        보유 굿즈 캠퍼스 패션 호감도 분석
                      </h3>
                      <p className="text-xs text-gray-500">
                        소유한 고려대학교 굿즈를 적절히 활용하여 학교 로열티 지수와 스타일 균형을 측정합니다.
                      </p>
                    </div>

                    <div className="bg-[#F8F7F2] p-3 rounded-2xl border border-gray-100 shrink-0 text-center flex items-center gap-3">
                      <div>
                        <p className="text-[9px] text-gray-400 font-extrabold uppercase tracking-widest mb-0.5 leading-none">종합 고대 로열티율</p>
                        <p className="text-xl font-bold font-serif text-[#8B0029] leading-none">
                          {result.utilizationAnalysis.overallRate}%
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full border-3 border-[#8B0029] border-r-transparent animate-[spin_3s_linear_infinite] flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-[#8B0029]/10 flex items-center justify-center text-xs font-mono font-bold text-[#8B0029]">
                          🐯
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* VIRTUAL BAR CHART OF GOODS COMPATIBILITY Scores */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block">
                      아이템별 매칭 궁합 점수 (Style Affinity Score)
                    </h4>
                    
                    <div className="grid grid-cols-6 gap-2 sm:gap-4 items-end h-32 bg-[#F8F7F2] p-4 rounded-2xl border border-[#E5E2D0] mb-2">
                      {result.utilizationAnalysis.selectedGoodsDetails.map((g, idx) => {
                        const isOwned = selectedGoods.includes(g.name as GoodsItem);
                        return (
                          <div key={idx} className="flex flex-col items-center h-full justify-end group cursor-pointer relative">
                            {/* Score Tooltip */}
                            <span className="absolute -top-6 bg-[#8B0029] text-white font-mono font-bold text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm whitespace-nowrap z-10">
                              {g.score}점
                            </span>
                            
                            {/* Bar segment */}
                            <div 
                              className={`w-full rounded-t-lg transition-all duration-700 min-h-[8px] ${
                                isOwned 
                                  ? "bg-[#8B0029] shadow-sm hover:bg-[#A30D3A]" 
                                  : "bg-gray-300 opacity-40 hover:opacity-75"
                              }`}
                              style={{ 
                                height: `${g.score}%`
                              }}
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Catalog footer tags */}
                    <div className="grid grid-cols-6 gap-2 sm:gap-4 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {result.utilizationAnalysis.selectedGoodsDetails.map((g, idx) => {
                        const isOwned = selectedGoods.includes(g.name as GoodsItem);
                        return (
                          <div key={idx} className="truncate">
                            <span className={`block truncate ${isOwned ? "text-[#8B0029] font-black" : ""}`}>{g.name}</span>
                            <span className="text-[8px] block opacity-60">{isOwned ? "보유" : "미보유"}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* ITEM ANALYSIS BREAKDOWN DETAILED CARDS */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#8B0029] mb-1">
                      구체적 굿즈 코디 추천 전략 및 팁
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {result.utilizationAnalysis.selectedGoodsDetails.map((details, idx) => {
                        const owned = selectedGoods.includes(details.name as GoodsItem);
                        return (
                          <div 
                            key={idx} 
                            className={`p-3 rounded-2xl border text-xs flex gap-3 transition-colors ${
                              owned 
                                ? "bg-white border-[#8B0029]/20 shadow-xs" 
                                : "bg-[#F8F7F2]/50 border-gray-100"
                            }`}
                          >
                            <span className="text-lg shrink-0">
                              {details.name === "과잠" ? "🧥" : details.name === "후드티" ? "👚" : details.name === "맨투맨" ? "👕" : details.name === "에코백" ? "👜" : details.name === "텀블러" ? "🥤" : "🧢"}
                            </span>
                            
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-0.5">
                                <span className={`font-bold ${owned ? "text-[#8B0029]" : "text-gray-500"}`}>{details.name} OOTD 가치</span>
                                <span className="font-mono text-[10px] bg-gray-100 px-1.5 py-0.2 rounded-full font-bold">
                                  Score: {details.score}
                                </span>
                              </div>
                              <p className="text-gray-500 text-[11px] leading-tight font-medium">
                                {details.tip}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              )}

            </div>
          ) : (
            /* PLACEHOLDER OR FIRST TIME VISITOR WELCOME SCREEN */
            <div id="placeholder-card" className="bg-white rounded-[32px] p-8 shadow-md border border-[#E5E2D0] flex flex-col items-center justify-center text-center py-16 relative overflow-hidden min-h-[460px]">
              {/* background vector decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#8B0029] opacity-[0.015] rounded-full blur-3xl pointer-events-none"></div>
              
              <span className="text-7xl mb-5 drop-shadow-sm animate-pulse">🐯</span>
              <h3 className="text-2xl font-serif font-black text-[#1A1A1A] mb-2">고려대학교 맞춤형 스타일 시뮬레이터</h3>
              <p className="text-gray-500 text-xs max-w-md mx-auto leading-relaxed mb-6 font-medium">
                날씨, 기온, 내적 기분 수치, 보유 중인 고려대 호랑이 공식 굿즈들을 왼쪽에서 선택하신 후 생성 버튼을 눌러보세요.
                똑똑하고 재미있는 AI가 여러분에게 꼭 맞는 캠퍼스 코디와 캐릭터를 추천합니다!
              </p>
              
              <div className="inline-flex gap-4">
                <div className="px-4 py-2 bg-[#F8F7F2] rounded-2xl text-xs font-bold text-gray-600 border border-gray-200">
                  #참살이패션피플
                </div>
                <div className="px-4 py-2 bg-[#F8F7F2] rounded-2xl text-xs font-bold text-gray-600 border border-gray-200">
                  #버건디스타일
                </div>
              </div>
            </div>
          )}

        </div>

      </main>

      {/* FOOTER SECTION */}
      <footer id="main-footer" className="bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between px-4 md:px-10 py-4 mt-auto gap-4 z-10 shrink-0">
        <p className="text-[10px] font-medium text-gray-400 text-center sm:text-left">
          © 2026 KU FIT+ Laboratory. Developed with ❤️ for Korea University Students.
        </p>
        <div className="flex gap-4">
          <span className="text-[10px] text-[#8B0029] font-extrabold tracking-wider uppercase">#KU_OOTD</span>
          <span className="text-[10px] text-[#8B0029] font-extrabold tracking-wider uppercase">#CAMPUS_STYLING</span>
          <span className="text-[10px] text-[#8B0029] font-extrabold tracking-wider uppercase">#TIGER_STYLE</span>
        </div>
      </footer>

    </div>
  );
}
