'use client';
import { WeatherData } from '@/types/weather';
import { FiDroplet, FiWind, FiCloud } from 'react-icons/fi';
import WeatherIcon from '@/components/WeatherIcon';
import { motion, AnimatePresence } from 'framer-motion';

const getCardGradient = (weatherCode: string, isDayTime: boolean) => {
    // Realistic weather gradients
    switch (true) {
      case weatherCode.startsWith('01'): // Clear sky
        return isDayTime 
          ? 'bg-gradient-to-br from-sky-100 via-amber-50 to-sky-200' 
          : 'bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900';
  
      case weatherCode.startsWith('02'): // Few clouds
        return isDayTime
          ? 'bg-gradient-to-br from-sky-200 via-gray-100 to-amber-200'
          : 'bg-gradient-to-br from-indigo-800 via-blue-800 to-slate-800';
  
      case weatherCode.startsWith('03'): // Scattered clouds
        return isDayTime
          ? 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400'
          : 'bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800';
  
      case weatherCode.startsWith('04'): // Broken clouds (overcast)
        return isDayTime
          ? 'bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500'
          : 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900';
  
      case weatherCode.startsWith('09'): // Shower rain
        return 'bg-gradient-to-br from-slate-400 via-slate-500 to-blue-800';
  
      case weatherCode.startsWith('10'): // Rain
        return 'bg-gradient-to-br from-slate-500 via-slate-600 to-blue-900';
  
      case weatherCode.startsWith('11'): // Thunderstorm
        return 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900';
  
      case weatherCode.startsWith('13'): // Snow
        return 'bg-gradient-to-br from-blue-100 via-blue-150 to-blue-200';
  
      case weatherCode.startsWith('50'): // Mist/fog
        return 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400';
  
      default:
        return isDayTime 
          ? 'bg-gradient-to-br from-sky-100 via-amber-50 to-sky-200'
          : 'bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900';
    }
  };

export default function WeatherCard({ data }: { data: WeatherData }) {
  const { main, weather, wind, clouds } = data;
  const isDayTime = new Date().getHours() >= 6 && new Date().getHours() < 18;
  const cardGradient = getCardGradient(weather[0].icon, isDayTime);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${data.name}-${weather[0].icon}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`p-6 rounded-2xl shadow-lg ${cardGradient} weather-card`}
      >
        <div className="flex justify-between items-center">
          <div>
            <motion.div
              key={`temp-${main.temp}`}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring' }}
              className="text-6xl font-bold text-gray-900"
            >
              {Math.round(main.temp)}°
            </motion.div>
            <div className="capitalize text-xl text-gray-700 mt-2">
              {weather[0].description}
            </div>
            <div className="mt-2 text-lg text-gray-600 font-medium">
              H: {Math.round(main.temp_max ?? 0)}° • L: {Math.round(main.temp_min ?? 0)}°
            </div>
          </div>
          
          {/* Enhanced Weather Icon with Shadow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-white/30 blur-md" />
            <div className="relative">
              <WeatherIcon code={weather[0].icon} size={120} />
            </div>
          </motion.div>
        </div>

        <div className="flex justify-between mt-8 text-lg text-gray-700 font-bold">
          <div className="flex items-center gap-2">
            <FiDroplet className="text-blue-500 text-2xl" />
            <span>{main.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <FiWind className="text-blue-500 text-2xl" />
            <span>{wind.speed} m/s</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCloud className="text-blue-500 text-2xl" />
            <span>{clouds.all}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}