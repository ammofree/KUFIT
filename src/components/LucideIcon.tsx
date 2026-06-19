import React from "react";
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
  ChevronLeft, 
  ChevronRight,
  TrendingUp, 
  Lightbulb, 
  RefreshCw, 
  AlertCircle, 
  Sparkle, 
  Loader2, 
  Gauge,
  Thermometer,
  Flame,
  Check
} from "lucide-react";

const iconMap = {
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
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Lightbulb,
  RefreshCw,
  AlertCircle,
  Sparkle,
  Loader2,
  Gauge,
  Thermometer,
  Flame,
  Check
};

export type IconName = keyof typeof iconMap;

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 20 }: LucideIconProps) {
  const IconComponent = iconMap[name as IconName] || Sparkles;
  return <IconComponent className={className} size={size} />;
}
