import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

const LOADING_STEPS = [
  "기상청 안암 관측소 실시간 온도 정보 로딩 중...",
  "고대생 1,000명의 패션 트렌드 데이터베이스 대조 중...",
  "중앙광장 잔디밭 최적화 반사지수 검출 중...",
  "참살이길 우천 및 미끄럼 상태 공식 계산 중...",
  "보유하신 KU 프리미엄 굿즈 색상 배색 필터 가동 중...",
  "다람쥐길 호랑이가 당신만을 위한 특수 팁 작성 중...",
  "캠퍼스 생존 위기 대처 시스템 정방향 수신 중...",
  "버건디 에센셜 코디네이션 카드 렌더링 중..."
];

export default function LoadingScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % LOADING_STEPS.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center px-4 py-16">
      {/* Animating Core Circle */}
      <div className="relative mb-8">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 rounded-full border-4 border-[#862633]/20 border-t-[#862633] flex items-center justify-center shadow-lg bg-white"
        >
          {/* Internal mascot or icon */}
          <div className="p-3 bg-[#862633]/10 rounded-full">
            <LucideIcon name="Sparkles" className="text-[#862633]" size={36} />
          </div>
        </motion.div>
        
        {/* Adorable pulsing ring */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#862633] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#862633]"></span>
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-xs uppercase tracking-widest text-[#862633]/70 mb-2 font-bold"
      >
        KU FIT+ STYLE LAB ENGINE
      </motion.p>
      
      <h2 className="text-xl font-sans font-bold text-stone-800 mb-6">
        AI 캠퍼스 스타일 연구원이 기밀 알고리즘을 계산 중입니다
      </h2>

      {/* Stepper message rendering with AnimatePresence */}
      <div className="h-10 flex items-center justify-center overflow-hidden max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#FBF9F4] rounded-full border border-[#862633]/10 shadow-sm"
          >
            <LucideIcon name="Loader2" className="text-[#862633] animate-spin" size={14} />
            <span className="text-stone-600 text-sm font-medium">
              {LOADING_STEPS[currentStep]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Aesthetic quote in background */}
      <p className="mt-12 text-xs text-stone-400">
        * 고려대 최고 존엄 컬러 Crimson 버건디 기반으로 설계된 OOTD 처방전입니다.
      </p>
    </div>
  );
}
